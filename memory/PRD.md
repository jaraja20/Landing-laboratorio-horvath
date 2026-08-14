# PRD — Laboratorios Horvath · Advanced Science Hub (Landing/Sitio)

## Problema / objetivo
Sitio para Laboratorios Horvath según documentación técnica (Tekoha). Premium, dinámico, usable 15–80 años, regla de 2 clics, separación clara Personas vs Empresas, WhatsApp siempre visible. Evolucionó de one-page a **sistema multi-vista**.

## Decisiones (confirmadas con el usuario)
- Stack: **React (react-router) + FastAPI + MongoDB**. Supervisor: frontend :3000, backend :8001.
- **Vistas separadas**: Home (resumen), /personas, /empresas, /nosotros (historia completa + galería), /contacto.
- **Idioma ES/EN** con toggle global (afecta textos, labels de nav, mensajes de WhatsApp y el PDF de menú digital ES/EN). Persiste en localStorage.
- Formulario de contacto: WhatsApp o correo (mailto); leads en MongoDB.
- Botón flotante "volver arriba" + WhatsApp flotante.
- Más dinamismo: contadores animados, reveal on scroll, transiciones de página (framer-motion), blobs/animaciones en hero.

## Arquitectura
- `/app/frontend/src/i18n/` (LanguageContext + translations.js ES/EN).
- `/app/frontend/src/pages/` (Home, Personas, Empresas, Nosotros, Contacto).
- `/app/frontend/src/components/` (Layout, Header, MobileMenu, Footer, WhatsAppFloat, BackToTop, Stats, Partners, Gallery, PageFade, icons, iconMap).
- Assets: `/app/frontend/public/assets/img` (fotos, 15 logos, favicon) y `/app/frontend/public/assets/menus/` (menu-es.pdf, menu-en.pdf ~33MB c/u).
- Backend `/app/backend/server.py`: `/api/health`, `POST /api/leads`, `GET /api/leads` (MongoDB, PyObjectId).
- Feed de Instagram provisto quedó en `/tmp/feedrar` (no incorporado a la web; la galería usa fotos reales del sitio vía CDN).

## Implementado
- v1 (2026-08-13): one-page completa. Testing 100%.
- v2 (2026-08-13): refactor multi-vista + i18n ES/EN + back-to-top + framer-motion + páginas Personas/Empresas diferenciadas + galería en Nosotros + menú digital PDF por idioma. Testing iteration_2: 100%.
- v2.1 (2026-08-13): detalle COMPLETO de servicios (bullets ampliados, 4 personas + 3 empresas); Nosotros enriquecido con "Nuestra experiencia" (4) + "Hitos e innovación" (COVID aeropuerto, Fase III con Taiwán, exportación criogénica, peritos Corte Suprema); rediseño de fotos del equipo (2 tarjetas iguales); fixes móvil (scroll-cue oculto, botones centrados/full-width, header sin desbordar); Empresas hero: botón WhatsApp reemplazado por "Ver menú" (ES/EN). Testing iteration_3: 100%.
- v2.2 (2026-08-13): Home "Nuestra historia" con la FACHADA a la derecha en marco elegante con degradado; fondos decorativos de laboratorio (Unsplash) en heros de todas las vistas con viñeta; **Principios** con íconos 3D generados (IA) + descripción; en Nosotros, "Dirección científica" ahora va antes de "Nuestra experiencia"; correcciones de tildes voseo (Llamános, Escribínos, Encontrános, Contános); ancho del título de Alianzas para no pasar de 2 líneas. Fix runtime GALLERY_CDN (TDZ) inlineando HISTORY_IMG. Testing iteration_4: 100%.
- v2.3 (2026-08-13): íconos 3D convertidos a **PNG transparentes reales** (flood-fill de fondo con Pillow, auto-alojados en /assets/icons3d/) + halo circular; foto de la fachada en **B/N por defecto y a color al pasar el mouse**; fix del stat **-80°C** (soporte de prefijo en el contador). Testing iteration_5: 100%.
- v2.4 (2026-08-13): logo a jerarquía oficial de 3 niveles (LABORATORIOS pequeño / HORVATH grande serif / ADVANCED SCIENCE HUB pequeño cian) en header/menú/footer. Fix SPA en Vercel: agregado rewrite `/(.*) -> /index.html` en `/app/frontend/vercel.json` y `/app/vercel.json` (build monorepo: buildCommand `cd frontend && yarn build`, outputDirectory `frontend/build`). Testing iteration_6: **100%** (deep-links directos OK en preview; el fix de Vercel aplica tras push a GitHub + redeploy).
- v2.5 (2026-06): **refactor de arquitectura multi-vista por audiencia** (feedback cliente Msg 336). Nuevas páginas: `/pacientes` (perfiles por necesidad, action-cards en hero, cómo funciona, medios de pago + teaser convenios, categorías técnicas), `/empresas` (Salud Laboral: diferencial "asesor único", servicios, beneficios, marquesina de empresas clientes), `/advanced-science-hub` (servicios científicos con bullets), `/convenios` (cobertura, seguros/partners, medios de pago). App.js con las 7 rutas + redirect `/personas -> /pacientes`. **Nav sincronizada**: Header con desplegable "Más" (agrupa Advanced Science Hub + Convenios), MobileMenu y Footer con las 7 rutas; nueva key `nav.mas`/`nav.more`. CSS nuevo para action-cards, profiles-grid, como-steps, pagos/chips, convenios-teaser, differential-card, clients-marquee, cobertura-card + dropdown "Más". Nosotros ya refleja a Gabriela Horvath como CEO y única propietaria (legado Dra. Raquel). Fixes móvil anti-saturación de CTAs. Testing iteration_7: **100%** (incluye fix de bug HIGH: overlay del mobile-menu cerrado interceptaba clics → añadido visibility:hidden/pointer-events:none).

## Deploy en Vercel (notas)
- El SPA fallback se resuelve con el rewrite en vercel.json. Root del proyecto en Vercel puede ser `/app` (usa `/app/vercel.json` con build monorepo) o `frontend` (usa `/app/frontend/vercel.json`). Ambos configurados.
- Configurar en Vercel la variable de entorno `REACT_APP_BACKEND_URL` (apuntando al backend) para el formulario de leads.

## Notas / pendientes del cliente
- Correo de contacto PLACEHOLDER (`info@laboratoriohorvath.com`) — confirmar el real.
- Envío por correo usa **mailto** (abre app del usuario); envío server-side (SendGrid/Resend) requiere claves.
- PDFs de menú pesan ~33MB c/u; ideal optimizarlos/hostear en CDN antes del lanzamiento.
- Confirmar posible sucursal adicional (Eligio Ayala).

## Backlog (P1/P2)
- Optimizar/comprimir PDFs de menú.
- Envío real de correo por servidor (SendGrid/Resend).
- Panel admin de leads + paginación/anti-spam en /api/leads.
- Incorporar selección curada del feed de Instagram si el cliente lo desea.
- SEO/OG por vista, sitemap, hreflang ES/EN.
