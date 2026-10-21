// Datos editables de Flor & Joel. No incluir documentos de identidad ni claves aquí.
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
  lunch: {
    title: "El almuerzo",
    time: "14:00",
    address: "A confirmar", // Pendiente: dirección exacta del quincho
    area: "",
    mapsQuery: ""
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
    // Al subir fotos reales, usar estas rutas. Fallback si no están todavía.
    hero: "assets/flor-joel-portada.webp",
    kiss: "assets/flor-joel-beso.webp",
    portrait: "assets/flor-joel-byn.webp"
  },
  siteUrl: "https://jcaviglione.github.io/Boda-FyJ/"
});
