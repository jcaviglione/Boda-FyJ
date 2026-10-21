import { wedding } from "../config.js?v=7";
export function RSVP() {
 return '<section class="rsvp section-pad" id="confirmar"><div data-reveal>' +
 '<div class="deco-glyph" aria-hidden="true">✿</div><div class="eyebrow">Nos encantaría verte</div>' +
 '<h2>¿Nos acompañás?</h2><p class="section-lead">Ayudanos a organizar el almuerzo confirmando si venís.</p>' +
 '<form id="rsvp-form" class="rsvp-form">' +
 '<label for="guest-name">Tu nombre y apellido</label><input id="guest-name" name="name" type="text" maxlength="100" placeholder="¿Cómo te llamás?" autocomplete="name" required>' +
 '<label for="attendance">¿Vas a venir?</label><select id="attendance" name="attendance" required>' +
 '<option value="si">¡Sí, ahí voy!</option><option value="no">Esta vez no puedo</option></select>' +
 '<div class="rsvp-qty" id="rsvp-qty"><label for="adults">Adultos (incluyéndote)</label><select id="adults" name="adults"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>' +
 '<label for="children">Niños</label><select id="children" name="children"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>' +
 '<button type="submit" class="button button-dark button-wide">CONFIRMAR POR WHATSAPP ↗</button>' +
 '<p class="form-help" id="rsvp-help">Al continuar se abrirá WhatsApp. Para finalizar tu confirmación, tocá Enviar.</p>' +
 '</form><div id="rsvp-result" class="share-result" hidden><p id="rsvp-message"></p>' +
 '<a id="rsvp-whatsapp" class="button button-dark" href="#" target="_blank" rel="noopener noreferrer">ABRIR WHATSAPP ↗</a>' +
 '<button id="rsvp-copy" type="button" class="button button-outline">COPIAR MENSAJE</button></div></div></section>';
}
