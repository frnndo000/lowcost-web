// =========================================================
// Imágenes oficiales de Toros Food.
//
// ¿Por qué vive aparte de carta.js y negocio.js? Porque `import foto from
// "*.jpg"` solo lo entiende el bundler de Astro, y `scripts/check-datos.mjs`
// corre con Node pelado. Si las imágenes estuvieran en esos archivos, el
// validador no podría importarlos.
//
// Regla: src/data/{negocio,carta,faq,schema}.js se importan desde Node.
// Este archivo, SOLO desde Astro.
//
// El logo y el toro salen del logo oficial (150², fondo negro) procesados a
// PNG transparente (canal rojo como alpha). Un logo de mayor resolución
// mejoraría el og.jpg y usos grandes; para header/watermark/favicon basta.
// =========================================================

import logo from "../assets/logo.png";
import toro from "../assets/toro.png";

// Best sellers (portada). La clave es el id del destacado en carta.js.
import pepitoTorosFood from "../assets/platos/pepito-toros-food.jpg";
import torosPremiumItaliano from "../assets/platos/toros-premium-italiano.jpg";
import hamburguesaTorosFood from "../assets/platos/hamburguesa-toros-food.jpg";
import perroTorosFood from "../assets/platos/perro-toros-food.jpg";

// Hero (slideshow). Fotos distintas a las de best sellers, a propósito.
// Solo alta resolución (1440px nativo): van en un panel vertical, sin estirar.
import hero1 from "../assets/hero/1-pepito.jpg";
import hero2 from "../assets/hero/2-perro.jpg";
import hero3 from "../assets/hero/3-cheese.jpg";

export const marca = { logo, toro };

/** id del destacado (ver `destacados` en carta.js) → foto y su alt. */
export const fotoDestacado = {
  "pepito-toros-food": {
    foto: pepitoTorosFood,
    alt: "Pepito Toros Food cortado en dos mitades sobre papel de la marca",
  },
  "toros-premium-italiano": {
    foto: torosPremiumItaliano,
    alt: "Sándwich italiano premium con queso fundido y palta sobre tabla",
  },
  "hamburguesa-toros-food": {
    foto: hamburguesaTorosFood,
    alt: "Hamburguesa Toros Food en torre, con papas fritas al lado",
  },
  "perro-toros-food": {
    foto: perroTorosFood,
    alt: "Perro completo cubierto de queso llanero rallado sobre tabla",
  },
};

/** Slides del hero, en orden de aparición. */
export const heroSlides = [
  { foto: hero1, alt: "Sándwich de la casa cortado, relleno de carne, chorizo y queso" },
  { foto: hero2, alt: "Perro caliente con queso cheddar fundido y tocino crocante" },
  { foto: hero3, alt: "Hamburguesa con papas fritas y salsas en canasta negra" },
];
