import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // listen on all network interfaces so the dev server is reachable
    // from other devices on the LAN (useful for testing on mobile/other machines)
    // Using `true` tells Vite to bind to 0.0.0.0 / all addresses.
    host: true,
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
