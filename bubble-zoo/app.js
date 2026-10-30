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
// ---------- Audio (synthesized, no assets) ----------
let ac = null;
function unlock(){
  if(!ac){ try{ ac = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} }
  if(ac && ac.state==='suspended') ac.resume();
  if(ac && !unlock.done){ const b=ac.createBuffer(1,1,22050),s=ac.createBufferSource(); s.buffer=b; s.connect(ac.destination); s.start(0); unlock.done=true;
    if('speechSynthesis' in window){ const u=new SpeechSynthesisUtterance(' '); u.volume=0; speechSynthesis.speak(u);} }
}
['touchstart','pointerdown','click'].forEach(e=>document.addEventListener(e,unlock,{passive:true}));
function tone({type='sine',f0=440,f1=f0,dur=.3,vol=.3,delay=0,vib=0}){
  if(!ac) return; const t=ac.currentTime+delay, o=ac.createOscillator(), g=ac.createGain();
  o.type=type; o.frequency.setValueAtTime(f0,t); o.frequency.exponentialRampToValueAtTime(Math.max(f1,20),t+dur);
  if(vib){const l=ac.createOscillator(),lg=ac.createGain(); l.frequency.value=vib; lg.gain.value=f0*.06; l.connect(lg).connect(o.frequency); l.start(t); l.stop(t+dur);}
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.02); g.gain.exponentialRampToValueAtTime(.001,t+dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t+dur+.05);
}
function noise(dur=.3,vol=.2,freq=800,delay=0){
  if(!ac) return; const t=ac.currentTime+delay, n=Math.floor(ac.sampleRate*dur), b=ac.createBuffer(1,n,ac.sampleRate), d=b.getChannelData(0);
  for(let i=0;i<n;i++) d[i]=Math.random()*2-1;
  const s=ac.createBufferSource(), f=ac.createBiquadFilter(), g=ac.createGain(); s.buffer=b; f.type='bandpass'; f.frequency.value=freq;
  g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(.001,t+dur); s.connect(f).connect(g).connect(ac.destination); s.start(t);
}
const SFX = {
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
};
let voice=null;
function pickVoice(){ const v=speechSynthesis.getVoices(); voice=v.find(x=>x.lang==='en-US'&&/Samantha|Karen|Female/i.test(x.name))||v.find(x=>x.lang==='en-US')||null; }
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function say(text){
  if(!('speechSynthesis' in window)) return;
  try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='en-US'; if(voice) u.voice=voice; u.rate=.85; u.pitch=1.3; speechSynthesis.speak(u);}catch(e){}
}
function animalCall(name, delay=600){ SFX[A[name].s](); setTimeout(()=>say(A[name].say),delay); }

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
// ---------- Navigation ----------
const homeBtn=document.getElementById('homeBtn'); let current='home';
const ICONS={
  bubbles: svg(`<circle cx="50" cy="52" r="40" fill="#fff" opacity=".35" stroke="#fff" stroke-width="4"/><g transform="translate(22 24) scale(.56)">${A.duck.art}</g><circle cx="36" cy="34" r="7" fill="#fff" opacity=".9"/><circle cx="85" cy="18" r="8" fill="#fff" opacity=".6"/><circle cx="14" cy="86" r="6" fill="#fff" opacity=".6"/>`),
  sounds: svg(`<g transform="translate(4 14) scale(.7)">${A.dog.art}</g><path d="M78 36 Q88 50 78 64 M86 28 Q100 50 86 72" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`),
  shapes: svg(`<circle cx="30" cy="30" r="20" fill="#ff5d8f"/><rect x="56" y="12" width="36" height="36" rx="6" fill="#3ec1ff"/><path d="M30 56 L52 92 H8Z" fill="#ffd23f"/><path d="M74 54 l6 13 14 1 -11 9 4 14 -13 -8 -13 8 4 -14 -11 -9 14 -1z" fill="#b388ff"/>`),
};
document.querySelectorAll('.tile').forEach(t=>{ t.innerHTML=ICONS[t.dataset.go]; t.addEventListener('click',()=>go(t.dataset.go)); });
function go(id){
  stopAll(); document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id)); current=id;
  homeBtn.classList.toggle('show',id!=='home'); SFX.pick();
  if(id==='bubbles') startBubbles(); if(id==='sounds') buildGrid(); if(id==='shapes') newShapes();
}
let holdT=null;
function holdStart(e){ e.preventDefault(); homeBtn.classList.add('hold'); holdT=setTimeout(()=>{ holdEnd(); go('home'); },1500); }
function holdEnd(){ clearTimeout(holdT); homeBtn.classList.remove('hold'); }
homeBtn.addEventListener('pointerdown',holdStart); ['pointerup','pointerleave','pointercancel'].forEach(e=>homeBtn.addEventListener(e,holdEnd));

// ---------- Mode 1: Bubble Pop ----------
const stage=document.getElementById('bubbleStage'); let bubbles=[], spawnT=null, raf=null, last=0;
function spawn(){
  if(current!=='bubbles' || bubbles.length>=7) return;
  const W=stage.clientWidth,H=stage.clientHeight, size=Math.max(110,Math.min(W,H)*.3)+Math.random()*30, name=NAMES[Math.floor(Math.random()*NAMES.length)];
  const el=document.createElement('div'); el.className='bubble'; el.style.width=el.style.height=size+'px'; el.style.setProperty('--c',COLORS[Math.floor(Math.random()*6)]+'aa');
  el.innerHTML=`<div class="glass"></div>`+svg(A[name].art); el.dataset.animal=name; stage.appendChild(el);
  const b={el,name,size,x0:Math.max(0,Math.random()*(W-size)),y:H+10,sp:40+Math.random()*30,ph:Math.random()*6};
  el.style.transform=`translate(${b.x0}px,${b.y}px)`; bubbles.push(b);
  el.addEventListener('pointerdown',e=>{ e.preventDefault(); popB(b); });
}
function popB(b){
  if(b.popped) return; b.popped=true; const r=b.el.getBoundingClientRect();
  burst(r.left+r.width/2,r.top+r.height/2,18); SFX.pop(); setTimeout(()=>animalCall(b.name,500),120);
  b.el.style.setProperty('--t',b.el.style.transform); b.el.classList.add('pop'); setTimeout(()=>b.el.remove(),260);
  bubbles=bubbles.filter(x=>x!==b); setTimeout(spawn,400);
}
function loop(t){
  const dt=Math.min((t-(last||t))/1000,.05); last=t;
  for(const b of [...bubbles]){ b.y-=b.sp*dt; b.ph+=dt; const x=b.x0+Math.sin(b.ph*1.3)*20;
    b.el.style.transform=`translate(${x}px,${b.y}px)`;
    if(b.y<-b.size-20){ b.el.remove(); bubbles=bubbles.filter(q=>q!==b); } }
  raf=requestAnimationFrame(loop);
}
function startBubbles(){ stage.innerHTML=''; bubbles=[]; last=0; spawn(); setTimeout(spawn,600); spawnT=setInterval(spawn,1300); raf=requestAnimationFrame(loop); }

// ---------- Mode 2: Animal Sounds ----------
const grid=document.getElementById('animalGrid');
function buildGrid(){
  if(grid.children.length) return;
  NAMES.forEach(n=>{ const b=document.createElement('button'); b.className='animal'; b.dataset.animal=n; b.setAttribute('aria-label',A[n].say); b.style.setProperty('--c',A[n].bg); b.innerHTML=svg(A[n].art);
    b.addEventListener('pointerdown',e=>{ e.preventDefault(); b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce'); animalCall(n);
      const r=b.getBoundingClientRect(); burst(r.left+r.width/2,r.top+r.height/3,8); });
    grid.appendChild(b); });
}
// ---------- Mode 3: Colors & Shapes ----------
const SHAPES={
  circle:{c:'#ff5d8f',say:'Circle! Pink!',d:`<circle cx="50" cy="50" r="44"/>`},
  square:{c:'#3ec1ff',say:'Square! Blue!',d:`<rect x="8" y="8" width="84" height="84" rx="12"/>`},
  triangle:{c:'#ffd23f',say:'Triangle! Yellow!',d:`<path d="M50 6 L94 90 H6Z" stroke-linejoin="round"/>`},
  star:{c:'#b388ff',say:'Star! Purple!',d:`<path d="M50 4 l13 28 31 3 -23 21 7 31 -28 -16 -28 16 7 -31 -23 -21 31 -3z" stroke-linejoin="round"/>`},
  heart:{c:'#ff6b6b',say:'Heart! Red!',d:`<path d="M50 90 C10 62 4 40 18 22 C30 8 46 14 50 28 C54 14 70 8 82 22 C96 40 90 62 50 90Z"/>`},
  diamond:{c:'#7be26f',say:'Diamond! Green!',d:`<path d="M50 4 L92 50 L50 96 L8 50Z" stroke-linejoin="round"/>`},
};
const sStage=document.getElementById('shapeStage'); let sTimers=[];
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
function newShapes(){
  sStage.innerHTML=''; const keys=shuffle(Object.keys(SHAPES)).slice(0,3), order=shuffle([0,1,2]);
  const W=sStage.clientWidth,H=sStage.clientHeight, land=W>H;
  const sz=Math.round(Math.max(100,Math.min(160,land?Math.min(H/3.6,W/6):Math.min(W/3.6,H/6.5))));
  let left=3;
  keys.forEach((k,i)=>{
    const sp=SHAPES[k], j=order[i];
    // targets in one row/column, pieces in the other half (shuffled)
    let sx,sy,px,py;
    if(land){ const gx=64; sx=gx+(W-gx)*.72-sz/2; sy=H*(i+.5)/3-sz/2; px=gx+(W-gx)*.25-sz/2+(j===1?sz*.25:0); py=H*(j+.5)/3-sz/2; }
    else { sx=W*(i+.5)/3-sz/2; sy=Math.max(84,H*.22-sz/2); px=W*(j+.5)/3-sz/2; py=H*.68-sz/2+(j===1?sz*.35:0); }
    const slot=document.createElement('div'); slot.className='slot'; slot.dataset.shape=k;
    slot.innerHTML=svg(`<g fill="rgba(255,255,255,.55)" stroke="${sp.c}" stroke-width="5" stroke-dasharray="10 8">${sp.d}</g>`);
    const piece=document.createElement('div'); piece.className='piece'; piece.dataset.shape=k;
    piece.innerHTML=svg(`<g fill="${sp.c}" stroke="#fff" stroke-width="4">${sp.d}</g><circle cx="40" cy="52" r="5" fill="#222"/><circle cx="60" cy="52" r="5" fill="#222"/><path d="M43 62 Q50 69 57 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>`);
    for(const [el,x,y] of [[slot,sx,sy],[piece,px,py]]) Object.assign(el.style,{width:sz+'px',height:sz+'px',left:x+'px',top:y+'px'});
    sStage.append(slot,piece);
    let ox=0,oy=0,drag=false;
    piece.addEventListener('pointerdown',e=>{ if(piece.done) return; e.preventDefault(); drag=true; try{piece.setPointerCapture(e.pointerId);}catch(_){}
      piece.classList.remove('snap'); piece.classList.add('dragging'); ox=e.clientX-piece.offsetLeft; oy=e.clientY-piece.offsetTop; SFX.pick(); });
    piece.addEventListener('pointermove',e=>{ if(!drag) return; piece.style.left=(e.clientX-ox)+'px'; piece.style.top=(e.clientY-oy)+'px'; });
    const end=()=>{ if(!drag) return; drag=false; piece.classList.remove('dragging'); piece.classList.add('snap');
      const dTarget=Math.hypot(piece.offsetLeft-sx,piece.offsetTop-sy), dStart=Math.hypot(piece.offsetLeft-px,piece.offsetTop-py);
      // generous: snap if within ~1.2 shape sizes OR moved more toward target than away
      if(dTarget<sz*1.2 || (dStart>sz*.6 && dTarget<Math.hypot(px-sx,py-sy)*.75)){
        piece.style.left=sx+'px'; piece.style.top=sy+'px'; piece.done=true; slot.classList.add('done');
        const r=slot.getBoundingClientRect(); burst(r.left+r.width/2,r.top+r.height/2,40,true); SFX.cheer(); say(sp.say);
        if(--left===0) sTimers.push(setTimeout(()=>{ burst(innerWidth/2,innerHeight/3,90,true); SFX.cheer(); say('Yay! Great job!'); sTimers.push(setTimeout(newShapes,2400)); },900));
      } else { piece.style.left=px+'px'; piece.style.top=py+'px'; } };
    piece.addEventListener('pointerup',end); piece.addEventListener('pointercancel',end);
  });
}
function stopAll(){ clearInterval(spawnT); cancelAnimationFrame(raf); sTimers.forEach(clearTimeout); sTimers=[]; bubbles.forEach(b=>b.el.remove()); bubbles=[]; if('speechSynthesis' in window) speechSynthesis.cancel(); }
let rT; addEventListener('resize',()=>{ clearTimeout(rT); rT=setTimeout(()=>{ if(current==='shapes') newShapes(); },400); });

// ---------- Block zoom / callouts / scrolling ----------
['gesturestart','gesturechange','gestureend','dblclick','contextmenu','selectstart'].forEach(e=>document.addEventListener(e,ev=>ev.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
let lastTouch=0; document.addEventListener('touchend',e=>{ const n=Date.now(); if(n-lastTouch<350) e.preventDefault(); lastTouch=n; },{passive:false});

// ---------- Offline ----------
if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
