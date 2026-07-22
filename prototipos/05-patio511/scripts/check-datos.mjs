// =========================================================
// check-datos.mjs — corre con `npm run check`, y `npm run build` lo
// ejecuta antes de compilar. Solo librería estándar, cero dependencias.
//
// Existe porque 01-nutricionista se publicó con tres links a `wa.me/nro`
// (rotos) y cuatro "pregunta de prueba" en su FAQ. Un placeholder que
// llega a producción es peor que un sitio sin terminar: el cliente lo ve.
//
// Novedad de este prototipo: todo lo que es por sucursal se revisa
// sucursal por sucursal, no una sola vez.
// =========================================================

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  negocio,
  sucursales,
  pendientes,
  textoDias,
  linkWhatsapp,
} from "../src/data/negocio.js";
import { categorias, destacados } from "../src/data/carta.js";
import { preguntas } from "../src/data/faq.js";
import { schemaRestaurantes } from "../src/data/schema.js";

const problemas = [];
const revisar = (ok, mensaje) => {
  if (!ok) problemas.push(mensaje);
};

// --- 1. Lógica: textoDias. Es lo único no trivial del proyecto ---
assert.equal(textoDias(["Mo", "Tu", "We"]), "Lunes a miércoles");
assert.equal(textoDias(["Fr", "Sa"]), "Viernes y sábado");
assert.equal(textoDias(["Su"]), "Domingo");
assert.equal(textoDias(["Mo", "We", "Fr"]), "Lunes, miércoles y viernes");
// Desordenados: el orden lo pone la semana, no el arreglo.
assert.equal(textoDias(["Th", "Mo", "We", "Tu"]), "Lunes a jueves");

// --- 2. Lógica: sale un Restaurant por sucursal, bien armado ---
const schemas = schemaRestaurantes();
assert.equal(schemas.length, sucursales.length);
assert.equal(schemas[0]["@type"], "Restaurant");
assert.deepEqual(schemas[0].openingHoursSpecification[0].dayOfWeek, [
  "Monday",
  "Tuesday",
  "Wednesday",
]);
// Dos sucursales, dos @id distintos: si se repiten, Google fusiona las fichas.
assert.equal(new Set(schemas.map((s) => s["@id"])).size, schemas.length);

// --- 3. Datos de contacto que rompen el sitio si están mal ---
const HORA = /^([01]\d|2[0-3]):[0-5]\d$/;

revisar(sucursales.length > 0, "no hay ni una sucursal en negocio.js");
revisar(
  new Set(sucursales.map((s) => s.id)).size === sucursales.length,
  "hay dos sucursales con el mismo id",
);

for (const s of sucursales) {
  const donde = `sucursal "${s.id}"`;

  revisar(
    /^\d{9,15}$/.test(s.whatsapp),
    `${donde}: whatsapp debe ser solo dígitos con código país (ej: 56912345678). Ahora: "${s.whatsapp}"`,
  );
  revisar(
    linkWhatsapp(s).startsWith("https://wa.me/56"),
    `${donde}: el link de WhatsApp no queda armado`,
  );
  revisar(
    s.coords.lat !== 0 && s.coords.lng !== 0,
    `${donde}: coords sigue en 0,0 — sácalas de Google Maps o el mapa apunta al océano`,
  );
  revisar(Boolean(s.direccion && s.comuna), `${donde}: falta dirección o comuna`);
  revisar(Boolean(s.instagram), `${donde}: falta el Instagram`);

  // Los links de delivery son URLs larguísimas con UUID: un carácter
  // cambiado no se ve a simple vista, pero manda al cliente a un 404.
  // Acá solo se revisa la forma; que el link abra el local correcto hay
  // que probarlo a mano una vez.
  for (const [app, url] of Object.entries(s.canales)) {
    if (!url) continue;
    let host = "";
    try {
      const u = new URL(url);
      host = u.hostname;
      revisar(u.protocol === "https:", `${donde} → ${app}: el link no es https`);
    } catch {
      revisar(false, `${donde} → ${app}: "${url}" no es una URL válida`);
      continue;
    }
    // La clave del canal es el dominio de la app: rappi → rappi.cl,
    // pedidosya → pedidosya.cl. Pegar el link de Rappi en la casilla de
    // PedidosYa es el error fácil de cometer y difícil de ver.
    revisar(
      host.includes(app),
      `${donde} → ${app}: el link apunta a ${host}, que no es el dominio de ${app}`,
    );
  }

  // Ojo: un bar cierra después de medianoche (13:00 → 02:00). Que `cierra`
  // sea menor que `abre` es válido y correcto; lo inválido es que sean iguales.
  revisar(
    s.horario.every(
      (b) =>
        b.dias.length > 0 &&
        HORA.test(b.abre) &&
        HORA.test(b.cierra) &&
        b.abre !== b.cierra,
    ),
    `${donde}: hay un bloque de horario sin días, con hora mal escrita (usa HH:MM) o que abre y cierra a la misma hora`,
  );
  const dias = s.horario.flatMap((b) => b.dias);
  revisar(
    dias.length === new Set(dias).size,
    `${donde}: hay un día repetido en dos bloques de horario`,
  );
  revisar(dias.length === 7, `${donde}: el horario no cubre los 7 días`);
}

// --- 4. Nada de placeholders en producción ---
// Ojo con las mayúsculas: van SIN la bandera `i` a propósito. La carta
// dice "Todo furay" y "Todo en crujiente tempura", que no son marcadores.
const PLACEHOLDERS = /\b(PENDIENTE|TODO|FIXME)\b|\blorem\b|\+X|"nro"/;
const textoPlano = JSON.stringify({ negocio, sucursales, categorias, preguntas });
for (const palabra of textoPlano.match(PLACEHOLDERS) ?? []) {
  revisar(false, `queda un placeholder en los datos: "${palabra}"`);
}
revisar(
  pendientes.length === 0,
  `faltan datos por confirmar con el dueño:\n      - ${pendientes.join("\n      - ")}`,
);

// --- 5. La carta: precios reales y sin categorías vacías ---
for (const c of categorias) {
  const platos =
    c.tipo === "subgrupos" ? c.subgrupos.flatMap((s) => s.platos) : c.platos;

  revisar(
    ["cocina", "bar"].includes(c.grupo),
    `${c.nombre}: grupo debe ser "cocina" o "bar", no "${c.grupo}"`,
  );
  revisar(platos?.length > 0, `${c.nombre}: categoría sin platos`);

  for (const p of platos ?? []) {
    revisar(
      Number.isInteger(p.precio) && p.precio > 0,
      `${c.nombre} → "${p.nombre}": precio inválido (${p.precio})`,
    );
  }
}

const ids = categorias.map((c) => c.id);
revisar(new Set(ids).size === ids.length, "hay ids de categoría repetidos");
revisar(
  categorias.some((c) => c.grupo === "cocina") &&
    categorias.some((c) => c.grupo === "bar"),
  "una de las dos páginas (/carta o /bar) quedaría vacía",
);

// --- 6. Los destacados de la portada tienen que existir en la carta ---
// Si el precio del destacado no calza con el de la carta, el cliente
// llega al local con un precio en la cabeza y otro en la boleta.
const todosLosPlatos = categorias.flatMap((c) =>
  c.tipo === "subgrupos" ? c.subgrupos.flatMap((s) => s.platos) : c.platos,
);
for (const d of destacados) {
  revisar(
    todosLosPlatos.some((p) => p.precio === d.precio),
    `destacado "${d.titulo}": el precio ${d.precio} no existe en la carta`,
  );
  const ancla = d.donde.split("#")[1]?.replace("cat-", "");
  revisar(
    ids.includes(ancla),
    `destacado "${d.titulo}": apunta a #cat-${ancla}, que no es una categoría`,
  );
}

// --- 7. SEO: la descripción tiene que caber en el resultado de Google ---
const largo = negocio.seo.descripcion.length;
revisar(
  largo >= 70 && largo <= 160,
  `seo.descripcion mide ${largo} caracteres; Google corta fuera del rango 70-160`,
);

// --- 8. Los archivos que el <head> promete tienen que existir ---
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

console.log(
  `✓ Datos validados: ${sucursales.length} sucursales, ${categorias.length} categorías, ${todosLosPlatos.length} ítems, Schema y SEO.`,
);
