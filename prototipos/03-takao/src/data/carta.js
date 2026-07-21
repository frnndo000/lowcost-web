// =========================================================
// TAKAO SUSHI BAR — carta completa.
// Transcrita de la carta oficial en PDF (junio 2026).
// Precios de la carta directa, NO los de las apps de delivery
// (esos vienen inflados por comisión).
//
// Números crudos, sin "$": el formato lo pone clp().
// =========================================================

/** Formatea 9990 → "$9.990". Un solo formateador para todo el sitio. */
export const clp = (n) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(n);

// Los toppings aparecen en Fit Rolls y en Arma tu Roll. Viven una sola vez.
export const toppings = [
  { nombre: "Unagui mustard", precio: 700 },
  { nombre: "Salsa spicy", precio: 700 },
  { nombre: "Salsa acevichada", precio: 700 },
  { nombre: "Salsa ciboulette", precio: 700 },
  { nombre: "Mango", precio: 700 },
  { nombre: "Reineta acevichada", precio: 3990 },
  { nombre: "Salmón acevichado", precio: 4990 },
];

// tipo: "simple"       → lista de platos con precio
//       "configurable" → precio base + grupos de opciones a elegir
//       "subgrupos"    → lista de listas (ej: Destilados → Pisco, Gin, Vodka…)
// grupo: "cocina" (identidad roja) | "bar" (identidad azul)
export const categorias = [
  // ---------------------------------------------------------------- COCINA
  {
    id: "entradas",
    nombre: "Entradas",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      { nombre: "Gyosas", precio: 6990, descripcion: "6 unidades" },
      { nombre: "Arrollados primavera", precio: 5990, descripcion: "6 unidades" },
      {
        nombre: "Empanadas oriental mechada queso",
        precio: 6990,
        descripcion: "4 unidades",
      },
      {
        nombre: "Empanadas oriental camarón queso",
        precio: 6990,
        descripcion: "4 unidades",
      },
      {
        nombre: "Okinawa de salmón",
        precio: 7990,
        picante: true,
        descripcion:
          "6 unidades · Sriracha, cebollín, arroz, lluvia tempura, envuelto en salmón. Topping pollo furay, queso crema y unagui mustard",
      },
      {
        nombre: "Okinawa de atún",
        precio: 9990,
        picante: true,
        descripcion:
          "6 unidades · Gratinado opcional. Sriracha, cebollín, arroz, lluvia tempura, envuelto en atún. Topping pollo furay, queso crema y unagui mustard",
      },
      { nombre: "Sashimi de salmón", precio: 7990, descripcion: "6 unidades" },
      {
        nombre: "Bastones Takao",
        precio: 9990,
        descripcion:
          "4 unidades · Queso crema, naranja, envuelto en salmón panko. Topping unagui mustard",
      },
      { nombre: "Camarón furay", precio: 6990, descripcion: "6 unidades" },
      {
        nombre: "Sake balls",
        precio: 5990,
        descripcion:
          "4 unidades · Queso crema, naranja, envuelto en salmón panko. Topping unagui mustard",
      },
      { nombre: "Nigiri salmón", precio: 6990, descripcion: "6 unidades" },
      { nombre: "Tori balls", precio: 7990, descripcion: "10 unidades" },
      { nombre: "Tequeños", precio: 3990, descripcion: "4 unidades" },
      { nombre: "Sopaipillas", precio: 1200, descripcion: "3 unidades" },
    ],
  },

  {
    id: "gohan",
    nombre: "Gohan",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Gohan pollo furay",
        precio: 8990,
        descripcion: "Pollo furay, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan teriyaki",
        precio: 8990,
        descripcion: "Pollo teriyaki, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan camarón",
        precio: 8990,
        descripcion: "Camarón furay, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan salmón",
        precio: 9990,
        descripcion: "Salmón fresco, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan salmón acevichado",
        precio: 10990,
        descripcion: "Salmón acevichado, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan reineta acevichada",
        precio: 9990,
        descripcion: "Reineta acevichada, queso crema, cebollín, palta",
      },
      {
        nombre: "Gohan veggie",
        precio: 7990,
        veggie: true,
        descripcion: "Palmito, champiñón, cebollín, palta",
      },
    ],
  },

  {
    id: "takao-rolls",
    nombre: "Takao Rolls",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Salmón Nikkey",
        precio: 9990,
        descripcion:
          "Envuelto en nori panko. Salmón, queso crema, palta. Topping salmón acevichado",
      },
      {
        nombre: "Camarón Nikkey",
        precio: 9990,
        descripcion:
          "Envuelto en nori panko. Camarón furay, queso crema, palta. Topping salmón acevichado",
      },
      {
        nombre: "Fuji Roll",
        precio: 9990,
        descripcion:
          "Envuelto en nori tempura. Salmón, queso crema, cebollín. Topping unagui mustard",
      },
      {
        nombre: "Dragon Especial",
        precio: 9990,
        picante: true,
        descripcion:
          "Envuelto en palta. Camarón furay, queso crema, cebollín, masago con salsa spicy",
      },
      {
        nombre: "Takao Rolls",
        precio: 9990,
        descripcion:
          "Envuelto en sésamo mixto. Camarón tempura, queso crema, cebollín. Topping camarón tempura con salsa unagui mustard",
      },
      {
        nombre: "Sake Midori",
        precio: 9990,
        descripcion:
          "Envuelto en palta. Camarón furay, queso crema, pepino. Topping salmón acevichado",
      },
    ],
  },

  {
    id: "recomendaciones",
    nombre: "Recomendaciones del chef",
    grupo: "cocina",
    tipo: "simple",
    destacada: true,
    platos: [
      {
        nombre: "Maguro Roll",
        precio: 9990,
        descripcion: "Envuelto en atún. Camarón cocido, palta, cebollín",
      },
      {
        nombre: "Atún Nikkey",
        precio: 9990,
        descripcion:
          "Envuelto en nori panko. Atún, queso crema, palta. Topping salmón acevichado",
      },
      {
        nombre: "Bacon Cheese Roll",
        precio: 9990,
        descripcion:
          "Envuelto en panko. Hamburguesa, queso americano, tocino. Topping salsa rosa",
      },
      {
        nombre: "Mango Crunch",
        precio: 9990,
        descripcion:
          "Envuelto en panko. Salmón furay, queso crema, cebollín. Topping mango",
      },
      {
        nombre: "Tori Green Roll",
        precio: 9990,
        descripcion:
          "Envuelto en sésamo. Pollo teriyaki, palta, pepino. Topping unagui mustard",
      },
      {
        nombre: "Pacific Roll",
        precio: 9990,
        descripcion:
          "Envuelto en salmón y palta. Salmón, masago, camarón cocido. Salsa ponzu aparte",
      },
      {
        nombre: "Gunkan acevichado",
        precio: 6990,
        descripcion:
          "4 unidades · Base de arroz, borde nori. Topping salmón acevichado",
      },
      {
        nombre: "Sake Temaki",
        precio: 6990,
        descripcion: "Cono de arroz y nori. Salmón en cubos, pepino, queso crema",
      },
      {
        nombre: "Akuma Roll",
        precio: 9990,
        picante: true,
        descripcion:
          "Envuelto en salmón. Pollo furay, palta. Topping salsa spicy",
      },
      {
        nombre: "Yakisoba de pollo",
        precio: 8990,
        descripcion:
          "Fideos de trigo salteados al wok, verduras, salsa yakisoba",
      },
      {
        nombre: "Yakisoba camarón y pollo",
        precio: 10990,
        descripcion:
          "Fideos de trigo salteados al wok, verduras, salsa yakisoba",
      },
    ],
  },

  {
    id: "fit-rolls",
    nombre: "Fit Rolls",
    grupo: "cocina",
    tipo: "simple",
    conToppings: true,
    platos: [
      {
        nombre: "Abokado Fit",
        precio: 11990,
        descripcion:
          "Envuelto en palta. Pollo teriyaki, camarón cocido, queso crema, ciboulette",
      },
      {
        nombre: "Kani Fit",
        precio: 11990,
        descripcion:
          "Envuelto en queso crema. Kanikama, lechuga, camarón salteado, palta, ciboulette",
      },
      {
        nombre: "Sake Fit",
        precio: 11990,
        descripcion:
          "Envuelto en salmón tempurizado. Atún, camarón salteado, queso crema, cebollín",
      },
      {
        nombre: "Takao Fit",
        precio: 11990,
        descripcion:
          "Gratinado opcional. Envuelto en salmón. Salmón, camarón salteado, queso crema, cebollín",
      },
      {
        nombre: "Fit Premium",
        precio: 12990,
        descripcion:
          "Envuelto en pepino. Salmón, camarón cocido, atún, pepino, palta",
      },
    ],
  },

  {
    id: "arma-tu-roll",
    nombre: "Arma tu roll",
    grupo: "cocina",
    tipo: "configurable",
    precio: 8990,
    descripcion: "Elige envoltura, proteína y dos acompañantes.",
    conToppings: true,
    opciones: [
      {
        titulo: "Envoltura (elige 1)",
        items: [
          "Panko",
          "Amapola",
          "Sésamo",
          "Ciboulette",
          "Masago",
          "Salmón",
          "Salmón y palta",
          "Palta",
          "Palta y queso crema",
          "Queso crema",
          "Queso crema y merkén",
          "Queso crema y frutos secos",
          "Pepino",
        ],
      },
      {
        titulo: "Proteína (elige 1)",
        items: [
          "Salmón",
          "Salmón furay",
          "Salmón tempura",
          "Camarón",
          "Camarón furay",
          "Pollo furay",
          "Pollo teriyaki",
          "Atún",
          "Kanikama",
        ],
      },
      {
        titulo: "Acompañantes (elige 2)",
        items: [
          "Queso crema",
          "Palta",
          "Cebollín",
          "Ciboulette",
          "Palmito",
          "Champiñón",
          "Pimentón",
          "Pimentón tempura",
          "Pimentón salteado",
          "Choclo cocktail",
          "Frutos secos",
          "Lechuga",
          "Masago",
          "Pepino",
        ],
      },
    ],
  },

  {
    id: "handroll",
    nombre: "Handroll",
    grupo: "cocina",
    tipo: "configurable",
    precio: 3990,
    descripcion: "Elige envoltura, proteína y un acompañante.",
    nota: "Agregado adicional: $1.500",
    opciones: [
      { titulo: "Envoltura (elige 1)", items: ["Panko", "Nori"] },
      {
        titulo: "Proteína (elige 1)",
        items: [
          "Camarón furay",
          "Pollo furay",
          "Pollo teriyaki",
          "Kanikama",
        ],
      },
      {
        titulo: "Acompañante (elige 1)",
        items: [
          "Queso crema",
          "Palta",
          "Cebollín",
          "Ciboulette",
          "Palmito",
          "Champiñón",
          "Pimentón",
          "Pimentón tempura",
          "Pimentón salteado",
          "Choclo cocktail",
          "Frutos secos",
          "Lechuga",
        ],
      },
    ],
  },

  {
    id: "tablas",
    nombre: "Tablas",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Tabla Hot · 30 piezas",
        precio: 22990,
        descripcion:
          "10 panko pollo furay · 10 panko pollo teriyaki · 5 gyosas mixtas · 5 arrollados primavera",
      },
      {
        nombre: "Tabla Norikura · 30 piezas",
        precio: 25990,
        descripcion:
          "10 sésamo kanikama · 10 queso crema camarón · 10 panko pollo furay",
      },
      {
        nombre: "Tabla Hokata · 50 piezas",
        precio: 40990,
        descripcion:
          "10 sésamo kanikama · 10 queso crema camarón · 10 panko pollo furay · 10 panko salmón · 5 gyosas · 5 arrollados primavera",
      },
      {
        nombre: "Tabla Nikkey · 35 piezas",
        precio: 42990,
        descripcion:
          "10 sésamo camarón tempura · 10 nori panko camarón · 10 nori panko salmón · 5 arrollados primavera. Con toppings acevichados",
      },
      {
        nombre: "Tabla Fuji · 80 piezas",
        precio: 55990,
        descripcion:
          "70 piezas en 7 variedades · 5 gyosas mixtas · 5 arrollados primavera",
      },
    ],
  },

  {
    id: "ceviches",
    nombre: "Ceviches",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      { nombre: "Ceviche de reineta", precio: 12990 },
      { nombre: "Ceviche de salmón", precio: 13990 },
      { nombre: "Ceviche de atún", precio: 13990 },
      { nombre: "Ceviche de camarón", precio: 13990 },
      { nombre: "Ceviche salmón y camarón", precio: 14990 },
      { nombre: "Ceviche volcánico de salmón", precio: 14990 },
      {
        nombre: "Ceviche salmón, camarón y atún",
        precio: 15990,
        descripcion: "200 gr de proteína",
      },
      {
        nombre: "Ceviche volcánico salmón y camarón",
        precio: 16990,
      },
    ],
  },

  {
    id: "sushi-burger",
    nombre: "Sushi Burger",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Sushi burger pollo teriyaki",
        precio: 7990,
        descripcion: "Pollo teriyaki, queso crema, cebollín, palta",
      },
      {
        nombre: "Sushi burger pollo furay",
        precio: 7990,
        descripcion: "Pollo furay, queso crema, cebollín, palta",
      },
      {
        nombre: "Sushi burger camarón furay",
        precio: 8990,
        descripcion: "Camarón, queso crema, cebollín, palta",
      },
      {
        nombre: "Sushi burger salmón",
        precio: 9990,
        descripcion: "Salmón, queso crema, cebollín, palta",
      },
      {
        nombre: "Sushi burger Takao",
        precio: 10990,
        descripcion: "Salmón acevichado, palta, lechuga",
      },
    ],
  },

  {
    id: "burgers",
    nombre: "Takao Burger",
    grupo: "cocina",
    tipo: "simple",
    nota: "Todas incluyen papas fritas naturales.",
    platos: [
      {
        nombre: "Hamburguesa clásica",
        precio: 6990,
        descripcion:
          "Carne 100% vacuno, queso americano, mayonesa, ketchup, pan de papa",
      },
      {
        nombre: "Hamburguesa italiana",
        precio: 7990,
        descripcion:
          "Carne 100% vacuno, queso americano, lechuga, tomate, palta, mayonesa, ketchup, pan de papa",
      },
      {
        nombre: "Hamburguesa Takao",
        precio: 8990,
        descripcion:
          "Carne 100% vacuno, queso americano, tocino, lechuga, tomate, pepinillo, cebolla, mayonesa, ketchup, pan de papa",
      },
    ],
  },

  {
    id: "papas",
    nombre: "Papas Takao",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Papas fritas · para 2",
        precio: 7990,
        descripcion: "Sal y merkén",
      },
      {
        nombre: "Papas fritas · para 4",
        precio: 13990,
        descripcion: "Sal y merkén",
      },
      {
        nombre: "Papas gratinadas · para 2",
        precio: 14990,
        descripcion:
          "Pollo salteado, crema de leche, champiñones, queso mozzarella",
      },
      {
        nombre: "Papas gratinadas · para 4",
        precio: 29990,
        descripcion:
          "Pollo salteado, crema de leche, champiñones, queso mozzarella",
      },
      {
        nombre: "Papas con camarón · para 2",
        precio: 16990,
        descripcion: "Camarones salteados, lactonesa de ciboulette",
      },
      {
        nombre: "Papas con camarón · para 4",
        precio: 32990,
        descripcion: "Camarones salteados, lactonesa de ciboulette",
      },
      {
        nombre: "Chorrillana · para 2",
        precio: 25990,
        descripcion: "Lomo, pollo, chorizo, 2 huevos, cebolla caramelizada",
      },
      {
        nombre: "Chorrillana · para 4",
        precio: 37990,
        descripcion: "Lomo, pollo, chorizo, 4 huevos, cebolla caramelizada",
      },
    ],
  },

  {
    id: "junaeb",
    nombre: "Menú JUNAEB",
    grupo: "cocina",
    tipo: "simple",
    destacada: true,
    nota: "Toda la carta se puede pagar con JUNAEB. Estas son las promociones fijas.",
    platos: [
      {
        nombre: "Hamburguesa clásica + jugo de fruta",
        precio: 9990,
        descripcion: "Hamburguesa, queso, mayonesa, ketchup",
      },
      {
        nombre: "Gohan + jugo de fruta",
        precio: 9990,
        descripcion:
          "Proteína a elección (pollo teriyaki, pollo furay o camarón furay), palta, queso crema, cebollín",
      },
      {
        nombre: "Sushi burger + jugo de fruta",
        precio: 9990,
        descripcion:
          "Proteína a elección (pollo teriyaki, pollo furay o camarón furay), palta, queso crema",
      },
      {
        nombre: "Handroll + jugo de fruta",
        precio: 6980,
        descripcion:
          "Proteína a elección (pollo teriyaki, pollo furay o camarón furay), queso crema, palta o cebollín",
      },
    ],
  },

  // ------------------------------------------------------------------- BAR
  {
    id: "bebidas",
    nombre: "Bebidas",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Agua con o sin gas", precio: 1990 },
      { nombre: "Coca-Cola 350 cc", precio: 2990, descripcion: "Normal o Zero" },
      { nombre: "Fanta 350 cc", precio: 2990, descripcion: "Normal o Zero" },
      { nombre: "Sprite 350 cc", precio: 2990, descripcion: "Normal o Zero" },
      { nombre: "Red Bull", precio: 3500 },
      { nombre: "Red Bull Yellow", precio: 3800 },
      { nombre: "Red Bull Red", precio: 3800 },
      {
        nombre: "Jugo natural",
        precio: 3990,
        descripcion: "Maracuyá, frutilla, piña, mango o frambuesa",
      },
      { nombre: "Limonada", precio: 3990 },
      {
        nombre: "Limonada de sabores",
        precio: 4800,
        descripcion: "Menta, menta jengibre, frambuesa, mango o maracuyá",
      },
    ],
  },

  {
    id: "cervezas",
    nombre: "Cervezas",
    grupo: "bar",
    tipo: "simple",
    nota: "Agregado chelada $1.600 · Agregado michelada $1.800",
    platos: [
      { nombre: "Heineken 0° alcohol", precio: 2990 },
      { nombre: "Corona", precio: 3490 },
      { nombre: "Royal", precio: 3490 },
      { nombre: "Heineken", precio: 3490 },
      { nombre: "Torobayo", precio: 3990 },
      { nombre: "Austral Calafate", precio: 3990 },
    ],
  },

  {
    id: "sour",
    nombre: "Sour",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Pisco sour nacional", precio: 6990 },
      { nombre: "Mango sour", precio: 6990 },
      { nombre: "Maracuyá sour", precio: 6990 },
      { nombre: "Whisky sour", precio: 6990 },
      { nombre: "Chardonnay sour", precio: 6990 },
      { nombre: "Pisco sour nacional catedral", precio: 7990 },
      { nombre: "Pisco sour peruano", precio: 7990 },
      { nombre: "Pisco sour nacional catedral de sabores", precio: 8990 },
      { nombre: "Pisco sour peruano catedral", precio: 8990 },
    ],
  },

  {
    id: "mojitos",
    nombre: "Mojitos",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Mojito tradicional", precio: 7990 },
      { nombre: "Mojito Ramazzotti", precio: 7990 },
      { nombre: "Mojito Jack", precio: 7990 },
      { nombre: "Mojito de sabores", precio: 8990 },
      { nombre: "Mojito Malibú", precio: 8990 },
      {
        nombre: "Mojito beer",
        precio: 8990,
        descripcion: "Con cerveza a elección",
      },
      { nombre: "Mojito Jagger", precio: 8990 },
      { nombre: "Mojito Red Bull", precio: 8990 },
      { nombre: "Mojito tradicional 1 L", precio: 11990 },
      { nombre: "Mojito de sabores 1 L", precio: 12990 },
    ],
  },

  {
    id: "cocktails",
    nombre: "Cocktails",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Caipiriña", precio: 6990 },
      { nombre: "Cosmopolitan", precio: 6990 },
      { nombre: "Daiquirí", precio: 6990 },
      { nombre: "John Collins", precio: 6990 },
      { nombre: "Tom Collins", precio: 6990 },
      { nombre: "Piña colada", precio: 6990 },
      { nombre: "Ruso blanco", precio: 6990 },
      { nombre: "Tequila margarita", precio: 6990 },
      { nombre: "Manhattan", precio: 6990 },
      { nombre: "Negroni", precio: 6990 },
      { nombre: "Caipiroska", precio: 6990 },
      { nombre: "Daiquirí de sabores", precio: 7990 },
      { nombre: "Tropical gin", precio: 7990 },
      { nombre: "Sangría", precio: 7990 },
      { nombre: "Moscow mule", precio: 7990 },
    ],
  },

  {
    id: "cocktails-autor",
    nombre: "Cocktails de autor",
    grupo: "bar",
    tipo: "simple",
    destacada: true,
    platos: [
      {
        nombre: "Afrodita",
        precio: 7990,
        descripcion: "Gin Beefeater Pink, frutos rojos",
      },
      {
        nombre: "Takao Blue",
        precio: 7990,
        descripcion: "Ron Malibú, maracuyá, piña, curacao",
      },
      {
        nombre: "Smokin Jack",
        precio: 7990,
        descripcion: "Whisky Fireball, té verde, ají verde",
      },
      {
        nombre: "Tropical Takao",
        precio: 7990,
        descripcion: "Vodka Absolut mango, licor flor de saúco, mango, maracuyá",
      },
      {
        nombre: "La Bichota",
        precio: 7990,
        descripcion: "Vodka berries, frutilla, leche condensada, granadina",
      },
    ],
  },

  {
    id: "spritz",
    nombre: "Spritz",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Late Harvest", precio: 7500 },
      { nombre: "Aperol", precio: 7990 },
      { nombre: "Ramazzotti", precio: 7990 },
      { nombre: "Saint Germain", precio: 7990 },
    ],
  },

  {
    id: "destilados",
    nombre: "Destilados",
    grupo: "bar",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "Pisco",
        platos: [
          { nombre: "Mistral 35°", precio: 5500 },
          { nombre: "Mistral Nobel", precio: 6990 },
          { nombre: "Fundo Los Nichos 35°", precio: 6990 },
        ],
      },
      {
        nombre: "Vodka",
        platos: [
          { nombre: "Absolut", precio: 5990 },
          { nombre: "Stolichnaya", precio: 5990 },
        ],
      },
      {
        nombre: "Gin",
        platos: [
          { nombre: "Tanqueray", precio: 6990 },
          { nombre: "Bombay", precio: 6990 },
          { nombre: "Beefeater", precio: 6990 },
          { nombre: "Beefeater Pink", precio: 6990 },
        ],
      },
      {
        nombre: "Whisky",
        platos: [
          { nombre: "Ballantines", precio: 6990 },
          { nombre: "Johnny Walker Red", precio: 6990 },
          { nombre: "Jack Daniel's N°7", precio: 6990 },
          { nombre: "Johnny Walker Black", precio: 7990 },
          { nombre: "Jack Daniel's Apple", precio: 7990 },
          { nombre: "Jack Daniel's Honey", precio: 7990 },
          { nombre: "Fireball", precio: 7990 },
        ],
      },
      {
        nombre: "Otros",
        platos: [
          { nombre: "Shot de tequila", precio: 3990 },
          { nombre: "Jägermeister", precio: 6990 },
          { nombre: "Ron Habana", precio: 5990 },
        ],
      },
    ],
  },

  {
    id: "botellas",
    nombre: "Botellas",
    grupo: "bar",
    tipo: "simple",
    nota: "Incluyen 4 bebidas a elección (no incluye energéticas).",
    platos: [
      { nombre: "Espumante", precio: 15990 },
      { nombre: "Boolton", precio: 45000 },
      { nombre: "Alto del Carmen 35°", precio: 49990 },
      { nombre: "Mistral 35°", precio: 49990 },
      { nombre: "Red Label", precio: 49990 },
      { nombre: "Alto del Carmen 40°", precio: 59990 },
      { nombre: "Ballantines", precio: 59990 },
      { nombre: "Jack Daniel's", precio: 59990 },
      { nombre: "Bombay", precio: 65000 },
      { nombre: "Tanqueray", precio: 65000 },
      { nombre: "Mistral Nobel", precio: 65000 },
      { nombre: "Stolichnaya", precio: 65000 },
    ],
  },
];

// Promociones por día. Es de lo más buscado y ningún competidor
// lo tiene en su web: la gente pregunta "¿qué promo hay hoy?" por Instagram.
export const promos = {
  cocina: [
    { dia: "Lunes", titulo: "Handroll", oferta: "3 × $12.000" },
    { dia: "Martes", titulo: "Gohan", oferta: "2 × $12.000" },
    { dia: "Miércoles", titulo: "Sushi burger", oferta: "2 × $14.000" },
    {
      dia: "Jueves",
      titulo: "Chorrillana + 2 shop",
      oferta: "$27.990",
    },
    { dia: "Viernes", titulo: "Tabla", oferta: "$16.990" },
  ],
  bar: [
    { dia: "Lunes", titulo: "Sangría", oferta: "2 × 1" },
    { dia: "Martes", titulo: "Pisco sour", oferta: "2 × 1" },
    { dia: "Miércoles", titulo: "Ramazzotti / Aperol", oferta: "2 × 1" },
    {
      dia: "Jueves",
      titulo: "Gin",
      oferta: "2 × 1",
      nota: "Tropical gin 2 × $10.000",
    },
    { dia: "Viernes", titulo: "Mojito", oferta: "2 × 1" },
  ],
};

// Lo que se muestra en la portada para dar ganas de entrar. Cuatro platos
// reales de la carta; los precios tienen que calzar con los de arriba y
// `npm run check` lo verifica.
export const destacados = [
  {
    id: "okinawa-atun",
    titulo: "Okinawa de atún",
    texto: "Envuelto en atún, con lluvia tempura y topping de pollo furay.",
    precio: 9990,
    donde: "/carta#cat-entradas",
  },
  {
    id: "sushi-burger",
    titulo: "Sushi burger de salmón",
    texto: "El pan es arroz. Salmón, queso crema, cebollín y palta.",
    precio: 9990,
    donde: "/carta#cat-sushi-burger",
  },
  {
    id: "dragon-especial",
    titulo: "Dragon Especial",
    texto:
      "Envuelto en palta. Camarón furay, queso crema, cebollín y masago con salsa spicy.",
    precio: 9990,
    donde: "/carta#cat-takao-rolls",
  },
  {
    id: "la-bichota",
    titulo: "La Bichota",
    texto: "Vodka berries, frutilla, leche condensada y granadina.",
    precio: 7990,
    donde: "/bar#cat-cocktails-autor",
  },
];
