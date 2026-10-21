import { wedding } from "../config.js";
import { flower, image } from "../utils.js";
export function Hero() {
  return '<header class="hero" id="inicio">' +
    '<div class="hero-photo photo-wrap">' + image(wedding.photos.hero, "Flor y Joel, retrato juntos", "hero-image") +
    '<div class="photo-fallback">' + flower("hero-flower flower-one") + flower("hero-flower flower-two") + '</div></div>' +
    '<div class="hero-shade"></div><div class="hero-content">' +
    '<span class="eyebrow light-eyebrow">Nos casamos</span>' +
    '<h1><span>Flor</span><em>&</em><span>Joel</span></h1>' +
    '<p class="hero-caption">Y queremos compartirlo con vos</p>' +
    '<div class="hero-rule"></div><p class="hero-date">' + wedding.dateHuman + '</p>' +
    '<a class="scroll-prompt" href="#nuestro-dia" aria-label="Descubrí la invitación">DESLIZÁ PARA DESCUBRIR <span aria-hidden="true">↓</span></a>' +
    '</div></header>';
}
