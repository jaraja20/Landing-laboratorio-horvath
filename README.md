# Laboratorios Horvath — Landing Page

Landing page one-page para Laboratorios Horvath (Advanced Science Hub), construida en HTML5 + CSS3 + JavaScript vanilla (sin frameworks ni dependencias de build), siguiendo la documentación técnica del proyecto (`documentacion/Horvath_Documentacion_Tecnica.docx`).

## Estructura

```
index.html          → toda la estructura y contenido de la página
css/style.css        → estilos, paleta de marca, animaciones y responsive
js/script.js          → menú móvil, animaciones al scroll, contador de estadísticas, formulario → WhatsApp
assets/img/           → imágenes (fotos reales del laboratorio + logos de aliados)
  favicon.svg          → monograma "H" de marca
  photos/               → fotografías (recortadas del feed de Instagram del laboratorio)
  logos/                → 15 logos de seguros/instituciones aliadas
```

No requiere build ni compilación: es HTML/CSS/JS estático. `package.json` y `vercel.json` están solo para facilitar el preview local y el deploy en Vercel — no generan ningún paso de compilación.

## 1. Ver el sitio en local (antes de subir nada)

Necesitás [Node.js](https://nodejs.org) instalado (cualquier versión reciente). Desde esta carpeta, en una terminal:

```bash
npm install
npm run dev
```

Esto levanta un servidor local en `http://localhost:3000` con el sitio funcionando exactamente igual que en producción (mismas rutas "limpias", mismo cacheo de estáticos). Dejalo corriendo y andá revisando cada sección en el navegador; con `Ctrl+C` lo parás.

Alternativas si no querés usar Node:
- Python: `python3 -m http.server 8080` → abrir `http://localhost:8080`
- VS Code: extensión "Live Server" → botón derecho en `index.html` → "Open with Live Server"

Los tres métodos muestran el sitio real, no hay diferencia de contenido — usá el que te resulte más cómodo.

## 2. Subir el código a GitHub

Desde esta misma carpeta, en una terminal:

```bash
git init
git add .
git commit -m "Landing page inicial — Laboratorios Horvath"
git branch -M main
git remote add origin https://github.com/jaraja20/Landing-laboratorio-horvath.git
git push -u origin main
```

## 3. Deploy en Vercel

Ya incluye `vercel.json` (URLs limpias y cacheo de imágenes) y `package.json`, así que Vercel lo detecta automáticamente como sitio estático — no hace falta configurar ningún "framework preset" ni comando de build.

**Opción A — desde el dashboard de Vercel (la más simple):**
1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión (podés usar tu cuenta de GitHub).
2. "Add New..." → "Project" → elegí el repo `Landing-laboratorio-horvath` que acabás de subir.
3. Framework Preset: dejalo en "Other" / detección automática. Build Command y Output Directory: dejalos vacíos (no aplica).
4. "Deploy". En un minuto te da la URL pública (`https://landing-laboratorio-horvath.vercel.app` o similar).
5. Cada vez que hagas `git push` a `main`, Vercel vuelve a desplegar solo.

**Opción B — desde la terminal con Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel        # deploy de prueba (preview)
vercel --prod # deploy a producción
```

## 4. Dominio propio

Una vez desplegado, en Vercel → tu proyecto → Settings → Domains podés conectar `laboratoriohorvath.com` (o el dominio que uses) apuntando los DNS según te indique Vercel.

## Pendientes / próximos ajustes sugeridos

- Reemplazar las fotos de `assets/img/photos/` por fotografía profesional dedicada cuando esté disponible (las actuales son recortes reales del feed de Instagram del laboratorio, ya en la línea de marca "Advanced Science Hub").
- Confirmar si existe una sucursal adicional (aparece una dirección distinta en directorios de terceros) antes de agregarla a la web.
- Definir si el formulario de contacto necesita guardar leads en un CRM/base de datos, o si el envío directo a WhatsApp (actual) es suficiente.
- Reemplazar el mapa embebido por coordenadas exactas (lat/long) si se quiere mayor precisión que la búsqueda por dirección.
- Revisar textos legales (política de privacidad) si se decide almacenar datos del formulario.

## Referencia

Ver `documentacion/Horvath_Documentacion_Tecnica.docx` para el detalle completo de arquitectura de información, copy por módulo, brandbook y especificaciones de accesibilidad usadas para construir este sitio.
