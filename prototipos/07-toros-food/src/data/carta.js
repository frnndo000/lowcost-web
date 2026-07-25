// =========================================================
// TOROS FOOD — carta completa.
// Datos confirmados por el brief del cliente (julio 2026).
// Precios de la carta directa, NO los de las apps de delivery
// (esos vienen inflados por comisión).
//
// Números crudos, sin "$": el formato lo pone clp().
//
// Una sola cocina (no hay barra/tragos), así que las categorías no
// llevan `grupo`: la sección Carta las muestra todas en orden.
// =========================================================

/** Formatea 9990 → "$9.990". Un solo formateador para todo el sitio. */
export const clp = (n) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(n);

// tipo: "simple" → lista de platos con precio. Toros Food usa solo este.
export const categorias = [
  {
    id: "completos",
    nombre: "Completos",
    tipo: "simple",
    platos: [
      {
        nombre: "Completo Italiano Chico",
        precio: 3200,
        descripcion: "Pan chico, vienesa, tomate, palta, mayonesa casera",
      },
      {
        nombre: "Completo Italiano Grande",
        precio: 3890,
        descripcion: "Pan grande, vienesa, tomate, palta, mayonesa casera",
      },
      {
        nombre: "Completo Completo",
        precio: 3990,
        descripcion:
          "Pan grande, vienesa, tomate, palta, mayonesa casera y chucrut",
      },
      {
        nombre: "Panchito",
        precio: 2000,
        descripcion: "Pan grande, vienesa",
      },
      {
        nombre: "Completo Vegetariano",
        precio: 4490,
        veggie: true,
        descripcion:
          "Pan grande, tomate, palta, mayonesa casera, chucrut, poroto verde",
      },
      {
        nombre: "Papapleto Italiano",
        precio: 4490,
        descripcion:
          "Pan grande, tomate, palta, mayonesa casera, papas fritas",
      },
      {
        nombre: "As Italiano",
        precio: 6490,
        descripcion:
          "Pan grande, carne de vacuno, tomate, palta, mayonesa casera",
      },
    ],
  },

  {
    id: "sandwiches",
    nombre: "Sandwiches",
    tipo: "simple",
    platos: [
      { nombre: "Ave Sola", precio: 4990, descripcion: "Pan 16 cm, pollo" },
      {
        nombre: "Ave Mayo",
        precio: 5990,
        descripcion: "Pan 16 cm, pollo, mayonesa casera",
      },
      {
        nombre: "Ave Palta",
        precio: 5990,
        descripcion: "Pan 16 cm, pollo, palta",
      },
      {
        nombre: "Ave Italiana",
        precio: 6490,
        descripcion: "Pan 16 cm, pollo, tomate, palta, mayonesa casera",
      },
      {
        nombre: "Ave Chacarera",
        precio: 6490,
        descripcion:
          "Pan 16 cm, ave, tomate, mayonesa casera y porotos verdes",
      },
      {
        nombre: "Barros Luco",
        precio: 7490,
        descripcion:
          "Pan 16 cm, carne de vacuno, queso fundido, mayonesa casera",
      },
      {
        nombre: "Lomo Solo",
        precio: 4990,
        descripcion: "Pan, carne de cerdo",
      },
      {
        nombre: "Lomo Queso",
        precio: 6990,
        descripcion: "Pan 16 cm, carne de cerdo, queso y mayonesa casera",
      },
      {
        nombre: "Lomo Italiano",
        precio: 6990,
        descripcion:
          "Pan 16 cm, carne de cerdo, tomate, palta, mayonesa casera (no incluye bebidas ni papas fritas)",
      },
      {
        nombre: "Lomo Chacarero",
        precio: 6990,
        descripcion:
          "Pan 16 cm, carne de cerdo, poroto verde, ají verde, mayonesa casera",
      },
      {
        nombre: "Lomo Toros Premium",
        precio: 11990,
        descripcion:
          "Pan 16 cm, doble carne de cerdo, doble queso fundido, tomate, palta, mayonesa casera",
      },
      {
        nombre: "Churrasco Solo",
        precio: 5490,
        descripcion: "Pan 16 cm, carne de vacuno",
      },
      {
        nombre: "Churrasco Italiano",
        precio: 7490,
        descripcion:
          "Pan 16 cm, carne de vacuno, tomate, palta y mayonesa casera",
      },
      {
        nombre: "Churrasco Chacarero",
        precio: 7490,
        descripcion:
          "Pan 16 cm, carne de vacuno, poroto verde, ají verde, mayonesa casera",
      },
      {
        nombre: "Toro's Premium Italiano",
        precio: 12990,
        descripcion:
          "Pan 16 cm, doble carne de vacuno, doble queso fundido, tomate, palta y mayonesa casera",
      },
      {
        nombre: "Super Toros",
        precio: 14990,
        descripcion:
          "Pan 30 cm, carne de vacuno, pollo, chorizo, papas hilo, queso fundido, jamón, tocineta, vegetales y salsas",
      },
    ],
  },

  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    tipo: "simple",
    platos: [
      {
        nombre: "Hamburguesa Sencilla",
        precio: 7990,
        descripcion:
          "Carne de hamburguesa, jamón, queso cheddar, papas al hilo, vegetales y salsas",
      },
      {
        nombre: "Hamburguesa Cheese",
        precio: 7990,
        descripcion:
          "Carne de hamburguesa, queso cheddar, tocino, papas hilo y salsas",
      },
      {
        nombre: "Hamburguesa Italiana",
        precio: 7990,
        descripcion:
          "Carne de hamburguesa, tomate, palta y mayonesa casera",
      },
      {
        nombre: "Hamburguesa Americana",
        precio: 9990,
        descripcion:
          "Carne de hamburguesa, tocineta, jamón, queso cheddar, papas hilo, vegetales, salsas y pepinillos",
      },
      {
        nombre: "Hamburguesa Granjera",
        precio: 9990,
        descripcion:
          "Carne de hamburguesa, tocineta, choclo, jamón, queso cheddar, papas hilo, vegetales y salsas",
      },
      {
        nombre: "Hamburguesa Mixta",
        precio: 11990,
        descripcion:
          "Carne de hamburguesa, pollo, tocineta, jamón, queso cheddar, papas hilo, vegetales y salsas",
      },
      {
        nombre: "Hamburguesa Toros Food",
        precio: 13990,
        descripcion:
          "Carne de hamburguesa, pollo, chuleta ahumada, tocineta, jamón, doble queso cheddar, queso de mano, papas hilo y salsas",
      },
    ],
  },

  {
    id: "pepitos",
    nombre: "Pepitos venezolanos",
    tipo: "simple",
    platos: [
      {
        nombre: "Pepito Sencillo",
        precio: 10990,
        descripcion:
          "Pan 30 cm, carne de vacuno o pollo, papas hilo, jamón, queso fundido, vegetales y salsas",
      },
      {
        nombre: "Pepito Mixto",
        precio: 12990,
        descripcion:
          "Pan normal, carne de vacuno, pollo, papas hilo, jamón, queso fundido, tocineta, vegetales, salsa",
      },
      {
        nombre: "Pepito Gratinado",
        precio: 13990,
        descripcion:
          "Pan 30 cm, carne de vacuno, pollo, tocineta, choclo, queso fundido, jamón y salsas",
      },
      {
        nombre: "Pepito Toros Food",
        precio: 16990,
        descripcion:
          "Pan grande, carne, pollo, chuleta ahumada, papas hilo, jamón, queso fundido, tocineta, vegetales, salsas (acompañado de papas)",
      },
    ],
  },

  {
    id: "perros",
    nombre: "Perros calientes",
    tipo: "simple",
    platos: [
      {
        nombre: "Perro Sencillo",
        precio: 3000,
        descripcion:
          "Pan normal, salchicha, papas hilo, cebolla, repollo, queso llanero, salsas",
      },
      {
        nombre: "Perro Cheese",
        precio: 4690,
        descripcion:
          "Pan normal, salchicha, queso cheddar fundido, tocino crocante",
      },
      {
        nombre: "Perro Especial",
        precio: 6490,
        descripcion:
          "Pan normal, carne de vacuno, salchicha, papas hilo, cebolla, repollo, queso llanero, salsas",
      },
      {
        nombre: "Perro Mixto",
        precio: 7990,
        descripcion:
          "Pan normal, carne de vacuno, pollo, salchicha, papas hilo, cebolla, repollo, queso llanero, salsas",
      },
      {
        nombre: "Perro Toro's Food",
        precio: 8990,
        descripcion:
          "Pan normal, salchicha, carne de vacuno, pollo, tocineta, papas hilo, repollo, cebolla, queso llanero y salsas",
      },
    ],
  },

  {
    id: "snacks",
    nombre: "Snacks",
    tipo: "simple",
    platos: [
      { nombre: "Papas fritas individuales 250 gr", precio: 3000 },
      { nombre: "Papas fritas grande 550 gr", precio: 5500 },
      { nombre: "Salchipapa individual 250 gr", precio: 4500 },
      { nombre: "Salchipapa grande 550 gr", precio: 6000 },
      { nombre: "Tequeños 8 unidades", precio: 6990 },
      { nombre: "Tequeños 12 unidades", precio: 9990 },
      { nombre: "Nuggets + papas fritas 6 unidades", precio: 5990 },
      { nombre: "Nuggets + papas fritas 12 unidades", precio: 10990 },
    ],
  },

  {
    id: "postres",
    nombre: "Postres",
    tipo: "simple",
    platos: [
      { nombre: "Torta 3 Leches", precio: 3500 },
      { nombre: "Quesillo (Leche asada)", precio: 3500 },
      { nombre: "Torta Quesillo", precio: 3500 },
      { nombre: "Marquesas", precio: 3500 },
    ],
  },

  {
    id: "bebidas",
    nombre: "Bebidas",
    tipo: "simple",
    platos: [
      { nombre: "Agua", precio: 1600 },
      { nombre: "Café", precio: 1990 },
      { nombre: "Té", precio: 1990 },
      { nombre: "Bebida en lata", precio: 2000 },
      { nombre: "Malta regional sin alcohol", precio: 2200 },
      { nombre: "Frescolita lata", precio: 2600 },
      { nombre: "Lata uva", precio: 2600 },
      { nombre: "Maltín Polar (sin alcohol)", precio: 2600 },
      { nombre: "Red Bull", precio: 2500 },
      { nombre: "Bebida 1,5 litros", precio: 4000 },
      { nombre: "Bebida 2 litros", precio: 4500 },
    ],
  },

  {
    id: "extras",
    nombre: "Extras",
    tipo: "simple",
    nota: "Para agregar a cualquier pedido.",
    platos: [
      { nombre: "Chucrut", precio: 800 },
      { nombre: "Ají verde", precio: 800 },
      { nombre: "Poroto verde", precio: 700 },
      { nombre: "Salsa de ajo", precio: 1200 },
      { nombre: "Mayonesa casera", precio: 1200 },
      { nombre: "Palta", precio: 2000 },
      { nombre: "Queso", precio: 2000 },
      { nombre: "Queso de mano", precio: 2500 },
    ],
  },

  {
    id: "combos",
    nombre: "Combos y para compartir",
    tipo: "simple",
    destacada: true,
    platos: [
      {
        nombre: "Combo Chico Personal",
        precio: 6990,
        descripcion: "2 completos chicos + bebida de lata",
      },
      {
        nombre: "Combo Completo Familiar",
        precio: 16990,
        descripcion: "4 completos grande + bebida de litro 1/2",
      },
      {
        nombre: "Tabla Toros Food Familiar",
        precio: 13990,
        descripcion:
          "Papas fritas, pollo, carne, tocineta, queso de mano y palta en rodajas",
      },
    ],
  },
];

// Lo que se muestra en la portada para dar ganas de entrar: la variedad
// chileno-venezolana en cuatro platos reales de la carta. Los precios y
// nombres tienen que calzar EXACTO con los de arriba, y `npm run check`
// lo verifica plato por plato.
export const destacados = [
  {
    id: "pepito-toros-food",
    titulo: "Pepito Toros Food",
    texto:
      "El venezolano de la casa: carne, pollo, chuleta ahumada, queso fundido y tocineta en pan grande, con papas.",
    precio: 16990,
    donde: "/carta#cat-pepitos",
  },
  {
    id: "completo-italiano",
    titulo: "Completo Italiano Grande",
    texto:
      "El clásico chileno: pan grande, vienesa, tomate, palta y mayonesa casera.",
    precio: 3890,
    donde: "/carta#cat-completos",
  },
  {
    id: "hamburguesa-toros-food",
    titulo: "Hamburguesa Toros Food",
    texto:
      "Carne, pollo, chuleta ahumada, tocineta, doble cheddar y queso de mano. La torre.",
    precio: 13990,
    donde: "/carta#cat-hamburguesas",
  },
  {
    id: "perro-sencillo",
    titulo: "Perro Sencillo",
    texto:
      "El perro de siempre: salchicha, papas hilo, cebolla, repollo, queso llanero y salsas.",
    precio: 3000,
    donde: "/carta#cat-perros",
  },
];
