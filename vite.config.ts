import { defineConfig } from "vite";

export default defineConfig({
  base: '/predictable-champion/',
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      output: {
        // Prevent CSS preload which is causing issues on GitHub Pages
        assetFileNames: (assetInfo) => {
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Disable CSS code splitting
    cssCodeSplit: false,
  },
});
