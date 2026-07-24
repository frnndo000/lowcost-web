// =========================================================
// Schema.org (JSON-LD) — lo que hace que Google muestre horario,
// dirección y rango de precios en el resultado de búsqueda.
//
// Con dos sucursales van DOS Restaurant, no uno: son dos fichas
// distintas en Google Maps y compiten por búsquedas distintas
// ("sushi Reñaca" vs "bar Quilpué"). Un solo Restaurant con dos
// direcciones no existe en el vocabulario de Schema.org.
// =========================================================

import { negocio, sucursales, diaSchema } from "./negocio.js";
import { categorias } from "./carta.js";
import { preguntas } from "./faq.js";

/** Precio más bajo y más alto de la carta, para el priceRange. */
function rangoPrecios() {
  const precios = categorias.flatMap((c) =>
    c.tipo === "subgrupos"
      ? c.subgrupos.flatMap((s) => s.platos.map((p) => p.precio))
      : c.platos.map((p) => p.precio),
  );
  return { min: Math.min(...precios), max: Math.max(...precios) };
}

/** Un Restaurant por sucursal. */
export function schemaRestaurantes() {
  const { min, max } = rangoPrecios();

  return sucursales.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${negocio.sitio}/#${s.id}`,
    name: `${negocio.nombre} ${s.nombre}`,
    description: negocio.seo.descripcion,
    url: negocio.sitio,
    image: new URL(negocio.seo.ogImagen, negocio.sitio).href,
    telephone: `+${s.whatsapp}`,
    servesCuisine: ["Sushi", "Japonesa", "Española", "Tapas", "Peruana"],
    priceRange: `${min}-${max} CLP`,
    currenciesAccepted: "CLP",
    address: {
      "@type": "PostalAddress",
      streetAddress: s.direccion,
      addressLocality: s.comuna,
      addressRegion: negocio.region,
      addressCountry: negocio.pais,
    },
    // ponytail: se omite el geo mientras las coords sigan en 0,0 — publicar
    // geo 0,0 le dice a Google que el local está en el océano. Cuando el dueño
    // confirme las coords reales, este bloque aparece solo.
    ...(s.coords.lat && s.coords.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: s.coords.lat,
            longitude: s.coords.lng,
          },
        }
      : {}),
    openingHoursSpecification: s.horario.map((bloque) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: bloque.dias.map(diaSchema),
      opens: bloque.abre,
      closes: bloque.cierra,
    })),
    sameAs: [
      `https://instagram.com/${s.instagram}`,
      ...Object.values(s.canales),
    ].filter(Boolean),
    hasMenu: `${negocio.sitio}/carta`,
    servesAlcohol: true,
    acceptsReservations: true,
  }));
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
