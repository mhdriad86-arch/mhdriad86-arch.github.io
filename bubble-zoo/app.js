'use strict';
// ---------- Animal art (original SVG) ----------
const eyes = (y=52)=>`<circle cx="38" cy="${y}" r="6" fill="#222"/><circle cx="62" cy="${y}" r="6" fill="#222"/><circle cx="40" cy="${y-2}" r="2" fill="#fff"/><circle cx="64" cy="${y-2}" r="2" fill="#fff"/><circle cx="28" cy="${y+12}" r="5" fill="#ff8fa3" opacity=".6"/><circle cx="72" cy="${y+12}" r="5" fill="#ff8fa3" opacity=".6"/>`;
const smile = (y=66)=>`<path d="M44 ${y} Q50 ${y+6} 56 ${y}" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`;
const A = {
 cat:{bg:'#ffe3b8',say:'Cat',s:'meow',art:`<path d="M20 40 L24 10 L44 28Z M80 40 L76 10 L56 28Z" fill="#ffb35c"/><path d="M26 32 L27 18 L38 28Z M74 32 L73 18 L62 28Z" fill="#ff8fa3"/><circle cx="50" cy="56" r="34" fill="#ffb35c"/>${eyes()}<path d="M47 61 L53 61 L50 65Z" fill="#ff6f91"/>${smile(67)}<path d="M20 60 H34 M20 66 H34 M66 60 H80 M66 66 H80" stroke="#a0522d" stroke-width="2"/>`},
 dog:{bg:'#f1d9c4',say:'Dog',s:'woof',art:`<ellipse cx="20" cy="50" rx="11" ry="24" fill="#7a4a2a"/><ellipse cx="80" cy="50" rx="11" ry="24" fill="#7a4a2a"/><circle cx="50" cy="54" r="33" fill="#c98a5a"/>${eyes(48)}<ellipse cx="50" cy="66" rx="14" ry="10" fill="#f1d9c4"/><ellipse cx="50" cy="61" rx="6" ry="4" fill="#222"/><path d="M46 72 Q50 82 54 72Z" fill="#ff6f91"/>`},
 cow:{bg:'#d6f0ff',say:'Cow',s:'moo',art:`<path d="M28 26 Q22 10 32 14 M72 26 Q78 10 68 14" stroke="#e8c87a" stroke-width="7" stroke-linecap="round" fill="none"/><ellipse cx="16" cy="40" rx="12" ry="6" fill="#fff" stroke="#333" stroke-width="2"/><ellipse cx="84" cy="40" rx="12" ry="6" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="50" cy="50" r="32" fill="#fff" stroke="#333" stroke-width="2"/><path d="M30 28 Q40 36 34 46 Q24 44 24 36Z" fill="#333"/>${eyes(46)}<ellipse cx="50" cy="70" rx="20" ry="13" fill="#ffb3c7"/><circle cx="43" cy="70" r="3" fill="#a0405a"/><circle cx="57" cy="70" r="3" fill="#a0405a"/>`},
 pig:{bg:'#ffe0ea',say:'Pig',s:'oink',art:`<path d="M22 34 L24 14 L40 26Z M78 34 L76 14 L60 26Z" fill="#ff8fb0"/><circle cx="50" cy="54" r="34" fill="#ffa9c3"/>${eyes(46)}<ellipse cx="50" cy="66" rx="14" ry="10" fill="#ff7fa6"/><ellipse cx="45" cy="66" rx="3" ry="4" fill="#b03a62"/><ellipse cx="55" cy="66" rx="3" ry="4" fill="#b03a62"/>`},
 duck:{bg:'#fff6c2',say:'Duck',s:'quack',art:`<circle cx="50" cy="52" r="34" fill="#ffe14d"/><path d="M50 18 Q54 8 60 12" stroke="#ffe14d" stroke-width="6" fill="none" stroke-linecap="round"/>${eyes(46)}<ellipse cx="50" cy="66" rx="18" ry="8" fill="#ff9a2e"/><path d="M34 66 H66" stroke="#d9741a" stroke-width="2"/>`},
 lion:{bg:'#ffeab0',say:'Lion',s:'roar',art:`<circle cx="50" cy="52" r="46" fill="#d9822b"/><g fill="#e8963a"><circle cx="16" cy="40" r="10"/><circle cx="84" cy="40" r="10"/><circle cx="20" cy="70" r="10"/><circle cx="80" cy="70" r="10"/><circle cx="50" cy="10" r="10"/><circle cx="30" cy="16" r="10"/><circle cx="70" cy="16" r="10"/></g><circle cx="50" cy="54" r="30" fill="#ffc94d"/>${eyes(48)}<path d="M45 60 L55 60 L50 66Z" fill="#7a3b1a"/>${smile(68)}`},
 frog:{bg:'#d6f7cc',say:'Frog',s:'ribbit',art:`<circle cx="30" cy="30" r="15" fill="#6fd36f"/><circle cx="70" cy="30" r="15" fill="#6fd36f"/><ellipse cx="50" cy="58" rx="40" ry="30" fill="#6fd36f"/><circle cx="30" cy="30" r="9" fill="#fff"/><circle cx="70" cy="30" r="9" fill="#fff"/><circle cx="30" cy="31" r="5" fill="#222"/><circle cx="70" cy="31" r="5" fill="#222"/><path d="M28 62 Q50 80 72 62" stroke="#2f7a2f" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="24" cy="56" r="5" fill="#ff8fa3" opacity=".6"/><circle cx="76" cy="56" r="5" fill="#ff8fa3" opacity=".6"/>`},
 sheep:{bg:'#e3e0ff',say:'Sheep',s:'baa',art:`<g fill="#fff" stroke="#ddd" stroke-width="2"><circle cx="26" cy="34" r="14"/><circle cx="50" cy="24" r="16"/><circle cx="74" cy="34" r="14"/><circle cx="22" cy="58" r="14"/><circle cx="78" cy="58" r="14"/><circle cx="50" cy="80" r="14"/><circle cx="30" cy="78" r="12"/><circle cx="70" cy="78" r="12"/></g><ellipse cx="50" cy="56" rx="22" ry="26" fill="#5a4a5a"/><circle cx="42" cy="52" r="5" fill="#fff"/><circle cx="58" cy="52" r="5" fill="#fff"/><circle cx="42" cy="53" r="3" fill="#222"/><circle cx="58" cy="53" r="3" fill="#222"/><path d="M45 68 Q50 72 55 68" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`},
};
const NAMES = Object.keys(A);
const svg = (inner) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
// ---------- Settings (parent) ----------
const ST=Object.assign({vol:.8,voice:true,lang:'en'},JSON.parse(localStorage.getItem('bz-settings')||'{}'));
const saveST=()=>localStorage.setItem('bz-settings',JSON.stringify(ST));
let LV=JSON.parse(localStorage.getItem('bz-levels')||'{}'); const saveLV=()=>localStorage.setItem('bz-levels',JSON.stringify(LV));
const lvl=(m)=>LV[m]||1;
// ---------- Words (EN / AR / DE) ----------
const W={
 en:{cat:'Cat',dog:'Dog',cow:'Cow',pig:'Pig',duck:'Duck',lion:'Lion',frog:'Frog',sheep:'Sheep',
  circle:'Circle',square:'Square',triangle:'Triangle',star:'Star',heart:'Heart',diamond:'Diamond',
  pink:'Pink',blue:'Blue',yellow:'Yellow',purple:'Purple',red:'Red',green:'Green',orange:'Orange',
  car:'Car',truck:'Fire truck',train:'Train',plane:'Airplane',boat:'Boat',bus:'Bus',
  yay:'Yay! Great job!',found:'Peekaboo! I see you!',where:'Where is the',again:'Try again!',sticker:'You got a sticker!',
  n:['zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],apples:'apples',match:'A match!'},
 ar:{cat:'قطة',dog:'كلب',cow:'بقرة',pig:'خنزير',duck:'بطة',lion:'أسد',frog:'ضفدع',sheep:'خروف',
  circle:'دائرة',square:'مربع',triangle:'مثلث',star:'نجمة',heart:'قلب',diamond:'معين',
  pink:'وردي',blue:'أزرق',yellow:'أصفر',purple:'بنفسجي',red:'أحمر',green:'أخضر',orange:'برتقالي',
  car:'سيارة',truck:'سيارة إطفاء',train:'قطار',plane:'طائرة',boat:'قارب',bus:'حافلة',
  yay:'برافو! أحسنت!',found:'بيكابو! وجدتك!',where:'أين',again:'حاول مرة أخرى!',sticker:'حصلت على ملصق!',
  n:['صفر','واحد','اثنان','ثلاثة','أربعة','خمسة','ستة','سبعة','ثمانية','تسعة','عشرة'],apples:'تفاحات',match:'متطابقة!'},
 de:{cat:'Katze',dog:'Hund',cow:'Kuh',pig:'Schwein',duck:'Ente',lion:'Löwe',frog:'Frosch',sheep:'Schaf',
  circle:'Kreis',square:'Quadrat',triangle:'Dreieck',star:'Stern',heart:'Herz',diamond:'Raute',
  pink:'Rosa',blue:'Blau',yellow:'Gelb',purple:'Lila',red:'Rot',green:'Grün',orange:'Orange',
  car:'Auto',truck:'Feuerwehrauto',train:'Zug',plane:'Flugzeug',boat:'Boot',bus:'Bus',
  yay:'Juhu! Super gemacht!',found:'Kuckuck! Da bist du!',where:'Wo ist',again:'Nochmal!',sticker:'Du hast einen Sticker!',
  n:['null','Eins','Zwei','Drei','Vier','Fünf','Sechs','Sieben','Acht','Neun','Zehn'],apples:'Äpfel',match:'Ein Paar!'}};
const t=(k)=>(W[ST.lang]||W.en)[k]??W.en[k]??k;
const LANGCODE={en:'en-US',ar:'ar-SA',de:'de-DE'};
// ---------- Audio (synthesized, no assets) ----------
let ac=null, master=null;
function unlock(){
  if(!ac){ try{ ac=new (window.AudioContext||window.webkitAudioContext)(); master=ac.createGain(); master.gain.value=ST.vol; master.connect(ac.destination);}catch(e){} }
  if(ac && ac.state==='suspended') ac.resume();
  if(ac && !unlock.done){ const b=ac.createBuffer(1,1,22050),s=ac.createBufferSource(); s.buffer=b; s.connect(ac.destination); s.start(0); unlock.done=true;
    if('speechSynthesis' in window){ const u=new SpeechSynthesisUtterance(' '); u.volume=0; speechSynthesis.speak(u);} }
}
['touchstart','pointerdown','click'].forEach(e=>document.addEventListener(e,unlock,{passive:true}));
function tone({type='sine',f0=440,f1=f0,dur=.3,vol=.3,delay=0,vib=0}){
  if(!ac) return; const tt=ac.currentTime+delay, o=ac.createOscillator(), g=ac.createGain();
  o.type=type; o.frequency.setValueAtTime(f0,tt); o.frequency.exponentialRampToValueAtTime(Math.max(f1,20),tt+dur);
  if(vib){const l=ac.createOscillator(),lg=ac.createGain(); l.frequency.value=vib; lg.gain.value=f0*.06; l.connect(lg).connect(o.frequency); l.start(tt); l.stop(tt+dur);}
  g.gain.setValueAtTime(0,tt); g.gain.linearRampToValueAtTime(vol,tt+.02); g.gain.exponentialRampToValueAtTime(.001,tt+dur);
  o.connect(g).connect(master); o.start(tt); o.stop(tt+dur+.05);
}
function noise(dur=.3,vol=.2,freq=800,delay=0){
  if(!ac) return; const tt=ac.currentTime+delay, n=Math.floor(ac.sampleRate*dur), b=ac.createBuffer(1,n,ac.sampleRate), d=b.getChannelData(0);
  for(let i=0;i<n;i++) d[i]=Math.random()*2-1;
  const s=ac.createBufferSource(), f=ac.createBiquadFilter(), g=ac.createGain(); s.buffer=b; f.type='bandpass'; f.frequency.value=freq;
  g.gain.setValueAtTime(vol,tt); g.gain.exponentialRampToValueAtTime(.001,tt+dur); s.connect(f).connect(g).connect(master); s.start(tt);
}
const SFX={
  pop(){ tone({f0:600+Math.random()*300,f1:1400,dur:.12,vol:.25}); noise(.06,.12,2500); },
  meow(){ tone({type:'triangle',f0:500,f1:900,dur:.25,vol:.25}); tone({type:'triangle',f0:900,f1:450,dur:.35,vol:.25,delay:.22}); },
  woof(){ [0,.3].forEach(d=>{ tone({type:'sawtooth',f0:300,f1:120,dur:.15,vol:.2,delay:d}); noise(.1,.15,600,d);}); },
  moo(){ tone({type:'sawtooth',f0:140,f1:110,dur:1,vol:.18,vib:4}); },
  oink(){ [0,.2].forEach(d=>tone({type:'square',f0:260,f1:180,dur:.14,vol:.12,delay:d,vib:30})); },
  quack(){ [0,.22].forEach(d=>tone({type:'sawtooth',f0:500,f1:300,dur:.16,vol:.15,delay:d,vib:40})); },
  roar(){ tone({type:'sawtooth',f0:120,f1:70,dur:.9,vol:.2,vib:12}); noise(.9,.15,300); },
  ribbit(){ [0,.12].forEach(d=>tone({type:'square',f0:180,f1:260,dur:.1,vol:.12,delay:d,vib:50})); },
  baa(){ tone({type:'sawtooth',f0:380,f1:340,dur:.7,vol:.15,vib:9}); },
  cheer(){ [523,659,784,1047].forEach((f,i)=>tone({type:'triangle',f0:f,dur:.35,vol:.2,delay:i*.1})); },
  pick(){ tone({f0:500,f1:700,dur:.1,vol:.15}); },
  flip(){ tone({type:'triangle',f0:700,f1:1000,dur:.08,vol:.12}); noise(.05,.06,3000); },
  boing(){ tone({type:'sine',f0:200,f1:500,dur:.25,vol:.2,vib:12}); },
  whoosh(){ noise(.5,.2,1200); tone({f0:900,f1:200,dur:.45,vol:.08}); },
  ding(){ tone({type:'sine',f0:1320,dur:.6,vol:.18}); tone({type:'sine',f0:1980,dur:.4,vol:.06}); },
  beep(){ [0,.35].forEach(d=>{ tone({type:'square',f0:420,dur:.25,vol:.12,delay:d}); tone({type:'square',f0:530,dur:.25,vol:.08,delay:d}); }); },
  siren(){ for(let i=0;i<3;i++){ tone({type:'sawtooth',f0:650,f1:950,dur:.35,vol:.1,delay:i*.7}); tone({type:'sawtooth',f0:950,f1:650,dur:.35,vol:.1,delay:i*.7+.35}); } },
  choo(){ [0,.45].forEach(d=>{ tone({type:'sawtooth',f0:500,dur:.4,vol:.08,delay:d,vib:6}); tone({type:'sawtooth',f0:630,dur:.4,vol:.08,delay:d}); }); [0,.15,.3,.45,.6,.75].forEach(d=>noise(.1,.1,1500,d+.9)); },
  zoom(){ tone({type:'sawtooth',f0:120,f1:400,dur:1.4,vol:.08}); noise(1.4,.12,700); },
  horn(){ tone({type:'sawtooth',f0:110,dur:1.1,vol:.16}); tone({type:'sawtooth',f0:165,dur:1.1,vol:.08}); },
  bus(){ [0,.3].forEach(d=>tone({type:'square',f0:350,dur:.2,vol:.12,delay:d})); noise(.4,.08,400,.6); },
};
const vibe=(p=20)=>{ try{ navigator.vibrate&&navigator.vibrate(p); }catch(e){} };
const voices={};
function pickVoice(){ const v=speechSynthesis.getVoices();
  voices.en=v.find(x=>x.lang==='en-US'&&/Samantha|Karen|Female/i.test(x.name))||v.find(x=>/^en/.test(x.lang))||null;
  voices.ar=v.find(x=>/^ar/.test(x.lang))||null; voices.de=v.find(x=>/^de/.test(x.lang))||null; }
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function say(text){
  if(!ST.voice || !('speechSynthesis' in window)) return;
  try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang=LANGCODE[ST.lang]||'en-US'; const v=voices[ST.lang]; if(v) u.voice=v;
    u.rate=.85; u.pitch=1.3; u.volume=Math.min(1,ST.vol+.2); speechSynthesis.speak(u);}catch(e){}
}
function animalCall(name, delay=600){ SFX[A[name].s](); setTimeout(()=>say(t(name)),delay); }

// ---------- Effects canvas ----------
const fx=document.getElementById('fx'), cx=fx.getContext('2d'); let parts=[];
function sizeFx(){ const r=devicePixelRatio||1; fx.width=innerWidth*r; fx.height=innerHeight*r; cx.setTransform(r,0,0,r,0,0); }
addEventListener('resize',sizeFx); sizeFx();
const COLORS=['#ff5d8f','#ffd23f','#3ec1ff','#7be26f','#b388ff','#ff9f43'];
function burst(x,y,n=14,conf=false){
  for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=(conf?6:3)+Math.random()*4;
    parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-(conf?6:1),life:1,c:COLORS[i%6],s:conf?8+Math.random()*6:4+Math.random()*4,r:Math.random()*6,conf}); }
  if(!burst.on){ burst.on=true; requestAnimationFrame(tick); }
}
function tick(){
  cx.clearRect(0,0,innerWidth,innerHeight);
  parts=parts.filter(p=>p.life>0);
  for(const p of parts){ p.x+=p.vx; p.y+=p.vy; p.vy+=p.conf?.25:.08; p.vx*=.98; p.life-=p.conf?.012:.03; p.r+=.1;
    cx.globalAlpha=Math.max(p.life,0); cx.fillStyle=p.c;
    if(p.conf){ cx.save(); cx.translate(p.x,p.y); cx.rotate(p.r); cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2); cx.restore(); }
    else { cx.beginPath(); cx.arc(p.x,p.y,p.s,0,7); cx.fill(); } }
  cx.globalAlpha=1;
  if(parts.length) requestAnimationFrame(tick); else { burst.on=false; cx.clearRect(0,0,innerWidth,innerHeight); }
}
const centerOf=el=>{ const r=el.getBoundingClientRect(); return [r.left+r.width/2,r.top+r.height/2]; };
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const rnd=a=>a[Math.floor(Math.random()*a.length)];
let timers=[]; const later=(f,ms)=>timers.push(setTimeout(f,ms));
const tap=(el,f)=>el.addEventListener('pointerdown',e=>{ e.preventDefault(); f(e); });

// ---------- Stickers (rewards) ----------
const STAR=`<path d="M50 4 l13 28 31 3 -23 21 7 31 -28 -16 -28 16 7 -31 -23 -21 31 -3z" stroke-linejoin="round"/>`;
const STICKERS=[...NAMES.map(n=>({k:n,art:A[n].art})),
  ...['#ffd23f','#ff5d8f','#3ec1ff','#7be26f','#b388ff','#ff9f43'].map((c,i)=>({k:'star'+i,art:`<g fill="${c}" stroke="#fff" stroke-width="4">${STAR}</g><circle cx="42" cy="50" r="4" fill="#222"/><circle cx="58" cy="50" r="4" fill="#222"/><path d="M44 60 Q50 66 56 60" stroke="#222" stroke-width="3" fill="none"/>`})),
  {k:'rainbow',art:`<g fill="none" stroke-width="8" stroke-linecap="round"><path d="M10 80 A40 40 0 0 1 90 80" stroke="#ff5d8f"/><path d="M20 80 A30 30 0 0 1 80 80" stroke="#ffd23f"/><path d="M30 80 A20 20 0 0 1 70 80" stroke="#3ec1ff"/></g>`},
  {k:'sun',art:`<g stroke="#ffb400" stroke-width="6" stroke-linecap="round"><path d="M50 4V18M50 82V96M4 50H18M82 50H96M17 17L27 27M73 73L83 83M83 17L73 27M27 73L17 83"/></g><circle cx="50" cy="50" r="26" fill="#ffd23f"/>${'<circle cx="42" cy="46" r="4" fill="#222"/><circle cx="58" cy="46" r="4" fill="#222"/><path d="M42 58 Q50 66 58 58" stroke="#222" stroke-width="3" fill="none"/>'}`},
  {k:'heart',art:`<path fill="#ff6b6b" stroke="#fff" stroke-width="4" d="M50 90 C10 62 4 40 18 22 C30 8 46 14 50 28 C54 14 70 8 82 22 C96 40 90 62 50 90Z"/>`},
  {k:'balloon',art:`<path d="M50 70 Q46 84 54 96" stroke="#888" stroke-width="2" fill="none"/><ellipse cx="50" cy="38" rx="26" ry="32" fill="#b388ff"/><path d="M46 70 h8 l-4 -5z" fill="#b388ff"/><ellipse cx="40" cy="26" rx="6" ry="10" fill="#fff" opacity=".5"/>`}];
let got=JSON.parse(localStorage.getItem('bz-stickers')||'[]');
const toast=document.getElementById('toast');
function award(){
  const left=STICKERS.filter(s=>!got.includes(s.k)), s=left.length?rnd(left):rnd(STICKERS);
  if(!got.includes(s.k)){ got.push(s.k); localStorage.setItem('bz-stickers',JSON.stringify(got)); }
  toast.innerHTML=svg(s.art); toast.classList.remove('show'); void toast.offsetWidth; toast.classList.add('show');
  SFX.ding(); vibe([30,40,30]); setTimeout(()=>toast.classList.remove('show'),2200);
}
function buildStickers(){
  const b=document.getElementById('stickerBook'); b.innerHTML='';
  STICKERS.forEach(s=>{ const d=document.createElement('div'); d.className='stk'+(got.includes(s.k)?' have':''); d.innerHTML=svg(s.art);
    tap(d,()=>{ if(!got.includes(s.k)){ SFX.boing(); return; } d.classList.remove('wig'); void d.offsetWidth; d.classList.add('wig'); SFX.ding(); if(A[s.k]) animalCall(s.k,300); const [x,y]=centerOf(d); burst(x,y,10); });
    b.appendChild(d); });
}

// ---------- Vehicles art ----------
const wheel=(x,y,r=9)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#333"/><circle cx="${x}" cy="${y}" r="${r/2.4}" fill="#ccc"/>`;
const face=(x,y)=>`<circle cx="${x-6}" cy="${y}" r="3.5" fill="#222"/><circle cx="${x+6}" cy="${y}" r="3.5" fill="#222"/><path d="M${x-5} ${y+7} Q${x} ${y+11} ${x+5} ${y+7}" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
const V={
 car:{bg:'#ffd6d6',s:'beep',art:`<path d="M10 66 V52 Q12 44 22 44 L32 30 H66 L78 44 Q90 46 90 56 V66Z" fill="#ff5d5d"/><path d="M36 34 H50 V44 H28Z M54 34 H64 L72 44 H54Z" fill="#cfefff"/>${wheel(28,68)}${wheel(72,68)}${face(42,55)}`},
 truck:{bg:'#ffe0cc',s:'siren',art:`<rect x="8" y="38" width="56" height="28" rx="4" fill="#e63b2e"/><path d="M64 44 H80 L92 56 V66 H64Z" fill="#e63b2e"/><path d="M68 48 H78 L86 56 H68Z" fill="#cfefff"/><path d="M12 32 L60 26" stroke="#bbb" stroke-width="5"/><path d="M16 28 V36 M28 27 V35 M40 26 V34 M52 25 V33" stroke="#bbb" stroke-width="3"/><rect x="40" y="18" width="12" height="7" rx="3" fill="#3ec1ff"/>${wheel(24,68)}${wheel(76,68)}${face(34,52)}`},
 train:{bg:'#d9f2d0',s:'choo',art:`<rect x="14" y="30" width="44" height="36" rx="5" fill="#3e8bff"/><rect x="56" y="44" width="30" height="22" rx="4" fill="#2f6fd6"/><rect x="66" y="26" width="10" height="18" fill="#444"/><circle cx="74" cy="18" r="6" fill="#ddd"/><circle cx="84" cy="10" r="5" fill="#eee"/><rect x="20" y="36" width="16" height="12" rx="2" fill="#cfefff"/>${wheel(26,70)}${wheel(48,70)}${wheel(74,70,7)}${face(46,52)}`},
 plane:{bg:'#d6f0ff',s:'zoom',art:`<path d="M10 52 Q10 42 24 42 H78 Q92 44 94 52 Q92 60 78 60 H24 Q10 60 10 52Z" fill="#fff" stroke="#9ab" stroke-width="2"/><path d="M40 44 L60 14 H68 L58 44Z M40 60 L60 88 H68 L58 60Z" fill="#3ec1ff"/><path d="M14 44 L8 26 H16 L26 42Z" fill="#ff5d8f"/><circle cx="84" cy="50" r="3" fill="#3ec1ff"/>${[34,46,58,70].map(x=>`<circle cx="${x}" cy="50" r="3" fill="#7bc7ff"/>`).join('')}`},
 boat:{bg:'#cdeefd',s:'horn',art:`<path d="M48 14 V58" stroke="#8a5a2b" stroke-width="4"/><path d="M52 16 L82 54 H52Z" fill="#fff" stroke="#ccc" stroke-width="2"/><path d="M44 22 L22 54 H44Z" fill="#ffd23f"/><path d="M10 60 H90 L78 78 H22Z" fill="#ff9f43"/><path d="M4 84 Q14 78 24 84 T44 84 T64 84 T84 84 T100 84" stroke="#3ec1ff" stroke-width="5" fill="none"/>${face(50,68)}`},
 bus:{bg:'#fff3c2',s:'bus',art:`<rect x="8" y="28" width="84" height="40" rx="8" fill="#ffc300"/>${[14,32,50].map(x=>`<rect x="${x}" y="34" width="14" height="13" rx="2" fill="#cfefff"/>`).join('')}<rect x="70" y="34" width="16" height="26" rx="2" fill="#cfefff"/>${wheel(26,70)}${wheel(74,70)}${face(40,57)}`},
};

// ---------- Navigation ----------
const homeBtn=document.getElementById('homeBtn'); let current='home';
const FRUIT=`<path d="M50 30 Q48 18 56 10" stroke="#6b3e1f" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M56 18 Q70 8 78 18 Q66 26 56 18Z" fill="#5ccc5c"/><path d="M50 30 C30 18 8 30 12 56 C16 82 36 96 50 88 C64 96 84 82 88 56 C92 30 70 18 50 30Z" fill="#ff4d4d"/><ellipse cx="32" cy="46" rx="6" ry="10" fill="#fff" opacity=".45"/>`;
const BUSH=`<g fill="#3fa34d"><circle cx="26" cy="62" r="24"/><circle cx="74" cy="62" r="24"/><circle cx="50" cy="44" r="30"/><rect x="8" y="62" width="84" height="30" rx="14"/></g><g fill="#5cc46a"><circle cx="40" cy="40" r="9"/><circle cx="66" cy="54" r="7"/><circle cx="28" cy="66" r="6"/></g>`;
const ICONS={
  bubbles: svg(`<circle cx="50" cy="52" r="40" fill="#fff" opacity=".35" stroke="#fff" stroke-width="4"/><g transform="translate(22 24) scale(.56)">${A.duck.art}</g><circle cx="36" cy="34" r="7" fill="#fff" opacity=".9"/>`),
  sounds: svg(`<g transform="translate(4 14) scale(.7)">${A.dog.art}</g><path d="M78 36 Q88 50 78 64 M86 28 Q100 50 86 72" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`),
  shapes: svg(`<circle cx="30" cy="30" r="20" fill="#ff5d8f"/><rect x="56" y="12" width="36" height="36" rx="6" fill="#3ec1ff"/><path d="M30 56 L52 92 H8Z" fill="#ffd23f"/><g transform="translate(54 52) scale(.42)" fill="#b388ff">${STAR}</g>`),
  count: svg(`<g transform="translate(2 30) scale(.45)">${FRUIT}</g><g transform="translate(52 30) scale(.45)">${FRUIT}</g><g transform="translate(27 2) scale(.45)">${FRUIT}</g><text x="50" y="96" font-size="26" font-weight="900" text-anchor="middle" fill="#fff" stroke="#e67a00" stroke-width="2">1 2 3</text>`),
  music: svg(`${['#ff5d8f','#ff9f43','#ffd23f','#7be26f','#3ec1ff','#b388ff'].map((c,i)=>`<rect x="${8+i*14.5}" y="${22+i*4}" width="12" height="${66-i*8}" rx="5" fill="${c}" stroke="#fff" stroke-width="2"/>`).join('')}<circle cx="80" cy="16" r="7" fill="#333"/><path d="M86 16 V2 H96" stroke="#333" stroke-width="3" fill="none"/>`),
  paint: svg(`<path d="M20 80 Q30 40 50 60 T82 30" stroke="#ff5d8f" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M14 40 Q34 20 50 34" stroke="#3ec1ff" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M70 70 L88 88" stroke="#8a5a2b" stroke-width="8" stroke-linecap="round"/><circle cx="66" cy="66" r="9" fill="#ffd23f"/>`),
  memory: svg(`<rect x="8" y="14" width="38" height="50" rx="8" fill="#fff" stroke="#b388ff" stroke-width="4"/><g transform="translate(9 22) scale(.36)">${A.pig.art}</g><rect x="54" y="36" width="38" height="50" rx="8" fill="#b388ff" stroke="#fff" stroke-width="4"/><text x="73" y="72" font-size="30" font-weight="900" text-anchor="middle" fill="#fff">?</text>`),
  peek: svg(`<g transform="translate(36 6) scale(.5)">${A.frog.art}</g>${BUSH.replace('<g fill="#3fa34d">','<g fill="#3fa34d" transform="translate(0 12)">')}`),
  vehicles: svg(`<g transform="translate(0 6) scale(1)">${V.car.art}</g>`),
  stickers: svg(`<rect x="10" y="10" width="80" height="80" rx="14" fill="#fff" opacity=".6"/><g transform="translate(14 14) scale(.36)" fill="#ffd23f">${STAR}</g><g transform="translate(52 14) scale(.36)">${A.cat.art}</g><g transform="translate(14 52) scale(.36)">${A.lion.art}</g><g transform="translate(52 52) scale(.36)" fill="#ff5d8f">${STAR}</g>`),
};
document.querySelectorAll('.tile').forEach(tl=>{ tl.innerHTML=ICONS[tl.dataset.go]; tl.addEventListener('click',()=>go(tl.dataset.go)); });
const STARTERS={};
function go(id){
  stopAll(); document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id)); current=id;
  homeBtn.classList.toggle('show',id!=='home'); SFX.pick(); vibe(10);
  if(STARTERS[id]) STARTERS[id]();
}
let holdT=null;
function holdStart(e){ e.preventDefault(); homeBtn.classList.add('hold'); holdT=setTimeout(()=>{ holdEnd(); go('home'); },1500); }
function holdEnd(){ clearTimeout(holdT); homeBtn.classList.remove('hold'); }
homeBtn.addEventListener('pointerdown',holdStart); ['pointerup','pointerleave','pointercancel'].forEach(e=>homeBtn.addEventListener(e,holdEnd));
function stopAll(){ clearInterval(spawnT); cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers=[]; bubbles.forEach(b=>b.el.remove()); bubbles=[]; if(songOn) songOn=false; if('speechSynthesis' in window) speechSynthesis.cancel(); }

// ---------- Parent settings (press-and-hold gear) ----------
const gear=document.getElementById('gearBtn'), panel=document.getElementById('settings'); let gT=null;
gear.addEventListener('pointerdown',e=>{ e.preventDefault(); gear.classList.add('hold'); gT=setTimeout(()=>{ gear.classList.remove('hold'); openSettings(); },1500); });
['pointerup','pointerleave','pointercancel'].forEach(ev=>gear.addEventListener(ev,()=>{ clearTimeout(gT); gear.classList.remove('hold'); }));
const $=id=>document.getElementById(id);
function openSettings(){ $('setVol').value=Math.round(ST.vol*100); $('setVoice').checked=ST.voice; $('setLang').value=ST.lang; panel.classList.add('open'); }
$('setVol').addEventListener('input',e=>{ ST.vol=e.target.value/100; if(master) master.gain.value=ST.vol; saveST(); });
$('setVol').addEventListener('change',()=>SFX.ding());
$('setVoice').addEventListener('change',e=>{ ST.voice=e.target.checked; saveST(); });
$('setLang').addEventListener('change',e=>{ ST.lang=e.target.value; saveST(); say(t('yay')); });
$('setTest').addEventListener('click',()=>{ SFX.cheer(); say(t('yay')); });
$('setResetLv').addEventListener('click',()=>{ LV={}; saveLV(); SFX.whoosh(); });
$('setResetSt').addEventListener('click',()=>{ if(confirm('Remove all stickers?')){ got=[]; localStorage.setItem('bz-stickers','[]'); SFX.whoosh(); } });
$('setClose').addEventListener('click',()=>panel.classList.remove('open'));
panel.addEventListener('touchmove',e=>e.stopPropagation(),{passive:true});

// ---------- Mode: Bubble Pop (speeds up a little as you pop; sticker every 12 pops) ----------
const stage=$('bubbleStage'); let bubbles=[], spawnT=null, raf=null, last=0, pops=0;
function spawn(){
  const L=lvl('bubbles'); if(current!=='bubbles' || bubbles.length>=5+Math.min(L,4)) return;
  const Wd=stage.clientWidth,H=stage.clientHeight, size=Math.max(100,Math.min(Wd,H)*(.3-Math.min(L,4)*.015))+Math.random()*30, name=rnd(NAMES);
  const el=document.createElement('div'); el.className='bubble'; el.style.width=el.style.height=size+'px'; el.style.setProperty('--c',rnd(COLORS)+'aa');
  el.innerHTML=`<div class="glass"></div>`+svg(A[name].art); el.dataset.animal=name; stage.appendChild(el);
  const b={el,name,size,x0:Math.max(0,Math.random()*(Wd-size)),y:H+10,sp:(40+Math.random()*30)*(1+Math.min(L-1,4)*.12),ph:Math.random()*6};
  el.style.transform=`translate(${b.x0}px,${b.y}px)`; bubbles.push(b);
  tap(el,()=>popB(b));
}
function popB(b){
  if(b.popped) return; b.popped=true; const [x,y]=centerOf(b.el);
  burst(x,y,18); SFX.pop(); vibe(15); setTimeout(()=>animalCall(b.name,500),120);
  b.el.style.setProperty('--t',b.el.style.transform); b.el.classList.add('pop'); setTimeout(()=>b.el.remove(),260);
  bubbles=bubbles.filter(q=>q!==b); later(spawn,400);
  if(++pops%12===0){ LV.bubbles=lvl('bubbles')+1; saveLV(); later(award,900); }
}
function loop(tm){
  const dt=Math.min((tm-(last||tm))/1000,.05); last=tm;
  for(const b of [...bubbles]){ b.y-=b.sp*dt; b.ph+=dt; const x=b.x0+Math.sin(b.ph*1.3)*20;
    b.el.style.transform=`translate(${x}px,${b.y}px)`;
    if(b.y<-b.size-20){ b.el.remove(); bubbles=bubbles.filter(q=>q!==b); } }
  raf=requestAnimationFrame(loop);
}
STARTERS.bubbles=()=>{ stage.innerHTML=''; bubbles=[]; last=0; pops=0; spawn(); later(spawn,600); spawnT=setInterval(spawn,1300); raf=requestAnimationFrame(loop); };

// ---------- Board helper (Animal Sounds / Vehicles) ----------
function board(gridId,items,onTap){ const g=$(gridId); if(g.children.length) return;
  Object.keys(items).forEach(n=>{ const b=document.createElement('button'); b.className='animal'; b.style.setProperty('--c',items[n].bg); b.innerHTML=svg(items[n].art);
    tap(b,()=>{ b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce'); vibe(15); onTap(n); const r=b.getBoundingClientRect(); burst(r.left+r.width/2,r.top+r.height/3,8); });
    g.appendChild(b); }); }
STARTERS.sounds=()=>board('animalGrid',Object.fromEntries(NAMES.map(n=>[n,{bg:A[n].bg,art:A[n].art}])),n=>animalCall(n));
STARTERS.vehicles=()=>board('vehicleGrid',V,n=>{ SFX[V[n].s](); later(()=>say(t(n)),700); });

// ---------- Mode: Colors & Shapes (3 → 4 → 5 shapes) ----------
const SHAPES={
  circle:{c:'#ff5d8f',col:'pink',d:`<circle cx="50" cy="50" r="44"/>`},
  square:{c:'#3ec1ff',col:'blue',d:`<rect x="8" y="8" width="84" height="84" rx="12"/>`},
  triangle:{c:'#ffd23f',col:'yellow',d:`<path d="M50 6 L94 90 H6Z" stroke-linejoin="round"/>`},
  star:{c:'#b388ff',col:'purple',d:STAR},
  heart:{c:'#ff6b6b',col:'red',d:`<path d="M50 90 C10 62 4 40 18 22 C30 8 46 14 50 28 C54 14 70 8 82 22 C96 40 90 62 50 90Z"/>`},
  diamond:{c:'#7be26f',col:'green',d:`<path d="M50 4 L92 50 L50 96 L8 50Z" stroke-linejoin="round"/>`},
};
const sStage=$('shapeStage');
function newShapes(){
  sStage.innerHTML=''; const N=Math.min(2+lvl('shapes'),5); const keys=shuffle(Object.keys(SHAPES)).slice(0,N), order=shuffle([...Array(N).keys()]);
  const Wd=sStage.clientWidth,H=sStage.clientHeight, land=Wd>H;
  const sz=Math.round(Math.max(80,Math.min(160,land?Math.min(H/(N+.6),Wd/6):Math.min(Wd/(N+.6),H/6.5))));
  let left=N;
  keys.forEach((k,i)=>{
    const sp=SHAPES[k], j=order[i]; let sx,sy,px,py;
    if(land){ const gx=64; sx=gx+(Wd-gx)*.72-sz/2; sy=H*(i+.5)/N-sz/2; px=gx+(Wd-gx)*.25-sz/2+(j%2?sz*.3:0); py=H*(j+.5)/N-sz/2; }
    else { sx=Wd*(i+.5)/N-sz/2; sy=Math.max(84,H*.22-sz/2); px=Wd*(j+.5)/N-sz/2; py=H*.66-sz/2+(j%2?sz*.45:0); }
    const slot=document.createElement('div'); slot.className='slot'; slot.dataset.shape=k;
    slot.innerHTML=svg(`<g fill="rgba(255,255,255,.55)" stroke="${sp.c}" stroke-width="5" stroke-dasharray="10 8">${sp.d}</g>`);
    const piece=document.createElement('div'); piece.className='piece'; piece.dataset.shape=k;
    piece.innerHTML=svg(`<g fill="${sp.c}" stroke="#fff" stroke-width="4">${sp.d}</g><circle cx="40" cy="52" r="5" fill="#222"/><circle cx="60" cy="52" r="5" fill="#222"/><path d="M43 62 Q50 69 57 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`);
    for(const [el,x,y] of [[slot,sx,sy],[piece,px,py]]) Object.assign(el.style,{width:sz+'px',height:sz+'px',left:x+'px',top:y+'px'});
    sStage.append(slot,piece);
    let ox=0,oy=0,drag=false;
    piece.addEventListener('pointerdown',e=>{ if(piece.done) return; e.preventDefault(); drag=true; try{piece.setPointerCapture(e.pointerId);}catch(_){}
      piece.classList.remove('snap'); piece.classList.add('dragging'); ox=e.clientX-piece.offsetLeft; oy=e.clientY-piece.offsetTop; SFX.pick(); say(t(k)); });
    piece.addEventListener('pointermove',e=>{ if(!drag) return; piece.style.left=(e.clientX-ox)+'px'; piece.style.top=(e.clientY-oy)+'px'; });
    const end=()=>{ if(!drag) return; drag=false; piece.classList.remove('dragging'); piece.classList.add('snap');
      const dT=Math.hypot(piece.offsetLeft-sx,piece.offsetTop-sy), dS=Math.hypot(piece.offsetLeft-px,piece.offsetTop-py);
      if(dT<sz*1.1 || (dS>sz*.6 && dT<Math.hypot(px-sx,py-sy)*.6)){
        piece.style.left=sx+'px'; piece.style.top=sy+'px'; piece.done=true; slot.classList.add('done');
        const [x,y]=centerOf(slot); burst(x,y,40,true); SFX.cheer(); vibe(30); say(t(k)+'! '+t(sp.col)+'!');
        if(--left===0) later(()=>{ burst(innerWidth/2,innerHeight/3,90,true); SFX.cheer(); say(t('yay')); LV.shapes=lvl('shapes')+1; saveLV(); later(award,1200); later(newShapes,3200); },900);
      } else { piece.style.left=px+'px'; piece.style.top=py+'px'; } };
    piece.addEventListener('pointerup',end); piece.addEventListener('pointercancel',end);
  });
}
STARTERS.shapes=newShapes;

// ---------- Mode: Counting (1..3, then up to 5, then up to 10) ----------
const cStage=$('countStage'), cNum=$('countNum');
function newCount(){
  cStage.innerHTML=''; cNum.textContent=''; cNum.className='countNum';
  const L=lvl('count'), max=L<3?3:L<6?5:10, N=1+Math.floor(Math.random()*max);
  const items=[FRUIT,...NAMES.map(n=>A[n].art)], art=rnd(items); let n=0;
  const cols=N<=3?N:N<=6?3:N<=8?4:5, rows=Math.ceil(N/cols);
  cStage.style.gridTemplateColumns=`repeat(${cols},1fr)`; cStage.style.gridTemplateRows=`repeat(${rows},1fr)`;
  for(let i=0;i<N;i++){ const d=document.createElement('div'); d.className='cItem'; d.innerHTML=svg(art); d.style.animationDelay=(i*.08)+'s';
    tap(d,()=>{ if(d.classList.contains('on')) return; d.classList.add('on'); n++; d.dataset.n=n; SFX.pick(); tone({type:'triangle',f0:392*Math.pow(2,(n-1)/7),dur:.3,vol:.2}); vibe(12);
      say(t('n')[n]); cNum.textContent=n; cNum.classList.remove('pulse'); void cNum.offsetWidth; cNum.classList.add('pulse'); const [x,y]=centerOf(d); burst(x,y,10);
      if(n===N) later(()=>{ burst(innerWidth/2,innerHeight/3,70,true); SFX.cheer(); say(t('n')[N]+'! '+t('yay')); LV.count=L+1; saveLV(); if(L%2===0) later(award,1200); later(newCount,3200); },900); });
    cStage.appendChild(d); }
}
STARTERS.count=newCount;

// ---------- Mode: Xylophone ----------
const NOTES=[{f:523.25,c:'#ff5d8f',a:'cat'},{f:587.33,c:'#ff9f43',a:'dog'},{f:659.25,c:'#ffd23f',a:'duck'},{f:698.46,c:'#7be26f',a:'frog'},{f:783.99,c:'#3ec1ff',a:'cow'},{f:880,c:'#b388ff',a:'sheep'},{f:987.77,c:'#ff6fd8',a:'pig'},{f:1046.5,c:'#ff4d4d',a:'lion'}];
const keysEl=$('keys'); let songOn=false;
function bar(f){ tone({type:'sine',f0:f,dur:1.2,vol:.3}); tone({type:'sine',f0:f*4,dur:.25,vol:.06}); tone({type:'triangle',f0:f*2,dur:.5,vol:.05}); }
function hit(i){ const k=keysEl.children[i]; if(!k) return; bar(NOTES[i].f); k.classList.remove('hit'); void k.offsetWidth; k.classList.add('hit'); vibe(10);
  const r=k.getBoundingClientRect(); burst(r.left+r.width/2,r.top+20,6); }
STARTERS.music=()=>{ if(keysEl.children.length) return;
  NOTES.forEach((n,i)=>{ const k=document.createElement('button'); k.className='key'; k.style.setProperty('--c',n.c); k.style.setProperty('--h',(100-i*6)+'%');
    k.innerHTML=`<span class="peg"></span>${svg(A[n.a].art)}<span class="peg"></span>`; tap(k,()=>hit(i)); keysEl.appendChild(k); }); };
const SONGS=[[0,0,4,4,5,5,4,-1,3,3,2,2,1,1,0],[2,1,0,1,2,2,2,-1,1,1,1,-1,2,4,4],[0,1,2,0,0,1,2,0,2,3,4,-1,2,3,4]];
$('songBtn').addEventListener('pointerdown',e=>{ e.preventDefault(); if(songOn) return; songOn=true; const s=rnd(SONGS);
  s.forEach((i,j)=>later(()=>{ if(i>=0) hit(i); if(j===s.length-1) songOn=false; },j*420)); });

// ---------- Mode: Finger painting ----------
const pc=$('paintCanvas'), pctx=pc.getContext('2d'); const PAL=['#ff3b5c','#ff9f43','#ffd23f','#5ad65a','#2fb8ff','#7b5cff','#ff6fd8','#8a5a2b','#222222','#ffffff','rainbow'];
let pColor=PAL[0], pSize=26, hue=0; const strokes={};
function sizePaint(){ const r=devicePixelRatio||1, b=pc.getBoundingClientRect(); if(!b.width) return; const keep=pc.width?pctx.getImageData(0,0,pc.width,pc.height):null;
  pc.width=b.width*r; pc.height=b.height*r; pctx.setTransform(r,0,0,r,0,0); pctx.fillStyle='#fff'; pctx.fillRect(0,0,b.width,b.height); if(keep) pctx.putImageData(keep,0,0); pctx.lineCap=pctx.lineJoin='round'; }
STARTERS.paint=()=>{ const pal=$('palette'); if(!pal.children.length){
    PAL.forEach(c=>{ const b=document.createElement('button'); b.className='swatch'+(c===pColor?' sel':''); b.style.background=c==='rainbow'?'conic-gradient(red,orange,yellow,lime,cyan,blue,magenta,red)':c;
      tap(b,()=>{ pColor=c; pal.querySelectorAll('.swatch').forEach(s=>s.classList.toggle('sel',s===b)); SFX.pick(); vibe(10); }); pal.appendChild(b); });
    [14,26,44].forEach(s=>{ const b=document.createElement('button'); b.className='brush'+(s===pSize?' sel':''); b.innerHTML=`<i style="width:${s}px;height:${s}px"></i>`;
      tap(b,()=>{ pSize=s; pal.querySelectorAll('.brush').forEach(x=>x.classList.toggle('sel',x===b)); SFX.pick(); }); pal.appendChild(b); });
    const clr=document.createElement('button'); clr.className='clear'; clr.innerHTML=svg(`<path d="M20 30 H80 M40 30 V18 H60 V30 M28 30 L32 88 H68 L72 30" stroke="#fff" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>`);
    tap(clr,()=>{ SFX.whoosh(); vibe(30); pc.classList.add('wipe'); setTimeout(()=>{ const b=pc.getBoundingClientRect(); pctx.fillStyle='#fff'; pctx.fillRect(0,0,b.width,b.height); pc.classList.remove('wipe'); },300); }); pal.appendChild(clr); }
  requestAnimationFrame(sizePaint); };
const pos=e=>{ const b=pc.getBoundingClientRect(); return [e.clientX-b.left,e.clientY-b.top]; };
pc.addEventListener('pointerdown',e=>{ e.preventDefault(); try{pc.setPointerCapture(e.pointerId);}catch(_){} strokes[e.pointerId]=pos(e); dot(...pos(e)); if(Math.random()<.3) tone({f0:300+Math.random()*600,dur:.15,vol:.05}); });
pc.addEventListener('pointermove',e=>{ const p=strokes[e.pointerId]; if(!p) return; const q=pos(e); pctx.strokeStyle=col(); pctx.lineWidth=pSize; pctx.beginPath(); pctx.moveTo(...p); pctx.lineTo(...q); pctx.stroke(); strokes[e.pointerId]=q; });
['pointerup','pointercancel'].forEach(ev=>pc.addEventListener(ev,e=>{ delete strokes[e.pointerId]; }));
function col(){ if(pColor!=='rainbow') return pColor; hue=(hue+4)%360; return `hsl(${hue},90%,55%)`; }
function dot(x,y){ pctx.fillStyle=col(); pctx.beginPath(); pctx.arc(x,y,pSize/2,0,7); pctx.fill(); }
let prT; addEventListener('resize',()=>{ clearTimeout(prT); prT=setTimeout(()=>{ if(current==='paint') sizePaint(); if(current==='shapes') newShapes(); },400); });

// ---------- Mode: Memory match (4 → 6 → 8 cards; no losing) ----------
const mGrid=$('memGrid');
function newMemory(){
  mGrid.innerHTML=''; const L=lvl('memory'), pairs=L<3?2:L<6?3:4; const names=shuffle(NAMES).slice(0,pairs), deck=shuffle([...names,...names]);
  const land=innerWidth>innerHeight, cols=land?(pairs===3?3:4):2; mGrid.style.gridTemplateColumns=`repeat(${cols},1fr)`;
  let open=[], lock=false, found=0;
  deck.forEach(n=>{ const c=document.createElement('div'); c.className='card'; c.innerHTML=`<div class="face back">${svg(`<circle cx="50" cy="50" r="30" fill="#fff" opacity=".35"/><g transform="translate(25 25) scale(.5)" fill="#fff">${STAR}</g>`)}</div><div class="face front" style="--c:${A[n].bg}">${svg(A[n].art)}</div>`;
    tap(c,()=>{ if(lock||c.classList.contains('up')) return; c.classList.add('up'); SFX.flip(); vibe(10); open.push([c,n]);
      if(open.length===2){ lock=true; const [[c1,n1],[c2,n2]]=open; open=[];
        if(n1===n2){ later(()=>{ c1.classList.add('got'); c2.classList.add('got'); animalCall(n1,400); [c1,c2].forEach(x=>{ const [a,b]=centerOf(x); burst(a,b,24,true); }); lock=false;
          if(++found===pairs) later(()=>{ burst(innerWidth/2,innerHeight/3,90,true); SFX.cheer(); say(t('yay')); LV.memory=L+1; saveLV(); later(award,1200); later(newMemory,3400); },1400); },400); }
        else later(()=>{ SFX.boing(); c1.classList.remove('up'); c2.classList.remove('up'); lock=false; },1100); } });
    mGrid.appendChild(c); });
}
STARTERS.memory=newMemory;

// ---------- Mode: Peekaboo (find the animal behind the bushes; 3 → 4 → 5 bushes) ----------
const pkStage=$('peekStage');
function newPeek(){
  pkStage.innerHTML=''; const L=lvl('peek'), N=Math.min(2+L,5), hide=Math.floor(Math.random()*N), name=rnd(NAMES); let done=false;
  later(()=>say(t('where')+' '+t(name)+'?'),400);
  for(let i=0;i<N;i++){ const b=document.createElement('div'); b.className='bush';
    b.innerHTML=(i===hide?`<div class="hider">${svg(A[name].art)}</div>`:'')+`<div class="leaf">${svg(BUSH)}</div>`;
    tap(b,()=>{ if(done) return; vibe(15);
      if(i===hide){ done=true; b.classList.add('found'); animalCall(name,700); later(()=>say(t('found')),1800); const [x,y]=centerOf(b); burst(x,y,50,true); SFX.cheer();
        LV.peek=L+1; saveLV(); if(L%2===1) later(award,2600); later(newPeek,4200); }
      else { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); SFX.boing(); const [x,y]=centerOf(b); burst(x,y-30,6); } });
    pkStage.appendChild(b); }
}
STARTERS.peek=newPeek;
STARTERS.stickers=buildStickers;

// ---------- Block zoom / callouts / scrolling ----------
['gesturestart','gesturechange','gestureend','dblclick','contextmenu','selectstart'].forEach(e=>document.addEventListener(e,ev=>{ if(!panel.contains(ev.target)) ev.preventDefault(); },{passive:false}));
document.addEventListener('touchmove',e=>{ if(!panel.contains(e.target)) e.preventDefault(); },{passive:false});
let lastTouch=0; document.addEventListener('touchend',e=>{ if(panel.contains(e.target)) return; const n=Date.now(); if(n-lastTouch<350) e.preventDefault(); lastTouch=n; },{passive:false});

// ---------- Offline ----------
if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
