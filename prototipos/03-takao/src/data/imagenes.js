// =========================================================
// Fotos de la portada.
//
// SOLO la home lleva fotos. /carta y /bar van sin miniaturas: con 180
// platos, las imágenes en la lista estorban más de lo que aportan.
//
// ¿Por qué vive aparte de carta.js? Porque `import foto from "*.jpg"` solo
// lo entiende el bundler de Astro, y `scripts/check-datos.mjs` corre con
// Node pelado. Si las imágenes estuvieran en carta.js, el validador no
// podría importarlo. (02-sushiitto tiene ese problema en menu.js.)
//
// Regla: src/data/*.js se importa desde Node. Este archivo, solo desde Astro.
// =========================================================

import logoRojo from "../assets/logo-rojo.png";
import logoAzul from "../assets/logo-azul.png";
import okinawaAtun from "../assets/platos/okinawa-atun.jpg";
import sushiBurger from "../assets/platos/sushi-burger.jpg";
import dragonEspecial from "../assets/platos/dragon-especial.jpg";
import laBichota from "../assets/platos/la-bichota.jpg";

/** id del destacado (ver `destacados` en carta.js) → foto y su alt. */
export const fotoDestacado = {
  "okinawa-atun": {
    foto: okinawaAtun,
    alt: "Okinawa de atún sobre pizarra, con topping de pollo furay",
  },
  "sushi-burger": {
    foto: sushiBurger,
    alt: "Sushi burger de salmón cortada por la mitad",
  },
  "dragon-especial": {
    foto: dragonEspecial,
    alt: "Dragon Especial envuelto en palta, con masago y salsa spicy",
  },
  "la-bichota": {
    foto: laBichota,
    alt: "Cóctel La Bichota en copa labrada",
  },
};

/** Las dos tarjetas que llevan a /carta y a /bar. */
export const fotoCarta = fotoDestacado["dragon-especial"];
export const fotoBarra = fotoDestacado["la-bichota"];

/** El logo, como asset de Astro para que salga en webp y al tamaño justo.
 *  Antes vivía en public/, donde Astro no lo toca: eran 59 KB de PNG en /bar
 *  para mostrarse a 40 px. */
export const logo = { rojo: logoRojo, azul: logoAzul };
