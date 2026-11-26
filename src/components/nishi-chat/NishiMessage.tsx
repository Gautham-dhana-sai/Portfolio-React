import React, { useEffect, useState } from 'react';
import { Bot, AlertCircle, RotateCcw, FileText } from 'lucide-react';
import { Citation } from '../../services/nishiChatApi';
import styles from './NishiChat.module.css';

export interface ChatMessageItem {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  clientMessageId?: string;
  replyToClientMessageId?: string;
  retryContent?: string;
  citations?: Citation[];
  timestamp?: Date;
  status?: 'sending' | 'sent' | 'error';
  errorText?: string;
}

interface NishiMessageProps {
  message: ChatMessageItem;
  onRetry?: (clientMessageId: string, content: string) => void;
}

const THINKING_STATUSES = [
  'Pondering...',
  'Connecting the dots...',
  'Percolating...',
  'Mulling it over...',
  'Ruminating...',
  'Brewing thoughts...',
  'Noodling on that...',
  'Untangling ideas...',
  'Simmering...',
  'Piecing things together...',
];

const getProgressText = (elapsedSeconds: number): string => {
  const index = Math.floor(elapsedSeconds / 5) % THINKING_STATUSES.length;
  return THINKING_STATUSES[index];
};

const ThinkingIndicator: React.FC = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const statusText = getProgressText(elapsedSeconds);

  return (
    <div className={`${styles.messageRow} ${styles.messageRowAssistant}`}>
      <div className={styles.assistantAvatar} aria-hidden="true">
        <Bot size={15} />
      </div>
      <div className={styles.thinkingBubble} aria-label={statusText}>
        <div className={styles.thinkingDots} aria-hidden="true">
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
        </div>
        <span key={statusText} className={styles.thinkingStatusText}>
          {statusText}
        </span>
      </div>
    </div>
  );
};

export const NishiMessage: React.FC<NishiMessageProps> = ({ message, onRetry }) => {
  const isUser = message.role === 'user';
  const hasCitations = Array.isArray(message.citations) && message.citations.length > 0;

  if (!isUser && message.status === 'sending') {
    return <ThinkingIndicator />;
  }

  if (!isUser && message.status === 'error') {
    return null;
  }

  return (
    <div
      className={`${styles.messageRow} ${
        isUser ? styles.messageRowUser : styles.messageRowAssistant
      }`}
    >
      {!isUser && (
        <div className={styles.assistantAvatar} aria-hidden="true">
          <Bot size={15} />
        </div>
      )}

      <div
        className={`${styles.messageBubble} ${
          isUser ? styles.messageUser : styles.messageAssistant
        } ${isUser && message.status === 'error' ? styles.userMessageError : ''}`}
      >
        <div className={styles.messageText}>{message.content}</div>

        {/* Unobtrusive grounded citations */}
        {!isUser && hasCitations && (
          <div className={styles.citationsBlock}>
            <div className={styles.citationsHeader}>
              <FileText size={12} />
              <span>Grounded Citations ({message.citations!.length})</span>
            </div>
            <div className={styles.citationsList}>
              {message.citations!.map((cit, idx) => {
                const docTitle = cit.documentTitle || 'Reference Document';
                const hasPage = typeof cit.pageNumber === 'number' && cit.pageNumber > 0;
                return (
                  <div key={cit.id || `cit-${idx}`} className={styles.citationCard}>
                    <div className={styles.citationTitleRow}>
                      <span className={styles.citationDocTitle} title={docTitle}>
                        {docTitle}
                      </span>
                      {hasPage && (
                        <span className={styles.citationPage}>p. {cit.pageNumber}</span>
                      )}
                    </div>
                    {cit.snippet && (
                      <p className={styles.citationSnippet}>{cit.snippet}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Failed submission error & retry control on user's message */}
        {isUser && message.status === 'error' && (
          <div className={styles.errorRow}>
            <AlertCircle size={13} />
            <span>Failed to send</span>
            {onRetry && (
              <button
                type="button"
                className={styles.retryBtn}
                onClick={() => onRetry(message.clientMessageId || message.id, message.content)}
                title="Retry sending this message"
              >
                <RotateCcw size={11} />
                <span>Retry</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
