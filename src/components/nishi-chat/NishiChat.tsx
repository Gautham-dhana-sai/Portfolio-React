import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NishiLauncher } from './NishiLauncher';
import { NishiWindow } from './NishiWindow';
import { ChatMessageItem } from './NishiMessage';
import {
  createConversation,
  sendMessage,
  getConversationMessages,
} from '../../services/nishiChatApi';
import {
  getStoredConversationId,
  setStoredConversationId,
  clearStoredConversationId,
} from '../../utils/nishiSession';
import styles from './NishiChat.module.css';

const INITIAL_GREETING_TEXT = 'Hey, Im Nishi, how may I assist you';
const DEFAULT_CHAT_TITLE = import.meta.env.VITE_NISHI_CHAT_TITLE;

const INITIAL_GREETING_MESSAGE: ChatMessageItem = {
  id: 'initial-greeting',
  role: 'assistant',
  content: INITIAL_GREETING_TEXT,
  timestamp: new Date(),
};

const generateClientMessageId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
};

export const NishiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessageItem[]>([INITIAL_GREETING_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Singleton promise ref to prevent duplicate conversation creations
  const initPromiseRef = useRef<Promise<string> | null>(null);

  /**
   * Ensure an active conversation ID exists in memory and sessionStorage.
   * If already exists, returns it. If in-flight, awaits the active promise.
   * Otherwise, creates a new conversation via POST /v1/portals/conversations.
   */
  const ensureConversation = useCallback(async (): Promise<string> => {
    if (conversationId) {
      return conversationId;
    }

    const storedId = getStoredConversationId();
    if (storedId) {
      setConversationId(storedId);
      return storedId;
    }

    if (initPromiseRef.current) {
      return initPromiseRef.current;
    }

    setIsInitializing(true);
    const creationPromise = (async () => {
      try {
        const response = await createConversation(DEFAULT_CHAT_TITLE);
        const newId = response.id;
        setStoredConversationId(newId);
        setConversationId(newId);
        return newId;
      } catch (err) {
        initPromiseRef.current = null;
        throw err;
      } finally {
        setIsInitializing(false);
      }
    })();

    initPromiseRef.current = creationPromise;
    return creationPromise;
  }, [conversationId]);

  /**
   * On mount: Check for existing session in sessionStorage and restore messages,
   * deduplicating by messageId.
   */
  useEffect(() => {
    const storedId = getStoredConversationId();
    if (!storedId) return;

    setConversationId(storedId);
    setIsRestoring(true);

    let isCancelled = false;
    getConversationMessages(storedId)
      .then((apiMessages) => {
        if (isCancelled) return;
        if (Array.isArray(apiMessages) && apiMessages.length > 0) {
          const seenIds = new Set<string>();
          const restored: ChatMessageItem[] = [];

          apiMessages.forEach((m, idx) => {
            if (m.id) {
              if (seenIds.has(m.id)) return;
              seenIds.add(m.id);
            }
            restored.push({
              id: m.id || `restored-${idx}`,
              role: m.senderRole,
              content: m.content,
              citations: m.citations,
              timestamp: m.createdAt ? new Date(m.createdAt) : undefined,
              status: 'sent' as const,
            });
          });

          setMessages([INITIAL_GREETING_MESSAGE, ...restored]);
          setHasInteracted(true);
        }
      })
      .catch((_err) => {
        if (isCancelled) return;
        clearStoredConversationId();
        setConversationId(null);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsRestoring(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  /**
   * When visitor opens the chat window for the first time, pre-warm conversation creation.
   */
  useEffect(() => {
    if (isOpen) {
      setHasInteracted(true);
      const storedId = getStoredConversationId();
      if (!storedId && !conversationId) {
        ensureConversation().catch(() => {
          // Silent catch on pre-warm; will handle explicitly on message send
        });
      }
    }
  }, [isOpen, conversationId, ensureConversation]);

  /**
   * Execute a single turn (initial send or retry) updating the single assistant slot in-place.
   */
  const executeTurn = async (
    clientMessageId: string,
    content: string,
    isRetry: boolean
  ) => {
    setIsLoading(true);

    try {
      const activeId = await ensureConversation();
      const response = await sendMessage(activeId, content, {
        clientMessageId,
        retry: isRetry || undefined,
      });

      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.role === 'user' && msg.clientMessageId === clientMessageId) {
            return { ...msg, status: 'sent', errorText: undefined };
          }
          if (msg.role === 'assistant' && msg.replyToClientMessageId === clientMessageId) {
            return {
              ...msg,
              id: response.messageId || msg.id,
              content: response.answer,
              citations: response.citations,
              status: 'sent',
              errorText: undefined,
            };
          }
          return msg;
        })
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.role === 'user' && msg.clientMessageId === clientMessageId) {
            return { ...msg, status: 'error' };
          }
          if (msg.role === 'assistant' && msg.replyToClientMessageId === clientMessageId) {
            return { ...msg, status: 'error' };
          }
          return msg;
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Send a new message to Nishi: creates 1 optimistic user message + 1 assistant slot.
   */
  const handleSendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const clientMessageId = generateClientMessageId();

    const userMessage: ChatMessageItem = {
      id: clientMessageId,
      clientMessageId,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
      status: 'sending',
    };

    const assistantSlot: ChatMessageItem = {
      id: `assistant-${clientMessageId}`,
      replyToClientMessageId: clientMessageId,
      retryContent: trimmed,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages((prev) => [...prev, userMessage, assistantSlot]);
    await executeTurn(clientMessageId, trimmed, false);
  };

  /**
   * Retry a failed turn using the exact same clientMessageId and retry: true,
   * overriding the existing assistant slot in-place without duplicating messages.
   */
  const handleRetry = async (clientMessageId: string, content: string) => {
    if (isLoading || !clientMessageId) return;

    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.role === 'user' && msg.clientMessageId === clientMessageId) {
          return { ...msg, status: 'sending', errorText: undefined };
        }
        if (msg.role === 'assistant' && msg.replyToClientMessageId === clientMessageId) {
          return { ...msg, status: 'sending', errorText: undefined };
        }
        return msg;
      })
    );

    await executeTurn(clientMessageId, content, true);
  };

  return (
    <div className={styles.nishiWidget}>
      <AnimatePresence>
        {isOpen ? (
          <NishiWindow
            key="nishi-window"
            messages={messages}
            isLoading={isLoading}
            isRestoring={isRestoring}
            onClose={() => setIsOpen(false)}
            onSendMessage={handleSendMessage}
            onRetry={handleRetry}
            isInitializing={isInitializing}
          />
        ) : (
          <NishiLauncher
            key="nishi-launcher"
            onOpen={() => setIsOpen(true)}
            hasUnread={!hasInteracted}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
