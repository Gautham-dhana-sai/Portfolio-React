/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  readonly VITE_NISHI_API_BASE_URL?: string;
  readonly VITE_NISHI_REQUEST_ORIGIN?: string;
  readonly VITE_NISHI_DEFAULT_TIMEOUT_MS?: string;
  readonly VITE_NISHI_SEND_TIMEOUT_MS?: string;
  readonly VITE_NISHI_CHAT_TITLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
