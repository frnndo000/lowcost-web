// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://sushiitto.cl",

  server: {
    allowedHosts: [".trycloudflare.com"],
  },

  vite: { plugins: [tailwindcss()] },
  adapter: cloudflare(),
});