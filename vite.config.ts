import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // Bundle these into the SSR output to avoid CJS/ESM interop issues
    noExternal: isSsrBuild
      ? [
          "react-helmet-async",
          "lucide-react",
          "class-variance-authority",
          "clsx",
          "tailwind-merge",
        ]
      : [],
  },
}));
