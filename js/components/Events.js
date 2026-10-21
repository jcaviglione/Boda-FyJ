import { wedding } from "../config.js?v=7";
import { escapeHtml, mapsUrl } from "../utils.js";
export function Events() {
 const c=wedding.ceremony, l=wedding.lunch, known=Boolean(l.mapsQuery);
 return '<section class="events section-pad" id="eventos"><div data-reveal>' +
   '<div class="eyebrow">Así empieza nuestra historia</div><h2>El gran día</h2>' +
   '<p class="section-lead">Primero nos damos el sí. Después seguimos celebrando con un almuerzo en familia.</p></div>' +
   '<div class="events-list">' +
   '<article class="event-card" data-reveal><div class="event-count">01 <span>✦</span></div>' +
   '<div class="eyebrow">Ceremonia civil</div><p class="event-time">' + c.time + '<small> hs</small></p>' +
   '<h3>Nos damos el sí</h3><p class="event-address">' + escapeHtml(c.address) + '<br>' + escapeHtml(c.area) + '</p>' +
   '<a class="button button-dark" href="' + mapsUrl(c.mapsQuery) + '" target="_blank" rel="noopener noreferrer">VER UBICACIÓN <span aria-hidden="true">↗</span></a></article>' +
   '<div class="event-between" aria-hidden="true">✻</div>' +
   '<article class="event-card" data-reveal><div class="event-count">02 <span>✦</span></div>' +
   '<div class="eyebrow">Almuerzo y brindis</div><p class="event-time">' + l.time + '<small> hs</small></p>' +
   '<h3>Celebramos juntos</h3>' +
   '<p class="event-address">' + (known ? escapeHtml(l.address) + '<br>' + escapeHtml(l.area) : 'El quincho está reservado.<br>Muy pronto compartiremos la dirección.') + '</p>' +
   (known ? '<a class="button button-dark" href="' + mapsUrl(l.mapsQuery) + '" target="_blank" rel="noopener noreferrer">CÓMO LLEGAR <span aria-hidden="true">↗</span></a>' : '<span class="button button-outline is-pending">UBICACIÓN PRÓXIMAMENTE</span>') +
   '</article></div></section>';
}
