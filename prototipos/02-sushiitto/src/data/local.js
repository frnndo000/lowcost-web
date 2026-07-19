export const local = {
  nombre: "SUSHIITTO",
  bajada: "Sushi en Viña del Mar",
  descripcion: "Retiro y delivery",

  direccion: "Dionisio Hernández 153, local 3",
  comuna: "Viña del Mar",
  region: "Valparaíso",

  telefono: "+56 9 6434 3963",
  whatsapp: "56964343963", // sin +, sin espacios (para el link wa.me)
  mensajeWhatsapp: "Hola! Quiero hacer un pedido:",
  instagram: "sushiitto_cl",

  horario: [
    { dias: "Lunes a sábado", horas: "15:15 – 23:30" },
    { dias: "Domingo", horas: "15:15 – 22:30" },
  ],

  // Canales de delivery: van como RESPALDO, no como principal.
  // Si el dueño no los quiere, se borranecen.
  canales: {
    ubereats:
      "https://www.ubereats.com/cl/store/sushiitto/qgF-iiYXSr-abwBAEuov9w?srsltid=AfmBOorSA6KjBbyVTdoQcvUoeCLFUBYnD9k-C6IuaktaMTJeT03iRIGR",
    pedidosya:
      "https://www.pedidosya.cl/restaurantes/vina-del-mar/sushiitto-8b84f923-0a08-4491-9a80-82f86358933d-menu", // ← REEMPLAZAR si lo tiene, o dejar "" para ocultarlo
  },
};
