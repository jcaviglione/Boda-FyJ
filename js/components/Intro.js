import { sectionHeading, decorativeMark } from "../utils.js?v=15";
export function Intro() {
  return '<section class="intro section-pad" id="nuestro-dia">' +
    '<div class="deco-glyph" aria-hidden="true">' + decorativeMark("flower") + '</div>' +
    '<div data-reveal>' +
    sectionHeading('Viernes 27 de noviembre de 2026', 'Un día para<br><i>recordar</i>',
      'Hay momentos que se vuelven eternos cuando los compartimos con las personas que queremos.') +
    '<div class="countdown" role="status" aria-live="off">' +
    '<div><strong data-days>--</strong><small>DÍAS</small></div><span>·</span>' +
    '<div><strong data-hours>--</strong><small>HORAS</small></div><span>·</span>' +
    '<div><strong data-minutes>--</strong><small>MIN</small></div>' +
    '</div></div></section>';
}
