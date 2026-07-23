# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Monorepo de una agencia de sitios web de bajo costo para PYMEs de la Región de Valparaíso
(Hustlewebs). Cada cliente es un **prototipo independiente** bajo `prototipos/NN-nombre/`, con su
propio `package.json` y sus propias dependencias. No hay workspace ni raíz compartida de npm: cada
prototipo se instala y corre por separado. `PROYECTO.md` es el documento maestro del negocio;
`bitacora/diario.md` es el registro diario.

El valor del producto no es el código — es el **SEO local**: Schema.org, Open Graph para el link
de WhatsApp, y datos de negocio correctos. Eso explica por qué la ingeniería gira en torno a que
ningún dato falso llegue a producción.

## Estructura raíz

- `index.html` — landing placeholder de la agencia (Hustlewebs), estático.
- `wrangler.jsonc` (raíz) — el config peligroso: publica todo el repo si un prototipo no trae el suyo (ver Deploy).
- `recursos/git-cheatsheet.md`, `bitacora/diario.md`, `PROYECTO.md` — docs del negocio.
- `prototipos/practica/` — scratch, no es cliente.

## Comandos

Siempre desde el directorio del prototipo (`cd prototipos/NN-nombre`):

```bash
npm install        # una vez por prototipo
npm run dev         # servidor Astro (03-takao usa 4321, 05-patio511 usa 4322)
npm run check       # valida datos — corre solo, sin navegador
npm run build       # check + astro build → dist/
npm run preview      # sirve el dist/ compilado
```

No hay linter ni framework de tests. **`npm run check` es el único gate** y `npm run build` lo
ejecuta antes de compilar: si los datos están incompletos o tienen placeholders, el build falla a
propósito. Node >=22.12 (declarado en cada `package.json`).

Prototipos de referencia: **03-takao** (restaurante de una sucursal) y **05-patio511** (dos
sucursales) son los más maduros y el patrón a copiar. Los primeros (01, 02) son más viejos y tienen
deuda conocida; no imitarlos.

## Arquitectura de un prototipo

**Fuente única de verdad en `src/data/`.** Si un dato de contacto, precio o texto aparece dos veces
en el código, está mal: va en `src/data/` y los componentes lo leen desde ahí. Editar un cliente =
editar `src/data/`, casi nunca los componentes.

- `negocio.js` — datos del local (nombre, dirección, WhatsApp, horario **estructurado**, coords).
  El horario es un arreglo de bloques `{ dias: ["Mo","Tu"], abre, cierra }`, del que salen tanto el
  texto visible (`textoDias()`) como el `openingHoursSpecification` del Schema. Un dato, varios usos.
  Exporta `pendientes`: lista de datos por confirmar con el dueño que **bloquea el build** hasta
  vaciarse. Multi-sucursal (05) usa un arreglo `sucursales` en vez de campos sueltos.
- `carta.js` — el menú completo, con `clp()` (único formateador de precios) y categorías tipadas por
  `tipo` (`simple` / `subgrupos` / `configurable`) y `grupo` (`cocina` → /carta, `bar` → /bar).
- `schema.js` — genera el JSON-LD (`Restaurant` + `FAQPage`) desde los datos anteriores.
- `faq.js` — preguntas frecuentes, también van al Schema.

**Frontera Node/Astro — la regla que más se rompe:** `src/data/*.js` se importa desde Node puro
(el validador `scripts/check-datos.mjs`), así que **no puede contener `import foto from "*.jpg"`** —
eso solo lo entiende el bundler de Astro. Por eso todas las imágenes viven aparte en
`src/data/imagenes.js`, que solo importa Astro. Si pones un import de imagen en `carta.js` o
`negocio.js`, `npm run check` se cae al arrancar.

**Componentes** (`src/components/`, `src/components/secciones/`) solo componen; no llevan datos
hardcodeados. `Layout.astro` es el marco de toda página (head, Schema, header, footer). Menú móvil,
acordeón de FAQ e índice de categorías son **HTML nativo sin JavaScript** (Popover API, `<details>`,
anclas) — mantener esa línea salvo que algo lo exija.

**Tokens de color por ROL, no por color** (`src/styles/global.css`): `--color-marca`, no
`--color-turquesa`. Cambiar de cliente = cambiar ~8 líneas de tokens, no clases repartidas. Ojo con
el contraste WCAG AA (4.5:1 para texto): varios tokens tienen una variante `-texto` más clara
justo por eso, documentada en comentarios.

## El validador (`scripts/check-datos.mjs`)

Solo librería estándar de Node, cero dependencias. Existe porque prototipos viejos se publicaron con
`wa.me/nro` (roto) y "pregunta de prueba" en la FAQ. Chequea: placeholders (`PENDIENTE`, `TODO`…),
formato de WhatsApp y coords, horario válido, precios enteros positivos, largo del SEO (70-160),
existencia de `og.jpg`/`favicon.png`, y que los destacados de la portada calcen con precios reales
de la carta. Al agregar un tipo de dato nuevo que pueda salir mal, agrégale su chequeo aquí.

## Deploy

Cloudflare Pages/Workers, **un proyecto por prototipo**. Cada prototipo desplegable **necesita su
propio `wrangler.jsonc`** apuntando a `"assets": { "directory": "./dist" }`. Sin él, wrangler sube
por el árbol, toma el `wrangler.jsonc` de la raíz (`name: "hustlewebs"`, `directory: "."`) y publica
el sitio equivocado con todo el repo (node_modules, .git) como assets. Ver
`prototipos/03-takao/wrangler.jsonc` para el patrón.

## Gotchas

- **Caché de imágenes en dev:** la URL de `/_image` de Astro **no lleva hash** en desarrollo. Si
  reemplazas un archivo de imagen, el navegador sigue mostrando el viejo. Solución: renombrar el
  archivo (cambia la URL) o recargar con Ctrl+F5. Los assets ya renombrados por esto llevan sufijo
  (ej. `logo-sello.png`).
- **PDFs de carta sin capa de texto:** las cartas oficiales suelen venir vectorizadas (0 fuentes,
  todo curvas). No se puede extraer texto; hay que renderizar las páginas a imagen (pymupdf, 170-200
  DPI) y transcribir a ojo. Precios de 5 dígitos: verificar, no adivinar.
- **Idioma:** todo el contenido, comentarios y nombres de commit van en español chileno.
