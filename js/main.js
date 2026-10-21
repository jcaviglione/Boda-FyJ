import { inicio, fecha, mapa, vestimenta, regalos, confirmar, recuerdos, cierre } from "./components.js";
import { wedding } from "./config.js";

const sections = [inicio, fecha, mapa, vestimenta, regalos, confirmar, recuerdos, cierre];
document.querySelector("#app").innerHTML = sections.map(render => render()).join("\n");

const copy = document.querySelector("#copy-alias");
const feedback = document.querySelector("#copy-feedback");
copy?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(wedding.gift.alias);
    feedback.textContent = "¡Alias copiado!";
  } catch {
    feedback.textContent = "Copiá este alias: " + wedding.gift.alias;
  }
});

const reveal = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for(const entry of entries) {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }, {threshold:0.11});
  reveal.forEach(el => observer.observe(el));
} else reveal.forEach(el => el.classList.add("visible"));

const formatTime = n => String(n).padStart(2,"0");
const countdown = document.querySelector("#wedding-countdown");
const target = new Date(wedding.date).getTime();
function updateCountdown() {
  if(!countdown) return;
  const remaining = Math.max(0,target-Date.now());
  const days = Math.floor(remaining/86400000);
  const hours = Math.floor(remaining%86400000/3600000);
  const minutes = Math.floor(remaining%3600000/60000);
  countdown.textContent = days+" días · "+formatTime(hours)+" hs · "+formatTime(minutes)+" min";
}
updateCountdown();
if(countdown) window.setInterval(updateCountdown,60000);

document.querySelector("#rsvp-form")?.addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name")||"").trim();
  if(!name) return;
  const attendance = data.get("attendance")==="si";
  const adults = Number(data.get("adults")||1);
  const children = Number(data.get("children")||0);
  const message = "Hola Flor & Joel! Soy "+name+". "+(attendance
    ? "Confirmo mi asistencia. Adultos: "+adults+". Niños: "+children+"."
    : "Esta vez no voy a poder acompañarlos.")+" ❤️";
  const number = wedding.rsvpWhatsapp;
  const url = number ? "https://wa.me/"+number+"?text="+encodeURIComponent(message)
    : "https://api.whatsapp.com/send?text="+encodeURIComponent(message);
  const a = document.querySelector("#rsvp-whatsapp");
  const msg = document.querySelector("#rsvp-message");
  const result = document.querySelector("#rsvp-result");
  if(!a || !result || !msg) return;
  a.href=url;
  msg.textContent=message;
  result.hidden=false;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
  document.querySelector("#rsvp-copy")?.addEventListener("click",async()=> {
    try { await navigator.clipboard.writeText(message); }
    catch {}
  },{once:true});
});

const upload = document.querySelector("#album-link");
if(upload && wedding.albumUploadUrl) upload.href=wedding.albumUploadUrl;
