// =========================================================
// datos.js — fuente única de verdad de la web de Tamara.
//
// Este es EL archivo que se edita. Si un dato de contacto, precio o
// texto aparece dos veces en el código, está mal: va acá y los
// componentes lo leen desde acá.
//
// Datos recopilados de su Instagram (@nutricionista.tamara, jul-2026).
// Lo que todavía no está confirmado con Tamara va en `pendientes` y
// hace fallar `npm run check` — imposible publicar con datos a medias.
// =========================================================

// Campos por confirmar con Tamara antes de publicar.
export const pendientes = [
  "apellido", // nombre completo para el <h1> y el footer
  "horario", // días y horas exactas de atención presencial
  "precioOnline", // no lo publica en Instagram
  "formacion", // universidad / año de titulación
  "experiencia", // años y nº de pacientes para los stats
  "coords", // lat/lng exactas del Edificio O'Higgins para el mapa
  "fotos", // reemplazar los placeholders por fotos reales en alta
];

export const negocio = {
  nombre: "Tamara",
  apellido: null, // PENDIENTE
  titulo: "Nutricionista",
  // La cara de la marca: cercana, sin restricciones. Su propio lenguaje.
  bajada: "Nutrición sin restricciones, hecha para tu vida real",
  descripcion:
    "Te ayudo a mejorar tus hábitos y tu composición corporal con un plan personalizado. Sin dietas imposibles ni prohibiciones: aprender a comer rico y sostenible.",

  // --- Contacto ---
  whatsapp: "56987550592", // solo dígitos, con código país
  mensajeWhatsapp: "Hola Tamara, quiero agendar una consulta nutricional.",
  instagram: "nutricionista.tamara",
  threads: "nutricionista.tamara",

  // --- Ubicación ---
  ubicacion: {
    edificio: "Edificio O'Higgins",
    direccion: "Villanelo con Av. Valparaíso",
    comuna: "Viña del Mar",
    region: "Valparaíso",
    online: true,
    coords: null, // PENDIENTE — el mapa usa la consulta de texto por ahora
    // Consulta para el iframe de Google Maps mientras no haya coords.
    mapsQuery: "Villanelo con Avenida Valparaíso, Viña del Mar",
  },

  // --- Horario (PENDIENTE) ---
  // Cuando Tamara confirme, pasa a un arreglo estructurado como el de Takao.
  // Mientras sea null, la web muestra "Agenda tu hora por WhatsApp".
  horario: null,

  // --- Stats de "Sobre mí" (honestos y verificables) ---
  stats: [
    { num: "+7 mil", etiqueta: "Comunidad en redes" },
    { num: "5", etiqueta: "Componentes en tu evaluación corporal" },
    { num: "1 a 1", etiqueta: "Atención 100% personalizada" },
  ],

  seo: {
    descripcion:
      "Nutricionista en Viña del Mar. Consulta presencial y online: planes personalizados sin restricciones y evaluación con bioimpedancia. Agenda por WhatsApp.",
  },
};

// --- Modalidades de atención (reemplaza la 'sesión única' de Isaac) ---
export const sesiones = {
  presencial: {
    titulo: "Consulta presencial",
    lugar: "Edificio O'Higgins · Viña del Mar",
    precios: [
      { nombre: "Primera consulta", valor: 35000 },
      { nombre: "Control", valor: 25000 },
    ],
    incluye: [
      "Evaluación antropométrica con pliegues (5 componentes)",
      "Medición con bioimpedanciómetro BodyPro (8 electrodos)",
      "Plan nutricional personalizado",
      "Si te incomoda, puedes optar por no pesarte",
    ],
    nota: "Ven con ropa ligera o deportiva y sin cremas ni aceites en el cuerpo ese día.",
  },
  online: {
    titulo: "Consulta online",
    lugar: "Desde donde estés, en todo Chile",
    precios: null, // PENDIENTE: precioOnline
    incluye: [
      "Por videollamada o por cuestionario detallado",
      "Atención desde la comodidad de tu hogar",
      "Plan nutricional personalizado",
      "No incluye evaluación corporal a distancia",
    ],
    nota: "Coordina el valor y la modalidad directamente por WhatsApp.",
  },
};

// --- Sobre Tamara ---
export const sobreMi = {
  intro:
    "Soy Tamara, nutricionista en Viña del Mar. Creo en un espacio seguro y sin juicios, donde armamos juntos un plan que se adapte a ti — no al revés. Nada de dietas que abandonas a las tres semanas.",
  hitos: [
    {
      etiqueta: "Mi enfoque",
      titulo: "Sin restricciones absurdas",
      detalle:
        "Aprender a comer rico y sostenible según tus objetivos, tu rutina y lo que de verdad te gusta. Se puede bajar el % de grasa comiendo más y sin quitar carbohidratos.",
    },
    {
      etiqueta: "Cómo evalúo",
      titulo: "Composición corporal, no solo la pesa",
      detalle:
        "Antropometría con pliegues (5 componentes) y bioimpedanciómetro BodyPro. Y si te incomoda la pesa, medimos tus avances de otra forma.",
    },
    {
      etiqueta: "Dónde atiendo",
      titulo: "Presencial en Viña y online en todo Chile",
      detalle:
        "Consulta presencial en el Edificio O'Higgins (Villanelo con Av. Valparaíso) y atención online por videollamada o cuestionario.",
    },
    {
      etiqueta: "Formación",
      titulo: "Nutricionista titulada", // PENDIENTE: universidad / año
      detalle:
        "Detalle de formación académica y certificaciones por completar con Tamara.",
    },
  ],
};

// --- Testimonios reales (de sus publicaciones de Instagram) ---
export const testimonios = [
  {
    texto:
      "No confiaba mucho en las nutricionistas, hasta que conocí a Tamara. Tuvimos sesión online y me explicó todo como si estuviéramos en persona. Como rico sin restringirme, que es lo mejor.",
    autor: "@genequeen_",
  },
  {
    texto: "Me atendí online y full recomendado.",
    autor: "@tiaterapeuta.to",
  },
  {
    texto:
      "Recomendadísimo, gracias por la atención y el trato tan empático.",
    autor: "@ferrrcita",
  },
];

// --- Preguntas frecuentes (basadas en su info real) ---
export const faq = [
  {
    p: "¿Tengo que pesarme?",
    r: "No es obligatorio. Si te incomoda la pesa, evaluamos tus avances con bioimpedancia (BodyPro) o con medición de pliegues. Trabajamos a tu ritmo.",
  },
  {
    p: "¿Cómo es la atención online?",
    r: "Puede ser por videollamada o por un cuestionario detallado. Armamos tu plan igual que en persona; lo único que no incluye es la evaluación corporal presencial.",
  },
  {
    p: "¿Qué llevo a la primera consulta presencial?",
    r: "Ropa ligera o deportiva (calzas cortas y peto en el caso de mujeres) y, en lo posible, sin cremas ni aceites en el cuerpo ese día, para la medición de pliegues.",
  },
  {
    p: "¿Voy a tener que dejar de comer lo que me gusta?",
    r: "No. Mi enfoque es sin restricciones absurdas: aprender a comer rico y sostenible según tus objetivos, hábitos y rutina.",
  },
  {
    p: "¿Dónde atiendes?",
    r: "Presencial en el Edificio O'Higgins (Villanelo con Av. Valparaíso, Viña del Mar) y online para todo Chile.",
  },
  {
    p: "¿Cómo agendo mi hora?",
    r: "Escríbeme por WhatsApp y coordinamos tu hora al tiro.",
  },
];

// --- Helpers (uno solo, reutilizado por todos los componentes) ---
const soloDigitos = String(negocio.whatsapp).replace(/\D/g, "");

/** Arma el link de WhatsApp con un mensaje opcional pre-llenado. */
export function wa(mensaje = negocio.mensajeWhatsapp) {
  return `https://wa.me/${soloDigitos}?text=${encodeURIComponent(mensaje)}`;
}

/** Formatea un entero CLP: 35000 → "$35.000". */
export function clp(valor) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(valor);
}

/** Nombre completo para títulos: "Tamara" o "Tamara Apellido" si ya está. */
export const nombreCompleto = negocio.apellido
  ? `${negocio.nombre} ${negocio.apellido}`
  : negocio.nombre;
