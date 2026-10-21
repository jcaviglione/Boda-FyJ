import { inicio, fecha, mapa, vestimenta, regalos, confirmar, recuerdos, cierre } from "./components.js";

const sections = [inicio, fecha, mapa, vestimenta, regalos, confirmar, recuerdos, cierre];
document.querySelector("#app").innerHTML = sections.map(render => render()).join("\n");


  const btn=document.querySelector("#copy-alias"), msg=document.querySelector("#copy-feedback");
  btn.addEventListener("click",async()=>{
    try {await navigator.clipboard.writeText("BODA.FYJ.2026");msg.textContent="¡Alias copiado!";}
    catch {msg.textContent="Seleccioná y copiá el alias: BODA.FYJ.2026";}
  });
  const reveal=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}}),{threshold:.11});
    reveal.forEach(el=>obs.observe(el));
  } else reveal.forEach(el=>el.classList.add("visible"));

