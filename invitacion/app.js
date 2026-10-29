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

// Enlace discreto a una pagina secundaria (sin exhibir el alias en la invitacion).
const footer = document.querySelector(".footer");
if (footer) {
  const note = document.createElement("p");
  note.style.cssText = "margin:1.5rem auto 0;font-size:.75rem;opacity:.60;text-align:center";
  const link = document.createElement("a");
  link.href = "invitacion/regalos.html";
  link.textContent = "Informacion adicional";
  link.style.cssText = "color:inherit;text-decoration:underline;text-underline-offset:3px";
  note.append(link);
  footer.append(note);
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
