#!/usr/bin/env node
// Static, dependency-free regression checks for the wedding miniweb.
import {readFileSync, existsSync, statSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(resolve(root,p),'utf8');
let total=0;
const ok=(cond,label)=>{if(!cond){console.error('FAIL:',label);process.exitCode=1;}else{console.log('PASS:',label)}total++};
const cfg=read('js/config.js');
const html=read('index.html');
const main=read('js/main.js');
const hero=read('js/components/Hero.js');
const story=read('js/components/PhotoStory.js');
const events=read('js/components/Events.js');
const location=read('js/components/Location.js');
const css=read('assets/styles.css');
const gift=read('js/components/Gifts.js');
const rsvp=read('js/components/RSVP.js');
const memory=read('js/components/Memories.js');
ok(html.includes('lang="es-AR"')&&html.includes('name="viewport"'),'mobile HTML + language');
ok(html.includes('main.js?v=12')&&html.includes('styles.css?v=12'),'entrypoint has updated cache versions');
ok(html.includes('og:image')&&html.includes('flor-joel-hero-beso-bn.webp'),'sharing image metadata');
ok(cfg.includes('2026-11-27T11:00:00-03:00')&&cfg.includes('Chacabuco 737'),'civil date, time and address');
ok(cfg.includes('time: "14:00"')&&cfg.includes('address: "A confirmar"'),'lunch time, address honestly pending');
ok(cfg.includes('BODA.FYJ.2026')&&gift.includes('copy-alias'),'gift alias and copy control');
ok(cfg.includes('5493516604351')&&rsvp.includes('rsvp-form'),'rsvp number and form');
ok(main.includes('window.location.assign(url)')&&main.includes('https://wa.me/'),'rsvp opens WhatsApp while keeping backup link');
ok(css.includes('.rsvp-qty[hidden]{display:none}')&&css.includes('.share-result[hidden]{display:none}'),'rsvp hidden fields remain hidden');
ok(cfg.includes('https://mega.nz/filerequest/XYgfwuTCuYA')&&memory.includes('albumUploadUrl'),'MEGA file request (not public folder)');
ok(events.includes('wedding')&&location.includes('Registro Civil')&&location.includes('Almuerzo'),'both timeline stages and map');
ok(hero.includes('wedding.photos.heroColor')&&hero.includes('wedding.photos.heroMono'),'hero references exactly the two replacement photos');
ok((hero.match(/\bimage\(/g)||[]).length===2,'hero displays exactly two photos');
ok(hero.indexOf('wedding.photos.heroMono')<hero.indexOf('wedding.photos.heroColor'),'B/N main image precedes colored secondary');
ok(css.includes('z-index:2')&&css.includes('z-index:1'),'black and white in front of colored photo');
ok(css.includes('aspect-ratio:0.73')&&css.includes('top:57%')&&css.includes('transform:rotate(-3deg)!important'),'subtle paper tilt and B/N foreground');
ok(!css.includes('transform:rotate(-9deg)')&&!css.includes('transform:rotate(9deg)'),'no legacy hero picture rotations');
ok((story.match(/\bimage\(/g)||[]).length===1&&story.includes('wedding.photos.sempiterno'),'Sempiterno contains one approved photo');
ok(!story.includes('photo-card-right'),'Sempiterno without second overlapping photo');
const photoPaths={
  color:'assets/flor-joel-hero-atardecer-upright.webp',
  mono:'assets/flor-joel-hero-beso-bn.webp',
  sempiterno:'assets/flor-joel-bn-aprobada.webp',
};
for(const [k,p] of Object.entries(photoPaths)){
 ok(existsSync(resolve(root,p)),'photo asset exists: '+k);
 if(existsSync(resolve(root,p))){
  const b=readFileSync(resolve(root,p));
  ok(b.subarray(0,4).toString()==='RIFF'&&b.subarray(8,12).toString()==='WEBP','valid WebP container: '+k);
  ok(statSync(resolve(root,p)).size>60000,'not tiny compressed thumbnail: '+k);
 }
}
const jsPaths=['js/main.js','js/config.js','js/utils.js',...['Hero','Intro','PhotoStory','Events','Location','Attire','Gifts','RSVP','Memories','Footer'].map(s=>'js/components/'+s+'.js')];
for(const p of jsPaths){
 const src=read(p);
 const imports=[...src.matchAll(/\bfrom\s+["']([^"']+)["']/g)].map(m=>m[1]);
 for(const imp of imports){
  const target=resolve(dirname(resolve(root,p)),imp.split('?')[0]);
  ok(existsSync(target),p+' resolves import '+imp);
 }
 try{
  execFileSync(process.execPath,['--input-type=module','--check'],{input:src,stdio:'pipe'});
  ok(true,p+' JavaScript syntax');
 }catch(e){ok(false,p+' JavaScript syntax ('+(e.stderr?.toString().slice(0,200)||'error')+')')}
}
ok(!cfg.includes('39647543'),'no private identity document disclosed');
ok(existsSync(resolve(root,'docs/ESTADO_Y_CONTINUIDAD.md')),'handoff for next chat');
console.log('Checked',total,'conditions. Final result:',process.exitCode?'FAIL':'PASS');
