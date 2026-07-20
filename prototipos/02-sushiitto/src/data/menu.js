// =========================================================
// SUSHIITTO — fuente única de verdad del menú.
// Precios de la carta directa (WhatsApp). Números crudos, sin "$".
// =========================================================

import handrollImg from "../assets/platos/handroll.jpeg";
import sushiburgerImg from "../assets/platos/sushiburger-pollo.jpg";
import gohanImg from "../assets/platos/gohan.jpeg";

export const categorias = [
  {
    nombre: "Hand Rolls",
    tipo: "subgrupos",
    imagen: handrollImg,
    subgrupos: [
      {
        nombre: "Apanados",
        platos: [
          { nombre: "Pollo, queso crema, palta", precio: 3500 },
          { nombre: "Camarón, queso crema, cebollín", precio: 3800 },
          { nombre: "Salmón, queso crema, pepino", precio: 4000 },
          { nombre: "Kanikama, queso crema, palta", precio: 3500 },
        ],
      },
      {
        nombre: "En Nori",
        platos: [
          { nombre: "Pollo, queso crema, palta", precio: 3000 },
          { nombre: "Camarón, queso crema, cebollín", precio: 3300 },
          { nombre: "Salmón, queso crema, pepino", precio: 3800 },
          { nombre: "Kanikama, queso crema, palta", precio: 3000 },
        ],
      },
    ],
  },

  {
    nombre: "Sushi Burgers",
    tipo: "simple",
    imagen: sushiburgerImg,
    platos: [
      { nombre: "Pollo, queso, cebollín, palta", precio: 5990 },
      { nombre: "Camarón, queso, cebollín, palta", precio: 6990 },
      { nombre: "Salmón, queso, palta, pepino", precio: 7990 },
    ],
  },

  {
    nombre: "Gohan",
    tipo: "configurable",
    imagen: gohanImg,
    precio: 6500,
    descripcion: "Base de arroz y queso. Elige 1 proteína y 2 vegetales.",
    opciones: [
      {
        titulo: "Proteína (elige 1)",
        items: [
          "Pollo",
          "Camarón",
          "Salmón",
          "Kanikama",
          "Champiñón",
          "Pollo furay",
          "Camarón furay",
          "Salmón furay",
          "Champiñón furay",
        ],
        nota: "Las proteínas furay tienen costo adicional de $1.000.",
      },
      {
        titulo: "Vegetales (elige 2)",
        items: [
          "Cebollín",
          "Palta",
          "Palmito",
          "Pepino",
          "Cebolla morada",
          "Espárrago",
          "Aceituna",
        ],
      },
    ],
  },

  {
    nombre: "Arma tu Roll",
    tipo: "configurable",
    precio: 4500,
    descripcion: "Arma tu roll a tu gusto.",
    opciones: [
      {
        titulo: "Envoltura (elige 1)",
        items: [
          "Palta",
          "Queso crema",
          "Salmón",
          "Panko",
          "Tempura",
          "Sésamo",
          "Coco merkén",
          "Merkén",
          "Plátano macho frito",
          "Alga nori",
        ],
      },
      {
        titulo: "Proteína (elige 1)",
        items: [
          "Pollo teriyaki",
          "Camarón",
          "Salmón",
          "Pulpo",
          "Kanikama",
          "Champiñón",
        ],
        nota: "La proteína furay tiene costo adicional de $1.000.",
      },
      {
        titulo: "Ingredientes (elige 2)",
        items: [
          "Queso crema",
          "Palta",
          "Cebollín",
          "Pimentón",
          "Pepino",
          "Cebolla morada",
          "Espárrago",
          "Palmito",
          "Aceituna",
        ],
      },
    ],
  },

  {
    nombre: "Tablas",
    tipo: "simple",
    platos: [
      {
        nombre: "20 piezas",
        precio: 7990,
        descripcion:
          "10 palta (camarón, queso, cebollín) · 10 queso (kanikama, espárrago, palmito)",
      },
      {
        nombre: "40 piezas",
        precio: 14990,
        descripcion:
          "10 palta · 10 queso · 10 sésamo (salmón) · 10 salmón (pulpo)",
      },
      {
        nombre: "60 piezas",
        precio: 25990,
        descripcion:
          "10 palta · 10 queso · 10 sésamo · 10 salmón · 10 panko (pollo) · 10 panko (kani)",
      },
      {
        nombre: "80 piezas",
        precio: 31990,
        descripcion:
          "10 palta · 10 queso · 10 sésamo · 10 salmón · 10 panko x2 · 10 nori · 10 tempura",
      },
    ],
  },

  {
    nombre: "Tablas Delux",
    tipo: "simple",
    platos: [
      {
        nombre: "20 piezas",
        precio: 7990,
        descripcion: "10 palta · 6 gyozas mixtas · 4 nigiris",
      },
      {
        nombre: "40 piezas",
        precio: 13990,
        descripcion: "10 palta · 10 queso · 10 sésamo · 6 gyozas · 4 nigiris",
      },
      {
        nombre: "60 piezas",
        precio: 19990,
        descripcion:
          "10 palta · 10 queso · 10 sésamo · 10 panko · 6 homosakis · 6 gyozas · 4 nigiris · 4 sashimis",
      },
      {
        nombre: "80 piezas",
        precio: 28990,
        descripcion:
          "10 palta · 10 queso · 10 sésamo · 10 salmón · 10 panko · 10 nori · 6 gyozas · 6 homosakis · 4 nigiris · 4 sashimis",
      },
    ],
  },

  {
    nombre: "Rollos Especiales",
    tipo: "simple",
    platos: [
      {
        nombre: "Acevichado Roll",
        precio: 7990,
        descripcion:
          "Camarón, queso crema, cebollín, con topping de ceviche de salmón",
      },
      {
        nombre: "Dorito Roll",
        precio: 7990,
        descripcion:
          "Camarón furay, queso crema, cebollín, envuelto en Doritos, topping de guacamole",
      },
    ],
  },

  {
    nombre: "Ceviches",
    tipo: "simple",
    platos: [
      { nombre: "Salmón", precio: 7990 },
      { nombre: "Camarón", precio: 8990 },
      { nombre: "Mixto", precio: 9990, descripcion: "Camarón, salmón, pulpo" },
    ],
  },

  {
    nombre: "Nigiris (2 piezas)",
    tipo: "simple",
    platos: [
      { nombre: "Camarón", precio: 2990 },
      { nombre: "Pulpo", precio: 3590 },
      { nombre: "Salmón", precio: 3590 },
      { nombre: "Pollo", precio: 1990 },
      { nombre: "Kanikama", precio: 1990 },
      { nombre: "Palta", precio: 1490 },
      { nombre: "Pepino", precio: 1490 },
      { nombre: "Queso crema", precio: 1490 },
    ],
  },

  {
    nombre: "Extras",
    tipo: "simple",
    platos: [
      { nombre: "Sashimi de salmón (6 unidades)", precio: 5490 },
      { nombre: "Camarón furay (6 unidades)", precio: 4590 },
      { nombre: "Pollo furay (6 unidades)", precio: 4590 },
      { nombre: "Champiñón furay (6 unidades)", precio: 3490 },
      { nombre: "Korokke (6 unidades)", precio: 3490 },
      { nombre: "Gyozas (6 unidades)", precio: 3100 },
    ],
  },

  {
    nombre: "Salsas",
    tipo: "simple",
    platos: [
      { nombre: "Acevichada", precio: 1000 },
      { nombre: "Teriyaki", precio: 800 },
      { nombre: "Soya", precio: 800 },
      { nombre: "Jengibre", precio: 800 },
      { nombre: "Wasabi", precio: 600 },
    ],
  },

  {
    nombre: "Bebidas",
    tipo: "simple",
    platos: [
      { nombre: "Coca-Cola 1.5 L", precio: 3000 },
      { nombre: "Coca-Cola 1.5 L Zero", precio: 3000 },
      { nombre: "Coca-Cola 350 ml", precio: 1500 },
      { nombre: "Sprite 350 ml", precio: 1500 },
      { nombre: "Fanta 350 ml", precio: 1500 },
    ],
  },
];
