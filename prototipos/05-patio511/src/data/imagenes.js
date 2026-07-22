// =========================================================
// Fotos del sitio.
//
// SOLO la portada lleva fotos. /carta y /bar van sin miniaturas: con
// 200 ítems, las imágenes en la lista estorban más de lo que aportan.
//
// ¿Por qué vive aparte de carta.js? Porque `import foto from "*.jpg"`
// solo lo entiende el bundler de Astro, y `scripts/check-datos.mjs`
// corre con Node pelado. Si las imágenes estuvieran en carta.js, el
// validador no podría importarlo.
//
// Regla: src/data/*.js se importa desde Node. Este archivo, solo desde Astro.
// =========================================================

import logoPatio from "../assets/logo-sello.png";
import montaditoJugosa from "../assets/platos/montadito-jugosa.jpg";
import montaditoPobre from "../assets/platos/montadito-pobre.jpg";
import acevichado from "../assets/platos/acevichado.jpg";
import acevichadoTabla from "../assets/platos/acevichado-tabla.jpg";
import sangria from "../assets/platos/sangria.jpg";
import sangriaBarra from "../assets/platos/sangria-barra.jpg";
import iconoRappi from "../assets/apps/rappi.png";
import iconoPedidosya from "../assets/apps/pedidosya.png";
import patioNoche from "../assets/local/patio-noche.jpg";
import servicioDia from "../assets/local/servicio-dia.jpg";
import servicioNoche from "../assets/local/servicio-noche.jpg";
import barra from "../assets/local/barra.jpg";

/** id del destacado (ver `destacados` en carta.js) → foto y su alt. */
export const fotoDestacado = {
  "montadito-jugosa": {
    foto: montaditoJugosa,
    alt: "Tres montaditos de carne mechada con queso fundido sobre pizarra negra",
  },
  "montadito-pobre": {
    foto: montaditoPobre,
    alt: "Cuatro montaditos a lo pobre con huevo de codorniz sobre papa dorada",
  },
  acevichado: {
    foto: acevichado,
    alt: "Tabla de roll acevichado con topping de salmón y cebolla morada",
  },
  sangria: {
    foto: sangria,
    alt: "Copa de sangría con frutas sobre la mesa del patio",
  },
};

/** Fondo del hero: el patio de Reñaca de noche con las guirnaldas.
 *  Es la foto que mejor vende el lugar y la de mejor resolución que
 *  tenemos (1080×1080), así que se sirve a su tamaño nativo. La anterior
 *  era de 828 px y el navegador la estiraba a 1200: se veía pixelada.
 *  Por eso NO está en la galería — se vería la misma foto dos veces. */
export const fotoHero = {
  foto: patioNoche,
  ancho: 1080,
  alto: 1080,
};

/** Las dos tarjetas que llevan a /carta y a /bar. */
export const fotoCarta = {
  foto: acevichadoTabla,
  alt: "Roll acevichado completo servido en tabla larga",
};
export const fotoBarra = {
  foto: sangriaBarra,
  alt: "Copa de sangría en la barra, con mojitos preparándose atrás",
};

/** Íconos oficiales de las apps de delivery, bajados del ícono PWA de
 *  cada una (rappi.cl/pwa-icons, live.pystatic.com/webassets/pwa/icons).
 *  El de WhatsApp no está acá: va como SVG inline en PideAqui.astro,
 *  porque al ser monocromo se pinta con el color del botón.
 *  Marcas registradas de sus dueños; se usan solo para indicar que el
 *  local está en esas plataformas. */
export const iconoApp = {
  rappi: iconoRappi,
  pedidosya: iconoPedidosya,
};

/** El logo, como asset de Astro para que salga en webp y al tamaño justo.
 *  Es el sello circular recortado de la portada de la carta oficial. */
export const logo = logoPatio;

// =========================================================
// GALERÍA — el local, no los platos.
//
// El orden cuenta la historia del día: llega la tarde, se prende el
// patio, se arma la barra, sale la comida. La del patio de noche va
// primera porque es la que mejor vende el lugar.
//
// Son tres y no cuatro a propósito: la del patio de noche se fue al
// hero, y repetirla acá abajo se notaba al hacer scroll. Tres tarjetas
// más grandes se ven mejor que cuatro chicas.
//
// Si algún día se agrega una foto sin tener el archivo todavía, dejar
// `foto: null` y llenar `pedir`: la tarjeta se dibuja como un
// placeholder rotulado en vez de un hueco roto (ver Galeria.astro).
// Falta una de Quilpué: todas estas son de Reñaca.
// =========================================================
export const galeria = [
  {
    foto: servicioDia,
    alt: "Mesera llevando una bandeja con rolls y montaditos en la terraza",
  },
  {
    foto: barra,
    alt: "Bartender sirviendo dos sours desde las cocteleras",
  },
  {
    foto: servicioNoche,
    alt: "Bandeja con montaditos de salmón, quesadillas y papas fritas servida de noche",
  },
];
