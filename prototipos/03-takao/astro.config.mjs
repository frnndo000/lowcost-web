// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { negocio } from "./src/data/negocio.js";

// `site` sale de negocio.js: el dominio se escribe una sola vez en todo
// el proyecto. Sin esto, el canonical y las Open Graph salen relativas
// y la tarjeta de WhatsApp no carga la imagen.
export default defineConfig({
  site: negocio.sitio,
  // Con una sola página no valía la pena; con /, /carta y /bar sí.
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
