/**
 * RAG Backend API integration service for Nishi AI Chatbot.
 * Base URL: https://rag-bot-server.vercel.app
 * All requests must include header: 'x-request-origin': 'external_integration'
 */

const API_BASE_URL =
  import.meta.env.VITE_NISHI_API_BASE_URL?.replace(/\/+$/, '') ||
  'https://rag-bot-server.vercel.app';
const REQUEST_ORIGIN_HEADER =
  import.meta.env.VITE_NISHI_REQUEST_ORIGIN || 'external_integration';

// Extended timeouts to accommodate serverless cold starts, multi-turn RAG retrieval, and LLM answer generation
const DEFAULT_TIMEOUT_MS =
  Number(import.meta.env.VITE_NISHI_DEFAULT_TIMEOUT_MS) || 120000; // 2 minutes for session initialization / history restoration
const SEND_MESSAGE_TIMEOUT_MS =
  Number(import.meta.env.VITE_NISHI_SEND_TIMEOUT_MS) || 180000; // 3 minutes for deep vector retrieval & generation

export interface Citation {
  id?: string;
  snippet?: string;
  pageNumber?: number;
  score?: number;
  documentTitle?: string;
}

export interface ConversationResponse {
  id: string;
  tenantId?: string;
  entityId?: string;
  title?: string;
  isPublic?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SendMessageResponse {
  answer: string;
  citations?: Citation[];
  insufficientEvidence?: boolean;
  confidence?: number;
  conversationId?: string;
  messageId?: string;
}

export interface ApiMessage {
  id?: string;
  senderRole: 'user' | 'assistant';
  content: string;
  citations?: Citation[];
  createdAt?: string;
}

/**
 * Helper to execute fetch with an extended timeout and consistent error handling.
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error(
        'Request timed out. The AI model is taking longer than usual to retrieve and generate an answer. Please retry.'
      );
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Deduplicate concurrent in-flight requests (e.g., React StrictMode double-mount)
const inFlightCreateConversation = new Map<string, Promise<ConversationResponse>>();
const inFlightGetMessages = new Map<string, Promise<ApiMessage[]>>();

/**
 * 1. Create a new conversation session for Nishi.
 * POST /v1/portals/conversations
 */
export async function createConversation(title = 'Nishi Chat'): Promise<ConversationResponse> {
  const existing = inFlightCreateConversation.get(title);
  if (existing) {
    return existing;
  }

  const promise = (async () => {
    const url = `${API_BASE_URL}/v1/portals/conversations`;

    const response = await fetchWithTimeout(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-request-origin': REQUEST_ORIGIN_HEADER,
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      let errorDetail = `HTTP ${response.status}`;
      try {
        const errJson = await response.json();
        if (errJson?.error?.message) {
          errorDetail = errJson.error.message;
        } else if (errJson?.message) {
          errorDetail = errJson.message;
        }
      } catch {
        // Use fallback errorDetail
      }
      throw new Error(`Failed to initialize chat session (${errorDetail})`);
    }

    const data = await response.json();
    if (!data?.id) {
      throw new Error('Invalid response structure: missing conversation ID');
    }

    return data;
  })().finally(() => {
    inFlightCreateConversation.delete(title);
  });

  inFlightCreateConversation.set(title, promise);
  return promise;
}

/**
 * 2. Send a visitor question to the active conversation.
 * POST /v1/portals/conversations/:conversationId/messages
 */
export async function sendMessage(
  conversationId: string,
  content: string
): Promise<SendMessageResponse> {
  if (!conversationId) {
    throw new Error('Active conversation ID is required to send messages');
  }

  const url = `${API_BASE_URL}/v1/portals/conversations/${encodeURIComponent(conversationId)}/messages`;

  const response = await fetchWithTimeout(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-request-origin': REQUEST_ORIGIN_HEADER,
      },
      body: JSON.stringify({ content: content.trim() }),
    },
    SEND_MESSAGE_TIMEOUT_MS
  );

  if (!response.ok) {
    let errorDetail = `HTTP ${response.status}`;
    try {
      const errJson = await response.json();
      if (errJson?.error?.message) {
        errorDetail = errJson.error.message;
      } else if (errJson?.message) {
        errorDetail = errJson.message;
      }
    } catch {
      // Use fallback
    }
    throw new Error(`Failed to send message (${errorDetail})`);
  }

  const data = await response.json();
  if (typeof data?.answer !== 'string') {
    throw new Error('Invalid response structure: missing answer field');
  }

  return data;
}

/**
 * 3. Retrieve conversation history for restoring an existing session after refresh.
 * GET /v1/portals/conversations/:conversationId/messages
 */
export async function getConversationMessages(conversationId: string): Promise<ApiMessage[]> {
  if (!conversationId) {
    return [];
  }

  const existing = inFlightGetMessages.get(conversationId);
  if (existing) {
    return existing;
  }

  const promise = (async () => {
    const url = `${API_BASE_URL}/v1/portals/conversations/${encodeURIComponent(conversationId)}/messages`;

    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: {
        'x-request-origin': REQUEST_ORIGIN_HEADER,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to restore conversation history (${response.status})`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('Invalid response structure: expected message array');
    }

    return data;
  })().finally(() => {
    inFlightGetMessages.delete(conversationId);
  });

  inFlightGetMessages.set(conversationId, promise);
  return promise;
}
