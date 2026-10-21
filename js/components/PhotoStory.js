import { wedding } from "../config.js?v=8";
import { image } from "../utils.js";

export function PhotoStory() {
 return '<section class="photo-story section-pad" id="nuestra-historia">' +
  '<div class="photo-story-inner" data-reveal>' +
  '<div class="eyebrow">Un poquito de nosotros</div>' +
  '<div class="story-pictures">' +
    '<figure class="photo-card photo-card-left">' + image(wedding.photos.portrait, "Flor y Joel besándose, retrato en blanco y negro aprobado por los novios", "story-photo") + '</figure>' +
    '<figure class="photo-card photo-card-right">' + image(wedding.photos.storyClose, "Flor y Joel en un primer plano natural", "story-photo") + '</figure>' +
    '<span class="story-flower" aria-hidden="true">✿</span>' +
  '</div>' +
  '<div class="story-word">Sempiterno</div>' +
  '<p class="story-definition">Que durará siempre; que, habiendo tenido principio, no tendrá fin.</p>' +
  '<div class="story-divider" aria-hidden="true">✧</div>' +
  '</div></section>';
}
