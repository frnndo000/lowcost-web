// =========================================================
// PATIO 511 — carta completa.
// Transcrita de la carta oficial en PDF (cartaqr.pdf, 16 páginas).
// El PDF no tiene capa de texto: todo viene vectorizado, así que esto
// se transcribió a ojo página por página. Si un precio se ve raro,
// contrastarlo con la carta antes de tocarlo.
//
// Se corrigieron errores de tipeo evidentes de la carta impresa
// (Henieken→Heineken, Londow→London, Jhonnie→Johnnie, Papero→Pampero,
// Bloody Marie→Bloody Mary). Los nombres propios de la casa se
// respetan tal cual: "Atún Margaritah", "Fichaca", "Little Bitch".
//
// Números crudos, sin "$": el formato lo pone clp().
// =========================================================

/** Formatea 9990 → "$9.990". Un solo formateador para todo el sitio. */
export const clp = (n) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(n);

// tipo: "simple"    → lista de platos con precio
//       "subgrupos" → lista de listas (ej: Combinados → Ron, Gin, Vodka…)
// grupo: "cocina" (va en /carta) | "bar" (va en /bar)
export const categorias = [
  // ---------------------------------------------------------------- COCINA
  {
    id: "tapas-montaditos",
    nombre: "Tapas y montaditos",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Montadito mechada",
        precio: 7900,
        descripcion:
          "Carne mechada en su salsa sobre sopaipilla, terminada en palta, tomate cherry y alioli.",
      },
      {
        nombre: "Montadito queso y la jugosa",
        precio: 7500,
        descripcion:
          "Carne mechada y queso fundido sobre un crujiente pan de ajo.",
      },
      {
        nombre: "Montadito fusión",
        precio: 7900,
        descripcion:
          "Sashimi de salmón marinado en soja, aceite de sésamo y jengibre fresco, sobre cama de palta y queso crema, con toques de cebollín y tostada crujiente.",
      },
      {
        nombre: "Montadito a lo pobre",
        precio: 8400,
        descripcion:
          "Filete de res, cebolla caramelizada y huevo de codorniz frito sobre papa dorada.",
      },
      {
        nombre: "Papas fritas",
        precio: 7500,
        descripcion: "Muchas y servidas con salsas.",
      },
      {
        nombre: "Papas cheddar",
        precio: 7990,
        descripcion: "Con tocino y toques de cebollín fresco.",
      },
      {
        nombre: "Papas cheddar XL",
        precio: 14990,
        descripcion: "La misma, para compartir.",
      },
      {
        nombre: "Tortilla española",
        precio: 8950,
        descripcion:
          "Láminas de papa sazonadas, tocino y cebolla caramelizada.",
      },
    ],
  },

  {
    id: "piqueos-cuates",
    nombre: "Piqueos cuates",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Quesadillas de filete",
        precio: 8800,
        descripcion:
          "Filete, queso cheddar, tocino y cebolla caramelizada. Acompañadas de guacamole.",
      },
      {
        nombre: "Quesadillas de pollo",
        precio: 8400,
        descripcion:
          "Pollo, queso mantecoso, lechuga y salsa BBQ. Acompañadas de guacamole.",
      },
      {
        nombre: "Quesadillas de camarón",
        precio: 8600,
        descripcion:
          "Camarón, cilantro y queso mantecoso fundido. Acompañadas de guacamole.",
      },
      {
        nombre: "Quesadilla mechada",
        precio: 8800,
        descripcion:
          "Carne mechada, queso de cabra, salsa de tomates caramelizados, albahaca y ají verde. Acompañada de guacamole.",
      },
      {
        nombre: "Quesadilla vegetariana",
        precio: 8600,
        veggie: true,
        descripcion:
          "Champiñones, queso mantecoso fundido, pimentones asados, cilantro y cebolla caramelizada. Acompañada de guacamole.",
      },
      {
        nombre: "Wrap de salmón ahumado",
        precio: 8600,
        descripcion:
          "8 piezas · Salmón ahumado, lechuga, cebolla morada, palta, queso crema, alcaparras y salsa de crema ácida.",
      },
    ],
  },

  {
    id: "al-fuego",
    nombre: "Al fuego",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Ebi tempura",
        precio: 7900,
        descripcion:
          "Camarones ecuatorianos en crujiente batido, con toques de salsa unagi.",
      },
      {
        nombre: "Ecuatorianos al ajillo",
        precio: 13500,
        descripcion:
          "Preparados con vino blanco, mantequilla, cilantro fresco y un toque de ajo.",
      },
      {
        nombre: "Fried cubes",
        precio: 11900,
        descripcion: "Cubitos de merluza furay con salsa tártara.",
      },
      {
        nombre: "Atún teriyaki",
        precio: 13500,
        descripcion:
          "Finos cortes de atún sellado a la inglesa, en costra de sésamo tostado y bañado en salsa teriyaki.",
      },
      {
        nombre: "Brochetas de pollo teriyaki",
        precio: 8900,
        descripcion:
          "Trozos de pollo bañados en salsa teriyaki y sésamo tostado, con tostadas y salsa alioli.",
      },
      {
        nombre: "Brochetas de filete",
        precio: 9800,
        descripcion:
          "Tierno y jugoso filete de res, servido en brochetas, con tostadas y salsa brava.",
      },
    ],
  },

  {
    id: "frescos",
    nombre: "Frescos",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Ceviche de atún",
        precio: 13500,
        descripcion:
          "Hecho con leche de tigre, cubitos de palta y quinoa crocante.",
      },
      {
        nombre: "Ceviche mixto",
        precio: 13500,
        descripcion: "Pescado del día y camarones ecuatorianos.",
      },
      {
        nombre: "3 ceviches mellizos",
        precio: 16500,
        descripcion:
          "Misma base de atún preparado con 3 leches distintas: maracuyá, clásica y amarilla.",
      },
      {
        nombre: "Sakanataki",
        precio: 13500,
        descripcion:
          "Cubitos de salmón fresco marinado en salsa de soja, aceite de sésamo y puré de jengibre fresco, con cebollín, cubitos de palta y sésamo tostado.",
      },
      {
        nombre: "Tártaro de filete",
        precio: 13200,
        descripcion:
          "Trozos de filete marinado en jugo de limón fresco, mostaza Dijon, puré de alcaparras, pepinillo, soja, huevo deshidratado, cilantro, sésamo tostado y cebolla morada fresca.",
      },
      {
        nombre: "Tiradito de salmón",
        precio: 15500,
        descripcion: "Estilo peruano, en salsa de ají amarillo.",
      },
      {
        nombre: "Pulpo al olivo",
        precio: 16500,
        descripcion: "Típica receta, deliciosa y fresca.",
      },
      {
        nombre: "Atún tataki",
        precio: 14500,
        picante: true,
        descripcion:
          "Atún sellado cortado en tataki, terminado con chalaquita, salsa acevichada de maracuyá, sriracha y láminas de limón fresco.",
      },
    ],
  },

  {
    id: "premium-sushi",
    nombre: "Premium sushi",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Olivo roll",
        precio: 12550,
        descripcion:
          "Relleno de pulpo, palta y ciboulette, envuelto en palta, bañado en tradicional salsa de olivo y terminado con camote crujiente.",
      },
      {
        nombre: "Steak roll",
        precio: 13750,
        descripcion:
          "Relleno de queso crema, espárragos furay y tomate caramelizado, envuelto en filete de res sellado en aceite de trufa y bañado en wine teriyaki aromatizado con lemongrass.",
      },
      {
        nombre: "Acevichado · 6 cortes",
        precio: 8990,
        descripcion:
          "Salmón, camarón ecuatoriano y palta en futomaki tempura, con topping de ceviche de salmón fresco bañado en salsa unagi.",
      },
      {
        nombre: "Acevichado · 11 cortes",
        precio: 14900,
        descripcion: "El mismo acevichado, tamaño tabla.",
      },
      {
        nombre: "Tuna Thai · 6 cortes",
        precio: 13750,
        descripcion:
          "Futomaki tempura relleno de camarón ecuatoriano y palta, terminado con topping de atún fresco en salsa thai y soja acaramelada, con crocante de arroz.",
      },
    ],
  },

  {
    id: "tempura-furay",
    nombre: "Sushi tempura y furay",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Little Bitch",
        precio: 6900,
        descripcion: "Salmón, queso crema y ají verde. Todo furay.",
      },
      {
        nombre: "M & R",
        precio: 6500,
        descripcion: "Pollo teriyaki, queso crema y cebollín. Todo furay.",
      },
      {
        nombre: "Ceci",
        precio: 6900,
        descripcion:
          "Camarón ecuatoriano, queso crema y ají verde. Todo en crujiente tempura de albahaca.",
      },
      {
        nombre: "Crunchy Almond",
        precio: 8500,
        descripcion:
          "Almendras tostadas y queso crema. Tempurizado y bañado en salsa unagi.",
      },
      {
        nombre: "Del Patio",
        precio: 9300,
        descripcion:
          "Relleno de camarón ecuatoriano y queso crema, envuelto en pollo tempurizado. Bañado en salsa unagi.",
      },
      {
        nombre: "Rolls Roll",
        precio: 11500,
        descripcion:
          "Relleno de camarón ecuatoriano tempura, queso crema y cebollín. Envuelto en salmón, todo tempurizado y bañado en salsa unagi.",
      },
    ],
  },

  {
    id: "envueltos",
    nombre: "Sushi envuelto",
    grupo: "cocina",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "En queso crema",
        platos: [
          {
            nombre: "Mágico",
            precio: 6450,
            descripcion:
              "Salmón tempura, palta y cebollín, envuelto en queso crema y bañado en salsa unagi.",
          },
          {
            nombre: "Arco Sake",
            precio: 6450,
            descripcion:
              "Palta, alcaparras y espárragos furay, envuelto en arcoíris de salmón ahumado y queso crema.",
          },
        ],
      },
      {
        nombre: "En salmón",
        platos: [
          {
            nombre: "Tuna",
            precio: 9300,
            descripcion:
              "Relleno de atún, palta y cebollín. Envuelto en salmón fresco, pincelado con sakana y jengibre fresco rallado.",
          },
          {
            nombre: "Kike",
            precio: 9100,
            descripcion:
              "Relleno de camarón ecuatoriano, queso crema y palta. Envuelto en salmón fresco.",
          },
        ],
      },
      {
        nombre: "En palta",
        platos: [
          {
            nombre: "Nikko",
            precio: 7950,
            descripcion:
              "Camarón ecuatoriano tempura, queso crema y cebollín. Envuelto en palta y bañado en salsa unagi.",
          },
          {
            nombre: "Benja",
            precio: 7950,
            descripcion:
              "Relleno de atún, camarón ecuatoriano, pepino y cebollín.",
          },
          {
            nombre: "Yaketori",
            precio: 7500,
            descripcion: "Relleno de pollo teriyaki y queso crema.",
          },
          {
            nombre: "Domi",
            precio: 7700,
            descripcion: "Relleno de salmón fresco y queso crema.",
          },
        ],
      },
    ],
  },

  {
    id: "sashimi",
    nombre: "Sashimi",
    grupo: "cocina",
    tipo: "simple",
    nota: "Salmón o atún, a elección.",
    platos: [
      { nombre: "3 cortes", precio: 4500 },
      { nombre: "9 cortes", precio: 12000 },
      { nombre: "15 cortes", precio: 16000 },
    ],
  },

  {
    id: "tablas",
    nombre: "Tablas y promociones",
    grupo: "cocina",
    tipo: "simple",
    nota: "Para compartir. Ideales para mesas de 2 a 6 personas.",
    platos: [
      {
        nombre: "Tabla del Patio",
        precio: 56300,
        descripcion:
          "Fried cubes, Nikko roll, ceviche de atún en leche de tigre, Little Bitch roll, brochetas de pollo teriyaki, brochetas de filete y papas cheddar.",
      },
      {
        nombre: "Tabla carnívora",
        precio: 28700,
        descripcion:
          "600 g · Filete de res, pollo y champiñones, todo salteado y coronado con queso mantecoso. Acompañada de papas fritas y salsa del chef.",
      },
      {
        nombre: "Promo tapas",
        precio: 37100,
        descripcion:
          "Montadito fusión (4u), montadito mechada (4u), ceviche de atún y quesadillas de filete.",
      },
      {
        nombre: "Promo mar",
        precio: 43000,
        descripcion:
          "Ceviche de atún, camarones al ajillo, fried cubes de merluza y tortilla española.",
      },
      {
        nombre: "Promo 32 cortes",
        precio: 24900,
        descripcion: "Ebi Maki, Nikko, M&R y California Cream Smoke.",
      },
      {
        nombre: "Promo 66 cortes",
        precio: 49800,
        descripcion:
          "Sake Maki, Ebi Maki, Mágico, Teriyaki Roll, Del Patio, California Maguro, Kike y Nikko Roll.",
      },
    ],
  },

  {
    id: "platos-fondo",
    nombre: "Platos de fondo",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Filete a lo pobre",
        precio: 18900,
        descripcion:
          "Filete en su punto, cebolla caramelizada con toques de salsa unagi y huevos de codorniz fritos. Acompañado de papas rústicas fritas al merkén.",
      },
      {
        nombre: "Tierno salmón",
        precio: 17900,
        descripcion:
          "Salmón premium sellado y cocinado lentamente, dejando el centro fresco, bañado en soja acaramelada y jengibre fresco rallado. Con ensalada de quinoa, tomate cherry, cilantro y palta.",
      },
      {
        nombre: "Atún Margaritah",
        precio: 19800,
        picante: true,
        descripcion:
          "Atún sellado a la inglesa servido con camarones ecuatorianos, arroz blanco y espejo de salsa de curry amarillo ligeramente picante.",
      },
      {
        nombre: "Fichaca",
        precio: 17900,
        descripcion:
          "Filete de res servido con champiñones salteados y salsa de vino tinto, acompañado de puré de papas y zapallo camote.",
      },
      {
        nombre: "Atún y camote",
        precio: 17900,
        descripcion:
          "Atún sellado a la inglesa en costra de sésamo tostado, bañado en salsa teriyaki, con puré de papas y zapallo camote.",
      },
      {
        nombre: "Merluza crocante",
        precio: 16500,
        descripcion:
          "Merluza austral frita en panko crujiente, acompañada de papas rústicas salteadas y ensalada típica chilena.",
      },
    ],
  },

  {
    id: "ensaladas",
    nombre: "Ensaladas",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Tataki",
        precio: 12900,
        descripcion:
          "Salmón teriyaki, arroz gohan, sésamo tostado, palta y tomate cherry sobre mix de verdes frescos.",
      },
      {
        nombre: "Crunchy",
        precio: 12900,
        descripcion:
          "Pollo furay, champiñones salteados, tomate cherry, palta y aceitunas sobre mix de verdes frescos.",
      },
      {
        nombre: "Super light",
        precio: 13800,
        descripcion:
          "Camarones ecuatorianos, palta, pepino, aceitunas verdes, queso de cabra y ciboulette sobre cama de quinoa y lechuga, con dressing de limón, aceite de oliva, crema ácida y vinagre de arroz.",
      },
    ],
  },

  {
    id: "postres",
    nombre: "Postres",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Churros glaseados",
        precio: 6500,
        descripcion: "Con salsa de chocolate y manjar.",
      },
      {
        nombre: "Brownie con helado",
        precio: 6900,
        descripcion: "Brownie casero con helado cremoso.",
      },
      {
        nombre: "Roll de trufa",
        precio: 6900,
        descripcion:
          "Crema de trufas rellena con dulce de leche, servida con frutos rojos.",
      },
      { nombre: "Suspiro limeño", precio: 6200, descripcion: "Clásico de clásicos." },
      { nombre: "Cheese mango", precio: 6200, descripcion: "En postre, no como pastel." },
      { nombre: "Copa de helado", precio: 6500 },
      {
        nombre: "Postre de tres leches",
        precio: 6200,
        descripcion: "En postre, no como torta.",
      },
    ],
  },

  {
    id: "kids",
    nombre: "Menú kids",
    grupo: "cocina",
    tipo: "simple",
    platos: [
      {
        nombre: "Clásico",
        precio: 11500,
        descripcion:
          "Tiritas de pollo apanadas en panko, acompañadas de papas fritas y una bebida.",
      },
    ],
  },

  // ------------------------------------------------------------------- BAR
  {
    id: "sour",
    nombre: "Sour",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "511", precio: 4900 },
      { nombre: "511 catedral", precio: 8200 },
      { nombre: "511 albahaca", precio: 4950 },
      { nombre: "511 menta", precio: 4950 },
      { nombre: "Sauvignon sour", precio: 4900 },
      { nombre: "Champaña", precio: 4900 },
      { nombre: "Peruano jengibre sour", precio: 6850 },
      {
        nombre: "Sour 1 litro",
        precio: 17500,
        descripcion:
          "Solo delivery. Hecho con limones naturales y con todo el amor del Patio 511.",
      },
    ],
  },

  {
    id: "mojito",
    nombre: "Mojitos",
    grupo: "bar",
    tipo: "simple",
    platos: [
      {
        nombre: "Mojito cubano",
        precio: 6300,
        descripcion: "Ron blanco, limón de pica y menta.",
      },
      {
        nombre: "Mojito albahaca",
        precio: 6700,
        descripcion: "Vodka raspberry, limón de pica y albahaca.",
      },
      {
        nombre: "Mojito mango",
        precio: 6900,
        descripcion: "Bacardi coconut, mango, menta y limón de pica.",
      },
      {
        nombre: "Mojito spark",
        precio: 6700,
        descripcion: "Espumante, menta y limón de pica.",
      },
      {
        nombre: "Mojito Rass",
        precio: 6900,
        descripcion: "Bacardi frutos rojos, menta y limón de pica.",
      },
    ],
  },

  {
    id: "sangria-spritz",
    nombre: "Sangría y spritz",
    grupo: "bar",
    tipo: "simple",
    platos: [
      { nombre: "Jarra de sangría", precio: 19900 },
      { nombre: "Copa de sangría", precio: 6500 },
      { nombre: "Aperol spritz", precio: 7750 },
      { nombre: "Campari spritz", precio: 7750 },
      { nombre: "Ramazzotti spritz", precio: 7750 },
    ],
  },

  {
    id: "recomendados",
    nombre: "Tragos recomendados",
    grupo: "bar",
    tipo: "simple",
    platos: [
      {
        nombre: "Black Johnnie",
        precio: 8900,
        descripcion: "Johnnie Walker, maracuyá y Jägermeister.",
      },
      {
        nombre: "Black Black Johnnie",
        precio: 12900,
        descripcion: "Johnnie Walker etiqueta negra, maracuyá y Jägermeister.",
      },
      {
        nombre: "Disaronno ice",
        precio: 9300,
        descripcion:
          "Amaretto Disaronno y zumo de limón con Mistral Nobel manzana, en copón de hielo frappé.",
      },
      {
        nombre: "Tropical gin",
        precio: 10450,
        descripcion: "Mango, maracuyá y berries.",
      },
      {
        nombre: "Sweet 511",
        precio: 8250,
        descripcion:
          "Fondo de licor de cassis, ron blanco y de coco, base de leche de coco y piña.",
      },
      {
        nombre: "Sugar Daddy",
        precio: 8580,
        descripcion:
          "Whisky con licor de cassis, zumo de limón y azúcar flor, terminado con ginger ale, ahumado con romero y con el borde decorado con sésamo tostado.",
      },
      {
        nombre: "Mai Tai",
        precio: 7689,
        descripcion:
          "Base de granadina, trozos de piña, zumo de naranja y limón, ron blanco de coco y ron dorado.",
      },
      {
        nombre: "Santo Corazón",
        precio: 8850,
        descripcion:
          "St. Germain, frutos del bosque, espumante y Mistral Nobel manzana, terminado tipo spritz.",
      },
    ],
  },

  {
    id: "clasicos",
    nombre: "Clásicos",
    grupo: "bar",
    tipo: "simple",
    platos: [
      {
        nombre: "Negroni",
        precio: 6900,
        descripcion: "Vermouth rosso, Campari y gin Tanqueray.",
      },
      { nombre: "Campari", precio: 6500 },
      {
        nombre: "Martini",
        precio: 6500,
        descripcion: "Tanqueray, Martini dry, aceituna y twist de limón.",
      },
      { nombre: "Clavo oxidado de Johnnie", precio: 7200 },
      { nombre: "Clavo oxidado de Jack", precio: 7950 },
      {
        nombre: "Ruso blanco",
        precio: 6900,
        descripcion: "Smirnoff, Kahlúa y leche entera.",
      },
      {
        nombre: "Bloody Mary",
        precio: 7500,
        descripcion: "Smirnoff, jugo de tomates y vegetales.",
      },
      { nombre: "Moscow mule", precio: 9350 },
      { nombre: "London mule", precio: 9350 },
    ],
  },

  {
    id: "varios",
    nombre: "Varios",
    grupo: "bar",
    tipo: "simple",
    platos: [
      {
        nombre: "Tequila margarita",
        precio: 6200,
        descripcion: "José Cuervo, triple sec y limón.",
      },
      {
        nombre: "Tanqueray collins",
        precio: 7950,
        descripcion: "Gin Tanqueray, jugo de limón y soda.",
      },
      {
        nombre: "Caipirinha",
        precio: 6500,
        descripcion: "Cachaza premium Sagatiba y limón machacado.",
      },
      {
        nombre: "Caipiroska",
        precio: 6500,
        descripcion: "Vodka Smirnoff y limón machacado.",
      },
      { nombre: "Fernet con Coca-Cola", precio: 6990 },
      { nombre: "Cigarros", precio: 5000 },
    ],
  },

  {
    id: "combinados",
    nombre: "Combinados",
    grupo: "bar",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "Ron",
        platos: [
          { nombre: "Pampero", precio: 6500 },
          { nombre: "Bacardi", precio: 6200 },
          { nombre: "Pampero Aniversario", precio: 9500 },
        ],
      },
      {
        nombre: "Vodka",
        platos: [
          { nombre: "Stolichnaya", precio: 6950 },
          { nombre: "Absolut", precio: 7900 },
          { nombre: "Grey Goose", precio: 10500 },
        ],
      },
      {
        nombre: "Gin",
        platos: [
          { nombre: "Bulldog", precio: 8500 },
          { nombre: "Tanqueray tonic", precio: 7900 },
          { nombre: "Bombay Sapphire", precio: 7500 },
          { nombre: "Hendrick's", precio: 9900 },
          { nombre: "Tanqueray Ten", precio: 9500 },
        ],
      },
      {
        nombre: "Whisky",
        platos: [
          { nombre: "Johnnie Walker Black Label", precio: 8500 },
          { nombre: "Jack Daniel's & Coke", precio: 8500 },
          { nombre: "Chivas 12", precio: 9600 },
          { nombre: "Chivas 18", precio: 18000 },
        ],
      },
      {
        nombre: "Pisco",
        platos: [
          { nombre: "Alto del Carmen 35°", precio: 5900 },
          { nombre: "Malpaso 35°", precio: 6100 },
          { nombre: "Mistral 35°", precio: 5900 },
          { nombre: "Alto del Carmen Reservado 40°", precio: 6850 },
          { nombre: "Malpaso 40°", precio: 6820 },
          { nombre: "Alto del Carmen Cumbre 40°", precio: 9500 },
          { nombre: "Pisco Waqar 40° playera", precio: 14500, descripcion: "70 cc" },
          { nombre: "Pisco Waqar 40°", precio: 17900, descripcion: "100 cc" },
        ],
      },
    ],
  },

  {
    id: "cervezas",
    nombre: "Cervezas",
    grupo: "bar",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "Schop 500 cc",
        platos: [
          { nombre: "Kunstmann sin filtrar", precio: 6800 },
          { nombre: "Kunstmann Torobayo", precio: 6800 },
        ],
      },
      {
        nombre: "Botella",
        platos: [
          { nombre: "Austral Calafate", precio: 4950 },
          { nombre: "Austral Lager", precio: 4950 },
          { nombre: "Heineken", precio: 3850 },
          { nombre: "Heineken Zero", precio: 3850 },
          { nombre: "Kunstmann 0", precio: 4180 },
        ],
      },
      {
        nombre: "Agrégale",
        platos: [
          { nombre: "Chelada", precio: 700 },
          { nombre: "Michelada", precio: 700 },
        ],
      },
    ],
  },

  {
    id: "vinos",
    nombre: "Vinos",
    grupo: "bar",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "Por copa",
        platos: [
          { nombre: "Carmenere Casillero del Diablo", precio: 4620 },
          { nombre: "Sauvignon Blanc Doña Dominga", precio: 4620 },
          { nombre: "Espumante Doña Dominga", precio: 4620 },
        ],
      },
      {
        nombre: "Carmenere",
        platos: [
          { nombre: "Tarapacá Gran Reserva", precio: 24750 },
          { nombre: "Casillero del Diablo", precio: 16750 },
          { nombre: "Doña Dominga", precio: 16750 },
        ],
      },
      {
        nombre: "Cabernet Sauvignon",
        platos: [
          { nombre: "Tarapacá Gran Reserva", precio: 24750 },
          { nombre: "Tarapacá Reserva", precio: 18700 },
        ],
      },
      {
        nombre: "Sauvignon Blanc",
        platos: [
          { nombre: "Doña Dominga", precio: 16750 },
          { nombre: "Casillero del Diablo", precio: 16750 },
        ],
      },
      {
        nombre: "Espumantes",
        platos: [{ nombre: "Viña Mar Brut", precio: 16950 }],
      },
    ],
  },

  {
    id: "cafeteria",
    nombre: "Cafetería",
    grupo: "bar",
    tipo: "subgrupos",
    subgrupos: [
      {
        nombre: "Rápidos",
        platos: [
          { nombre: "Ristretto", precio: 2500 },
          { nombre: "Espresso", precio: 2500 },
          { nombre: "Lungo", precio: 2500 },
          { nombre: "Macchiato", precio: 2800 },
          { nombre: "Doppio", precio: 2800 },
        ],
      },
      {
        nombre: "Conversados",
        platos: [
          { nombre: "Capuccino", precio: 2800 },
          { nombre: "Cortado", precio: 2800 },
          { nombre: "Americano", precio: 2800 },
          {
            nombre: "Afogato",
            precio: 3500,
            descripcion: "2 medidas de café y helado de vainilla.",
          },
          { nombre: "Latte", precio: 3500 },
          { nombre: "Capuccino vienés", precio: 3200 },
          { nombre: "Moka", precio: 3950 },
          { nombre: "Matcha latte", precio: 3950 },
          { nombre: "Capuccino doble", precio: 3800 },
          { nombre: "Cortado doble", precio: 3800 },
          { nombre: "Americano doble", precio: 3800 },
          { nombre: "Té", precio: 4500 },
          { nombre: "Infusiones", precio: 4500 },
          { nombre: "Chocolate caliente", precio: 4500 },
        ],
      },
    ],
  },

  {
    id: "refrescos",
    nombre: "Refrescos",
    grupo: "bar",
    tipo: "simple",
    nota: "Sin alcohol.",
    platos: [
      { nombre: "Bebidas", precio: 3300 },
      { nombre: "Red Bull", precio: 3700 },
      { nombre: "Jugo de mango o frambuesa", precio: 3900 },
      { nombre: "Limonada", precio: 3700 },
      { nombre: "Limonada menta", precio: 4200 },
      { nombre: "Limonada con todo", precio: 4900 },
      { nombre: "Mojito sin alcohol", precio: 5000 },
      { nombre: "Piña colada sin alcohol", precio: 5500 },
    ],
  },
];

// Lo que se muestra en la portada. Cuatro ítems reales de la carta, y son
// los únicos con foto: son las cuatro fotos propias del local que tenemos.
// Los precios tienen que calzar con los de arriba y `npm run check` lo verifica.
export const destacados = [
  {
    id: "montadito-jugosa",
    titulo: "Montadito queso y la jugosa",
    texto: "Carne mechada y queso fundido sobre un crujiente pan de ajo.",
    precio: 7500,
    donde: "/carta#cat-tapas-montaditos",
  },
  {
    id: "montadito-pobre",
    titulo: "Montadito a lo pobre",
    texto: "Filete, cebolla caramelizada y huevo de codorniz sobre papa dorada.",
    precio: 8400,
    donde: "/carta#cat-tapas-montaditos",
  },
  {
    id: "acevichado",
    titulo: "Acevichado · 11 cortes",
    texto: "Futomaki tempura con topping de ceviche de salmón y salsa unagi.",
    precio: 14900,
    donde: "/carta#cat-premium-sushi",
  },
  {
    id: "sangria",
    titulo: "Copa de sangría",
    texto: "La de siempre, para la tarde en el patio. La jarra va $19.900.",
    precio: 6500,
    donde: "/bar#cat-sangria-spritz",
  },
];
