# 07 · Toros Food

Fast food chileno y venezolano (sandwichería premium) en Quilpué.
Prospección en frío (Hustlewebs): el local aún no ha visto el prototipo.

## Correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # valida datos (gate del build)
npm run build    # check + astro build
```

## Estado

Estructura completa, con logo oficial, toro de marca y fotos reales montados
(hero con slideshow + best sellers). **El build sigue bloqueado a propósito**
(`npm run check`) hasta que Rafael consiga del dueño:

- **Horario** real de atención (hay uno provisional).
- **Coordenadas** de Google Maps (el mapa en dev ya funciona con la dirección).
- **Dominio** final del sitio.

Ver `pendientes` en `src/data/negocio.js`. La carta completa ya está cargada
con precios reales confirmados.

### Imágenes

El logo oficial (150², fondo negro) se procesó a PNG transparente: `logo.png`
(no se usa directo) y `toro.png` (la silueta de marca, usada como watermark).
`favicon.png` y `og.jpg` se generaron desde él. Fotos de platos en
`src/assets/platos/` y del hero en `src/assets/hero/`; el mapeo vive en
`src/data/imagenes.js`. Un logo de mayor resolución mejoraría el `og.jpg`.

## Dónde tocar

Todo el contenido vive en `src/data/`. Los componentes solo componen.
Ver `CLAUDE.md` en la raíz del repo para la arquitectura.
