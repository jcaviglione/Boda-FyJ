# ÚLTIMA CORRECCIÓN: iPhone Safari + Sempiterno (21/10/2026)

- El símbolo decorativo ✳ de vestimenta y del cierre aparecía como emoji verde en iOS. Se sustituyó por un SVG vectorial reutilizable, al igual que otras flores y estrellas decorativas en Intro, Events, RSVP y Memories. Helper: `js/utils.js` → `decorativeMark`; CSS clases `.deco-svg`. Ninguna depende de fuentes emoji.
- La foto B/N inferior de «Sempiterno» estaba a la derecha. Ahora centrada, 82% del ancho, margen superior 14px y sin superposición.
- Las capturas enormes del iPhone eran **ZOOM realizado deliberadamente** para mostrar el emoji. No hacer rediseño global por supuesto desborde.
- Los cambios deben ejecutarse por GitHub y probarse en móvil; NUNCA pedir al usuario que programe ni darle CSS suelto. Sitio: https://jcaviglione.github.io/Boda-FyJ/ . Versión 15 de CSS y entrada JS.
- Continúa pendiente cargar dirección exacta del quincho y probar upload MEGA. El resto de datos del evento se mantiene.

---

# Estado de continuidad — Boda Flor & Joel (21 de octubre de 2026)

**ÚLTIMA ORDEN (realizada en GitHub):** En la portada de la miniweb reemplazar la foto a color con la segunda imagen del mensaje del usuario (Flor & Joel en el parque en blanco y negro), **conservando la B/N del beso como principal**. En la hoja «Sempiterno» reemplazar la única foto por **las dos últimas**: fotografía cálida sobre la mesa y primer plano blanco y negro. Respetar posiciones y orientación; no tapar caras ni generar carteles.

**Archivos activos:**
- Portada principal: `assets/flor-joel-hero-beso-bn.webp` (B/N beso).
- Portada secundaria: `assets/flor-joel-hero-parque-bn-v14.webp` (B/N parque).
- Sempiterno primera: `assets/flor-joel-sempiterno-calida-v14.webp` (color interior).
- Sempiterno segunda: `assets/flor-joel-sempiterno-cerca-bn-v14.webp` (B/N primer plano).

**Código:** `jcaviglione/Boda-FyJ` rama `main`, sitio https://jcaviglione.github.io/Boda-FyJ/ · `js/config.js` · `js/components/Hero.js` · `js/components/PhotoStory.js` · `assets/styles.css`. Archivos son WebP de buena calidad basados en imágenes enviadas por el usuario, sin regeneración. Caché v14, tests `scripts/check-site.mjs`.

**El usuario NO programa**, por eso siempre editar directamente en GitHub. NO ofrecer CSS para pegar ni pósters. Siempre **Flor & Joel** en cursiva y estilo marfil/verde oliva, floral.

**Datos del evento:** viernes 27/11/2026, civil 11:00 en Chacabuco 737 2.º piso, Nueva Córdoba, Córdoba; almuerzo 14:00 en quincho, dirección pendiente. Regalos alias BODA.FYJ.2026 (Galicia), RSVP WhatsApp 5493516604351, MEGA File Request https://mega.nz/filerequest/XYgfwuTCuYA. No publicar DNI. Sin mensajes digitales.

**Pendientes:** usuario valide la nueva estética desde teléfono, completar dirección del quincho y verificar carga MEGA / RSVP.
