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

// Seccion Sempiterno: lamina infantil en lugar de las dos fotos.
const story = document.querySelector("#nuestra-historia .photo-story-inner");
if (story) {
  const duo = story.querySelector(".story-duo");
  if (duo) {
    const figure = document.createElement("figure");
    figure.className = "story-duo-card";
    figure.style.cssText = "width:min(100%,950px);margin:0 auto;border:0;box-shadow:none;transform:none;background:transparent";
    const picture = document.createElement("img");
    picture.src = "invitacion/sempiterno-infantil.webp";
    picture.alt = "Dos chicos vestidos de novios, con flores delicadas y la frase These two kids are getting married";
    picture.loading = "lazy";
    picture.style.cssText = "display:block;width:100%;max-width:950px;height:auto;object-fit:contain;border-radius:8px";
    figure.append(picture);
    duo.replaceWith(figure);
  }
  // El titulo esta integrado en la imagen. Dejar solo la definicion debajo.
  story.querySelector(".story-word")?.remove();
  const def = story.querySelector(".story-definition");
  if (def) def.style.cssText = "margin:1.1rem auto 0;max-width:36ch;text-align:center";
  const button = document.createElement("a");
  button.href = "invitacion/regalos.html";
  button.className = "button button-outline";
  button.textContent = "UN PEQUEÑO DETALLE ♡";
  button.style.cssText = "display:table;margin:2rem auto 0;padding:.85rem 1.5rem;font-size:.75rem;letter-spacing:.08em;text-decoration:none";
  story.append(button);
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
