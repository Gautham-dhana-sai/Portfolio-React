import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';
import { NishiMessage, ChatMessageItem } from './NishiMessage';
import { NishiInput } from './NishiInput';
import styles from './NishiChat.module.css';

interface NishiWindowProps {
  messages: ChatMessageItem[];
  isLoading: boolean;
  isRestoring?: boolean;
  onClose: () => void;
  onSendMessage: (text: string) => void;
  onRetry: (clientMessageId: string, content: string) => void;
  isInitializing?: boolean;
}

export const NishiWindow: React.FC<NishiWindowProps> = ({
  messages,
  isLoading,
  isRestoring = false,
  onClose,
  onSendMessage,
  onRetry,
  isInitializing = false,
}) => {
  const streamEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as messages arrive or typing status changes
  useEffect(() => {
    streamEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isRestoring]);

  return (
    <motion.aside
      className={styles.chatWindow}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.9 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'bottom right' }}
      aria-label="Nishi AI Assistant Chat Window"
    >
      <div className={styles.windowTopLine} aria-hidden="true" />

      {/* Header */}
      <header className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.avatarWrap} aria-hidden="true">
            <Bot size={20} />
            <span className={styles.onlineBadge} />
          </div>
          <div className={styles.headerInfo}>
            <span className={styles.botName}>Nishi</span>
            <span className={styles.botSubtitle}>AI Portfolio Assistant</span>
          </div>
        </div>

        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Minimize Nishi chat"
          title="Minimize"
        >
          <X size={18} />
        </button>
      </header>

      {/* Message Stream */}
      <div className={styles.messageStream}>
        {messages.map((msg) => (
          <NishiMessage key={msg.id} message={msg} onRetry={onRetry} />
        ))}

        {/* History restoration shimmers */}
        {isRestoring && (
          <div className={styles.shimmerContainer} aria-label="Restoring previous messages, please wait">
            <div className={styles.shimmerNotice}>
              <span className={styles.shimmerNoticeDot} aria-hidden="true" />
              <span>Fetching previous messages, please wait...</span>
            </div>

            <div className={`${styles.messageRow} ${styles.messageRowUser}`}>
              <div className={`${styles.shimmerBubble} ${styles.shimmerBubbleUser}`}>
                <div className={`${styles.shimmerLine} ${styles.shimmerLineMedium}`} />
              </div>
            </div>

            <div className={`${styles.messageRow} ${styles.messageRowAssistant}`}>
              <div className={styles.assistantAvatar} aria-hidden="true">
                <Bot size={15} />
              </div>
              <div className={`${styles.shimmerBubble} ${styles.shimmerBubbleAssistant}`}>
                <div className={styles.shimmerLine} />
                <div className={`${styles.shimmerLine} ${styles.shimmerLineMedium}`} />
                <div className={`${styles.shimmerLine} ${styles.shimmerLineShort}`} />
              </div>
            </div>

            <div className={`${styles.messageRow} ${styles.messageRowUser}`}>
              <div className={`${styles.shimmerBubble} ${styles.shimmerBubbleUser}`}>
                <div className={`${styles.shimmerLine} ${styles.shimmerLineShort}`} />
              </div>
            </div>
          </div>
        )}

        <div ref={streamEndRef} aria-hidden="true" />
      </div>

      {/* Input */}
      <NishiInput
        onSendMessage={onSendMessage}
        isLoading={isLoading}
        disabled={isInitializing || isRestoring}
      />
    </motion.aside>
  );
};
