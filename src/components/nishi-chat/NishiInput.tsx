import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import styles from './NishiChat.module.css';

interface NishiInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export const NishiInput: React.FC<NishiInputProps> = ({
  onSendMessage,
  isLoading,
  disabled = false,
}) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea height as content expands
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
    }
  }, [text]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || isLoading || disabled) return;

    onSendMessage(trimmed);
    setText('');

    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isSendDisabled = !text.trim() || isLoading || disabled;

  return (
    <div className={styles.chatFooter}>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Nishi about Goutham's experience, stack..."
          className={styles.chatTextarea}
          rows={1}
          disabled={disabled}
          aria-label="Message Nishi AI"
        />

        <button
          type="submit"
          className={styles.sendBtn}
          disabled={isSendDisabled}
          aria-label="Send message"
          title={isSendDisabled ? 'Enter a message to send' : 'Send message (Enter)'}
        >
          <Send size={15} />
        </button>
      </form>

      <div className={styles.footerMeta}>
        <span className={styles.shortcutHint} style={{ marginLeft: 'auto' }}>Press Enter ↵</span>
      </div>
    </div>
  );
};
