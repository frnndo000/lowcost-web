# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primario — cliente de la pastelería:** persona en Viña del Mar (y alrededores) que
quiere comprar torta por porción o entera, kuchen y postres, o encargar una torta para una
celebración. Llega casi siempre desde el celular, muchas veces desde el Instagram del local,
con intención de ver qué hay, cuánto cuesta y cómo pedir — rápido.

**Secundario — la dueña del local (evaluadora):** hoy es la audiencia real del sitio, porque
esto es una **maqueta de venta**: ella decide si contrata el sitio. Debe reconocer su marca,
su carta y su forma de trabajar sin fricción.

## Product Purpose

Sitio de vitrina y pedido para **Amapola · Pastelería Sureña**. Centraliza en una sola página
lo que hoy está roto y disperso: productos, precios, reseñas y cómo pedir. Reemplaza el embudo
actual **Instagram → Linktree → "Nuestra carta" (Google Drive caído / 404)**, donde el cliente
literalmente no puede ver el menú. Éxito = el cliente encuentra el local al buscar en Google,
ve la carta al instante y pide por WhatsApp sin rebotes; y para la dueña, que la web se sienta
suya y valga la pena contratar.

## Positioning

Lo que un sitio vecino no puede copiar con verdad:

- **La carta siempre alcanzable** (no un link muerto) — es el problema concreto que este sitio
  existe para resolver y que su competencia local no resuelve.
- **Pedido por WhatsApp al precio de la carta, sin comisión de app** — alinea el incentivo del
  cliente (paga menos) con el margen del local.
- **Pastelería sureña de recetas familiares** con respaldo real: cuenta establecida
  (≈25 mil seguidores en Instagram) y **4,7★ con +1.000 valoraciones en Uber Eats**.

## Operating Context

- **Local único:** 5 Norte 380, entre 3 y 4 Poniente, Viña del Mar. Retiro en tienda.
- **Canales de pedido (modelo fijo, confirmado):** WhatsApp (+56 9 6119 0145) como canal
  principal, y Rappi / PedidosYa / Uber Eats como respaldo. **No hay pago online en el sitio.**
- **Formatos:** venta por porción (tienda/delivery) y **tortas enteras por encargo**.
- **Tortas temáticas fondant:** se coordinan por WhatsApp, en alianza con la cuenta hermana
  **@blooom.cakes** (relación vigente hoy; no declarada como permanente por el cliente).
- **Promos** de lunes a jueves (ej. "Dúo Dulce" trozo+kuchen $7.000; "Promo 2x" $8.000).

## Capabilities and Constraints

- Modelo de un solo local en la implementación actual (el cliente no lo fijó como permanente
  ni anticipó un segundo; tratar como estado actual, no como restricción cerrada).
- WhatsApp-first + apps de delivery; sin pago/checkout en el sitio.
- Datos de contacto y carta desde una **fuente única** (`src/data/`); un validador impide
  publicar con placeholders.
- **Pendientes sin confirmar (NO tratar como hechos):** horario de **tienda** (el 11:00–19:45
  publicado es el de *delivery*), **coordenadas exactas** del mapa, y **precios/plazos de las
  tortas enteras y personalizadas**.

## Brand Commitments

- **Nombre:** *Amapola* — es la flor (amapola/poppy). Activo de marca propio del negocio.
- **Logo real del cliente** (tomado de sus redes): wordmark script "Amapola" en rosa con
  contorno navy y subtítulo "Pastelería Sureña" en azul. Su paleta real es **rosa + azul +
  navy**; preservarla como identidad.
- **Voz:** cálida, casera, familiar y chilena — "la favorita de la casa", "recetas de familia",
  "hecho como en casa". Sin tecnicismos.
- **Identidad "sureña":** repostería del sur de Chile (kuchen, streusel, tortas de manjar).

## Evidence on Hand

Real y usable:
- **Carta completa con precios y descripciones** (rescatada de Uber Eats): ~14 tortas $7.000,
  kuchen $5.600, pie $5.600, tés $4.000.
- **Prueba social real:** 4,7★ · +1.000 valoraciones (Uber Eats) y **% de aprobación por
  producto** (ej. Torta Amor 93% de 211; Mixta 97% de 182).
- **Fotos reales** (limitadas): hero y 3 productos (torta mixta, torta amapola, kuchen mora),
  más 2 afiches de promo. Logo del cliente.
- Redes: Instagram @amapolapasteleriasurena, Facebook, @blooom.cakes.

Ausencias que el trabajo futuro **no debe inventar**: horario de tienda confirmado, coords
exactas, precios/plazos de encargo, fotos del resto de los productos, y el **texto** de las
reseñas (solo hay métricas agregadas de las apps, no citas de clientes).

## Product Principles

1. **La carta a un toque, nunca un link muerto.** Es la razón de existir del sitio; todo lo
   demás es secundario a que el menú se vea al instante.
2. **WhatsApp es la conversión.** Cada superficie mantiene el pedido sin fricción y sin
   comisión; la acción principal siempre al alcance, sobre todo en móvil.
3. **Solo datos reales y verificables.** Al ser un prospecto en frío y ser la exactitud local
   el valor del producto, lo no confirmado se marca pendiente — nunca se inventa.
4. **La prueba social es real y de las apps** (4,7★, % de aprobación), no testimonios
   fabricados.
5. **SEO local de Viña es objetivo de primera clase:** quien googlea "torta Viña del Mar" o
   "kuchen sureño delivery" debe encontrar a Amapola.

## Accessibility & Inclusion

No se estableció un requisito específico del cliente. La implementación mantiene contraste
**WCAG AA** con tokens de color documentados; conservarlo como estándar de trabajo.
