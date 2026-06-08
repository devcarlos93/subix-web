export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  mode: import.meta.env.VITE_ENV,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
