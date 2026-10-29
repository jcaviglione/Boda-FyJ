// Variante independiente: utiliza el diseno original, sin editarlo.
import "../js/main.js?v=16";

// Quitar regalos de la navegacion principal.
document.querySelector("#regalos")?.remove();

// Actualizar ambos horarios visibles del almuerzo.
for (const item of document.querySelectorAll(".event-card .event-time, .route-stop .eyebrow")) {
  const walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.textContent.includes("14:00")) {
      node.textContent = node.textContent.replace("14:00", "13:30");
      break;
    }
  }
}

// Segunda hoja editorial, sin fotografias.
const story = document.querySelector("#nuestra-historia .photo-story-inner");
if (story) {
  story.innerHTML = `
    <div class="eyebrow" style="letter-spacing:.22em;margin-bottom:1.5rem">Un poquito de nosotros</div>
    <div aria-hidden="true" style="font-size:1.6rem;color:#879078;margin:0 auto 1.5rem">♡</div>
    <p style="font-family:'DM Serif Display',serif;font-size:clamp(.85rem,2.5vw,1.1rem);font-style:italic;letter-spacing:.10em;line-height:1.7;text-align:center;margin:0 auto 2.2rem;max-width:28ch;color:#738063">These two kids are getting married.</p>
    <h2 class="story-word" style="margin-bottom:1rem">Sempiterno</h2>
    <p class="story-definition" style="max-width:36ch;margin:0 auto;text-align:center">Que durará siempre; que, habiendo tenido principio, no tendrá fin.</p>
    <div class="story-divider" aria-hidden="true" style="margin-top:1.75rem">✧</div>
    <a href="invitacion/regalos.html" class="button button-outline" style="display:table;margin:2rem auto 0;padding:.85rem 1.5rem;font-size:.75rem;letter-spacing:.08em;text-decoration:none">UN PEQUEÑO DETALLE ♡</a>
  `;
}

// Intercepta el envio antes del controlador original, sin cambiar el sitio principal.
const form = document.querySelector("#rsvp-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  event.stopImmediatePropagation();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  const coming = data.get("attendance") === "si";
  const adults = Number(data.get("adults") || 1);
  const children = Number(data.get("children") || 0);
  const message = coming
    ? "Hola Flor & Joel! Soy " + name + ". Confirmo mi asistencia a la boda del 27/11. Adultos: " + adults + ". Niños: " + children + ". ❤️"
    : "Hola Flor & Joel! Soy " + name + ". Lamentablemente no voy a poder acompañarlos en la boda del 27/11. ❤️";
  const url = "https://wa.me/5493517635318?text=" + encodeURIComponent(message);
  const result = document.querySelector("#rsvp-result");
  const msg = document.querySelector("#rsvp-message");
  const link = document.querySelector("#rsvp-whatsapp");
  if (msg) msg.textContent = message;
  if (link) link.href = url;
  if (result) result.hidden = false;
  result?.scrollIntoView({behavior:"smooth",block:"nearest"});
  try { window.location.assign(url); } catch { /* queda el enlace visible */ }
}, true);
