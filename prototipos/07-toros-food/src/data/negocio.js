// =========================================================
// TOROS FOOD — fuente única de verdad del negocio.
//
// Este es EL archivo que se edita para cada cliente nuevo.
// Nada de datos de contacto sueltos en los componentes:
// si un dato aparece dos veces en el código, está mal.
//
// Fast food chileno y venezolano (sandwichería premium) en Quilpué.
// Prospección en frío (Hustlewebs): el local todavía no ha visto esto.
// =========================================================

// Campos por confirmar con el dueño (vía Rafael).
// `npm run check` falla mientras esta lista no esté vacía, así que
// es imposible publicar el sitio con datos de mentira.
export const pendientes = [
  "horario", // hay uno provisional abajo; confirmar días y horas reales
  "coords", // sacar de Google Maps (el mapa en dev usa la dirección de texto)
  "sitio", // dominio final, lo compra el cliente
];

export const negocio = {
  nombre: "Toros Food",
  bajada: "Sandwichería premium chileno-venezolana",
  // La cara de la marca. Un solo golpe de identidad: parrilla urbana,
  // dos cocinas. El detalle de la carta (pepitos, tequeños, arepas) se
  // encuentra en /carta, no acá.
  descripcion:
    "Completos, churrascos, hamburguesas, pepitos venezolanos y perros. Dos cocinas, una parrilla.",

  // Diferenciadores reales del local. Cada uno es una búsqueda distinta
  // que hoy no está en ninguna web de la competencia de Quilpué.
  atributos: [
    "Cocina chilena y venezolana",
    "Sandwichería premium",
    "Delivery disponible",
  ],

  // --- Ubicación ---
  direccion: "Av. Los Carrera 1765",
  comuna: "Quilpué",
  region: "Valparaíso",
  pais: "CL",
  coords: { lat: 0, lng: 0 }, // PENDIENTE: sacar de Google Maps

  // --- Contacto ---
  telefono: "+56 9 6819 9773",
  whatsapp: "56968199773", // solo dígitos, con código país
  mensajeWhatsapp: "Hola! Quiero hacer un pedido en Toros Food:",

  // --- Redes ---
  instagram: "_torosfood",
  facebook: "https://web.facebook.com/p/Toros-Food-61560320313848/",
  google: "https://share.google/WbaoBCdUoS5TA6Jh2",

  // --- Dominio final del sitio (PENDIENTE: lo compra el cliente) ---
  sitio: "https://torosfood.cl",

  // --- Horario (PENDIENTE: confirmar días y horas reales con el dueño) ---
  // Estructurado, NO texto: de acá salen el horario que se muestra
  // y el openingHoursSpecification del Schema.org. Un dato, tres usos.
  // Este bloque es PROVISIONAL para que la demo tenga algo que mostrar;
  // "horario" está en `pendientes`, así que el build no pasa hasta
  // reemplazarlo por el real.
  horario: [
    { dias: ["Mo", "Tu", "We", "Th"], abre: "12:00", cierra: "23:00" },
    { dias: ["Fr", "Sa"], abre: "12:00", cierra: "00:30" },
    { dias: ["Su"], abre: "12:00", cierra: "22:30" },
  ],

  // --- Cómo pedir ---
  // El WhatsApp es el canal principal: sin comisión para el local.
  // Las apps van como respaldo. Si el dueño saca alguna, se deja en "".
  canales: {
    ubereats:
      "https://www.ubereats.com/cl/store/toros-food-sandwicheria-quilpue/tRMY6zR_WTCgkmajUacEBg",
    rappi: "https://www.rappi.cl/restaurantes/900088877-toros-food",
    pedidosya:
      "https://www.pedidosya.cl/restaurantes/quilpue/toros-food-6caedd7f-5b05-4ff6-9943-1383d80263bd-menu",
  },

  seo: {
    descripcion:
      "Fast food chileno y venezolano en Quilpué: completos, churrascos, pepitos, hamburguesas y perros. Pide por WhatsApp o delivery.",
    // Imagen que se ve al compartir el link por WhatsApp. 1200×630.
    ogImagen: "/og.jpg",
  },
};

// --- Días: orden de la semana, nombre humano y nombre Schema.org ---
const DIAS = [
  { id: "Mo", nombre: "Lunes", schema: "Monday" },
  { id: "Tu", nombre: "Martes", schema: "Tuesday" },
  { id: "We", nombre: "Miércoles", schema: "Wednesday" },
  { id: "Th", nombre: "Jueves", schema: "Thursday" },
  { id: "Fr", nombre: "Viernes", schema: "Friday" },
  { id: "Sa", nombre: "Sábado", schema: "Saturday" },
  { id: "Su", nombre: "Domingo", schema: "Sunday" },
];

const orden = (id) => DIAS.findIndex((d) => d.id === id);

/**
 * Convierte ["Mo","Tu","We","Th"] en "Lunes a jueves".
 * Si los días no son corridos, los enumera: "Lunes, miércoles y viernes".
 */
export function textoDias(dias) {
  const indices = dias.map(orden).sort((a, b) => a - b);
  const nombres = indices.map((i) => DIAS[i].nombre);
  if (nombres.length === 1) return nombres[0];

  const corridos = indices.every((n, i) => i === 0 || n === indices[i - 1] + 1);
  const minuscula = (s) => s.toLowerCase();

  if (corridos && nombres.length > 2) {
    return `${nombres[0]} a ${minuscula(nombres.at(-1))}`;
  }
  return `${nombres.slice(0, -1).map(minuscula).join(", ").replace(/^./, (c) => c.toUpperCase())} y ${minuscula(nombres.at(-1))}`;
}

export const diaSchema = (id) => DIAS[orden(id)].schema;
