// =========================================================
// check-datos.mjs — corre con `npm run check`, y `npm run build` lo
// ejecuta antes de compilar. Solo librería estándar, cero dependencias.
//
// Existe porque el 01-nutricionista se publicó con datos falsos:
// tres links a `wa.me/nro` (rotos) y cuatro "pregunta de prueba" en su FAQ.
// Un placeholder que llega a producción es peor que un sitio sin terminar:
// el cliente lo ve. Mientras Tamara no confirme lo que falta, esto falla.
// =========================================================

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  negocio,
  sesiones,
  testimonios,
  faq,
  pendientes,
  wa,
  clp,
} from "../src/data/datos.js";

const problemas = [];
const revisar = (ok, mensaje) => {
  if (!ok) problemas.push(mensaje);
};

// --- 1. Lógica: los helpers, que es lo único no trivial ---
assert.equal(clp(35000), "$35.000");
assert.equal(clp(25000), "$25.000");
assert.match(wa(), /^https:\/\/wa\.me\/56987550592\?text=/);
assert.ok(wa("hola con espacios").includes("%20"), "wa() no está codificando el mensaje");

// --- 2. Contacto que rompe el sitio si está mal ---
revisar(
  /^\d{9,15}$/.test(negocio.whatsapp),
  `whatsapp debe ser solo dígitos con código país (ej: 56912345678). Ahora: "${negocio.whatsapp}"`,
);

// --- 3. Nada de placeholders en producción ---
// Ojo: nada de /TODO/i ni /prueba/i sueltos — "todo" y "prueba" son
// palabras españolas legítimas ("todo Chile"). Buscamos marcadores reales.
const PLACEHOLDERS = /PENDIENTE|lorem ipsum|pregunta de prueba|respuesta de prueba|wa\.me\/nro|"nro"/i;
const textoPlano = JSON.stringify({ negocio, sesiones, testimonios, faq });
for (const palabra of textoPlano.match(PLACEHOLDERS) ?? []) {
  revisar(false, `queda un placeholder en los datos: "${palabra}"`);
}
revisar(
  pendientes.length === 0,
  `faltan datos por confirmar con Tamara: ${pendientes.join(", ")}`,
);

// --- 4. Precios presenciales: enteros positivos y reales ---
for (const p of sesiones.presencial.precios ?? []) {
  revisar(
    Number.isInteger(p.valor) && p.valor > 0,
    `precio presencial "${p.nombre}" inválido: ${p.valor}`,
  );
}
revisar(
  (sesiones.presencial.incluye?.length ?? 0) > 0 &&
    (sesiones.online.incluye?.length ?? 0) > 0,
  "una modalidad quedó sin lista de 'qué incluye'",
);

// --- 5. Contenido mínimo con voz real ---
revisar(testimonios.length >= 1, "no hay testimonios");
revisar(faq.length >= 3, "la FAQ quedó con menos de 3 preguntas");

// --- 6. SEO: la descripción tiene que caber en el resultado de Google ---
const largo = negocio.seo.descripcion.length;
revisar(
  largo >= 70 && largo <= 160,
  `seo.descripcion mide ${largo} caracteres; Google corta fuera del rango 70-160`,
);

// --- 7. El favicon que promete el <head> tiene que existir ---
const publico = (ruta) => fileURLToPath(new URL(`../public/${ruta}`, import.meta.url));
revisar(existsSync(publico("favicon.svg")), "falta public/favicon.svg");

// --- Resultado ---
if (problemas.length > 0) {
  console.error(`\n✗ ${problemas.length} problema(s) antes de poder publicar:\n`);
  for (const p of problemas) console.error(`  · ${p}`);
  console.error("");
  process.exit(1);
}

console.log("✓ Datos validados: contacto, precios, testimonios, FAQ y SEO.");
