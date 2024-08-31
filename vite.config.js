import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ChatGPT-Clone/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    historyApiFallback: true,
  },
});
