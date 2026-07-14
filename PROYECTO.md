# 📘 PROYECTO — Documento maestro

> **Si eres nuevo en el equipo o te perdiste, empieza aquí.**
> Este documento contiene todo el contexto del proyecto: qué hacemos, por qué,
> cómo trabajamos y qué sigue. No deberías necesitar preguntarle nada a nadie
> para entender el proyecto después de leer esto.

**Última actualización:** 14 de julio de 2026
**Equipo:** Fernando (`frnndo000`) · Rafael
**Repositorio:** https://github.com/frnndo000/lowcost-web
**Sitio en producción:** https://hustlewebs.fernando-lopez-m01.workers.dev

---

## 1. Qué es esto

Somos dos estudiantes de Ingeniería Civil Informática (PUCV, 5º semestre) construyendo
un negocio de sitios web de bajo costo para PYMEs de la Región de Valparaíso.

Aprendemos desarrollo web desde cero y documentamos cada paso en este repositorio.

**Meta:** conseguir el primer cliente pagado antes de que terminen las vacaciones de invierno.

---

## 2. Propuesta de valor

**No vendemos software. Vendemos visibilidad y credibilidad.**

Muchos negocios locales (dentistas, barberos, psicólogos, tiendas de Instagram) ya usan
herramientas de agendamiento que les funcionan — Reservo, Agendapro, Booksy. **No queremos
reemplazarlas.** Les damos la cara pública que hoy no tienen:

1. Un sitio rápido, moderno y responsive que genere confianza
2. Que aparezca en Google cuando alguien busca su servicio en su comuna
3. Con integración directa a la herramienta de agendamiento que **ya usan**
4. Y contacto por WhatsApp a un clic

### ⚠️ Dónde está el valor real

**El código no es el diferenciador.** Cualquiera hace una landing. Lo que nos diferencia:

| Diferenciador | Por qué importa |
|---|---|
| **SEO local + Google Business Profile** | El 90% de las webs PYME de Valparaíso no lo tienen bien hecho. Un dentista que aparece primero en Google Maps gana más que uno con una web bonita e invisible. |
| **Velocidad medible** | Mostrarle al cliente el PageSpeed de su competencia vs. el nuestro es un argumento de venta demoledor. |
| **Trato local y presencial** | Somos de acá. Vamos a su local. |
| **Precio** | Entramos por abajo del mercado. |

**Nuestra competencia real no es Reservo. Es Wix, un primo que "sabe computación",
y las agencias de $250.000.** Si no dominamos el SEO local, vendemos lo mismo que Wix
pero más caro.

---

## 3. Los dos productos

### Producto 1 — Sitio con agendamiento externo
Para: dentistas, barberos, psicólogos, kinesiólogos, centros de estética, tatuadores.

Sitio de 3-5 páginas + SEO local + Google Business + botón que enlaza a su herramienta
de agendamiento actual + WhatsApp.

### Producto 2 — Catálogo digital
Para: tiendas de ropa que venden por Instagram.

Catálogo estático + carrito en JavaScript (`localStorage`) + botón "Comprar" que arma
un mensaje de WhatsApp pre-llenado con los productos y el total. **Sin backend.**

La gestión de envíos v1 es una planilla + links de seguimiento de Chilexpress/Starken.
El panel de pedidos real es el **upsell de la v2**, cuando ya nos paguen.

---

## 4. Stack técnico

| Capa | Herramienta | Notas |
|---|---|---|
| Framework | **Astro** | Estático, rapidísimo, óptimo para SEO. Curva mínima desde HTML. |
| Estilos | **Tailwind CSS** | |
| Lenguajes | HTML, CSS, JavaScript | |
| Hosting | **Cloudflare Workers/Pages** | Gratis, permite uso comercial, republica con cada push |
| Formularios | Web3Forms / Formspree | Free tier, sin servidor |
| Diseño | Figma | Plan Education gratis |
| Versionado | Git + GitHub | |
| Analítica | Google Analytics + Search Console | |
| Visibilidad | Google Business Profile, Schema.org | |

### ❌ Lo que NO usamos (y por qué)
- **Vercel Hobby** → su licencia prohíbe uso comercial
- **Next.js/React** → overkill para sitios estáticos, curva más larga
- **Base de datos / backend / login** → no los necesitamos. Cero costo, cero complejidad.
- **Google Workspace** → es de pago. Usamos Gmail gratis.

### 💰 Costo fijo de operación: **$0/mes**
El dominio `.cl` (~$10.000/año en NIC Chile) **lo paga el cliente**, no nosotros.
Costo marginal por cliente: ~$5.000/mes. Margen bruto: ~95%.

---

## 5. Modelo de negocio

### Precios

| Plan | Precio (pago único) | Incluye |
|---|---|---|
| **Esencial** | $139.000 | 1 página, responsive, WhatsApp, link agendamiento, Maps, SSL |
| **Profesional** ⭐ | $229.000 | 3-5 páginas, SEO local, Google Business optimizado, Schema, Analytics, formulario |
| **Catálogo** | $259.000 | Catálogo + carrito WhatsApp + guía de envíos |
| Extras | +$40.000-120.000 | Blog, fotos, redacción, pasarela de pago |

### Mantención mensual — **aquí está el negocio real**
**$9.900 – $14.900/mes**
- Hosting y dominio administrados, SSL, backups
- Hasta 2 cambios menores al mes (precios, horarios, fotos)
- Reporte mensual de visitas y posición en Google
- Gestión del Google Business Profile

**Punto de equilibrio: ~4 clientes en mantención.** De ahí, casi todo es utilidad.

### Reglas comerciales
- **Precio fundador:** primeros 2-3 clientes a 50% off, a cambio de testimonio en video + permiso para usarlos como caso de estudio
- **50% adelantado**, 50% contra entrega
- **El dominio siempre a nombre del cliente**
- Alcance cerrado por contrato: **2 rondas de cambios incluidas**

---

## 6. Clientes objetivo — Región de Valparaíso

### Producto 1 (agendamiento)
Barberías (Av. San Martín, 15 Norte, Cerro Alegre) · centros de uñas y estética ·
dentistas y psicólogos con consulta particular · kinesiólogos · nutricionistas ·
tatuadores · veterinarias pequeñas · entrenadores personales.

**Quilpué y Villa Alemana:** menos competencia de agencias, mismo poder adquisitivo.

### Producto 2 (catálogo)
Tiendas de ropa de Instagram en Viña / Quilpué / Villa Alemana · ropa vintage y segunda
mano (escena fuerte en Valparaíso) · joyería artesanal · streetwear · ropa infantil.

### Cómo prospectar
1. **Instagram** → buscar por ubicación y hashtags (`#ropaviña`, `#barberiaviña`).
   Filtrar los que **no tienen link a web en la bio** → ese es el lead.
2. **Google Maps** → negocios con buenas reseñas y sin sitio web
3. **Presencialmente**, con el notebook. En Viña/Valpo funciona mucho mejor que el DM frío.
4. **Red PUCV** → compañeros, familia. El primer cliente casi siempre sale de aquí.

Todo va a `negocio/prospectos.md`. **Meta: 30 prospectos para el día 14.**

---

## 7. Roadmap

### Fase 1 — Aprendizaje (días 1-8)
- [ ] **Día 1-2:** HTML semántico
- [ ] **Día 3-4:** CSS — box model, Flexbox, Grid, responsive/mobile-first
- [ ] **Día 5:** Tailwind CSS
- [ ] **Día 6:** Git avanzado (ramas, PRs) + deploy
- [ ] **Día 7-8:** JavaScript esencial (DOM, eventos, `localStorage`)

### Fase 2 — Prototipos (días 9-14)
- [ ] **Día 9-10:** Astro + **Prototipo 1** (sitio con agendamiento externo)
- [ ] **Día 11-12:** SEO local, Schema.org `LocalBusiness`, Google Business, PageSpeed 95+
- [ ] **Día 13-14:** **Prototipo 2** (catálogo + carrito WhatsApp)

### Fase 3 — Venta (día 15+)
- [ ] 30 prospectos identificados
- [ ] Pitch y material de venta
- [ ] Informe comparativo de PageSpeed como gancho
- [ ] **Primer cliente** 🎯

---

## 8. Cómo trabajamos

### Roles
| Persona | Foco (desde el día 9) |
|---|---|
| Fernando | Frontend / diseño / Figma |
| Rafael | SEO / Google Business / deploy / comercial |

Los primeros 8 días **ambos estudian lo mismo.**

### Ceremonias
- **Sprints de 1 semana**, gestionados en GitHub Projects
- **Daily de 15 min** (WhatsApp o presencial): qué hice, qué haré, qué me bloquea
- **Review el domingo**
- **Commit diario obligatorio**, aunque sea de una línea

### Flujo de Git

```bash
git pull                      # SIEMPRE antes de empezar
git checkout -b dia1-tunombre # rama propia para tu trabajo
# ...trabajas...
git add .
git commit -m "mensaje claro"
git push -u origin dia1-tunombre
# → abrir Pull Request en GitHub → el otro revisa → merge
```

**Regla de oro:** `pull` antes, `push` después.
Si `push` es rechazado → alguien subió algo primero → `git pull` y reintenta.

### Estructura del repo

```
.
├── PROYECTO.md      ← este archivo
├── README.md        Presentación pública del proyecto
├── bitacora/        Registro diario (uno por persona por día)
├── recursos/        setup.md, enlaces, apuntes
├── negocio/         precios, prospectos, propuesta comercial
└── prototipos/
    ├── practica/    Ejercicios de aprendizaje
    ├── 01-agendamiento/
    └── 02-catalogo/
```

### Formato de bitácora
Cada entrada responde tres preguntas:
1. **¿Qué hicimos?**
2. **¿Qué aprendimos?** ← la sección más valiosa. Cada error documentado hoy es un
   error que no cometemos frente a un cliente en agosto.
3. **¿Qué quedó pendiente?**

---

## 9. Riesgos conocidos

| Riesgo | Mitigación |
|---|---|
| **Enamorarnos de aprender y nunca vender** ⚠️ *el modo de falla nº1* | 1h diaria de prospección desde el día 3. **Día 15 hablamos con el primer negocio real, aunque el prototipo esté al 80%.** |
| Quemarnos con ritmo insostenible | 6-7h efectivas/día, no 12. Un día libre a la semana. El KPI es el commit diario, no las horas. |
| Competir contra Wix sin diferenciador | Dominar SEO local y Google Business. Es lo que nadie más hace bien. |
| Perfeccionismo en el prototipo | Un prototipo al 80% mostrado vale infinitamente más que uno al 100% guardado. |

### El KPI que importa
**No es cuántas horas programamos. Es cuántas conversaciones con clientes reales tuvimos.**

---

## 10. Estado actual

**✅ Día 0 completado (13 de julio de 2026)**
- Entorno montado en ambas máquinas (Node, Git, VS Code, extensiones)
- Repositorio creado con estructura y README
- Primera página desplegada en producción vía Cloudflare
- Cuentas: GitHub, Cloudflare, Gmail de la agencia

**→ Siguiente: Día 1 — HTML semántico**

---

## 11. Recursos

- [MDN Web Docs](https://developer.mozilla.org/es/) — referencia de HTML/CSS/JS
- [freeCodeCamp — Responsive Web Design](https://www.freecodecamp.org/)
- [Kevin Powell (YouTube)](https://www.youtube.com/@KevinPowell) — el mejor profesor de CSS
- [javascript.info](https://javascript.info/)
- [Flexbox Froggy](https://flexboxfroggy.com/) · [Grid Garden](https://cssgridgarden.com/)
- [Docs de Tailwind](https://tailwindcss.com/docs)
- [Tutorial oficial de Astro](https://docs.astro.build/)
- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Frontend Masters (vía GitHub Student Developer Pack)

Ver también: [`recursos/setup.md`](./recursos/setup.md) para montar el entorno desde cero.
