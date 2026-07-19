import { defineConfig } from "vite";

export default defineConfig({
  base: '/predictable-champion/',
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "case-study-kyc": [
            "./src/case-studies/KYCCaseStudy.jsx",
          ],
        },
      },
    },
  },
});
