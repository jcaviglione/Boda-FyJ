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
  return '<span class="flower ' + css + '" aria-hidden="true">✿</span>';
}
export function sectionHeading(label, title, desc = "") {
  return '<div class="eyebrow">' + label + '</div><h2>' + title + '</h2>' +
    (desc ? '<p class="section-lead">' + desc + '</p>' : "");
}
