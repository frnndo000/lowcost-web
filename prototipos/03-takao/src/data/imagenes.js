// =========================================================
// Fotos por categoría.
//
// ¿Por qué vive aparte de carta.js? Porque `import foto from "*.jpg"`
// solo lo entiende el bundler de Astro, y `scripts/check-datos.mjs` corre
// con Node pelado. Si las imágenes estuvieran en carta.js, el validador
// no podría importarlo. (02-sushiitto tiene ese problema en menu.js.)
//
// Regla: src/data/*.js se importa desde Node. Este archivo, solo desde Astro.
//
// PENDIENTE: estas fotos son recortes de la carta en PDF (~300 px). Sirven
// de miniatura. Pedirle al dueño los originales en alta para el hero.
// =========================================================

import rollNikkey from "../assets/platos/roll-nikkey.jpg";
import rollMidori from "../assets/platos/roll-midori.jpg";
import gohanFuray from "../assets/platos/gohan-furay.jpg";
import gohanSalmon from "../assets/platos/gohan-salmon.jpg";
import sushiburger from "../assets/platos/sushiburger.jpg";
import hamburguesa from "../assets/platos/hamburguesa.jpg";
import ceviche from "../assets/platos/ceviche.jpg";
import papas from "../assets/platos/papas.jpg";
import coctelBlue from "../assets/platos/coctel-blue.jpg";
import tequenos from "../assets/platos/tequenos.jpg";

/** id de categoría → foto. Las categorías sin foto simplemente no salen acá. */
export const fotoCategoria = {
  entradas: tequenos,
  gohan: gohanFuray,
  "takao-rolls": rollNikkey,
  recomendaciones: rollMidori,
  ceviches: ceviche,
  "sushi-burger": sushiburger,
  burgers: hamburguesa,
  papas: papas,
  "cocktails-autor": coctelBlue,
};

/** Destacados de la portada: lo que se muestra para que den ganas de entrar. */
export const destacados = [
  {
    foto: rollMidori,
    alt: "Roll Sake Midori envuelto en palta",
    titulo: "Sake Midori",
    texto: "Envuelto en palta, camarón furay, queso crema y pepino.",
    precio: 9990,
    donde: "/carta#cat-takao-rolls",
  },
  {
    foto: sushiburger,
    alt: "Sushi burger cortada por la mitad",
    titulo: "Sushi Burger",
    texto: "El pan es arroz. Cinco versiones, desde pollo teriyaki a salmón.",
    precio: 7990,
    donde: "/carta#cat-sushi-burger",
  },
  {
    foto: gohanSalmon,
    alt: "Gohan de salmón fresco en bowl",
    titulo: "Gohan de salmón",
    texto: "Bowl de arroz con salmón fresco, queso crema, cebollín y palta.",
    precio: 9990,
    donde: "/carta#cat-gohan",
  },
  {
    foto: coctelBlue,
    alt: "Cóctel Takao Blue",
    titulo: "Takao Blue",
    texto: "Ron Malibú, maracuyá, piña y curaçao. De la carta de autor.",
    precio: 7990,
    donde: "/bar#cat-cocktails-autor",
  },
];
