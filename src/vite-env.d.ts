/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_ENV: 'development' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
