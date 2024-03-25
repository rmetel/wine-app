/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~bootstrap": path.resolve(
        __dirname,
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
      ),
      "~izitoast": path.resolve(
        __dirname,
        "node_modules/izitoast/dist/css/iziToast.min.css",
      ),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom", // https://zenn.dev/builder_search/articles/14d8cc0dd2e606
    setupFiles: ["./setupTests.ts"],
  },
});
