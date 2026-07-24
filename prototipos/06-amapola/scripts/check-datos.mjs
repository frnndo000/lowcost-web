// =========================================================
// check-datos.mjs — validador OPCIONAL. Se corre a mano con `npm run check`
// o con `npm run build:check`. El `npm run build` normal NO lo ejecuta: este
// es un prototipo de venta y debe compilar aunque falten datos (por eso no
// bloquea el deploy, a diferencia de 03/05).
//
// Valida el FORMATO de lo que sí está (para no publicar links rotos ni
// placeholders) y lista como AVISO lo que falta confirmar. Solo librería
// estándar de Node, cero dependencias.
// =========================================================

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { negocio, pendientes, linkWhatsapp, textoDias } from "../src/data/negocio.js";
import { categorias, clp } from "../src/data/carta.js";
import { preguntas } from "../src/data/faq.js";

const errores = [];
const revisar = (ok, msg) => { if (!ok) errores.push(msg); };

// --- Lógica: los helpers no triviales ---
assert.equal(clp(7000), "$7.000");
assert.equal(textoDias(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]), "Todos los días");
assert.match(linkWhatsapp(), /^https:\/\/wa\.me\/56961190145\?text=/);

// --- Contacto: rompe el sitio si está mal ---
revisar(
  /^\d{9,15}$/.test(negocio.whatsapp),
  `whatsapp debe ser solo dígitos con código país. Ahora: "${negocio.whatsapp}"`,
);

// --- Nada de placeholders reales en el texto visible ---
const PLACEHOLDERS = /PENDIENTE|lorem ipsum|pregunta de prueba|wa\.me\/nro/i;
const textoPlano = JSON.stringify({ negocio, categorias, preguntas });
for (const palabra of textoPlano.match(PLACEHOLDERS) ?? []) {
  revisar(false, `queda un placeholder en los datos: "${palabra}"`);
}

// --- Precios: enteros positivos, o null (por encargo) ---
for (const c of categorias) {
  const platos = c.tipo === "subgrupos" ? c.subgrupos.flatMap((s) => s.platos) : c.platos;
  revisar(platos.length > 0, `${c.nombre}: categoría sin productos`);
  for (const p of platos) {
    revisar(
      p.precio === null || (Number.isInteger(p.precio) && p.precio > 0),
      `${c.nombre} → "${p.nombre}": precio inválido (${p.precio})`,
    );
  }
}

// --- SEO: la descripción tiene que caber en el resultado de Google ---
const largo = negocio.seo.descripcion.length;
revisar(largo >= 70 && largo <= 160, `seo.descripcion mide ${largo} (rango 70-160)`);

// --- Los archivos que promete el <head> ---
const publico = (r) => fileURLToPath(new URL(`../public/${r}`, import.meta.url));
revisar(existsSync(publico("favicon.png")), "falta public/favicon.png");
revisar(existsSync(publico(negocio.seo.ogImagen.replace(/^\//, ""))), "falta public/og.jpg");

// --- Resultado ---
if (errores.length > 0) {
  console.error(`\n✗ ${errores.length} error(es) de formato:\n`);
  for (const e of errores) console.error(`  · ${e}`);
  process.exit(1);
}

console.log("✓ Formato validado: contacto, precios, SEO y assets.");
if (pendientes.length > 0) {
  console.log(`\n⚠ ${pendientes.length} dato(s) por confirmar con la dueña (no bloquean):`);
  for (const p of pendientes) console.log(`  · ${p}`);
}
