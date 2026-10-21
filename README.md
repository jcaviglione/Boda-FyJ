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

## Fotografía y diseño — portada ACTUAL (21/10/2026)

- **Flor & Joel**, ambos nombres en letra cursiva. Estética romántica editorial: marfil, oliva, flores suaves, marcos redondeados.
- **PORTADA:** una fotografía **B/N del beso como principal, GRANDE y ADELANTE**, más una foto **a color corregida de orientación**, más chica y **DETRÁS**, con ligera superposición.
- **B/N principal:** `assets/flor-joel-hero-beso-bn.webp` (1229 × 1536 px, foto derecha de origen), `heroMono`.
- **Color secundaria:** `assets/flor-joel-hero-atardecer-upright.webp` (1536 × 1152 px, rostros ya en orientación correcta mediante rotación de píxeles), `heroColor`.
- Los marcos se inclinan apenas ±3°, pero el contenido fotográfico **nunca queda acostado**. **Último ajuste**: fotografía B/N de ancho 75% y foto a color debajo/detrás del 77%, comienza al 57% del collage más alto (aspect-ratio 0.62). Se deja casi toda la color a la vista: no tapar a Flor y Joel ni crear una pila enorme que la esconda.
- Se mantienen fotos separadas, **NO subir ni usar un póster generado**.
- **SEMPITERNO ES OTRA HOJA:** conserva exactamente **UNA foto B/N** aprobada, `assets/flor-joel-bn-aprobada.webp`, completa y sin superposición. No volver a ponerle una segunda imagen.
- Cambios futuros de rostro, pose, ropa o fondos solo previa aprobación del usuario.

## Otros archivos de fotografía guardados

- `assets/flor-joel-hero-atardecer-upright.webp`: **color secundaria trasera actual, corregida para que rostros estén derechos**, 1536 × 1152 px, 198 KB.
- `assets/flor-joel-hero-beso-bn.webp`: **blanco y negro PRINCIPAL delantero**, 1229 × 1536 px, 245 KB.
- `assets/flor-joel-hero-atardecer.webp`: versión lateral anterior, archivada, NO se usa.
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

**No publicar DNI, lista privada de invitados, claves ni tokens.** Para evitar caché, al cambiar CSS/JS incrementá `?v=N` en `index.html` y mantené sincronizados los importadores de módulos; CSS v13, entrada JS v12; Hero y config cargan como v12.

## Auditoría y pruebas automáticas

- Ejecutar `node scripts/check-site.mjs` desde el repositorio (sin instalar paquetes).
- GitHub Actions: [`.github/workflows/site-audit.yml`](.github/workflows/site-audit.yml), revisión estática en cada push o PR.
- Informe: [`docs/AUDITORIA_2026-10-21.md`](docs/AUDITORIA_2026-10-21.md).
- **Pendiente de verificación presencial:** vista real en Android/iOS, confirmación de recepción en WhatsApp y subida de una imagen a MEGA. No confundir pruebas estáticas con pruebas de servicios externos.
