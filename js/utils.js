export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
export function mapsUrl(address) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
}
export function image(path, alt, css = "") {
  return '<img src="' + escapeHtml(path) + '" alt="' + escapeHtml(alt) +
    '" class="' + escapeHtml(css) + '" loading="eager" decoding="async">';
}
export function flower(css = "") {
  return '<span class="flower ' + css + '" aria-hidden="true">' + decorativeMark("flower") + '</span>';
}
export function sectionHeading(label, title, desc = "") {
  return '<div class="eyebrow">' + label + '</div><h2>' + title + '</h2>' +
    (desc ? '<p class="section-lead">' + desc + '</p>' : "");
}

/** Consistent editorial SVG: never rendered as a platform emoji. */
export function decorativeMark(kind = "spark") {
  const spark = '<path d="M24 5v13 M24 30v13 M5 24h13 M30 24h13 M10.5 10.5l9.2 9.2 M28.3 28.3l9.2 9.2 M37.5 10.5l-9.2 9.2 M19.7 28.3l-9.2 9.2"/><circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none"/>';
  const flower = '<path d="M24 19c-9-12-15-2-8 4-11-4-12 7-2 8-4 10 7 14 11 5 7 9 16 1 11-7 10-6 3-16-7-11-1-11-13-13-12 0"/><circle cx="24" cy="25" r="3.7" fill="currentColor" stroke="none"/>';
  return '<svg class="deco-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true" focusable="false">' + (kind === "flower" ? flower : spark) + '</svg>';
}
