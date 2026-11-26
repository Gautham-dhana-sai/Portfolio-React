import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import styles from './NishiChat.module.css';

interface NishiLauncherProps {
  onOpen: () => void;
  hasUnread?: boolean;
}

export const NishiLauncher: React.FC<NishiLauncherProps> = ({
  onOpen,
  hasUnread = false,
}) => {
  return (
    <motion.button
      type="button"
      className={styles.launcherBtn}
      onClick={onOpen}
      aria-label="Open Nishi AI Chatbot"
      aria-expanded={false}
      title="Chat with Nishi AI"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.launcherIconWrap}>
        <Bot size={26} />
      </div>

      {hasUnread && (
        <span className={styles.launcherUnreadPulse} aria-hidden="true" />
      )}
    </motion.button>
  );
};
