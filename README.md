# Invitación web — Flor & Joel 💍

Boda: **viernes 27 de noviembre de 2026**. Sitio móvil, gratuito y sin dominio propio.

## Dónde se publica

**Repositorio:** https://github.com/jcaviglione/Boda-FyJ  
**URL prevista tras activar GitHub Pages:** https://jcaviglione.github.io/Boda-FyJ/

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

- Portada **Flor & Joel**, fecha y florcitas; usa portada floral de respaldo si no se ha subido foto.
- Civil: 27/11/2026, 11:00, Chacabuco 737, 2.º piso, Nueva Córdoba, con enlace a Google Maps.
- Almuerzo: 14:00, **dirección a confirmar**. El botón aparece cuando se configure `lunch.mapsQuery`.
- Vestimenta: casual elegante de verano.
- Regalos: alias BODA.FYJ.2026, Banco Galicia; botón para copiar.
- Confirmación por WhatsApp: se genera el mensaje a **5493516604351**, el invitado debe tocar **Enviar**.
- QR y botón para fotos: **https://mega.nz/filerequest/XYgfwuTCuYA** (solicitud de archivos, no enlace público de la carpeta).
- Cuenta regresiva a la ceremonia.

## Pendientes

1. **Fotografías cargadas** en `assets/`: `flor-joel-portada.webp` (jardín), `flor-joel-beso.webp`, `flor-joel-byn.webp`. Optimización inicial para móviles; originales conservados.
2. Dirección real del quincho y enlace del mapa.
3. Probar el enlace de solicitud de MEGA en incógnito desde un celular, con foto y video, antes de imprimir QR.
4. Opcional: establecer una fecha límite para RSVP.
5. Verificar GitHub Pages en móvil (Android/iPhone) y la vista previa de WhatsApp.

**Privacidad:** no publicar DNI, lista de invitados, datos de menores ni contraseñas en este repo público. El QR de MEGA sirve únicamente para subir recuerdos; no mostrar el enlace de una carpeta compartida que permita ver fotos.
