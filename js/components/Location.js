import { wedding } from "../config.js?v=14";
import { escapeHtml, mapsUrl } from "../utils.js";

export function Location() {
  const c = wedding.ceremony;
  const l = wedding.lunch;
  const ready = Boolean(l.mapsQuery);
  const lunchText = ready ? escapeHtml(l.address) + (l.area ? ", " + escapeHtml(l.area) : "") : "Dirección a confirmar";

  return '<section class="location section-pad" id="mapa"><div class="location-inner" data-reveal>' +
    '<div class="eyebrow">Dos momentos, un mismo día</div>' +
    '<h2>Del sí <i>al brindis</i></h2>' +
    '<p class="section-lead">Primero nos encontramos en el Registro Civil; después, seguimos celebrando juntos en el quincho.</p>' +
    '<div class="wedding-route"><div class="route-image">' +
    '<svg viewBox="0 0 650 290" class="route-art" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recorrido ilustrativo del edificio del Registro Civil a una casita de campo; no está a escala">' +
    '<defs><linearGradient id="wash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F5F0E5"/><stop offset=".55" stop-color="#E8EDE2"/><stop offset="1" stop-color="#F8EDE3"/></linearGradient></defs>' +
    '<rect x="4" y="4" width="642" height="280" rx="27" fill="url(#wash)"/>' +
    '<path d="M148 218 C206 151 251 143 303 176 S393 237 490 172" stroke="#A99175" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 13"/>' +
    '<g transform="translate(34 55)" stroke="#6B795B" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M12 70 103 30 193 70" fill="#DBCBAF"/><path d="M11 70H193M20 82H185M12 198H195"/>' +
    '<rect x="22" y="82" width="161" height="113" fill="#F9F6ED"/>' +
    '<path d="M47 88V191M84 88V191M123 88V191M160 88V191" stroke="#A5B095" stroke-width="9"/>' +
    '<path d="M66 139H138V194H66Z" fill="#D9D8CA" stroke-width="2"/>' +
    '<circle cx="103" cy="60" r="14" fill="#FAF7EC"/><path d="M103 52V61L110 65" stroke-width="2"/>' +
    '</g>' +
    '<g transform="translate(433 63)" stroke="#738063" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M5 103 91 32 178 103" fill="#D6C3A7" stroke-width="4"/>' +
    '<path d="M25 100V198H158V100" fill="#F9F3E7" stroke-width="3"/>' +
    '<path d="M25 100 90 46 158 100" fill="#CFBDA3" stroke-width="2.5"/>' +
    '<path d="M88 198V136H122V198" fill="#DCD3BE" stroke-width="3"/>' +
    '<rect x="39" y="130" width="31" height="34" rx="2" fill="#DAE4D5" stroke-width="2.4"/>' +
    '<path d="M55 131V163M40 147H69M22 198H166" stroke-width="2"/>' +
    '</g>' +
    '<g fill="#A4B18E" opacity=".84"><ellipse cx="20" cy="245" rx="37" ry="26"/><ellipse cx="238" cy="251" rx="34" ry="19"/><ellipse cx="405" cy="260" rx="28" ry="20"/><ellipse cx="636" cy="250" rx="36" ry="27"/></g>' +
    '<g fill="#C9939A"><circle cx="31" cy="255" r="7"/><circle cx="222" cy="262" r="5"/><circle cx="618" cy="260" r="7"/></g>' +
    '</svg></div>' +
    '<div class="route-addresses">' +
      '<div class="route-stop"><span class="route-number">01</span><span class="eyebrow">11:00 hs</span>' +
        '<h3>Registro Civil</h3><p>' + escapeHtml(c.address) + '<br>' + escapeHtml(c.area) + '</p></div>' +
      '<div class="route-connector" aria-hidden="true">❦</div>' +
      '<div class="route-stop"><span class="route-number">02</span><span class="eyebrow">14:00 hs</span>' +
        '<h3>Almuerzo</h3><p>' + lunchText + '</p></div>' +
    '</div>' +
    '<p class="route-footnote">Recorrido ilustrativo. La ubicación exacta del almuerzo se agregará cuando esté confirmada.</p>' +
    '</div>' +
    '<div class="route-actions"><a class="button button-dark" href="' + mapsUrl(c.mapsQuery) + '" target="_blank" rel="noopener noreferrer">MAPA DEL CIVIL ↗</a>' +
      (ready ? '<a class="button button-outline" href="' + mapsUrl(l.mapsQuery) + '" target="_blank" rel="noopener noreferrer">MAPA DEL ALMUERZO ↗</a>' :
      '<span class="button button-outline is-pending">MAPA DEL ALMUERZO PRÓXIMAMENTE</span>') +
    '</div></div></section>';
}
