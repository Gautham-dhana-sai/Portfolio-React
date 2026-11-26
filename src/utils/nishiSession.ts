const SESSION_KEY = 'nishi_conversation_id';

/**
 * Retrieve the active Nishi conversation ID from sessionStorage.
 * Returns null if no active session or if storage is inaccessible.
 */
export const getStoredConversationId = (): string | null => {
  try {
    return sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
};

/**
 * Store the active Nishi conversation ID into sessionStorage.
 */
export const setStoredConversationId = (id: string): void => {
  try {
    sessionStorage.setItem(SESSION_KEY, id);
  } catch {
    // Graceful fallback if storage quota exceeded or disabled
  }
};

/**
 * Clear the stored conversation ID from sessionStorage (e.g., if stale or invalid).
 */
export const clearStoredConversationId = (): void => {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignore
  }
};
