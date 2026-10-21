import { wedding } from "./config.js";
import { Hero } from "./components/Hero.js";
import { Intro } from "./components/Intro.js";
import { Events } from "./components/Events.js";
import { MapSection } from "./components/MapSection.js";
import { Attire } from "./components/Attire.js";
import { Gifts } from "./components/Gifts.js";
import { RSVP } from "./components/RSVP.js";
import { Memories } from "./components/Memories.js";
import { Footer } from "./components/Footer.js";

const sections = [Hero, Intro, Events, MapSection, Attire, Gifts, RSVP, Memories, Footer];
const app = document.querySelector("#app");
app.innerHTML = sections.map(component => component()).join("\n");

const photo = document.querySelector(".hero-photo img");
if (photo) {
  photo.addEventListener("load", () => app.querySelector(".hero")?.classList.add("has-hero-photo"));
  photo.addEventListener("error", () => { photo.style.display = "none"; });
  if (photo.complete && photo.naturalWidth) app.querySelector(".hero")?.classList.add("has-hero-photo");
  if (photo.complete && !photo.naturalWidth) photo.style.display = "none";
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area=document.createElement("textarea");
  area.value=text;
  area.style.position="fixed";
  area.style.left="-9999px";
  document.body.append(area);
  area.select();
  const copied=document.execCommand("copy");
  area.remove();
  if(!copied) throw Error("No se pudo copiar");
}
document.querySelector("#copy-alias")?.addEventListener("click", async () => {
  const feedback=document.querySelector("#copy-feedback");
  try {
    await copyText(wedding.gift.alias);
    feedback.textContent="¡Alias copiado! Ya podés pegarlo en tu banco.";
  } catch {
    feedback.textContent="Seleccioná el alias que aparece arriba y copialo.";
  }
});

const reveal=document.querySelectorAll("[data-reveal]");
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer=new IntersectionObserver(entries => {
    for(const entry of entries) {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },{threshold:0.08,rootMargin:"0px 0px 35px 0px"});
  reveal.forEach(element=>observer.observe(element));
} else reveal.forEach(element=>element.classList.add("visible"));

const targetTime=new Date(wedding.date).getTime();
function countdown() {
  let duration=Math.max(0,targetTime-Date.now());
  const days=Math.floor(duration/86400000);
  duration%=86400000;
  const hours=Math.floor(duration/3600000);
  const minutes=Math.floor(duration%3600000/60000);
  const elements={days,hours,minutes};
  for(const [name,n] of Object.entries(elements)) {
    const el=document.querySelector("[data-"+name+"]");
    if(el) el.textContent=String(n).padStart(2,"0");
  }
}
countdown();
window.setInterval(countdown,60000);

const form=document.querySelector("#rsvp-form");
const attendance=document.querySelector("#attendance");
const quantity=document.querySelector("#rsvp-qty");
attendance?.addEventListener("change", () => {
  const yes=attendance.value==="si";
  if(quantity) quantity.hidden=!yes;
});
const messageArea=document.querySelector("#rsvp-result");
let currentMessage="";
form?.addEventListener("submit",event => {
  event.preventDefault();
  if(!form.reportValidity()) return;
  const data=new FormData(form);
  const name=String(data.get("name")||"").trim().slice(0,100);
  if(!name) return;
  const willCome=data.get("attendance")==="si";
  const adults=Math.min(5,Math.max(1,Number(data.get("adults")||1)));
  const children=Math.min(5,Math.max(0,Number(data.get("children")||0)));
  currentMessage=willCome
    ? "¡Hola Flor y Joel! Soy "+name+". Confirmo mi asistencia a la boda del 27/11. Vamos "+adults+" adulto(s) y "+children+" niño(s). ❤️"
    : "¡Hola Flor y Joel! Soy "+name+". Lamentablemente no voy a poder acompañarlos el 27/11. ¡Les deseo un día hermoso! ❤️";
  const url="https://wa.me/"+wedding.rsvpWhatsapp+"?text="+encodeURIComponent(currentMessage);
  const link=document.querySelector("#rsvp-whatsapp");
  const preview=document.querySelector("#rsvp-message");
  if(preview) preview.textContent=currentMessage;
  if(link) link.href=url;
  if(messageArea) {
    messageArea.hidden=false;
    messageArea.scrollIntoView({behavior:"smooth",block:"nearest"});
  }
});
document.querySelector("#rsvp-copy")?.addEventListener("click",async()=>{
  if(!currentMessage) return;
  const help=document.querySelector("#rsvp-help");
  try {await copyText(currentMessage); if(help)help.textContent="¡Mensaje copiado! Pegalo en WhatsApp para enviarlo.";}
  catch {if(help)help.textContent="Podés seleccionar el mensaje y copiarlo manualmente.";}
});
