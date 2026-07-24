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
  // 4321 lo ocupa 03-takao: así se pueden levantar los dos a la vez.
  server: { port: 4322 },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
