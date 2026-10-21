import { wedding } from "../config.js";
import { mapsUrl } from "../utils.js";

export function MapSection() {
  return `
    <section class="location section-pad" id="mapa">
      <div data-reveal>
        <div class="eyebrow">Para encontrarnos</div>
        <h2>Cómo llegar</h2>
        <div class="map-illustration" aria-label="Ilustración de un sendero entre árboles que llega a una pequeña casa">
          <svg viewBox="0 0 340 195" role="img" aria-hidden="true" fill="none">
            <path d="M17 150C65 162 87 83 138 95S207 146 264 85L324 43" stroke="#849175" stroke-width="2" stroke-dasharray="5 9" stroke-linecap="round"/>
            <path d="M248 87L281 61L316 87M257 83v43h50V83M279 126v-27h12v27" stroke="#6c7964" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M46 123V51M46 51L23 87H69L46 51ZM46 33L30 61H62L46 33ZM100 75V24M100 24L84 48H116L100 24ZM306 154v-28M306 126l-14 24h28l-14-24Z" stroke="#81916d" stroke-width="1.8" stroke-linejoin="round"/>
            <circle cx="17" cy="150" r="8" fill="#ca9c9e"/>
            <circle cx="324" cy="43" r="7" fill="#82936d"/>
            <path d="M152 168c6-15 13-16 20 0m-10-23v29M208 158c7-18 18-17 25 3" stroke="#b1b99b" stroke-width="2"/>
          </svg>
        </div>
        <p class="section-lead">Este es nuestro mapita. Tocá el botón para abrir la dirección del civil en el mapa de tu celular.</p>
        <a class="button button-outline" href="${mapsUrl(wedding.ceremony.mapsQuery)}" target="_blank" rel="noopener noreferrer">ABRIR MAPA DEL CIVIL ↗</a>
      </div>
    </section>
  `;
}
