// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sushiitto.cl",
  server: {
    allowedHosts: [".trycloudflare.com"],
  },
  vite: { plugins: [tailwindcss()] },
});
