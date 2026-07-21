// =========================================================
// TAKAO SUSHI BAR — fuente única de verdad del negocio.
//
// Este es EL archivo que se edita para cada cliente nuevo.
// Nada de datos de contacto sueltos en los componentes:
// si un dato aparece dos veces en el código, está mal.
// =========================================================

// Campos por confirmar con el dueño.
// `npm run check` falla mientras esta lista no esté vacía, así que
// es imposible publicar el sitio con datos de mentira.
export const pendientes = [
  "direccion",
  "comuna",
  "telefono",
  "whatsapp",
  "horario",
  "coords",
  "sitio",
];

export const negocio = {
  nombre: "Takao Sushi Bar",
  bajada: "Fusión japonesa en Viña del Mar",
  // Ojo con esta línea: es la cara de la marca. Nombrar chorrillanas acá
  // arruina la estética de sushi bar. Van en la carta, que es donde el que
  // las busca las encuentra, no en el hero.
  descripcion:
    "Rolls, gohan, ceviches y coctelería de autor. Cocina y barra en el mismo lugar.",

  // Diferenciadores que salieron de su propio Instagram y que hoy no
  // están en ninguna web de la competencia. Cada uno es una búsqueda.
  atributos: [
    { icono: "🐾", texto: "Pet friendly" },
    { icono: "💳", texto: "Aceptamos JUNAEB" },
    { icono: "🍽️", texto: "Almuerzos" },
    { icono: "🍸", texto: "Barra completa" },
  ],

  // --- Ubicación (PENDIENTE: confirmar con el dueño) ---
  direccion: "PENDIENTE",
  comuna: "Viña del Mar",
  region: "Valparaíso",
  pais: "CL",
  coords: { lat: 0, lng: 0 }, // PENDIENTE: sacar de Google Maps

  // --- Contacto (PENDIENTE) ---
  telefono: "PENDIENTE",
  whatsapp: "PENDIENTE", // solo dígitos, con código país. Ej: 56912345678
  mensajeWhatsapp: "Hola! Quiero hacer un pedido:",
  instagram: "takao.sushii",

  // --- Dominio final del sitio (PENDIENTE: lo compra el cliente) ---
  sitio: "https://takaosushibar.cl",

  // --- Horario (PENDIENTE: confirmar) ---
  // Estructurado, NO texto: de acá salen el horario que se muestra
  // y el openingHoursSpecification del Schema.org. Un solo dato, tres usos.
  horario: [
    { dias: ["Mo", "Tu", "We", "Th"], abre: "12:30", cierra: "23:00" },
    { dias: ["Fr", "Sa"], abre: "12:30", cierra: "00:30" },
    { dias: ["Su"], abre: "12:30", cierra: "22:30" },
  ],

  // --- Cómo pedir ---
  // El WhatsApp es el canal principal: sin comisión para el local.
  // Las apps van como respaldo. Si el dueño no las quiere, se dejan en "".
  canales: {
    ubereats:
      "https://www.ubereats.com/cl/store/takao-sushi/dz-Y25VmVv-JyMF6C5P3yg",
    pedidosya: "",
  },

  // Toda la carta se puede pagar con JUNAEB. Es un diferenciador real
  // frente a la competencia y nadie lo pone en su web.
  junaeb: true,

  seo: {
    descripcion:
      "Sushi bar pet friendly en Viña del Mar: rolls, gohan, sushi burgers, ceviches y coctelería. Aceptamos JUNAEB. Pide por WhatsApp.",
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
