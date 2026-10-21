# Auditoría miniweb Flor & Joel · 21/10/2026

## Alcance y evidencia

Auditoría de **código fuente y recursos versionados** del repositorio `jcaviglione/Boda-FyJ`, rama `main`. Se verificaron los dos PNG recién enviados por los novios y sus conversiones reales a WebP mediante PIL. Incluye comprobaciones automáticas: `node scripts/check-site.mjs` y GitHub Actions `site-audit.yml`.

**Importante:** no equivale a un test visual interactivo en Android/iPhone. El despliegue de GitHub Pages debe revisarse por separado; tampoco es posible confirmar entrega real de mensajes por WhatsApp o cargas de MEGA sin utilizar esos servicios.

## Portada (solicitud actual)

- Color principal: `assets/flor-joel-hero-atardecer.webp` (1152 x 1536 px; 163074 bytes), derivada sin giro de la foto aportada `192715.png`.
- Blanco y negro secundario: `assets/flor-joel-hero-beso-bn.webp` (1229 x 1536 px; 244968 bytes), derivada sin giro de `192713.png`.
- Ambas son imágenes realmente verticales, sin dependencia de EXIF, transformadas solo a WebP, sin regenerar personas, caras, pose, ropa ni fondo.
- Comparación del PNG original y WebP: diferencia absoluta media aprox. **1,31** (color) y **1,24** (B/N) por componente RGB en escala 0–255; preservación muy alta.
- `Hero.js`: reemplaza las dos fotos viejas (la principal es la cálida y la B/N va superpuesta abajo/derecha). No poster ni imagen compuesta permanente.
- `styles.css`: foto grande 78 % del ancho del collage; B/N 48 % a la derecha con inicio al 57 % de la altura. Eliminados `rotate(-9deg)` y `rotate(9deg)`; ambos marcos e imágenes usan `transform:none!important`. Encajes respetan proporciones 3:4 y 4:5.
- `index.html`: caché de CSS v10; entrypoint JS v11, que carga Hero y config v10.

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
