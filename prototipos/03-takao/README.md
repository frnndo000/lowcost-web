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

**Imágenes.** El local entregó cuatro fotos en 1440×1440 (Okinawa de atún,
sushi burger, Takao roll y La Bichota) y el logo oficial. De ahí salen:

- `src/assets/logo-rojo.png` — el hexágono recortado del logo circular, con el
  fondo negro vuelto transparente por luminancia
- `src/assets/logo-azul.png` — el mismo, recoloreado al azul de la sección BAR
  de su carta (#2756aa)

Los dos van por `<Image>` de astro:assets, no por `public/`: así salen en webp
y al tamaño de cada uso. En `public/` eran 59 KB de PNG en /bar para mostrarse
a 40 px.
- `public/favicon.png` — el logo circular a 64×64
- `src/assets/hero-fondo.jpg` — una foto reducida a 128 px y desenfocada (1 KB):
  el desenfoque es lo que permite usarla de fondo a pantalla completa

Las fotos de `gohan-*`, `ceviche`, `papas`, `hamburguesa` y `tequenos` siguen
siendo recortes del PDF (~300 px). Solo se usan de miniatura a 80 px, donde
aguantan. **Pedirle al dueño las que faltan**, más `public/og.jpg` (1200×630)
para la tarjeta de WhatsApp.

El feed de Instagram **no sirve** como fuente de fotos: son piezas gráficas con
texto encima, no fotos de plato.

## Para el próximo cliente

Esta carpeta **es** la plantilla. No hay un `00-base` que mantener aparte.

1. Copia la carpeta y renómbrala.
2. Edita `src/data/negocio.js` — es el único archivo con datos de contacto.
3. Reemplaza `src/data/carta.js` y `src/data/faq.js` con lo del cliente.
4. Cambia los tokens de color en `src/styles/global.css`. Ojo con el
   contraste: `--color-marca` es para superficies y `--color-marca-texto`
   para texto sobre oscuro, porque el rojo de marca no llega a 4,5:1.
5. Reemplaza `src/assets/logo-*.png`, `public/favicon.png` y `public/og.jpg`.
6. `npm run check` hasta que pase. Recién ahí se publica.

Nada más debería necesitar edición. Si te encuentras tocando un componente
para cambiar un dato, ese dato está en el lugar equivocado.
