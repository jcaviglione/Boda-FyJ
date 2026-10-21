# Flor & Joel · Invitación web

**Miniweb:** https://jcaviglione.github.io/Boda-FyJ/  
**Repo:** https://github.com/jcaviglione/Boda-FyJ · **branch** `main` · GitHub Pages gratis.

## Diseño actual (21/10/2026) — cambios publicados en GitHub

- **Portada (Hero):** la foto principal del beso en B/N **permanece** (`assets/flor-joel-hero-beso-bn.webp`). La foto secundaria anterior a color fue **reemplazada** por la foto del parque B/N, **segunda imagen del último mensaje** (`assets/flor-joel-hero-parque-bn-v15.webp`). Son dos fotografías derechas, una principal delante y otra debajo con superposición mínima.
- **Sempiterno (PhotoStory):** la foto única fue reemplazada por **dos fotos**, las **dos últimas imágenes del mensaje del usuario**: primero la foto cálida de Flor y Joel apoyados en la mesa (`assets/flor-joel-sempiterno-calida-v15.webp`); después el primer plano B/N (`assets/flor-joel-sempiterno-cerca-bn-v15.webp`). No tapar rostros; se muestran ambas completas, como dos polaroids sutilmente escalonadas.
- Nombres **Flor & Joel**, con cursiva, paleta marfil/verde oliva, flores botánicas reales.
- **No generar pósters**, no redibujar ni cambiar caras. El usuario pide editar y publicar **la miniweb**, y **no programa**. Nunca pedirle pegar CSS o hacer comandos.
- Actualización de caché en `index.html` v15; imports de componentes v15. Foto ya aprobada de Sempiterno anterior `flor-joel-bn-aprobada.webp` se conserva archivada pero no se muestra.

## Datos del evento
- Fecha: **viernes 27/11/2026**.
- Civil **11:00**, Chacabuco 737, 2.º piso, Nueva Córdoba, Córdoba.
- Almuerzo **14:00**, quincho **dirección a confirmar**. Mapa de Registro Civil → casita de campo ilustrativa.
- Vestimenta: **casual elegante de verano**.
- Banco Galicia, alias regalo `BODA.FYJ.2026`. No publicar DNI.
- RSVP vía WhatsApp `5493516604351`, el invitado pulsa Enviar.
- Fotos de invitados: QR de solicitud gratuita MEGA `https://mega.nz/filerequest/XYgfwuTCuYA`.
- Sin mensajes/dedicatorias digitales.

## Arquitectura
`js/config.js` concentra datos y rutas de fotos; `js/components/Hero.js` portada; `js/components/PhotoStory.js` Sempiterno; las demás secciones son componentes independientes en `js/components/`; `js/main.js` monta componentes y RSVP/cuenta regresiva; `assets/styles.css` estilos; `index.html` entrada; `scripts/check-site.mjs` pruebas estáticas en GitHub Actions.

## Pendientes
1. Confirmar dirección exacta del quincho y cargarla en `js/config.js`.
2. Probar con móvil el QR de MEGA y subida real de fotos/videos.
3. Validar visualmente en Android/iPhone las dos secciones y comprobar links.
4. Otras fotos y cambios de diseño requieren aprobación de Flor & Joel.

Más contexto: `docs/ESTADO_Y_CONTINUIDAD.md`.

## Safari iPhone: adornos SVG y fotos de Sempiterno
- La captura de los textos enormes era **zoom intencional**: no hay un problema de desborde confirmado, no se cambian títulos ni tamaño general por eso.
- El asterisco decorativo **✳** era convertido por iOS en un emoji verde. Se reemplazaron también otras florcitas/estrellas de los componentes visibles por **SVG reutilizables**, `decorativeMark` en `js/utils.js`. SVG evita depender de fuentes emoji: utiliza el color rosa/oliva del CSS.
- En la sección **Sempiterno**, el retrato inferior B/N se centra (`align-self:center`), pasa a **82%** del contenedor y utiliza separación de 14px sin montaje que oculte las caras.
- Versiones de `index.html`: CSS v15 y entrada JS v15. Los componentes modificados tienen imports v15 y todas las nuevas importaciones de utilidades usan `../utils.js?v=15`.
- Comprobaciones en `scripts/check-site.mjs`. Continuar editando el repo en GitHub: el usuario **no programa**.
