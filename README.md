# Invitación web — Flor & Joel 💍

Boda: **viernes 27 de noviembre de 2026**. Sitio móvil, gratuito y sin dominio propio.

## Dónde se publica

**Repositorio:** https://github.com/jcaviglione/Boda-FyJ  
**Web pública en GitHub Pages:** https://jcaviglione.github.io/Boda-FyJ/

Para activar Pages una única vez: abrir el repositorio → **Settings** → **Pages** → **Build and deployment** → **Deploy from a branch** → rama **main** → carpeta **/(root)** → **Save**.

No hay suscripciones, servidores ni claves de terceros para la web.

## Organización

- `index.html`: documento HTML mínimo.
- `assets/styles.css`: estilos e identidad visual, mobile-first.
- `js/config.js`: datos editables (fecha, direcciones, WhatsApp, alias y enlace del álbum).
- `js/main.js`: monta los componentes y maneja las interacciones.
- `js/utils.js`: auxiliares.
- `js/components/`: **Hero, Intro, Events, Location, Attire, Gifts, RSVP, Memories, Footer**.

## Funciones

- Portada **Flor & Joel** en cursiva, collage de dos fotos reales (una a color cálido y otra en blanco y negro), fecha y ornamentación floral. La sección **Sempiterno** muestra otras dos fotografías diferentes.
- Civil: 27/11/2026, 11:00, Chacabuco 737, 2.º piso, Nueva Córdoba, con enlace a Google Maps.
- Almuerzo: 14:00, **dirección a confirmar**. El botón aparece cuando se configure `lunch.mapsQuery`.
- Vestimenta: casual elegante de verano.
- Regalos: alias BODA.FYJ.2026, Banco Galicia; botón para copiar.
- Confirmación por WhatsApp: se genera el mensaje a **5493516604351**, el invitado debe tocar **Enviar**.
- QR y botón para fotos: **https://mega.nz/filerequest/XYgfwuTCuYA** (solicitud de archivos, no enlace público de la carpeta).
- Cuenta regresiva a la ceremonia.

## Fotografías verdaderas, nueva versión

Todas salen de archivos originales aportados por Flor & Joel. **No hay generación ni reemplazo de caras, ropa, cuerpos o escenarios**. Solo se enderezaron, recortaron y ajustaron contraste/luminosidad; dos se pasaron a blanco y negro.

- `assets/flor-joel-color-real.webp` — 922 × 1152 px, retrato bajo el sol.
- `assets/flor-joel-parque-hq.webp` — 640 × 800 px, beso en el parque en B/N.
- `assets/flor-joel-beso-bn-real.webp` — 922 × 1152 px, beso en B/N.
- `assets/flor-joel-cerca-hq.webp` — 720 × 900 px, primer plano natural en color.

## Pendientes

1. Dirección real del quincho y enlace de Google Maps.
2. Probar subida a MEGA en incógnito y el QR antes de imprimir.
3. Opcional: fecha límite de asistencia.
4. Revisar diseño y flujos finales en Android y iPhone.

**Privacidad:** no publicar DNI, lista de invitados, datos de menores ni contraseñas en este repo público. El QR de MEGA sirve únicamente para subir recuerdos; no mostrar el enlace de una carpeta compartida que permita ver fotos.
