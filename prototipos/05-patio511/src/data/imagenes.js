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

/** Carrusel del hero: las 4 fotos del local, apiladas y con crossfade CSS
 *  (ver Hero.astro). Reemplazó a la sección "Ambiente", que como bloque
 *  aparte no cuajaba; acá las mismas fotos son el fondo con más personalidad
 *  de la portada.
 *
 *  Orden: las oscuras primero. La primera es el LCP y la que se ve al
 *  cargar, así que el patio de noche —oscuro y el que mejor vende— deja el
 *  texto bien legible de entrada. La de servicio de día es la más clara y
 *  va al final. `ancho`/`alto` son los reales de cada archivo, para que
 *  Astro no deforme ni haga upscale. */
export const fotosHero = [
  {
    foto: patioNoche,
    ancho: 1080,
    alto: 1080,
    alt: "Patio de Reñaca de noche, con guirnaldas de luces entre los árboles",
  },
  {
    foto: barra,
    ancho: 1440,
    alto: 1149,
    alt: "Bartender sirviendo dos sours desde las cocteleras",
  },
  {
    foto: servicioNoche,
    ancho: 1080,
    alto: 720,
    alt: "Bandeja con montaditos de salmón, quesadillas y papas fritas de noche",
  },
];

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
