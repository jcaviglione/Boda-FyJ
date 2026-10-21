import { wedding } from "../config.js?v=10";
import { image } from "../utils.js";

export function Hero() {
  return `<header class="hero" id="inicio">
    <div class="hero-botanical hero-botanical-left" aria-hidden="true"></div>
    <div class="hero-botanical hero-botanical-right" aria-hidden="true"></div>
    <div class="hero-content">
      <div class="hero-eyebrow">NOS CASAMOS</div>
      <h1 class="hero-names">Flor <span class="hero-amp">&amp;</span> Joel</h1>
      <p class="hero-caption">Y queremos compartirlo con vos</p>
      <div class="hero-photo-collage" aria-label="Nuestros recuerdos favoritos">
        <div class="hero-polaroid hero-polaroid-one">
          ${image(wedding.photos.heroColor, "Flor y Joel en una tarde de sol, fotografía a color", "hero-image")}
        </div>
        <div class="hero-polaroid hero-polaroid-two">
          ${image(wedding.photos.heroMono, "Flor y Joel dándose un beso, retrato en blanco y negro", "hero-image")}
        </div>
      </div>
      <div class="hero-rule"></div>
      <p class="hero-date">${wedding.dateHuman}</p>
      <p class="hero-quote">Hay momentos que se vuelven eternos cuando los compartimos.</p>
      <a class="scroll-prompt" href="#nuestro-dia">DESLIZÁ PARA DESCUBRIR <span aria-hidden="true">↓</span></a>
    </div>
  </header>`;
}
