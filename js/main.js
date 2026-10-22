import { wedding } from "./config.js?v=14";
import { Hero } from "./components/Hero.js?v=14";
import { Intro } from "./components/Intro.js?v=15";
import { PhotoStory } from "./components/PhotoStory.js?v=14";
import { Events } from "./components/Events.js?v=15";
import { Location } from "./components/Location.js?v=14";
import { Attire } from "./components/Attire.js?v=16";
import { Gifts } from "./components/Gifts.js?v=14";
import { RSVP } from "./components/RSVP.js?v=15";
import { Memories } from "./components/Memories.js?v=15";
import { Footer } from "./components/Footer.js?v=15";

const app = document.querySelector("#app");
const sections = [Hero, Intro, PhotoStory, Events, Location, Attire, Gifts, RSVP, Memories, Footer];
app.innerHTML = sections.map(render => render()).join("\n");

// If the picture has not been uploaded yet, show the floral cover instead of a broken image.
const heroImage = document.querySelector(".hero-image");
const hero = document.querySelector(".hero");
if (heroImage) {
  const loaded = () => hero?.classList.add("has-hero-photo");
  const failed = () => {
    hero?.classList.remove("has-hero-photo");
    heroImage.setAttribute("hidden", "");
  };
  heroImage.addEventListener("load", loaded);
  heroImage.addEventListener("error", failed);
  if (heroImage.complete) {
    if (heroImage.naturalWidth) loaded();
    else failed();
  }
}

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("visible"));

function updateCountdown() {
  const daysEl = document.querySelector("[data-days]");
  const hoursEl = document.querySelector("[data-hours]");
  const minutesEl = document.querySelector("[data-minutes]");
  if (!daysEl || !hoursEl || !minutesEl) return;
  const distance = Math.max(0, new Date(wedding.date).getTime() - Date.now());
  daysEl.textContent = String(Math.floor(distance / 86400000));
  hoursEl.textContent = String(Math.floor(distance % 86400000 / 3600000)).padStart(2, "0");
  minutesEl.textContent = String(Math.floor(distance % 3600000 / 60000)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 60000);

const aliasButton = document.querySelector("#copy-alias");
const aliasFeedback = document.querySelector("#copy-feedback");
aliasButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(wedding.gift.alias);
    aliasFeedback.textContent = "¡Alias copiado!";
  } catch {
    aliasFeedback.textContent = "Copiá el alias: " + wedding.gift.alias;
  }
});

const attendance = document.querySelector("#attendance");
const quantities = document.querySelector("#rsvp-qty");
attendance?.addEventListener("change", () => {
  if (quantities) quantities.hidden = attendance.value === "no";
});
const form = document.querySelector("#rsvp-form");
let confirmationText = "";
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  const coming = data.get("attendance") === "si";
  const adults = Number(data.get("adults") || 1);
  const children = Number(data.get("children") || 0);
  confirmationText = coming
    ? "Hola Flor & Joel! Soy " + name + ". Confirmo mi asistencia a la boda del 27/11. Adultos: " + adults + ". Niños: " + children + ". ❤️"
    : "Hola Flor & Joel! Soy " + name + ". Lamentablemente no voy a poder acompañarlos en la boda del 27/11. ❤️";
  const url = "https://wa.me/" + wedding.rsvpWhatsapp + "?text=" + encodeURIComponent(confirmationText);
  const msg = document.querySelector("#rsvp-message");
  const link = document.querySelector("#rsvp-whatsapp");
  const result = document.querySelector("#rsvp-result");
  if (msg) msg.textContent = confirmationText;
  if (link) link.href = url;
  if (result) result.hidden = false;
  // Open WhatsApp from the form submit gesture; fallback button stays available.
  result?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  try { window.location.assign(url); } catch { /* Fallback: the visible WhatsApp link */ }
});
document.querySelector("#rsvp-copy")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(confirmationText);
  } catch {}
});
