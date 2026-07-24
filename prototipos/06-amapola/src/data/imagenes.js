// =========================================================
// Fotos del sitio.
//
// Vive aparte de carta.js/negocio.js porque `import foto from "*.png"`
// solo lo entiende el bundler de Astro, y scripts/check-datos.mjs corre
// con Node pelado. Regla: src/data/*.js se importa desde Node; este
// archivo, solo desde Astro.
//
// PENDIENTE: hoy son placeholders (degradados en la paleta de Amapola).
// Reemplazar por fotos reales de las tortas/kuchen cuando lleguen.
// =========================================================

import logoImg from "../assets/logo.png";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import tortaMixta from "../assets/productos/tortamixta.jpg";
import tortaAmapola from "../assets/productos/tortaamapola.jpg";
import kuchenMora from "../assets/productos/kuchenmora.jpg";
import cartaFoto from "../assets/productos/carta.jpg";
import oferta1 from "../assets/oferta7000.jpg";
import oferta2 from "../assets/oferta2x8000.jpg";

/** Foto por nombre de producto, para la vista en bloques de la carta.
 *  Hoy solo las 3 con foto real; el resto cae en un placeholder (ver Carta).
 *  Al llegar más fotos, se agregan acá. */
const PLATO_FOTO = {
  "Torta Mixta": tortaMixta,
  "Torta de Amapola": tortaAmapola,
  "Kuchen de mora y frambuesa": kuchenMora,
};
export const fotoPlato = (nombre) => PLATO_FOTO[nombre] ?? null;

/** id del destacado (ver `destacados` en carta.js) → foto y su alt. */
export const fotoDestacado = {
  "torta-mixta": { foto: tortaMixta, alt: "Torta mixta de Amapola" },
  "torta-amapola": {
    foto: tortaAmapola,
    alt: "Torta de amapola, la de la casa",
  },
  "kuchen-mora": { foto: kuchenMora, alt: "Kuchen sureño de mora y frambuesa" },
};

/** Carrusel del hero: fotos apiladas con crossfade CSS (ver Hero.astro).
 *  La primera es el LCP (carga eager); las demás, lazy. `ancho`/`alto` son
 *  los reales de cada archivo para que Astro no deforme ni haga upscale. */
export const fotosHero = [
  { foto: hero1, ancho: 1400, alto: 1000, alt: "Vitrina de tortas de Amapola" },
  {
    foto: hero2,
    ancho: 1400,
    alto: 1000,
    alt: "Kuchen sureños recién horneados",
  },
  { foto: hero3, ancho: 1400, alto: 1000, alt: "Porciones de torta servidas" },
];

/** La tarjeta que lleva a /carta. */
export const fotoCarta = {
  foto: cartaFoto,
  alt: "Selección de tortas y kuchen de Amapola",
};

/** El logo de la marca (wordmark "Amapola · Pastelería Sureña"), con el
 *  fondo blanco ya recortado a transparente. */
export const logo = logoImg;

/** Promociones vigentes (afiches reales del local). */
export const ofertas = [
  {
    foto: oferta1,
    titulo: "Dúo Dulce",
    detalle: "Trozo de torta + kuchen",
    precio: "$7.000",
    dias: "Lunes a jueves",
    alt: "Promo Dúo Dulce: trozo de torta más kuchen a $7.000",
  },
  {
    foto: oferta2,
    titulo: "Promo 2x",
    detalle: "Dos trozos de torta, cualquier sabor",
    precio: "$8.000",
    dias: "Lunes a jueves",
    alt: "Promo 2x: dos trozos de torta a $8.000",
  },
];
