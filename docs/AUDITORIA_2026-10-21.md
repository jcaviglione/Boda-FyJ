# Auditoría técnica de Boda-FyJ · actualización 21/10/2026 (v14)

**Alcance:** fuente de la miniweb en GitHub; las capturas originales del usuario se interpretaron así: primera captura web actual, segunda foto B/N parque, tercera color interior con ambos en la mesa, cuarta primer plano B/N.

**Cambios:** portada conserva el beso B/N principal y cambia foto secundaria por el retrato B/N del parque; Sempiterno exhibe dos fotos nuevas, interior cálido y primer plano B/N. Fotografías reales suministradas por el usuario, convertidas a WebP a calidad 91, sin alterar ángulos ni caras. CSS responsive con fotos completas y superposición mínima para no tapar caras.

**Controles:** `scripts/check-site.mjs` valida cantidad de fotografías, importaciones, presencia y estructura RIFF/WebP, datos de boda, enlaces y versiones. GitHub Actions corre las comprobaciones al hacer push. La validación externa de recepción real en WhatsApp/MEGA, la dirección del quincho y la revisión final de apariencia en celular siguen pendientes.

**Estado:** componentes separados; GitHub Pages publica `main`, nunca pedir al usuario operar Git. Ver `README.md` y `docs/ESTADO_Y_CONTINUIDAD.md`.
