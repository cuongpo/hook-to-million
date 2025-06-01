import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Determine if we're using a custom domain
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true' || process.env.NODE_ENV === 'development';

export default defineConfig(({ mode }) => ({  
  base: isCustomDomain ? '/' : '/hook-to-million/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
