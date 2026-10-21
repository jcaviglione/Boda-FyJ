# Flor & Joel · 27.11.2026

Invitación digital móvil de la boda de Flor & Joel.

## Estructura
- `index.html` — entrada GitHub Pages
- `assets/styles.css` — identidad visual y estilos adaptables
- `js/main.js` — montaje de secciones e interacciones
- `js/config.js` — datos centralizados y enlaces configurables
- `js/components.js` — secciones iniciales
- `js/components/RSVP.js` — formulario de confirmación por WhatsApp
- `js/components/Memories.js` — QR para subir recuerdos
- `js/components/` — componentes independientes en progreso

## Publicación
Repositorio público, rama `main`. En GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.
URL prevista: https://jcaviglione.github.io/Boda-FyJ/

## Pendientes para la versión final
1. Dirección exacta del quincho (almuerzo 14:00).
2. Confirmaciones preparadas para enviar por WhatsApp al número configurado. El invitado debe tocar Enviar en WhatsApp.
3. Fecha límite RSVP si se decide mostrar.
4. Crear una solicitud de archivos gratuita en MEGA y pegar el enlace de carga en `albumUploadUrl`. Los invitados no requieren cuenta. Hacer una carga de prueba desde incógnito antes de imprimir el QR.
5. Integrar las fotos editadas ya aportadas por la pareja como archivos reales en `assets/`.
6. Vista previa WhatsApp (imagen social OG); diseño final y prueba móvil.
7. Comprobar activación de GitHub Pages y el enlace definitivo.

### Foto/álbum
Carpeta de respaldo privada en Google Drive: https://drive.google.com/drive/folders/1mrS7wY6JGmPZfCkOP-VPSXiIgAGQxUM1

**Recepción de fotos:** MEGA (File Request), plan gratuito de 20 GB. El enlace aún está pendiente. No confundir enlaces públicos de compartir archivos (lectura) con enlaces de solicitud (subida). Al finalizar, descargar originales y respaldarlos en Drive.

**Privacidad:** no publicar DNI, teléfonos de invitados, listado de invitados ni tokens en archivos públicos. El QR actual conduce a la sección de recuerdos de la web; el botón de subida permanece inactivo hasta asociar el proveedor.

### RSVP
Mientras el número de contacto no esté configurado, el formulario prepara el mensaje y abre WhatsApp para elegir el destinatario; no envía ni almacena confirmaciones automáticamente.
