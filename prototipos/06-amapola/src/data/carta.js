// =========================================================
// AMAPOLA · Pastelería Sureña — carta.
// Precios y descripciones rescatados del menú de Uber Eats (la carta que
// tenían en Instagram apuntaba a un Google Drive caído).
//
// Los precios de porción son por delivery. Las tortas enteras y las
// temáticas fondant van por encargo (precio: null → "Por encargo").
//
// Números crudos, sin "$": el formato lo pone clp().
// =========================================================

/** Formatea 7000 → "$7.000". Un solo formateador para todo el sitio. */
export const clp = (n) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(n);

// tipo: "simple" → lista de productos con precio (o precio null = por encargo).
// Una sola familia de productos (dulce): la carta entera va en /carta.
export const categorias = [
  {
    id: "tortas",
    nombre: "Tortas en porción",
    grupo: "dulce",
    tipo: "simple",
    nota: "Cada torta también se pide entera, por encargo.",
    platos: [
      {
        nombre: "Torta Mixta",
        precio: 7000,
        destacada: true,
        descripcion:
          "Bizcocho de vainilla, manjar, frambuesas, bizcocho de merengue, hoja y crema batida. La favorita de la casa.",
      },
      {
        nombre: "Torta Amor",
        precio: 7000,
        descripcion:
          "Hoja, crema pastelera, crema batida, manjar y mermelada de frambuesa.",
      },
      {
        nombre: "Torta Puerto Varas",
        precio: 7000,
        descripcion: "Milhojas, manjar y toques de merengue italiano.",
      },
      {
        nombre: "Torta de Tres Leches",
        precio: 7000,
        descripcion:
          "Bizcocho remojado en tres leches, relleno de crema pastelera y manjar, cubierto en merengue italiano.",
      },
      {
        nombre: "Torta de Chocolate",
        precio: 7000,
        descripcion:
          "Bizcocho denso de chocolate, relleno de manjar, mermelada de frambuesa y ganache.",
      },
      {
        nombre: "Torta de Amapola",
        precio: 7000,
        descripcion:
          "Bizcocho de amapola relleno con mermelada de frambuesa y crema batida de amapola. La de la casa.",
      },
      {
        nombre: "Torta de Manjar Nuez",
        precio: 7000,
        descripcion:
          "Bizcocho de vainilla relleno de manjar suavizado y nueces en todas sus capas.",
      },
      {
        nombre: "Torta de la Abuela",
        precio: 7000,
        descripcion: "Bizcocho de vainilla relleno de manjar, crema batida y duraznos.",
      },
      {
        nombre: "Torta de Trufa",
        precio: 7000,
        descripcion: "Bizcocho de chocolate, relleno y cubierto con crema de trufa.",
      },
      {
        nombre: "Torta Cuatro Leches",
        precio: 7000,
        descripcion:
          "Bizcocho remojado en tres leches, relleno de manjar y pastelera, cubierto de merengue italiano.",
      },
      {
        nombre: "Torta del Lago",
        precio: 7000,
        descripcion: "Milhojas, manjar, frambuesas naturales y crema batida (chantillí).",
      },
      {
        nombre: "Torta Manjarate",
        precio: 7000,
        descripcion: "Bizcocho de chocolate, manjar suavizado y ganache.",
      },
      {
        nombre: "Torta Selva Negra",
        precio: 7000,
        descripcion: "Bizcocho de chocolate, crema batida y mermelada de guinda.",
      },
      {
        nombre: "Torta Brownie",
        precio: 7000,
        descripcion: "Brownie relleno de manjar, cubierto de merengue italiano.",
      },
    ],
  },

  {
    id: "kuchen",
    nombre: "Kuchen sureños",
    grupo: "dulce",
    tipo: "simple",
    platos: [
      {
        nombre: "Kuchen de mora y frambuesa",
        precio: 5600,
        destacada: true,
        descripcion: "Base de masa y relleno cremoso de mora y frambuesa.",
      },
      {
        nombre: "Streusel de arándano y frambuesa",
        precio: 5600,
        descripcion: "Kuchen sureño con miga crocante, arándano y frambuesa.",
      },
    ],
  },

  {
    id: "postres",
    nombre: "Otros postres",
    grupo: "dulce",
    tipo: "simple",
    platos: [
      {
        nombre: "Pie de limón",
        precio: 5600,
        descripcion:
          "Relleno de crema de limón y cubierto de merengue italiano tostado.",
      },
    ],
  },

  {
    id: "tes",
    nombre: "Tés de hoja",
    grupo: "dulce",
    tipo: "simple",
    nota: "Incluye vaso reutilizable.",
    platos: [
      { nombre: "Té Cuida", precio: 4000 },
      { nombre: "Té Energiza", precio: 4000 },
      { nombre: "Té Relaja", precio: 4000 },
      { nombre: "Té Alegra", precio: 4000 },
    ],
  },

  {
    id: "encargo",
    nombre: "Tortas enteras y personalizadas",
    grupo: "dulce",
    tipo: "simple",
    nota: "Se cotizan por WhatsApp. Encarga con anticipación.",
    platos: [
      {
        nombre: "Torta entera (cualquier sabor de la carta)",
        precio: null, // por encargo
        descripcion: "Elige tu sabor favorito en el tamaño que necesites.",
      },
      {
        nombre: "Torta temática en fondant",
        precio: null,
        descripcion:
          "Diseños personalizados para cumpleaños y celebraciones, en alianza con @blooom.cakes.",
      },
    ],
  },
];

// Lo que se muestra en la portada. Productos reales de la carta; son los
// únicos con foto. Los precios calzan con los de arriba.
export const destacados = [
  {
    id: "torta-mixta",
    titulo: "Torta Mixta",
    texto: "La favorita: vainilla, manjar, frambuesas, merengue, hoja y crema.",
    precio: 7000,
    donde: "/carta#cat-tortas",
  },
  {
    id: "torta-amapola",
    titulo: "Torta de Amapola",
    texto: "La de la casa: bizcocho de amapola, frambuesa y crema batida.",
    precio: 7000,
    donde: "/carta#cat-tortas",
  },
  {
    id: "kuchen-mora",
    titulo: "Kuchen de mora y frambuesa",
    texto: "Kuchen sureño con base de masa y relleno cremoso.",
    precio: 5600,
    donde: "/carta#cat-kuchen",
  },
];
