// =========================================================
// PATIO 511 — fuente única de verdad del negocio.
//
// Este es EL archivo que se edita. Nada de datos de contacto sueltos
// en los componentes: si un dato aparece dos veces en el código, está mal.
//
// Novedad respecto a los prototipos anteriores: acá hay DOS SUCURSALES.
// Lo que es de la marca vive en `negocio`; lo que cambia según el local
// vive en `sucursales`. Ningún componente hardcodea una dirección.
// =========================================================

// Campos por confirmar con el dueño antes de publicar.
// `npm run check` falla mientras esta lista no esté vacía, así que es
// imposible publicar el sitio con datos de mentira.
export const pendientes = [
  "coords de ambas sucursales",
  "dirección exacta de Quilpué",
  "confirmar si el horario de Quilpué es el mismo que el de Reñaca",
];

export const negocio = {
  nombre: "Patio 511",
  bajada: "Sushi, tapas y tablas para compartir",
  // La cara de la marca. Lo que hace único al local no es el sushi
  // (eso lo tiene todo el mundo): es el patio y las dos cocinas juntas.
  descripcion:
    "Sushi, tapas españolas y tablas para compartir, en un patio al aire libre. De día familia, de noche bar.",

  region: "Valparaíso",
  pais: "CL",

  // Dominio final. El local ya lo tiene impreso en su carta.
  sitio: "https://patio511.cl",

  mensajeWhatsapp: "Hola! Quiero hacer un pedido:",

  seo: {
    descripcion:
      "Sushi, tapas españolas y tablas para compartir en Reñaca y Quilpué. Patio al aire libre, barra completa y delivery. Pide directo por WhatsApp.",
    // Imagen que se ve al compartir el link por WhatsApp. 1200×630.
    ogImagen: "/og.jpg",
  },
};

// --- Las dos sucursales ---
// Mismo componente, distinto set de datos. Agregar una tercera sucursal
// es agregar un objeto acá: ninguna página hay que tocar.
export const sucursales = [
  {
    id: "renaca",
    nombre: "Reñaca",
    // Aparece en el <h3> de cada tarjeta y en el título del mapa.
    etiqueta: "Reñaca, Viña del Mar",
    direccion: "Bernardo O'Higgins 1100",
    comuna: "Viña del Mar",
    referencia: "Dentro del Club Español de Reñaca",
    ambiente:
      "Patio al aire libre con árboles, juegos para niños y estacionamiento. De noche, DJ y baile.",
    whatsapp: "56935818476", // solo dígitos, con código país
    instagram: "patio511renaca",
    coords: { lat: 0, lng: 0 }, // PENDIENTE: sacar de Google Maps
    // Horario de la carta oficial (página 14). El domingo cierra temprano.
    horario: [
      { dias: ["Mo", "Tu", "We"], abre: "13:00", cierra: "00:00" },
      { dias: ["Th"], abre: "13:00", cierra: "01:00" },
      { dias: ["Fr", "Sa"], abre: "13:00", cierra: "02:00" },
      { dias: ["Su"], abre: "13:00", cierra: "18:00" },
    ],
    // Apps de delivery. Vacío = el botón no se renderiza. Nada de links
    // rotos: 01-nutricionista se publicó con tres y el cliente los vio.
    // No trabajan con Uber Eats, así que esa clave no existe.
    // El orden acá es el orden de los botones en pantalla.
    canales: {
      rappi: "https://www.rappi.cl/restaurantes/900035319-patio-511",
      pedidosya:
        "https://www.pedidosya.cl/restaurantes/vina-del-mar/patio-511-club-espanol-de-renaca-a405797e-0cfb-40f5-b8b7-2449a788c43e-menu",
    },
  },
  {
    id: "quilpue",
    nombre: "Quilpué",
    etiqueta: "Quilpué",
    direccion: "Dagoberto Godoy 2385, esquina Puelma",
    comuna: "Quilpué",
    referencia: "",
    ambiente:
      "Más tranquilo y con poco ruido ambiente. El de conversar sin gritar.",
    whatsapp: "56938667387",
    instagram: "patio511_quilpue",
    coords: { lat: 0, lng: 0 }, // PENDIENTE
    horario: [
      { dias: ["Mo", "Tu", "We"], abre: "13:00", cierra: "00:00" },
      { dias: ["Th"], abre: "13:00", cierra: "01:00" },
      { dias: ["Fr", "Sa"], abre: "13:00", cierra: "02:00" },
      { dias: ["Su"], abre: "13:00", cierra: "18:00" },
    ],
    canales: {
      rappi: "https://www.rappi.cl/restaurantes/900098051-patio-511",
      pedidosya:
        "https://www.pedidosya.cl/restaurantes/quilpue/patio-511--quilpue-fd64b72c-719d-454b-866b-2cf3599a3a3d-menu",
    },
  },
];

/** Link de WhatsApp ya armado, con el mensaje pre-llenado. */
export const linkWhatsapp = (sucursal) =>
  `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(negocio.mensajeWhatsapp)}`;

/** Consulta para el iframe de Google Maps: sin API key ni costo.
 *  Cuando el dueño confirme la dirección exacta, este embed la toma solo. */
export const consultaMapa = (sucursal) =>
  encodeURIComponent(
    `${negocio.nombre} ${sucursal.direccion} ${sucursal.comuna}`,
  );

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
