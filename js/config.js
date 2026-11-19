// Datos editables de Flor & Joel. No incluir documentos de identidad ni claves aquí.
// La invitacion alternativa conserva sus datos originales; los cambios recientes son solo para la pagina principal.
const isInvitationVariant = /(?:^|\/)invitacion(?:\/|\/index\.html)?$/.test(window.location.pathname);
export const wedding = Object.freeze({
  couple: "Flor & Joel",
  date: "2026-11-27T11:00:00-03:00",
  dateHuman: "27 · 11 · 2026",
  monthHuman: "noviembre de 2026",
  ceremony: {
    title: "La ceremonia",
    time: "11:00",
    address: "Chacabuco 737, 2.º piso",
    area: "Nueva Córdoba · Córdoba",
    mapsQuery: "Chacabuco 737, Nueva Córdoba, Córdoba, Argentina"
  },
  lunch: isInvitationVariant ? {
    title: "El almuerzo",
    time: "13:30",
    address: "A confirmar",
    area: "",
    mapsQuery: ""
  } : {
    title: "El almuerzo",
    time: "13:00",
    address: "Cannes 4040",
    area: "Ciudad de Córdoba · Córdoba",
    mapsQuery: "Cannes 4040, Córdoba, Argentina"
  },
  gift: {
    alias: "BODA.FYJ.2026",
    bank: "Banco Galicia",
    holder: "Joel Alejandro Caviglione"
  },
  // Opcional: Argentina con código de país, solo dígitos, por ej. "5493511234567".
  rsvpWhatsapp: "5493516604351",
  rsvpDeadline: "", // Fecha aún no confirmada; no inventarla.
  albumUploadUrl: "https://mega.nz/filerequest/XYgfwuTCuYA", // Solicitud de archivos gratuita MEGA.
  galleryEnabled: true,
  photos: {
    // Portada: beso principal B/N y foto del parque secundaria B/N.
    heroMono: "assets/flor-joel-hero-beso-bn.webp",
    heroSecondary: "assets/flor-joel-hero-parque-bn-v14.webp",
    // Sempiterno: las dos ultimas imagenes enviadas.
    storyWarm: "assets/flor-joel-sempiterno-calida-v14.webp",
    storyMono: "assets/flor-joel-sempiterno-cerca-bn-v14.webp"
  },
  siteUrl: "https://jcaviglione.github.io/Boda-FyJ/"
});
