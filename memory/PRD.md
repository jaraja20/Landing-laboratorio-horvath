# PRD — Laboratorios Horvath · Advanced Science Hub (Landing)

## Problema / objetivo
Landing one-page (scroll vertical) para Laboratorios Horvath según documentación técnica (Tekoha Systems).
Objetivo: premium, completa, dinámica, usable para edades 15–80, regla de 2 clics, separación clara Personas vs Empresas, WhatsApp siempre visible.

## Decisiones (confirmadas con el usuario)
- Stack: **React** (frontend) + **FastAPI + MongoDB** (backend). El proyecto original venía en HTML/CSS/JS vanilla; se reconstruyó fielmente en React sobre la estructura de la plataforma (supervisor: frontend :3000, backend :8001).
- Formulario de contacto: opción **WhatsApp** o **correo** (mailto). Todos los leads se guardan en MongoDB.
- Mapa: Av. Aviadores del Chaco N° 2530, Asunción.
- Logos de aliados: assets reales ya incluidos (15 logos).

## Arquitectura
- Frontend `/app/frontend` (CRA). Componentes por sección en `src/components/`, datos/constantes en `src/data.js`, íconos SVG en `src/components/icons.jsx`. Estilos en `src/index.css` (paleta brandbook, tipografía Onest, animaciones reveal/counters).
- Assets en `/app/frontend/public/assets/img` (favicon monograma H, fotos, logos).
- Backend `/app/backend/server.py`: `/api/health`, `POST /api/leads`, `GET /api/leads` (MongoDB, patrón PyObjectId).
- El proyecto vanilla original permanece en `/app` (index.html, css/, js/) como referencia.

## Implementado (2026-08-13)
- Header sticky + nav ancla + botón WhatsApp permanente; menú móvil overlay.
- Hero con bifurcación Personas/Empresas + línea de confianza + stats animados.
- Nosotros (historia, misión, 6 valores), Servicios Personas (4) y Empresas (3) con CTA WhatsApp.
- Metodología (3 pasos), Alianzas (marquee de logos), Galería (tabs + lightbox), Ubicación (mapa + cómo llegar), Contacto (acciones + formulario WhatsApp/correo), Footer, botón flotante WhatsApp.
- Backend de captura de leads (WhatsApp/email). Testing agent: 100% backend y frontend.

## Notas / pendientes del cliente
- Correo de contacto es PLACEHOLDER (`info@laboratoriohorvath.com`) — confirmar el real.
- Envío de correo usa **mailto** (abre app del usuario). Para envío server-side (SendGrid/Resend) se requieren claves.
- Confirmar posible sucursal adicional (Eligio Ayala) antes de publicarla.
- Reemplazar fotos por fotografía profesional dedicada cuando esté disponible.

## Backlog / próximos (P1/P2)
- Panel admin para ver leads guardados.
- Envío real de correo por servidor (integración SendGrid/Resend).
- SEO avanzado / Open Graph con imagen, sitemap.
- Menú digital (PDF ES/EN) enlazado como en el sitio original.
