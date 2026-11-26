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
const DEFAULT_CHAT_TITLE = import.meta.env.VITE_NISHI_CHAT_TITLE || 'Nishi Chat';

const INITIAL_GREETING_MESSAGE: ChatMessageItem = {
  id: 'initial-greeting',
  role: 'assistant',
  content: INITIAL_GREETING_TEXT,
  timestamp: new Date(),
};

export const NishiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessageItem[]>([INITIAL_GREETING_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
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
    // 1. In-memory state check
    if (conversationId) {
      return conversationId;
    }

    // 2. SessionStorage check
    const storedId = getStoredConversationId();
    if (storedId) {
      setConversationId(storedId);
      return storedId;
    }

    // 3. Reuse in-flight creation promise to prevent duplicate API requests
    if (initPromiseRef.current) {
      return initPromiseRef.current;
    }

    // 4. Create new conversation
    setIsInitializing(true);
    const creationPromise = (async () => {
      try {
        const response = await createConversation(DEFAULT_CHAT_TITLE);
        const newId = response.id;
        setStoredConversationId(newId);
        setConversationId(newId);
        return newId;
      } catch (err) {
        // Clear promise ref so future attempts can retry
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
   * On mount: Check for existing session in sessionStorage and restore messages.
   */
  useEffect(() => {
    const storedId = getStoredConversationId();
    if (!storedId) return;

    setConversationId(storedId);

    // Restore previous messages from GET /v1/portals/conversations/:id/messages
    let isCancelled = false;
    getConversationMessages(storedId)
      .then((apiMessages) => {
        if (isCancelled) return;
        if (Array.isArray(apiMessages) && apiMessages.length > 0) {
          const mapped: ChatMessageItem[] = [
            INITIAL_GREETING_MESSAGE,
            ...apiMessages.map((m, idx) => ({
              id: m.id || `restored-${idx}`,
              role: m.senderRole,
              content: m.content,
              citations: m.citations,
              timestamp: m.createdAt ? new Date(m.createdAt) : undefined,
              status: 'sent' as const,
            })),
          ];
          setMessages(mapped);
          setHasInteracted(true);
        }
      })
      .catch((_err) => {
        if (isCancelled) return;
        // If stored conversation is invalid or expired, reset for next session
        clearStoredConversationId();
        setConversationId(null);
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
   * Send a new message to Nishi
   */
  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMessage: ChatMessageItem = {
      id: userMsgId,
      role: 'user',
      content: text,
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 1. Ensure conversation session exists
      const activeId = await ensureConversation();

      // 2. Send message
      const response = await sendMessage(activeId, text);

      // 3. Mark user message as sent
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMsgId ? { ...msg, status: 'sent' } : msg
        )
      );

      // 4. Append assistant response
      const assistantMessage: ChatMessageItem = {
        id: response.messageId || `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.answer,
        citations: response.citations,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMsg =
        err?.message ||
        'Unable to reach Nishi RAG service right now. Please try again.';

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMsgId
            ? { ...msg, status: 'error', errorText: errorMsg }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Retry sending a failed message
   */
  const handleRetry = async (messageId: string, content: string) => {
    if (isLoading) return;

    // Reset status to 'sending'
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, status: 'sending', errorText: undefined }
          : msg
      )
    );
    setIsLoading(true);

    try {
      const activeId = await ensureConversation();
      const response = await sendMessage(activeId, content);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, status: 'sent' } : msg
        )
      );

      const assistantMessage: ChatMessageItem = {
        id: response.messageId || `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.answer,
        citations: response.citations,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMsg =
        err?.message ||
        'Unable to reach Nishi RAG service right now. Please try again.';

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, status: 'error', errorText: errorMsg }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.nishiWidget}>
      <AnimatePresence>
        {isOpen ? (
          <NishiWindow
            key="nishi-window"
            messages={messages}
            isLoading={isLoading}
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
