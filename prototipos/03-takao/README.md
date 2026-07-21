# 03 — Takao Sushi Bar

Tres páginas, pedido por WhatsApp, sin backend:

| Página | Qué lleva | Por qué separada |
|---|---|---|
| `/` | Hero, destacados con foto, promos por día, FAQ, ubicación | Vende y posiciona |
| `/carta` | Cocina completa, 13 categorías | "carta sushi Viña del Mar" |
| `/bar` | Barra completa, 9 categorías | "bar Viña del Mar" es otra búsqueda |

El `FAQPage` de Schema.org va **solo** en la home, donde está el acordeón:
repetirlo en las tres páginas es contenido duplicado.

```bash
npm install
npm run dev      # desarrollo
npm run check    # valida los datos (lo corre también el build)
npm run build    # compila a dist/
```

## Datos pendientes del dueño

`npm run check` falla mientras falten. La lista viva está en
`pendientes` dentro de [`src/data/negocio.js`](src/data/negocio.js):
dirección, comuna, teléfono, WhatsApp, horario, coordenadas y dominio.

**Imágenes:** las fotos de `src/assets/platos/` y el logo de
`public/imagenes/logo.png` son recortes de la carta en PDF (~300 px). Se ven
bien de miniatura pero no aguantan un hero grande. Hay que pedirle:

- el logo original en SVG o PNG con transparencia
- 3-4 fotos de platos en alta y una del local
- `public/og.jpg` (1200×630) para la tarjeta de WhatsApp

Reemplazar los archivos basta; no hay que tocar código. El feed de Instagram
**no sirve** como fuente: son piezas gráficas con texto encima, no fotos de
plato.

## Para el próximo cliente

Esta carpeta **es** la plantilla. No hay un `00-base` que mantener aparte.

1. Copia la carpeta y renómbrala.
2. Edita `src/data/negocio.js` — es el único archivo con datos de contacto.
3. Reemplaza `src/data/carta.js` y `src/data/faq.js` con lo del cliente.
4. Cambia los ocho tokens de color en `src/styles/global.css`.
5. Reemplaza `public/favicon.svg` y `public/og.jpg`.
6. `npm run check` hasta que pase. Recién ahí se publica.

Nada más debería necesitar edición. Si te encuentras tocando un componente
para cambiar un dato, ese dato está en el lugar equivocado.
