import { wedding } from "../config.js";
import { mapsUrl } from "../utils.js";
export function Location() {
 const url = mapsUrl(wedding.ceremony.mapsQuery);
 return '<section class="location section-pad" id="mapa"><div data-reveal>' +
 '<div class="eyebrow">Cómo llegar</div><h2>Nos encontramos</h2>' +
 '<div class="map-illustration" aria-hidden="true"><svg viewBox="0 0 320 180" fill="none"><path d="M18 151 Q91 135 110 93 T298 42" stroke="#889678" stroke-width="2" stroke-dasharray="5 8"/><path d="M237 78l35-30 35 30M248 72v38h47V72M267 110V90h12v20" stroke="#6d7c5b" stroke-width="2"/><path d="M55 119V58M55 39l-23 37h46L55 39ZM115 75V32M115 16l-16 30h32l-16-30Z" stroke="#7c906b" stroke-width="2"/><circle cx="18" cy="151" r="8" fill="#b99196"/><circle cx="299" cy="42" r="8" fill="#6f8060"/></svg></div>' +
 '<p class="section-lead">Tocá el botón para ver el recorrido hasta el Registro Civil.</p>' +
 '<a class="button button-outline" href="'+url+'" target="_blank" rel="noopener noreferrer">ABRIR MAPA DEL CIVIL ↗</a>' +
 '</div></section>';
}
