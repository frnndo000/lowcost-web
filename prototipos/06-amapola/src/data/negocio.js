// =========================================================
// AMAPOLA · Pastelería Sureña — fuente única de verdad.
//
// Este es EL archivo que se edita. Nada de datos de contacto sueltos en
// los componentes: si un dato aparece dos veces en el código, está mal.
//
// Un solo local (a diferencia de 05-patio511, que era multi-sucursal).
// Datos reales sacados de su Instagram, Linktree y las apps de delivery.
// =========================================================

// Datos por confirmar con la dueña. NO bloquea el build (build = astro build);
// solo documenta lo que falta. Los componentes muestran fallback elegante.
export const pendientes = [
  "coords exactas para el mapa (hoy usa la dirección de texto)",
  "confirmar horario de tienda (11:00–19:45 es el de delivery)",
  "precios de tortas enteras y personalizado (hoy 'por encargo')",
  "logo real y colores hex definitivos",
  "fotos propias en alta de tortas y kuchen",
];

export const negocio = {
  nombre: "Amapola",
  marca: "Amapola · Pastelería Sureña",
  bajada: "Sabores y porciones sureñas",
  // La cara de la marca: repostería casera del sur, recetas de familia.
  descripcion:
    "Tortas, kuchen sureños y postres caseros en Viña del Mar. Recetas familiares, hechas como en casa. Retira, pide delivery o encarga tu torta.",

  region: "Valparaíso",
  pais: "CL",
  sitio: "https://amapolapasteleria.cl", // dominio final (PENDIENTE de comprar)

  // --- Contacto ---
  whatsapp: "56961190145", // solo dígitos, con código país
  mensajeWhatsapp: "¡Hola Amapola! Quiero hacer un pedido:",
  instagram: "amapolapasteleriasurena",
  // Las tortas temáticas fondant las hace su cuenta hermana.
  blooomCakes: "blooom.cakes",

  // --- Ubicación (local único) ---
  direccion: "5 Norte 380, entre 3 y 4 Poniente",
  comuna: "Viña del Mar",
  referencia: "",
  coords: null, // PENDIENTE: el mapa usa la dirección de texto mientras tanto

  // --- Horario ---
  // 11:00–19:45 todos los días (horario de delivery según Rappi/UberEats;
  // confirmar si el de tienda coincide).
  horario: [
    { dias: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], abre: "11:00", cierra: "19:45" },
  ],

  // --- Delivery ---
  // El pedido directo por WhatsApp es el principal (sin comisión para el local).
  // Las apps van como respaldo. El orden acá es el orden en pantalla.
  canales: {
    rappi: "https://www.rappi.cl/restaurantes/900038512-amapola-pasteleria-surena",
    pedidosya: "https://www.pedidosya.cl/restaurantes/vina-del-mar/amapola-pasteleria-surena-menu",
    ubereats: "https://www.ubereats.com/cl/store/amapola-pasteleria-surena/QX7UM8kyQhKR3bK0S8FG5A",
  },

  // Prueba social real (de UberEats). Un activo que Instagram no muestra.
  valoracion: { estrellas: "4,7", resenas: "1.000+", fuente: "Uber Eats" },

  seo: {
    descripcion:
      "Pastelería sureña en Viña del Mar: tortas, kuchen y postres caseros con recetas familiares. Retiro, delivery o por encargo. Pide directo por WhatsApp.",
    ogImagen: "/og.jpg", // 1200×630 para el link compartido por WhatsApp
  },
};

/** Link de WhatsApp ya armado, con el mensaje pre-llenado. */
export const linkWhatsapp = (mensaje = negocio.mensajeWhatsapp) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

/** Consulta para el iframe de Google Maps: sin API key ni costo.
 *  Cuando la dueña confirme coords exactas, se puede cambiar el embed. */
export const consultaMapa = () =>
  encodeURIComponent(`${negocio.marca} ${negocio.direccion} ${negocio.comuna}`);

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
 * Si son los 7 días, "Todos los días". Si no son corridos, los enumera.
 */
export function textoDias(dias) {
  const indices = dias.map(orden).sort((a, b) => a - b);
  const nombres = indices.map((i) => DIAS[i].nombre);
  if (nombres.length === 1) return nombres[0];
  if (nombres.length === 7) return "Todos los días";

  const corridos = indices.every((n, i) => i === 0 || n === indices[i - 1] + 1);
  const minuscula = (s) => s.toLowerCase();

  if (corridos && nombres.length > 2) {
    return `${nombres[0]} a ${minuscula(nombres.at(-1))}`;
  }
  return `${nombres.slice(0, -1).map(minuscula).join(", ").replace(/^./, (c) => c.toUpperCase())} y ${minuscula(nombres.at(-1))}`;
}

export const diaSchema = (id) => DIAS[orden(id)].schema;
