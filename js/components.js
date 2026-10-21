export function inicio() {
  return `<header class="hero" id="inicio">
    <svg class="botanical leaf-top leaf-deco" viewBox="0 0 190 225" aria-hidden="true"><path d="M87 223Q73 159 105 77Q121 36 140 9"/><path d="M83 189Q35 161 20 128M90 152Q128 132 150 93M99 103Q56 83 45 45"/><ellipse cx="62" cy="171" rx="27" ry="11" transform="rotate(30 62 171)"/><ellipse cx="129" cy="115" rx="29" ry="10" transform="rotate(-35 129 115)"/><ellipse cx="62" cy="79" rx="29" ry="11" transform="rotate(30 62 79)"/><ellipse cx="132" cy="29" rx="25" ry="10" transform="rotate(-52 132 29)"/><circle cx="23" cy="122" r="5"/><circle cx="146" cy="89" r="5"/></svg>
    <svg class="botanical leaf-bottom leaf-deco" viewBox="0 0 190 225" aria-hidden="true"><path d="M87 223Q73 159 105 77Q121 36 140 9"/><path d="M83 189Q35 161 20 128M90 152Q128 132 150 93M99 103Q56 83 45 45"/><ellipse cx="62" cy="171" rx="27" ry="11" transform="rotate(30 62 171)"/><ellipse cx="129" cy="115" rx="29" ry="10" transform="rotate(-35 129 115)"/><ellipse cx="62" cy="79" rx="29" ry="11" transform="rotate(30 62 79)"/><circle cx="23" cy="122" r="5"/></svg>
    <div class="eyebrow">Nos casamos</div>
    <h1><span>Flor</span><span class="amp">&</span><span>Joel</span></h1>
    <p class="intro">Hay momentos que se vuelven eternos cuando los compartimos.</p>
    <div class="date-big">27 · 11 · 2026</div>
    <div class="hero-bottom"><span>Deslizá para descubrir nuestro día</span><svg width="20" height="21" fill="none" viewBox="0 0 20 21" aria-hidden="true"><path d="m3 8 7 7 7-7" stroke="#697758" stroke-width="1.4"/></svg></div>
  </header>`;
}

export function fecha() {
  return `<section class="section" id="fecha">
    <div class="reveal">
      <div class="floret" aria-hidden="true">✿</div>
      <div class="eyebrow">Viernes 27 de noviembre</div>
      <h2>Un día para<br>celebrar juntos</h2>
      <p class="section-sub">Nos encantaría compartir este momento tan especial con vos. Primero, el sí; después, un almuerzo con mucho cariño.</p>
    </div>
    <div class="agenda">
      <article class="event reveal">
        <div class="eyebrow">Ceremonia civil</div><div class="time">11:00</div>
        <h3>Nos damos el sí</h3>
        <p>Chacabuco 737, 2.º piso<br>Nueva Córdoba · Córdoba Capital</p>
        <a class="btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&amp;query=Chacabuco%20737%2C%20Nueva%20Cordoba%2C%20Cordoba%2C%20Argentina">Cómo llegar ↗</a>
      </article>
      <article class="event reveal">
        <div class="eyebrow">Almuerzo y celebración</div><div class="time">14:00</div>
        <h3>Seguimos festejando</h3>
        <p>La dirección del quincho se compartirá muy pronto.</p>
        <button class="btn light" disabled>Ubicación próximamente</button>
      </article>
    </div>
  </section>`;
}

export function mapa() {
  return `<section class="section" id="mapa">
    <div class="reveal">
      <div class="eyebrow">Nuestra ciudad</div>
      <h2>Cómo llegar</h2>
      <p class="section-sub">Guardá la ubicación del civil. Apenas confirmemos la dirección del almuerzo, también vas a encontrarla acá.</p>
      <div class="map-art">
        <svg viewBox="0 0 320 180" role="img" aria-label="Ilustración de un pequeño camino hacia una casa, rodeado de plantas">
          <g fill="none" stroke="#899676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M30 144C63 119 80 80 126 101S181 142 231 97 265 65 293 37" stroke-dasharray="5 8"/>
            <path d="M222 74 254 49 286 74M231 71v31h45V71M249 101V84h11v17"/>
            <path d="M48 105V71M48 71 35 89h26L48 71ZM48 58l-11 19h22L48 58ZM48 46 39 62h18L48 46Z"/>
            <path d="M90 68V38M90 38 78 56h24L90 38ZM90 27 83 41h14L90 27Z"/>
            <path d="M284 146v-31M284 115l-11 18h22l-11-18ZM284 101l-7 16h14l-7-16Z"/>
          </g><circle cx="30" cy="144" r="7" fill="#bb9395"/><circle cx="293" cy="37" r="7" fill="#6d795b"/>
        </svg>
      </div>
      <a class="btn light" href="https://www.google.com/maps/search/?api=1&amp;query=Chacabuco%20737%2C%20Nueva%20Cordoba%2C%20Cordoba%2C%20Argentina" target="_blank" rel="noopener noreferrer">Abrir mapa del civil ↗</a>
    </div>
  </section>`;
}

export function vestimenta() {
  return `<section class="section" id="vestimenta">
    <div class="reveal">
      <div class="floret" aria-hidden="true">✽</div>
      <div class="eyebrow">Una sugerencia</div>
      <h2>Vestimenta</h2>
      <div class="dress-card"><strong>Casual elegante de verano</strong><p>Vení fresco, cómodo y arreglado para compartir un almuerzo especial. Preferimos evitar la ropa deportiva.</p></div>
    </div>
  </section>`;
}

export function regalos() {
  return `<section class="section" id="regalos">
    <div class="reveal">
      <div class="floret" aria-hidden="true">❀</div>
      <div class="eyebrow">Con mucho cariño</div>
      <h2>Regalos</h2>
      <p class="section-sub">Tu presencia es nuestro mejor regalo. Si además querés hacernos un obsequio, te compartimos nuestros datos.</p>
      <div class="gift">
        <div class="eyebrow">Alias · Banco Galicia</div>
        <div class="alias" id="alias">BODA.FYJ.2026</div>
        <small>Joel Alejandro Caviglione</small>
        <button class="btn" id="copy-alias" type="button">Copiar alias</button>
        <div class="toast" id="copy-feedback" role="status" aria-live="polite"></div>
      </div>
    </div>
  </section>`;
}

export function confirmar() {
  return `<section class="section" id="confirmar">
    <div class="reveal">
      <div class="floret" aria-hidden="true">✿</div>
      <div class="eyebrow">Nos hace mucha ilusión</div>
      <h2>¿Nos acompañás?</h2>
      <p class="section-sub">Dentro de poco vamos a habilitar la confirmación de asistencia. Mientras tanto, reservá la fecha.</p>
      <button class="btn" disabled>Confirmación próximamente</button>
    </div>
  </section>`;
}

export function recuerdos() {
  return `<section class="section" id="recuerdos">
    <div class="reveal">
      <div class="floret" aria-hidden="true">✿</div>
      <div class="eyebrow">Los mejores momentos</div>
      <h2>Nuestros recuerdos</h2>
      <p class="section-sub">El día del casamiento vas a encontrar un código QR para compartir las fotos y videos que saques con nosotros.</p>
      <button class="btn light" disabled>Álbum próximamente</button>
    </div>
  </section>`;
}

export function cierre() {
  return `<footer class="foot"><div class="eyebrow">27 de noviembre de 2026</div><h2>Flor & Joel</h2><div class="divider"></div><p>Gracias por ser parte de nuestra historia.</p></footer>`;
}
