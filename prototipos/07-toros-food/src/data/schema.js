// =========================================================
// Schema.org (JSON-LD) — el diferenciador que hace que Google muestre
// horario, dirección, rango de precios y preguntas desplegables en el
// resultado de búsqueda, en vez de un link pelado. Se genera desde los
// datos: no hay un solo dato escrito dos veces.
//
// Verificar en https://search.google.com/test/rich-results
// =========================================================

import { negocio, diaSchema } from "./negocio.js";
import { categorias } from "./carta.js";
import { preguntas } from "./faq.js";

/** Precio más bajo y más alto de la carta, para el priceRange. */
function rangoPrecios() {
  const precios = categorias.flatMap((c) => c.platos.map((p) => p.precio));
  return { min: Math.min(...precios), max: Math.max(...precios) };
}

export function schemaRestaurant() {
  const { min, max } = rangoPrecios();

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: negocio.nombre,
    description: negocio.seo.descripcion,
    url: negocio.sitio,
    image: new URL(negocio.seo.ogImagen, negocio.sitio).href,
    telephone: negocio.telefono,
    servesCuisine: ["Comida rápida", "Sandwiches", "Chilena", "Venezolana"],
    priceRange: `${min}-${max} CLP`,
    currenciesAccepted: "CLP",
    address: {
      "@type": "PostalAddress",
      streetAddress: negocio.direccion,
      addressLocality: negocio.comuna,
      addressRegion: negocio.region,
      addressCountry: negocio.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: negocio.coords.lat,
      longitude: negocio.coords.lng,
    },
    openingHoursSpecification: negocio.horario.map((bloque) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: bloque.dias.map(diaSchema),
      opens: bloque.abre,
      closes: bloque.cierra,
    })),
    sameAs: [
      `https://instagram.com/${negocio.instagram}`,
      negocio.facebook,
      negocio.google,
      negocio.canales.ubereats,
      negocio.canales.rappi,
      negocio.canales.pedidosya,
    ].filter(Boolean),
    hasMenu: `${negocio.sitio}/carta`,
    acceptsReservations: false,
  };
}

export function schemaFaq() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map(({ p, r }) => ({
      "@type": "Question",
      name: p,
      acceptedAnswer: { "@type": "Answer", text: r },
    })),
  };
}
