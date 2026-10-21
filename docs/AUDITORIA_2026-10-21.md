# Auditoría miniweb Flor & Joel · 21/10/2026

## Alcance y evidencia

Auditoría de **código fuente y recursos versionados** del repositorio `jcaviglione/Boda-FyJ`, rama `main`. Se verificaron los dos PNG recién enviados por los novios y sus conversiones reales a WebP mediante PIL. Incluye comprobaciones automáticas: `node scripts/check-site.mjs` y GitHub Actions `site-audit.yml`.

**Importante:** no equivale a un test visual interactivo en Android/iPhone. El despliegue de GitHub Pages debe revisarse por separado; tampoco es posible confirmar entrega real de mensajes por WhatsApp o cargas de MEGA sin utilizar esos servicios.

## Portada (decisión más reciente · corrección urgente)

- **BLANCO Y NEGRO principal, en primer plano**: `assets/flor-joel-hero-beso-bn.webp` (1229 × 1536 px, 244968 bytes), imagen derecha de origen, grande a la izquierda, CSS `z-index:2`.
- **COLOR secundaria DETRÁS**: `assets/flor-joel-hero-atardecer-upright.webp` (1536 × 1152 px, 197994 bytes), imagen fuente girada en píxeles hasta dejar rostros derechos; CSS `z-index:1`.
- Esto soluciona un error comprobado en una captura de Android, donde la foto a color figuraba acostada y demasiado protagonista. **No generar póster ni sustituir los rostros**.
- Los dos marcos tienen ligera inclinación de papel de ±3°, **no rotaciones de 90° en CSS**. Blanco y negro 78 % del ancho; color 63 % atrás, aparece en esquina inferior derecha.
- `Sempiterno`: otra sección, intacta, con una sola foto B/N distinta.
- `index.html`: CSS v12 y JS v12; Hero/config usan v12. Metadatos OG priorizan la foto principal B/N.
- Auditoría automatizada: `scripts/check-site.mjs` con checks de la jerarquía y rutas de las imágenes.
- **Pendiente**: la prueba visual del móvil y comprobación de cache/red, que no cubre por sí sola un test estático.

## Otras secciones, datos y servicios

- «Sempiterno»: se conserva **una sola foto aprobada**, sin superposición (`flor-joel-bn-aprobada.webp`).
- Ceremonia: viernes 27/11/2026, 11:00, Chacabuco 737 2.º piso, Nueva Córdoba.
- Almuerzo: 14:00; **dirección A confirmar** (no se inventó).
- Mapa ilustrado Registro Civil → casa de campo, dos paradas; no es ruta real hasta asignar el segundo domicilio.
- Vestimenta: casual elegante de verano.
- Regalos: `BODA.FYJ.2026`, Banco Galicia.
- RSVP: número correcto y botón que redirige a WhatsApp con mensaje prellenado; envío definitivo a cargo del invitado. Se conserva un botón alternativo.
- Fotos de invitados: MEGA File Request `https://mega.nz/filerequest/XYgfwuTCuYA`, con QR. La carga de prueba es **pendiente**.
- Metadatos OG para compartir el enlace: título, descripción y foto nueva de la portada.
- Sin publicación del DNI del titular ni de lista de invitados.

## Estado

**Confirmación técnica:** archivos WebP válidos, resolución vertical, rutas CSS/JS corregidas, documentación actualizada, pruebas estáticas automatizadas. **PENDIENTES**: confirmar despliegue con GitHub Actions; abrir la web desde celular, comprobar orden y tamaños visuales; probar MEGA y WhatsApp; completar la dirección del quincho.

**Continuidad:** `docs/ESTADO_Y_CONTINUIDAD.md` y `README.md`. Mantener la estructura en componentes.
