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
    // Imagen de Sempiterno aprobada: una sola foto B/N; conservar otras variantes sin publicarlas aqui.
    heroColor: "assets/flor-joel-hero-atardecer.webp", // Portada: foto a color, vertical y derecha
    heroMono: "assets/flor-joel-hero-beso-bn.webp", // Portada: B/N superpuesta solo un poco, sin rotar

    sempiterno: "assets/flor-joel-bn-aprobada.webp"
  },
  siteUrl: "https://jcaviglione.github.io/Boda-FyJ/"
});
