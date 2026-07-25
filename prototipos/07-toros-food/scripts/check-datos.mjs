// =========================================================
// check-datos.mjs — corre con `npm run check`, y `npm run build` lo
// ejecuta antes de compilar. Solo librería estándar, cero dependencias.
//
// Existe porque prototipos viejos se publicaron con datos falsos
// (wa.me/nro roto, "pregunta de prueba" en la FAQ). Un placeholder que
// llega a producción es peor que un sitio sin terminar: el cliente lo ve.
// =========================================================

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { negocio, pendientes, textoDias } from "../src/data/negocio.js";
import { categorias, destacados } from "../src/data/carta.js";
import { preguntas } from "../src/data/faq.js";
import { schemaRestaurant } from "../src/data/schema.js";

const problemas = [];
const revisar = (ok, mensaje) => { if (!ok) problemas.push(mensaje); };

// --- 1. Lógica: textoDias. Es lo único no trivial del proyecto ---
assert.equal(textoDias(["Mo", "Tu", "We", "Th"]), "Lunes a jueves");
assert.equal(textoDias(["Fr", "Sa"]), "Viernes y sábado");
assert.equal(textoDias(["Su"]), "Domingo");
assert.equal(textoDias(["Mo", "We", "Fr"]), "Lunes, miércoles y viernes");
// Desordenados: el orden lo pone la semana, no el arreglo.
assert.equal(textoDias(["Th", "Mo", "We", "Tu"]), "Lunes a jueves");

// --- 2. Lógica: el Schema sale bien armado desde el horario ---
const schema = schemaRestaurant();
assert.equal(schema.openingHoursSpecification.length, negocio.horario.length);
assert.deepEqual(schema.openingHoursSpecification[0].dayOfWeek, [
  "Monday", "Tuesday", "Wednesday", "Thursday",
]);
assert.equal(schema["@type"], "Restaurant");

// --- 3. Datos de contacto que rompen el sitio si están mal ---
revisar(
  /^\d{9,15}$/.test(negocio.whatsapp),
  `whatsapp debe ser solo dígitos con código país (ej: 56968199773). Ahora: "${negocio.whatsapp}"`,
);
revisar(
  negocio.coords.lat !== 0 && negocio.coords.lng !== 0,
  "coords sigue en 0,0 — sácalas de Google Maps o el mapa apunta al océano",
);
// Ojo: un local abierto pasada la medianoche (12:00 → 00:30) es válido.
// Que `cierra` sea menor que `abre` es correcto; lo inválido es que sean iguales.
const HORA = /^([01]\d|2[0-3]):[0-5]\d$/;
revisar(
  negocio.horario.every(
    (b) =>
      b.dias.length > 0 &&
      HORA.test(b.abre) &&
      HORA.test(b.cierra) &&
      b.abre !== b.cierra,
  ),
  "hay un bloque de horario sin días, con hora mal escrita (usa HH:MM) o que abre y cierra a la misma hora",
);
revisar(
  negocio.horario.flatMap((b) => b.dias).length ===
    new Set(negocio.horario.flatMap((b) => b.dias)).size,
  "hay un día repetido en dos bloques de horario",
);

// --- 4. Nada de placeholders en producción ---
const PLACEHOLDERS = /PENDIENTE|TODO|prueba|lorem|\+X|"nro"/i;
const textoPlano = JSON.stringify({ negocio, categorias, preguntas });
for (const palabra of textoPlano.match(PLACEHOLDERS) ?? []) {
  revisar(false, `queda un placeholder en los datos: "${palabra}"`);
}
revisar(
  pendientes.length === 0,
  `faltan datos por confirmar con el dueño: ${pendientes.join(", ")}`,
);

// --- 5. La carta: precios reales y sin categorías vacías ---
for (const c of categorias) {
  revisar(c.tipo === "simple", `${c.nombre}: tipo no soportado (${c.tipo})`);
  revisar((c.platos?.length ?? 0) > 0, `${c.nombre}: categoría sin platos`);
  for (const p of c.platos ?? []) {
    revisar(
      Number.isInteger(p.precio) && p.precio > 0,
      `${c.nombre} → "${p.nombre}": precio inválido (${p.precio})`,
    );
  }
}

const ids = categorias.map((c) => c.id);
revisar(new Set(ids).size === ids.length, "hay ids de categoría repetidos");

// --- 6. Los destacados de la portada tienen que existir en la carta ---
// Si alguien sube el precio de un plato pero no el del destacado, el
// número de la portada queda mintiendo. Se cruza por nombre exacto.
const porNombre = new Map(
  categorias.flatMap((c) => c.platos).map((p) => [p.nombre, p.precio]),
);
for (const d of destacados) {
  revisar(
    porNombre.has(d.titulo),
    `destacado "${d.titulo}" no calza con ningún plato de la carta (revisa el nombre)`,
  );
  revisar(
    !porNombre.has(d.titulo) || porNombre.get(d.titulo) === d.precio,
    `destacado "${d.titulo}": precio ${d.precio} ≠ ${porNombre.get(d.titulo)} de la carta`,
  );
}

// --- 7. SEO: la descripción tiene que caber en el resultado de Google ---
const largo = negocio.seo.descripcion.length;
revisar(
  largo >= 70 && largo <= 160,
  `seo.descripcion mide ${largo} caracteres; Google corta fuera del rango 70-160`,
);

// --- 8. Los archivos que el <head> promete tienen que existir ---
// Si falta el og.jpg, el link compartido por WhatsApp llega sin foto:
// justo el entregable que hace que la gente lo abra.
const publico = (ruta) =>
  fileURLToPath(new URL(`../public/${ruta}`, import.meta.url));

revisar(
  existsSync(publico(negocio.seo.ogImagen.replace(/^\//, ""))),
  `falta public${negocio.seo.ogImagen} (1200×630) — sin eso el link compartido por WhatsApp llega sin imagen`,
);
revisar(existsSync(publico("favicon.png")), "falta public/favicon.png");

// --- Resultado ---
if (problemas.length > 0) {
  console.error(`\n✗ ${problemas.length} problema(s) antes de poder publicar:\n`);
  for (const p of problemas) console.error(`  · ${p}`);
  console.error("");
  process.exit(1);
}

console.log("✓ Datos validados: contacto, carta, horario, destacados, Schema y SEO.");
