import { wedding } from "../config.js?v=9";
import { image } from "../utils.js";

// Sempiterno: una sola foto B/N, completa, aprobada por Flor & Joel.
export function PhotoStory() {
  return '<section class="photo-story section-pad" id="nuestra-historia">' +
    '<div class="photo-story-inner" data-reveal>' +
      '<div class="eyebrow">Un poquito de nosotros</div>' +
      '<figure class="story-single-photo">' +
        image(wedding.photos.sempiterno, "Flor y Joel besándose en blanco y negro", "story-single-image") +
      '</figure>' +
      '<h2 class="story-word">Sempiterno</h2>' +
      '<p class="story-definition">Que durará siempre; que, habiendo tenido principio, no tendrá fin.</p>' +
      '<div class="story-divider" aria-hidden="true">✧</div>' +
    '</div></section>';
}
