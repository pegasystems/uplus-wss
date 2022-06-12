/* eslint-disable no-undef */
import { fileURLToPath, URL } from "url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // ski pega-embed elements
        isCustomElement: (tag) => tag.includes('pega-embed') || tag.includes('pega-mashup')
      }
    }
  }), vueJsx()],
  build: {
    outDir: resolve(__dirname, "docs"),
    rollupOptions: {
      input: {
        auto: resolve(__dirname, "auto/index.html"),
        commercial_bank: resolve(__dirname, "commercial_bank/index.html"),
        comms: resolve(__dirname, "comms/index.html"),
        gov: resolve(__dirname, "gov/index.html"),
        health_care: resolve(__dirname, "health_care/index.html"),
        health_payer: resolve(__dirname, "health_payer/index.html"),
        health_pharma: resolve(__dirname, "health_pharma/index.html"),
        health_provider: resolve(__dirname, "health_provider/index.html"),
        insurance: resolve(__dirname, "insurance/index.html"),
        manufacturing: resolve(__dirname, "manufacturing/index.html"),
        retail_bank: resolve(__dirname, "retail_bank/index.html"),
        wealth: resolve(__dirname, "wealth/index.html")
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  e2e: {
    baseUrl: 'http://localhost:8080'
  }
});
