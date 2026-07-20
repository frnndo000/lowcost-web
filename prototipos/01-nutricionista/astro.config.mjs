import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nutri_isaac.cl",
  vite: {
    plugins: [tailwindcss()],
  },
});
