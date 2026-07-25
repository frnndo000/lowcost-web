# 07 · Toros Food

Fast food chileno y venezolano (sandwichería premium) en Quilpué.
Prospección en frío (Hustlewebs): el local aún no ha visto el prototipo.

## Correr

```bash
npm install
npm run dev      # http://localhost:4324
npm run check    # valida datos (gate del build)
npm run build    # check + astro build → dist/
```

## Nota de calidad (análisis con las skills/plugins instaladas)

Prototipo **grado A- (~9/10)**. Craft de producción; lo único que lo separa de
publicar son los datos del dueño (ver checklist abajo), no el código.

- **Impeccable** (`detect`): limpio, `[]` — sin patrones de "AI slop".
- **refactoring-ui** ~9/10: jerarquía, escala de espaciado, anchos acotados,
  contraste WCAG AA verificado, profundidad (hover con sombra tintada).
- **web-typography** ~9/10: cuerpo ≥16px, line-height 1.6, medida acotada,
  fuentes variable subset `wght` (solo latino por `unicode-range`), fallbacks.
- **design-taste-frontend**: pasa el pre-flight anti-slop — un solo tema (oscuro),
  un acento (naranja), un radio; 0 em/en-dashes; imágenes reales; motion motivado
  y con `prefers-reduced-motion`. El neón está justificado por el brief.
- **ponytail**: código lean, fuente única de verdad en `src/data/`, sin
  dependencias de más (potrace se usó `--no-save`, no se publica).
- **Build de producción** (`astro build`): compila limpio, imágenes a webp, sitemap.

## Listo para pushear

**Todos los datos confirmados — el gate pasa en verde** (`npm run check` ✓,
`pendientes = []`). Resuelto:

- **Coordenadas** reales del local (ficha de Google, Plus Code XH2C+P6).
- **Horario** real confirmado por el dueño (Lun-Mie 12:30–00:00, Jue hasta 01:00,
  Vie-Sáb hasta 02:00, Dom 12:45–23:00).
- **Sitio**: `torosfood.pages.dev` (subdominio Cloudflare para la demo en frío;
  cambiar por el dominio real si el cliente firma).

**Deploy:**

```bash
npm run build       # gate + compila a dist/
npx wrangler deploy # el wrangler.jsonc ya está listo (name torosfood)
```

**Único nice-to-have pendiente:** un **logo en alta resolución** (idealmente
vectorial) para que el `og.jpg` (imagen del link de WhatsApp) quede nítido; hoy
usa el wordmark en raster de 150px. Favicon y el toro de la página ya están
vectorizados (`public/toro.svg`).

La carta completa (10 categorías, 73 platos) está con precios reales confirmados.

## Imágenes

- **Toro/logo:** el toro de la marca está **vectorizado** en `public/toro.svg`
  (trazado del logo oficial 150²), usado vía la utilidad CSS `toro-mask` en el
  header, footer y combos — nítido a cualquier escala. `favicon.png` sale de él.
- **Fotos:** platos en `src/assets/platos/`, hero en `src/assets/hero/`; el mapeo
  vive en `src/data/imagenes.js`. Los `src/assets/{logo,toro}.png` quedaron como
  fuentes de regeneración (no se importan → no se bundlean).

## Dónde tocar

Todo el contenido vive en `src/data/`. Los componentes solo componen.
Ver `CLAUDE.md` en la raíz del repo para la arquitectura.
