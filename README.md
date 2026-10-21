# Flor & Joel · Invitación web 💍

**Casamiento:** viernes **27 de noviembre de 2026** · Sitio móvil gratuito, publicado en GitHub Pages.

- **Web:** https://jcaviglione.github.io/Boda-FyJ/
- **Repositorio:** https://github.com/jcaviglione/Boda-FyJ
- **Publicación:** rama `main`, directorio `/(root)` mediante GitHub Pages.
- **Para continuar en otro chat, leer primero:** [docs/ESTADO_Y_CONTINUIDAD.md](docs/ESTADO_Y_CONTINUIDAD.md)

## Arquitectura

| Ruta | Función |
| --- | --- |
| `index.html` | Página de entrada, Google Fonts, CSS y módulo principal |
| `assets/styles.css` | Diseño mobile-first, color marfil, verde oliva, botánica y bordes suaves |
| `assets/*.webp` | Fotos y adornos; preservar imágenes originales/alternativas para evaluar |
| `js/config.js` | Única fuente para fecha, direcciones, regalo, WhatsApp y fotos visibles |
| `js/main.js` | Montaje e interactividad (cuenta regresiva, alias, asistencia) |
| `js/utils.js` | Utilidades reutilizables |
| `js/components/` | Hero, Intro, **PhotoStory**, Events, Location, Attire, Gifts, RSVP, Memories, Footer |

**Mantener componentes separados; no regresar a un archivo monolítico.**

## Datos del evento

- **Civil:** viernes 27/11/2026, **11:00**, Chacabuco 737, 2.º piso, Nueva Córdoba, Córdoba.
- **Almuerzo:** **14:00**, quincho reservado, **dirección pendiente**. No inventar dirección ni trayecto real.
- **Mapita:** edificio del Registro Civil → camino ilustrado → quincho/casa de campo; dos hitos con horarios y direcciones.
- **Vestimenta:** casual elegante de verano.
- **Regalos:** Banco Galicia; alias `BODA.FYJ.2026`, titular Joel Alejandro Caviglione.
- **RSVP:** WhatsApp `5493516604351`. No hay base de datos: el invitado debe pulsar **Enviar** en WhatsApp.
- **Álbum de invitados:** MEGA File Request `https://mega.nz/filerequest/XYgfwuTCuYA`. El QR y botón permiten subir fotos/videos; no mostrar carpeta pública.
- **Mensajes digitales:** eliminados a pedido de los novios; los saludos son en persona.

## Fotografía y diseño — decisión ACTUAL

- Nombres en orden **Flor & Joel**, **enteros en cursiva**. Estética romántica, botánica, marfil, oliva, flores suaves y papel.
- **La sección «Sempiterno» / «Un poquito de nosotros» lleva exactamente UNA foto en blanco y negro**, **sin superposición**, centrada, derecha y a ancho legible.
- **Archivo aprobado:** `assets/flor-joel-bn-aprobada.webp`; corresponde a `wedding.photos.sempiterno`.
- **No volver a mostrar `flor-joel-cerca-hq.webp` en Sempiterno**; conservarla como alternativa no visible para posible elección futura.
- La **primera hoja (Hero)** lleva **exactamente las dos fotos enviadas el 21/10**: a color el atardecer como principal y la del beso B/N ligeramente superpuesta abajo a la derecha. Ambas verticales, sin girar, sin efectos de inclinación. **Sempiterno** sigue con una única foto B/N distinta y no se modificó.
- Las nuevas ediciones con IA y cambios de fondo, ropa o encuadre necesitan aprobación antes de publicarse; no inventar identidades ajenas.

## Otros archivos de fotografía guardados

- `assets/flor-joel-hero-atardecer.webp`: **foto principal NUEVA de portada**, vertical 1152 × 1536, 163 KB, color, sin girar.
- `assets/flor-joel-hero-beso-bn.webp`: **foto secundaria NUEVA de portada**, vertical 1229 × 1536, 245 KB, blanco y negro, apenas superpuesta.
- `assets/flor-joel-color-real.webp`: alternativa histórica, NO usada actualmente.
- `assets/flor-joel-parque-hq.webp`: alternativa histórica, NO usada actualmente.
- `assets/flor-joel-beso-bn-real.webp`: alternativa no usada actualmente.
- `assets/flor-joel-cerca-hq.webp`: alternativa no usada actualmente.
- `assets/botanica-flor-olivo.webp`: decoración botánica.

## Pendientes

1. Obtener dirección del quincho y actualizar en `js/config.js` `lunch.address`, `lunch.area` y `lunch.mapsQuery`.
2. Probar MEGA y el QR en un celular en incógnito con una foto y un video.
3. Revisar la web en Android/iPhone: fotos, links, estilos, alias y confirmación vía WhatsApp.
4. Revisar nuevos retratos **solo cuando el usuario los apruebe**; no reintroducir el collage en Sempiterno.
5. Opcional: fecha límite para confirmar asistencia, cartelitos QR para las mesas.

**No publicar DNI, lista privada de invitados, claves ni tokens.** Para evitar caché, al cambiar CSS/JS incrementá `?v=N` en `index.html` y mantené sincronizados los importadores de módulos; CSS v10, entrada JS v11; Hero y config cargan como v10.

## Auditoría y pruebas automáticas

- Ejecutar `node scripts/check-site.mjs` desde el repositorio (sin instalar paquetes).
- GitHub Actions: [`.github/workflows/site-audit.yml`](.github/workflows/site-audit.yml), revisión estática en cada push o PR.
- Informe: [`docs/AUDITORIA_2026-10-21.md`](docs/AUDITORIA_2026-10-21.md).
- **Pendiente de verificación presencial:** vista real en Android/iOS, confirmación de recepción en WhatsApp y subida de una imagen a MEGA. No confundir pruebas estáticas con pruebas de servicios externos.
