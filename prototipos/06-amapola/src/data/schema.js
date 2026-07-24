// =========================================================
// Schema.org (JSON-LD) — lo que hace que Google muestre horario,
// dirección, rango de precios y valoración en el resultado de búsqueda.
//
// Un solo local → un solo Bakery (a diferencia de 05, que emitía uno
// por sucursal). La valoración real de Uber Eats va como aggregateRating.
// =========================================================

import { negocio, diaSchema } from "./negocio.js";
import { categorias } from "./carta.js";
import { preguntas } from "./faq.js";

/** Precio más bajo y más alto de la carta (ignora los "por encargo"). */
function rangoPrecios() {
  const precios = categorias
    .flatMap((c) =>
      c.tipo === "subgrupos"
        ? c.subgrupos.flatMap((s) => s.platos.map((p) => p.precio))
        : c.platos.map((p) => p.precio),
    )
    .filter((p) => Number.isInteger(p) && p > 0);
  return { min: Math.min(...precios), max: Math.max(...precios) };
}

/** Un Bakery para el local. */
export function schemaNegocio() {
  const { min, max } = rangoPrecios();

  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${negocio.sitio}/#local`,
    name: negocio.marca,
    description: negocio.seo.descripcion,
    url: negocio.sitio,
    image: new URL(negocio.seo.ogImagen, negocio.sitio).href,
    telephone: `+${negocio.whatsapp}`,
    servesCuisine: ["Pastelería", "Repostería", "Postres"],
    priceRange: `${min}-${max} CLP`,
    currenciesAccepted: "CLP",
    address: {
      "@type": "PostalAddress",
      streetAddress: negocio.direccion,
      addressLocality: negocio.comuna,
      addressRegion: negocio.region,
      addressCountry: negocio.pais,
    },
    // ponytail: se omite el geo mientras no haya coords — publicar 0,0 le
    // dice a Google que el local está en el océano.
    ...(negocio.coords
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: negocio.coords.lat,
            longitude: negocio.coords.lng,
          },
        }
      : {}),
    openingHoursSpecification: negocio.horario.map((bloque) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: bloque.dias.map(diaSchema),
      opens: bloque.abre,
      closes: bloque.cierra,
    })),
    ...(negocio.valoracion
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: negocio.valoracion.estrellas.replace(",", "."),
            ratingCount: 1000,
            bestRating: 5,
          },
        }
      : {}),
    sameAs: [
      `https://instagram.com/${negocio.instagram}`,
      ...Object.values(negocio.canales),
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
