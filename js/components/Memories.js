import { wedding } from "../config.js";
export function Memories() {
 const enabled=Boolean(wedding.albumUploadUrl);
 return '<section class="memories section-pad" id="recuerdos"><div data-reveal>' +
 '<div class="deco-glyph" aria-hidden="true">✿</div><div class="eyebrow">Un recuerdo para siempre</div>' +
 '<h2>Compartí tus <i>fotos</i></h2>' +
 '<p class="section-lead">Queremos guardar esos momentos que solo ustedes van a capturar. El día de la boda escaneá el QR y compartí las fotos y videos que saques.</p>' +
 '<div class="memory-inner"><div class="qr-holder" id="qr-holder" aria-label="Código QR para acceder a la web de Flor y Joel">' +
 '<img loading="lazy" src="https://api.qrserver.com/v1/create-qr-code/?format=svg&size=250x250&margin=12&data=' +
 encodeURIComponent(wedding.siteUrl + '#recuerdos') + '" alt="Código QR de la sección de recuerdos"/></div>' +
 (enabled ? '<a class="button button-dark" id="album-link" href="' + wedding.albumUploadUrl + '" target="_blank" rel="noopener noreferrer">SUBIR MIS FOTOS ↗</a>' :
 '<span class="button button-outline is-pending">ÁLBUM DISPONIBLE EL DÍA DE LA BODA</span>') +
 '<p class="memory-note">Un solo QR para las mesas. Las fotos se guardan en una carpeta privada de los novios.</p></div>' +
 '</div></section>';
}
