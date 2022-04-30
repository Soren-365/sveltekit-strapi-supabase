/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly  VITE_HASURA_DB_URL: string | boolean;
    readonly  VITE_HASURA_ADMIN_SECRET: string | boolean;
    readonly  VITE_SUPABASE_URL: string | boolean;
    readonly  VITE_SUPABASE_ANON_KEY: string | boolean;
    readonly  VITE_PRODUCTION: string | boolean;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }