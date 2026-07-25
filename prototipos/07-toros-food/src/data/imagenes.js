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
// El toro de la marca vive vectorizado en public/toro.svg (trazado del logo
// oficial) y se usa vía la utilidad CSS `toro-mask` en el componente Toro:
// nítido a cualquier escala. Este archivo solo maneja las FOTOS.
// =========================================================

// Best sellers (portada). La clave es el id del destacado en carta.js.
import pepitoTorosFood from "../assets/platos/pepito-toros-food.jpg";
import completoItaliano from "../assets/platos/completo-italiano.jpg";
import hamburguesaTorosFood from "../assets/platos/hamburguesa-toros-food.jpg";
import perroSencillo from "../assets/platos/perro-sencillo.jpg";

// Hero (slideshow). Fotos distintas a las de best sellers, a propósito.
// Solo alta resolución (1440px nativo): van en un panel vertical, sin estirar.
import hero1 from "../assets/hero/1-pepito.jpg";
import hero2 from "../assets/hero/2-perro.jpg";
import hero3 from "../assets/hero/3-cheese.jpg";

/** id del destacado (ver `destacados` en carta.js) → foto y su alt. */
export const fotoDestacado = {
  "pepito-toros-food": {
    foto: pepitoTorosFood,
    alt: "Pepito Toros Food cortado en dos mitades sobre papel de la marca",
  },
  "completo-italiano": {
    foto: completoItaliano,
    alt: "Completo italiano en pan grande, con palta y queso fundido sobre tabla",
  },
  "hamburguesa-toros-food": {
    foto: hamburguesaTorosFood,
    alt: "Hamburguesa Toros Food en torre, con papas fritas al lado",
  },
  "perro-sencillo": {
    foto: perroSencillo,
    alt: "Perro caliente tradicional cubierto de queso llanero rallado",
  },
};

/** Slides del hero, en orden de aparición. */
export const heroSlides = [
  { foto: hero1, alt: "Sándwich de la casa cortado, relleno de carne, chorizo y queso" },
  { foto: hero2, alt: "Perro caliente con queso cheddar fundido y tocino crocante" },
  { foto: hero3, alt: "Hamburguesa con papas fritas y salsas en canasta negra" },
];
