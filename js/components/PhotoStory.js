import { wedding } from "../config.js?v=14";
import { image } from "../utils.js";

// Las dos ultimas fotografias aportadas: luz calida y primer plano B/N.
export function PhotoStory() {
  return `<section class="photo-story section-pad" id="nuestra-historia">
    <div class="photo-story-inner" data-reveal>
      <div class="eyebrow">Un poquito de nosotros</div>
      <div class="story-duo" aria-label="Dos momentos de Flor y Joel">
        <figure class="story-duo-card story-duo-warm">
          ${image(wedding.photos.storyWarm, "Flor y Joel en una fotografía cálida de interior", "story-duo-image")}
        </figure>
        <figure class="story-duo-card story-duo-mono">
          ${image(wedding.photos.storyMono, "Flor y Joel en primer plano blanco y negro", "story-duo-image")}
        </figure>
      </div>
      <h2 class="story-word">Sempiterno</h2>
      <p class="story-definition">Que durará siempre; que, habiendo tenido principio, no tendrá fin.</p>
      <div class="story-divider" aria-hidden="true">✧</div>
    </div>
  </section>`;
}
