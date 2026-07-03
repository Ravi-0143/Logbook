'use strict';

/* ════════════════════════════════════════════
   IMPORTS
════════════════════════════════════════════ */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initWebGLBackground } from './canvas/webgl-bg.js';
import {
  initLenis,
  animateCellIn,
  animateModalOpen,
  animateModalClose,
  wrapWordsForReveal,
  revealMasked,
  bindParallax,
  bindCellHover,
  pulseStrip,
} from './animations.js';

gsap.registerPlugin(ScrollTrigger);

/* ════════════════════════════════════════════
   PHASE 4 — WebGL background boot
   (replaces nebula.js + stars.js entirely)
════════════════════════════════════════════ */
initWebGLBackground();

/* ════════════════════════════════════════════
   PHASE 3 — Lenis smooth scroll & Parallax
   Bound after DOM is ready; re-bound whenever
   the active scroll container changes.
════════════════════════════════════════════ */
let _lenis = null;
let floatTriggers = [];

function bindLenisTo(container) {
  // Clear existing floating parallax triggers
  floatTriggers.forEach(t => t.kill());
  floatTriggers = [];

  if (_lenis) { _lenis.destroy(); _lenis = null; }
  if (!container) return;
  
  _lenis = initLenis(container);

  // Initialize ScrollTrigger parallax on floating symbols layer
  const syms = gsap.utils.toArray('.float-sym');
  
  // Only apply scroll-parallax if screen is desktop width and fine pointer
  if (window.matchMedia('(min-width: 768px) and (pointer: fine)').matches) {
    syms.forEach((sym, i) => {
      const speed = 320 + (i * 90); // staggered aggressive float translation
      const trigger = ScrollTrigger.create({
        trigger: container,
        scroller: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        animation: gsap.fromTo(sym, { y: 0 }, { y: -speed, ease: "none" })
      });
      floatTriggers.push(trigger);
    });
    ScrollTrigger.refresh();
  }
}

/* ════════════════════════════════════════════
   SCROLL LOCK
════════════════════════════════════════════ */
let savedScrollTop = 0;
let activeScrollContainer = null;
let scrollLockCount = 0;

function lockBackgroundScroll() {
  if (scrollLockCount === 0) {
    const VLog  = document.getElementById('view-logbook');
    const VWeek = document.getElementById('view-week');
    if (VWeek && VWeek.classList.contains('on'))    activeScrollContainer = VWeek;
    else if (VLog && VLog.classList.contains('on')) activeScrollContainer = VLog;
    if (activeScrollContainer) {
      savedScrollTop = activeScrollContainer.scrollTop;
      activeScrollContainer.classList.add('scroll-locked');
      activeScrollContainer.scrollTop = savedScrollTop;
      if (_lenis) _lenis.stop();
    }
  }
  scrollLockCount++;
}

function unlockBackgroundScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0 && activeScrollContainer) {
    activeScrollContainer.classList.remove('scroll-locked');
    activeScrollContainer.scrollTop = savedScrollTop;
    if (_lenis) _lenis.start();
    activeScrollContainer = null;
  }
}

function addPassiveToggle(target, callback) {
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;
  let lastTouchTime = 0;
  el.addEventListener('touchstart', (e) => { lastTouchTime = Date.now(); callback(e); }, { passive: true });
  el.addEventListener('click',      (e) => { if (Date.now() - lastTouchTime < 600) return; callback(e); });
}

/* ════════════════════════════════════════════
   POPUP
════════════════════════════════════════════ */
let _pr = null;
const PICONS = { error:'⚠️', success:'✅', info:'ℹ️', confirm:'🗑️', location:'📍', gps:'📡' };
const popEl  = document.getElementById('pop');

function showPop({ type = 'info', icon, title, message, buttons }) {
  lockBackgroundScroll();
  return new Promise(res => {
    _pr = res;
    document.getElementById('pop-icon').textContent  = icon || PICONS[type] || 'ℹ️';
    document.getElementById('pop-title').textContent = title   || '';
    document.getElementById('pop-msg').textContent   = message || '';
    const acts = document.getElementById('pop-acts'); acts.innerHTML = '';
    (buttons || [{ label: 'Got it', value: true, primary: true }]).forEach(b => {
      const btn = document.createElement('button');
      btn.textContent = b.label;
      btn.className   = 'pb ' + (b.primary !== false ? 'pb-p' : 'pb-s');
      btn.onclick     = () => dimPop(b.value);
      acts.appendChild(btn);
    });
    popEl.classList.remove('off');
    popEl.classList.add('on');
  });
}
function dimPop(v) {
  popEl.classList.add('off');
  setTimeout(() => {
    popEl.classList.remove('on', 'off');
    unlockBackgroundScroll();
    if (_pr) { _pr(v); _pr = null; }
  }, 220);
}
popEl.addEventListener('click', e => { if (e.target === popEl) dimPop(false); });

/* ════════════════════════════════════════════
   TOAST
════════════════════════════════════════════ */
let _tt;
const toastEl = document.getElementById('toast');
function toast(msg, type = 'i') {
  clearTimeout(_tt);
  toastEl.textContent = msg;
  toastEl.className   = 't' + type;
  toastEl.offsetHeight;
  toastEl.classList.add('on');
  _tt = setTimeout(() => toastEl.classList.remove('on'), 4400);
}

/* ════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════ */
const wait    = ms => new Promise(r => setTimeout(r, ms));
let _typing   = false;

async function typeIn(el, text, spd = 30) {
  el.textContent = '';
  for (const ch of text) {
    if (!_typing) return;
    el.textContent += ch;
    await wait(spd + Math.random() * 12);
  }
}

/* ════════════════════════════════════════════
   DATA
   Phase 5: unchanged — data definitions preserved exactly.
════════════════════════════════════════════ */
const DN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DT = { Sun:'reset', Mon:'ssc', Tue:'ssc', Wed:'upsc', Thu:'ssc', Fri:'ssc', Sat:'upsc' };

const SCH = {
  ssc: { label:'SSC CHSL Day', blocks:[
    { id:'settle',  time:'10:40–11:00', sh:10,sm:40,eh:11,em: 0, title:'Settle In',          items:['Phone left in bag / airplane mode','Reviewed yesterday\'s error log'] },
    { id:'drill',   time:'11:00–1:00',  sh:11,sm: 0,eh:13,em: 0, title:'SSC Sectional',      items:['Completed a timed sectional (quant / reasoning / English / GK)'] },
    { id:'mock',    time:'1:30–3:00',   sh:13,sm:30,eh:15,em: 0, title:'Mock / Drill',        items:['Sat a timed mock or focused drill','Logged the score honestly, no matter what it was'] },
    { id:'review',  time:'3:00–3:30',   sh:15,sm: 0,eh:15,em:30, title:'Error Log',           items:['Wrote down what went wrong and why — no lecture rewatching'] },
    { id:'hindu',   time:'3:30–4:30',   sh:15,sm:30,eh:16,em:30, title:'The Hindu',           items:['Read and took notes myself — not the YouTube summary'] },
    { id:'tuition', time:'5:00–7:00',   sh:17,sm: 0,eh:19,em: 0, title:'Tuition',             items:['Taught the 5–7 pm class'] },
    { id:'evening', time:'7:00–9:00',   sh:19,sm: 0,eh:21,em: 0, title:'Evening Study',       items:['If new GS topic: watched lecture with notes','If not new: revised from own notes (no passive rewatch)'] },
  ]},
  upsc: { label:'UPSC + Anthropology Day', blocks:[
    { id:'settle',  time:'10:40–11:00', sh:10,sm:40,eh:11,em: 0, title:'Settle In',           items:['Phone left in bag / airplane mode'] },
    { id:'anthro',  time:'11:00–1:00',  sh:11,sm: 0,eh:13,em: 0, title:'Anthropology',        items:['Watched a genuinely new topic and took notes'] },
    { id:'answer',  time:'1:30–3:30',   sh:13,sm:30,eh:15,em:30, title:'Answer Writing',      items:['Handwritten timed answer — the part I usually avoid'] },
    { id:'gsrev',   time:'3:30–4:30',   sh:15,sm:30,eh:16,em:30, title:'GS Revision / PYQs', items:['Revised from own notes or attempted PYQs — not fresh lectures'] },
    { id:'tuition', time:'5:00–7:00',   sh:17,sm: 0,eh:19,em: 0, title:'Tuition',             items:['Taught the 5–7 pm class'] },
    { id:'evening', time:'7:00–9:00',   sh:19,sm: 0,eh:21,em: 0, title:'Optional / Rest',     items:['Watched only if genuinely new, else free study or real rest'] },
  ]},
  reset: { label:'Reset Day', blocks:[
    { id:'weekly', time:'Anytime', sh:0,sm:0,eh:23,em:59, title:'Weekly Review', items:['Looked honestly at watched-vs-practiced log','Looked at all mock scores from the week','Picked 1–2 things to adjust next week'] },
    { id:'rest',   time:'Anytime', sh:0,sm:0,eh:23,em:59, title:'Actual Rest',   items:['Did something restorative — walk, sleep, a real conversation'] },
  ]},
};
const LIB = { lat: 24.159212136846484, lng: 83.80698321929917 };

const BLOCK_CATEGORY = {
  mock:    { cat: 'confrontation', label: 'Mock' },
  drill:   { cat: 'confrontation', label: 'Sectional' },
  review:  { cat: 'admin',         label: 'Admin' },
  hindu:   { cat: 'input',         label: 'Input' },
  evening: { cat: 'input',         label: 'Input' },
  tuition: { cat: 'obligation',    label: 'Fixed' },
  settle:  { cat: 'admin',         label: 'Admin' },
  answer:  { cat: 'confrontation', label: 'Answer' },
  anthro:  { cat: 'input',         label: 'Input' },
  gsrev:   { cat: 'input',         label: 'Input' },
  weekly:  { cat: null,            label: 'Review' },
  rest:    { cat: null,            label: 'Rest' },
};

/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
function dKm(a, b, c, d) {
  const R = 6371, dl = (c-a)*Math.PI/180, dp = (d-b)*Math.PI/180;
  const x = Math.sin(dl/2)**2 + Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dp/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
}
function toK(d)    { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function getMon(d) { const x = new Date(d); x.setDate(d.getDate() + (d.getDay()===0 ? -6 : 1) - d.getDay()); return x; }
function wkDates() { const m = getMon(new Date()); return Array.from({length:7}, (_, i) => { const dt = new Date(m); dt.setDate(m.getDate()+i); return dt; }); }
function dtOf(d)   { return DT[DN[d.getDay()]]; }
function sk(k)     { return 'logbook:' + k; }
function empty()   { return { checks:{}, mockScore:'', errorNote:'' }; }
function nItems(t) { return SCH[t].blocks.reduce((a,b) => a + b.items.length, 0); }
function nDone(d)  { return Object.values(d.checks||{}).filter(Boolean).length; }
function curBlk(blocks) {
  const m = new Date().getHours()*60 + new Date().getMinutes();
  return blocks.find(b => m >= b.sh*60+b.sm && m < b.eh*60+b.em) || null;
}

/* ════════════════════════════════════════════
   STORAGE — Google Sheets Backend
   Test Deployment Web App URL
════════════════════════════════════════════ */
const API_URL = 'https://script.google.com/macros/s/AKfycbxaeSo1IkiIa9Ti_-RGgDAi4K0Clbs20DkgKAi4R8-tkUHlPv1AWugp4TSq4Z3zgxYccw/exec';
const cache = {}, pend = {};

async function getDay(k) {
  if (cache[k]) return cache[k];
  try {
    const res = await fetch(`${API_URL}?key=${encodeURIComponent(sk(k))}`);
    const json = await res.json();
    cache[k] = (json && json.value) ? json.value : empty();
  } catch (e) {
    cache[k] = empty();
  }
  return cache[k];
}

function setDay(k, data) {
  cache[k] = data;
  clearTimeout(pend[k]);

  // Set visual loading states
  const isCurrentDay = (k === _vKey);
  const saveMkBtn = document.getElementById('svMk');
  const saveRvBtn = document.getElementById('svRv');
  
  if (saveMkBtn) { saveMkBtn.disabled = true; saveMkBtn.textContent = 'Saving...'; }
  if (saveRvBtn) { saveRvBtn.disabled = true; saveRvBtn.textContent = 'Saving...'; }
  if (isCurrentDay) {
    document.querySelectorAll('.bento-cell').forEach(c => c.classList.add('saving'));
  }

  pend[k] = setTimeout(async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' // bypass CORS preflight
        },
        body: JSON.stringify({ key: sk(k), value: data })
      });
      const json = await res.json();
      if (json && json.status === 'success') {
        toast('Synced to Sheets ✓', 's');
      } else {
        throw new Error('sync failed');
      }
    } catch (e) {
      toast('Sync failed — try again', 'e');
    } finally {
      // Clear visual loading states
      if (saveMkBtn) { saveMkBtn.disabled = false; saveMkBtn.textContent = 'Save'; }
      if (saveRvBtn) { saveRvBtn.disabled = false; saveRvBtn.textContent = 'Save'; }
      if (isCurrentDay) {
        document.querySelectorAll('.bento-cell').forEach(c => c.classList.remove('saving'));
      }
    }
  }, 400);
}

/* ════════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
let vDay = null, _blkId = null, _vKey = null, _sched = null, isFirst = true;

/* ════════════════════════════════════════════
   VIEW TRANSITIONS
════════════════════════════════════════════ */
const VCover = document.getElementById('view-cover');
const VLog   = document.getElementById('view-logbook');
const VWeek  = document.getElementById('view-week');
const TNav   = document.getElementById('topNav');

function navOn(id) {
  TNav.classList.add('show');
  TNav.querySelectorAll('.tnb').forEach(b => b.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}
function navOff() { TNav.classList.remove('show'); }

function goLogbook() {
  VCover.classList.add('away');
  VLog.classList.add('on');
  VWeek.classList.remove('on');
  navOn('btnToday');
  // Boot Lenis on the logbook container
  bindLenisTo(VLog);
}
function goCover() {
  VLog.classList.remove('on');
  VWeek.classList.remove('on');
  setTimeout(() => VCover.classList.remove('away'), 60);
  navOff();
  closeBM();
  if (_lenis) { _lenis.destroy(); _lenis = null; }
}
function goWeek() {
  VWeek.classList.add('on');
  navOn('btnWeek');
  bindLenisTo(VWeek);
}
function leaveWeek() {
  VWeek.classList.remove('on');
  navOn('btnToday');
  bindLenisTo(VLog);
}

/* ════════════════════════════════════════════
   BLOCK MODAL — Phase 3: GSAP elastic open
════════════════════════════════════════════ */
const bmBd   = document.getElementById('bmBd');
const bmEl   = document.getElementById('bm');
const bmTtl  = document.getElementById('bmTtl');
const bmTime = document.getElementById('bmTime');
const bmBody = document.getElementById('bmBody');

function openBM() {
  _typing = true;
  lockBackgroundScroll();
  bmBd.classList.add('on');
  bmEl.style.opacity      = '0';
  bmEl.style.pointerEvents = 'auto';
  bmEl.classList.add('on');  // makes it visible in the DOM flow
  // GSAP elastic snap — replaces CSS scale(.88) transition
  animateModalOpen(bmEl);
}

function closeBM() {
  _typing = false; _blkId = null;
  bmEl.style.pointerEvents = 'none'; // Block click interactions immediately
  animateModalClose(bmEl, () => {
    bmEl.classList.remove('on');
    bmBd.classList.remove('on');
    bmEl.removeAttribute('style'); // Clean up GSAP inline styles
    unlockBackgroundScroll();
  });
}
addPassiveToggle(bmBd, closeBM);
addPassiveToggle('bmX', closeBM);

/* ─── Modal sequence (Phase 5: logic preserved) ─── */
async function runModal(blk, dayData, vKey, sched) {
  _blkId = blk.id; _vKey = vKey; _sched = sched;
  bmTtl.textContent = ''; bmTime.textContent = '';
  bmTime.style.opacity = '0'; bmBody.innerHTML = '';
  openBM();

  await wait(420);
  if (!_typing || _blkId !== blk.id) return;

  // Phase 3: masked reveal for modal title (rises up from clip)
  const titleWords = wrapWordsForReveal(bmTtl, blk.title || '');
  revealMasked(titleWords, { stagger: 0.06 });

  await wait(blk.title.split(' ').length * 80 + 80);
  if (!_typing) return;

  bmTime.textContent   = blk.time || '';
  bmTime.style.opacity = '1';
  await wait(100);

  if (blk.id === '__checkin') { await runCIModal(dayData, vKey); return; }

  for (let i = 0; i < blk.items.length; i++) {
    if (!_typing || _blkId !== blk.id) return;
    await wait(70);
    const ik  = blk.id + '_' + i;
    const chk = !!(dayData.checks && dayData.checks[ik]);
    const row = document.createElement('div');
    row.className = 'bm-row' + (chk ? ' chkd' : '');
    const cb  = document.createElement('div'); cb.className = 'checkbox' + (chk ? ' ck' : '');
    const txt = document.createElement('div'); txt.className = 'bm-row-txt';
    row.appendChild(cb); row.appendChild(txt);
    bmBody.appendChild(row);
    row.offsetHeight;
    row.style.transition = 'opacity .3s ease, transform .32s ease';
    row.style.opacity    = '1';
    row.style.transform  = 'none';
    await typeIn(txt, blk.items[i], 18);
    if (!_typing) return;
    const idx = i;
    row.addEventListener('click', () => {
      const d = cache[vKey] || empty();
      d.checks = d.checks || {}; d.checks[ik] = !d.checks[ik];
      setDay(vKey, d);
      cb.classList.toggle('ck',   !!d.checks[ik]);
      row.classList.toggle('chkd',!!d.checks[ik]);
      updatePip(blk.id, idx, !!d.checks[ik], blk.items.length, d, vKey);
    });
  }

  if (blk.id === 'mock'   && _typing) await addMock(dayData, vKey);
  if (blk.id === 'review' && _typing) await addReview(dayData, vKey);
}

/* ─── Check-in modal (Phase 5: GPS logic preserved exactly) ─── */
async function runCIModal(dayData, vKey) {
  const ci = dayData.checkin;
  const st = document.createElement('div');
  st.className = 'bm-ci-st';
  if (ci) st.innerHTML = `Checked in at ${ci.time} — <span class="${ci.verified?'bm-verified':'bm-unverified'}">${ci.note}</span>`;
  else st.textContent = 'Not checked in yet today.';
  bmBody.appendChild(st);
  await wait(60); st.classList.add('vis');
  await wait(280); if (!_typing) return;

  const btn = document.createElement('button');
  btn.className = 'sv-btn';
  btn.textContent = ci ? 'Check in again' : "I'm at the library";
  btn.style.cssText = 'opacity:0;transform:translateY(8px)';
  bmBody.appendChild(btn);
  await wait(50);
  btn.style.transition = 'opacity .35s ease, transform .35s ease';
  btn.style.opacity = '1'; btn.style.transform = 'none';

  btn.addEventListener('click', async () => {
    // Phase 5: GPS validation preserved exactly
    if (!navigator.geolocation) {
      await showPop({type:'gps',icon:'📡',title:'Not Supported',message:'Geolocation not supported.'}); return;
    }
    const prev = btn.textContent; btn.disabled = true; btn.textContent = 'Locating…';
    const ts = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
    try {
      const pos = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej, { timeout:12000, enableHighAccuracy:true, maximumAge:0 })
      );
      const d2 = dKm(pos.coords.latitude, pos.coords.longitude, LIB.lat, LIB.lng);
      if (d2 <= 0.15) {
        const d = cache[vKey] || empty();
        d.checkin = { time:ts, verified:true, note:'location verified ✓' };
        setDay(vKey, d);
        // Phase 3: pulse the CI strip on success
        pulseStrip(document.getElementById('ciStrip'));
        toast('Check-in recorded ✓','s');
        closeBM();
        renderLog();
      } else {
        btn.disabled = false; btn.textContent = prev;
        await showPop({type:'location',icon:'📍',title:'Too Far Away',
          message:`You're ${Math.round(d2*1000)} m from the library.\nCheck-in only works on-site.`});
      }
    } catch (e) {
      btn.disabled = false; btn.textContent = prev;
      if      (e.code===1) await showPop({type:'error',icon:'🔒',title:'Permission Denied',message:'Location blocked.\n\nTap the lock icon → Site settings → Location → Allow, then retry.'});
      else if (e.code===2) await showPop({type:'error',icon:'📡',title:'GPS Unavailable',message:'No GPS signal. Step outside and retry.'});
      else                  await showPop({type:'error',icon:'⏱',title:'Timed Out',message:'Location timed out. Try again in an open area.'});
    }
  });
}

async function addMock(dayData, vKey) {
  await wait(100); if (!_typing) return;
  const w = document.createElement('div'); w.className = 'bm-field';
  w.innerHTML = `<label>Mock / sectional score — just log it</label>
    <input type="text" id="mkIn" value="${(dayData.mockScore||'').replace(/"/g,'&quot;')}" placeholder="e.g. 42/50, or how it felt"/>
    <button class="sv-btn" id="svMk">Save</button><span class="sv-st" id="mkSt"></span>`;
  bmBody.appendChild(w); await wait(50); w.classList.add('vis');
  document.getElementById('svMk').onclick = () => {
    const d = cache[vKey]||empty(); d.mockScore = document.getElementById('mkIn').value; setDay(vKey,d);
    const s = document.getElementById('mkSt'); if(s){s.textContent='Saved ✓';setTimeout(()=>s.textContent='',2000);}
  };
}
async function addReview(dayData, vKey) {
  await wait(100); if (!_typing) return;
  const w = document.createElement('div'); w.className = 'bm-field';
  w.innerHTML = `<label>What went wrong, in your own words</label>
    <textarea id="rvIn" placeholder="e.g. ran out of time on English">${dayData.errorNote||''}</textarea>
    <button class="sv-btn" id="svRv">Save</button><span class="sv-st" id="rvSt"></span>`;
  bmBody.appendChild(w); await wait(50); w.classList.add('vis');
  document.getElementById('svRv').onclick = () => {
    const d = cache[vKey]||empty(); d.errorNote = document.getElementById('rvIn').value; setDay(vKey,d);
    const s = document.getElementById('rvSt'); if(s){s.textContent='Saved ✓';setTimeout(()=>s.textContent='',2000);}
  };
}

function updatePip(blockId, idx, isDone, total, dayData, vKey) {
  const card = document.querySelector(`[data-id="${blockId}"]`);
  if (!card) return;
  const pips = card.querySelectorAll('.pip');
  if (pips[idx]) pips[idx].classList.toggle('dn', isDone);
  const all = Array.from({length:total}).every((_,i) => !!(dayData.checks && dayData.checks[blockId+'_'+i]));
  if (all) {
    card.classList.add('done-flash');
    setTimeout(() => card.classList.remove('done-flash'), 800);
    toast('Section complete ✓','s');
  }
  updateCIStrip(dayData);
}

/* ════════════════════════════════════════════
   CHECK-IN STRIP
════════════════════════════════════════════ */
function updateCIStrip(dayData) {
  const strip    = document.getElementById('ciStrip');
  const stripTxt = document.getElementById('ciStripText');
  if (!strip || !stripTxt) return;
  const ci = dayData && dayData.checkin;
  if (ci && ci.verified) {
    strip.classList.add('verified');
    stripTxt.textContent = `Library · Checked in at ${ci.time}`;
  } else {
    strip.classList.remove('verified');
    stripTxt.textContent = 'Library · Not checked in yet';
  }
}

/* ════════════════════════════════════════════
   BENTO GRID RENDER
   Phase 3: GSAP spring entrance per cell,
            masked word reveals for card titles,
            parallax on admin/small cells.
   Phase 5: all data/storage paths unchanged.
════════════════════════════════════════════ */
const CONTAINER_STEP = 210;
const TEXT_OFFSET    = 3;
const GRID_CLASS = { ssc:'bento-ssc', upsc:'bento-upsc', reset:'bento-reset' };

async function renderLog(jump) {
  const dates = wkDates(), now = new Date(), nowK = toK(now);
  if (jump) vDay = jump;
  if (!vDay) vDay = nowK;

  await Promise.all(dates.map(dt => getDay(toK(dt))));

  const vDate   = dates.find(d => toK(d) === vDay) || now;
  const vKey    = toK(vDate);
  const type    = dtOf(vDate);
  const sched   = SCH[type];
  const dd      = cache[vKey] || empty();
  const isToday = vKey === nowK;
  _vKey = vKey; _sched = sched;

  /* Header */
  document.getElementById('lbDate').textContent =
    vDate.toLocaleDateString([], { weekday:'short', month:'short', day:'numeric' });

  /* Day nav */
  const nav = document.getElementById('dayNav'); nav.innerHTML = '';
  dates.forEach(dt => {
    const k = toK(dt), d = cache[k]||empty(), t = dtOf(dt);
    const tot = nItems(t), chk = nDone(d);
    const dc = !tot||!chk ? '' : chk>=tot ? 'full' : 'part';
    const btn = document.createElement('button');
    btn.dataset.day = k; if (k===vKey) btn.classList.add('on');
    btn.innerHTML = `${DN[dt.getDay()]}<span class="dot ${dc}"></span>`;
    addPassiveToggle(btn, () => { vDay=k; isFirst=true; renderLog(); });
    nav.appendChild(btn);
  });

  /* Day type tag */
  document.getElementById('dayTag').innerHTML = `<span class="tag ${type}">${sched.label}</span>`;

  /* CI strip */
  updateCIStrip(dd);
  const strip = document.getElementById('ciStrip');
  const newStrip = strip.cloneNode(true);
  strip.parentNode.replaceChild(newStrip, strip);
  const ciBlk = { id:'__checkin', title:'Library Check-in', time:'GPS · on-site only', items:['check-in'], isCI:true };
  addPassiveToggle(newStrip, () => { const d = cache[_vKey]||empty(); runModal(ciBlk, d, _vKey, _sched); });

  /* Build bento grid */
  const grid = document.getElementById('bentoGrid');
  grid.innerHTML = '';
  grid.className = GRID_CLASS[type] || 'bento-ssc';

  const cur = isToday ? curBlk(sched.blocks) : null;

  const containers = sched.blocks.map((blk) => {
    const isCur       = cur && cur.id === blk.id;
    const d2          = cache[vKey] || empty();
    const catInfo     = BLOCK_CATEGORY[blk.id] || { cat:'admin', label:'Task' };
    const isObligation = catInfo.cat === 'obligation';
    const isReset      = type === 'reset';

    const pHtml = blk.items.map((_, j) =>
      `<div class="pip ${!!(d2.checks && d2.checks[blk.id+'_'+j]) ? 'dn' : ''}"></div>`
    ).join('');

    const card = document.createElement('div');
    card.dataset.id = blk.id;
    let catClass = isReset ? '' : (catInfo.cat ? `cat-${catInfo.cat}` : '');
    card.className = `bento-cell ${catClass}${isCur ? ' cur-card' : ''}`;

    // Phase 3: disable CSS transitions on cells — GSAP owns the entrance
    card.style.transition = 'none';

    if (isObligation) {
      card.innerHTML = `
        <div class="cell-top" style="margin-bottom:0;align-items:center">
          <div class="cell-ttl" id="ct-${blk.id}"></div>
          <div class="cell-cat-pill">${catInfo.label}</div>
        </div>
        <div class="cell-pips" style="opacity:0;padding-top:0;margin-left:12px">${pHtml}</div>`;
    } else {
      card.innerHTML = `
        <div class="cell-top">
          <div class="cell-ttl" id="ct-${blk.id}"></div>
          <div class="cell-cat-pill">${catInfo.label}</div>
          <div class="cell-chev">›</div>
        </div>
        <div class="cell-pips" style="opacity:0">${pHtml}</div>
        <div class="cell-time" id="ctime-${blk.id}"></div>`;
    }

    card.addEventListener('click', () => {
      const d = cache[_vKey]||empty(); runModal(blk, d, _vKey, _sched);
    });

    // Phase 3: GSAP hover lift (springs back elastically)
    bindCellHover(card);

    grid.appendChild(card);
    return { blk, card, textRevealed: false };
  });

  /* Collect small/admin cells for parallax binding */
  const adminCells = Array.from(grid.querySelectorAll('.cat-admin'));
  if (adminCells.length) bindParallax(VLog, adminCells, 0.35);

  /* Reset link */
  const oldR = document.getElementById('rstDay');
  if (oldR) {
    const r = oldR.cloneNode(true); oldR.parentNode.replaceChild(r, oldR);
    r.addEventListener('click', async () => {
      const yes = await showPop({
        type:'confirm', icon:'🗑️', title:"Clear today's checks?",
        message: vDate.toLocaleDateString([],{weekday:'long'}) + ' — all checkboxes reset.',
        buttons: [{ label:'Cancel',value:false,primary:false }, { label:'Clear',value:true }]
      });
      if (yes) { setDay(vKey, empty()); renderLog(); }
    });
  }

  /* Phase 3: staggered GSAP spring entrance, text reveals after */
  const START = isFirst ? 180 : 0;

  containers.forEach(({ card, blk }, i) => {
    setTimeout(() => {
      // GSAP spring (replaces CSS opacity/transform transition)
      animateCellIn(card, 0);

      const textIdx = i - TEXT_OFFSET;
      if (textIdx >= 0 && !containers[textIdx].textRevealed) {
        containers[textIdx].textRevealed = true;
        revealCellText(containers[textIdx]);
      }

      if (i === containers.length - 1) {
        containers.filter(c => !c.textRevealed).forEach((c, ri) => {
          c.textRevealed = true;
          setTimeout(() => revealCellText(c), ri * 170 + 80);
        });
      }
    }, START + i * CONTAINER_STEP);
  });

  if (isFirst) isFirst = false;
}

/* Phase 3: masked word reveal for cell titles */
async function revealCellText({ blk, card }) {
  const titleEl = document.getElementById('ct-' + blk.id);
  const timeEl  = document.getElementById('ctime-' + blk.id);
  const pipsEl  = card.querySelector('.cell-pips');
  const chevEl  = card.querySelector('.cell-chev');
  if (!titleEl) return;

  // Masked word-by-word reveal (overflow:hidden + Y translate)
  const innerSpans = wrapWordsForReveal(titleEl, blk.title);
  revealMasked(innerSpans, { stagger: 0.07 });

  await wait(blk.title.split(' ').length * 80 + 100);

  if (pipsEl) {
    pipsEl.style.transition = 'opacity .35s ease';
    pipsEl.style.opacity    = '1';
  }

  if (timeEl && blk.time) {
    await wait(60);
    // Time types in character by character
    for (const ch of blk.time) { timeEl.textContent += ch; await wait(20); }
  }

  if (chevEl) {
    chevEl.style.transition = 'opacity .32s ease';
    chevEl.style.opacity    = '1';
  }
}

/* ════════════════════════════════════════════
   RENDER WEEK VIEW (Radial Constellation)
════════════════════════════════════════════ */
async function renderWeek() {
  const dates = wkDates();
  await Promise.all(dates.map(dt => getDay(toK(dt))));
  const nowK = toK(new Date()), mon = dates[0], sun = dates[6];
  
  document.getElementById('wkRange').textContent =
    `${mon.toLocaleDateString([],{month:'short',day:'numeric'})} – ${sun.toLocaleDateString([],{month:'short',day:'numeric'})}`;
  
  const container = document.getElementById('constellation');
  container.innerHTML = '';

  // Center indicator
  const centerEl = document.createElement('div');
  centerEl.className = 'const-center';
  centerEl.innerHTML = `
    <div class="const-center-pct" id="const-avg">0%</div>
    <div class="const-center-lbl">Avg Completion</div>
  `;
  container.appendChild(centerEl);

  // SVG lines layer (connections)
  const linesSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  linesSvg.setAttribute('class', 'const-line');
  linesSvg.setAttribute('viewBox', '0 0 420 420');
  linesSvg.id = 'const-svg-lines';
  container.appendChild(linesSvg);

  let totalPctSum = 0;
  let activeDaysCount = 0;

  const radius = 145;
  const centerX = 210;
  const centerY = 210;

  const nodesData = dates.map((dt, idx) => {
    const k = toK(dt), d = cache[k]||empty(), t = dtOf(dt);
    const tot = nItems(t), chk = nDone(d), pct = tot ? Math.round(chk/tot*100) : 0;
    const isT = k === nowK;
    const isVerified = !!(d.checkin && d.checkin.verified);

    totalPctSum += pct;
    activeDaysCount++;

    // Calculate position
    const angle = (idx / 7) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    // Draw connection line path in the central SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${centerX} ${centerY} L ${x} ${y}`);
    linesSvg.appendChild(path);

    // Create node element
    const node = document.createElement('div');
    node.className = 'const-node' + (isT ? ' today' : '') + (isVerified ? ' verified' : '');
    node.style.left = `${x - 30}px`;
    node.style.top = `${y - 30}px`;

    // Node color determination based on completion level
    const nodeColor = pct === 100 ? 'var(--green)' : (pct > 0 ? 'var(--accent)' : 'rgba(255,255,255,0.22)');
    node.style.setProperty('--node-color', nodeColor);

    node.innerHTML = `
      <svg class="const-node-svg" viewBox="0 0 60 60">
        <circle class="const-node-bg" cx="30" cy="30" r="27"></circle>
        <circle class="const-node-fill" cx="30" cy="30" r="27"></circle>
      </svg>
      <div class="const-node-txt">${DN[dt.getDay()][0]}</div> <!-- Single letter (S, M, T...) -->
      <div class="const-node-dot"></div>
    `;

    // Clicking a node redirects to that day's logbook
    addPassiveToggle(node, () => {
      vDay = k;
      isFirst = true;
      leaveWeek();
      renderLog(k);
    });

    container.appendChild(node);

    return { node, pct, path };
  });

  const totalPct = activeDaysCount ? Math.round(totalPctSum / activeDaysCount) : 0;

  // Connection lines draw animation
  gsap.fromTo("#const-svg-lines path",
    { strokeDasharray: 200, strokeDashoffset: 200 },
    { strokeDashoffset: 0, duration: 0.75, stagger: 0.06, ease: "power2.out" }
  );

  // Nodes animation
  nodesData.forEach(({ node, pct }) => {
    const fillCircle = node.querySelector('.const-node-fill');
    const targetOffset = 188 - (188 * pct / 100);
    // Staggered delay for nodes
    gsap.fromTo(fillCircle,
      { strokeDashoffset: 188 },
      { strokeDashoffset: targetOffset, duration: 0.95, delay: 0.35, ease: "power2.out" }
    );
  });

  // Count up center average percentage
  const avgObj = { val: 0 };
  gsap.to(avgObj, {
    val: totalPct,
    duration: 1.1,
    ease: "power2.out",
    onUpdate: () => {
      document.getElementById('const-avg').textContent = Math.round(avgObj.val) + '%';
    }
  });
}

/* ════════════════════════════════════════════
   PHASE 2 — Custom Cursor Setup
════════════════════════════════════════════ */
function initCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorTrail = document.querySelector('.cursor-trail');
  if (!cursorDot || !cursorTrail) return;

  // Only enable on desktop pointer devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  // Make them visible
  cursorDot.style.display = 'block';
  cursorTrail.style.display = 'block';

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // quickTo helpers
  const xDot = gsap.quickTo(cursorDot, "x", { duration: 0, ease: "none" });
  const yDot = gsap.quickTo(cursorDot, "y", { duration: 0, ease: "none" });
  const xTrail = gsap.quickTo(cursorTrail, "x", { duration: 0.15, ease: "power2.out" });
  const yTrail = gsap.quickTo(cursorTrail, "y", { duration: 0.15, ease: "power2.out" });

  gsap.ticker.add(() => {
    xDot(mouse.x);
    yDot(mouse.y);
    xTrail(mouse.x);
    yTrail(mouse.y);
  });

  // Global hover detection using event delegation
  document.body.addEventListener('mouseover', e => {
    const trigger = e.target.closest('a, button, .bento-cell, .pb, .bm-row, .const-node, .rst-lnk, .checkbox, #ciStrip');
    if (trigger) {
      cursorTrail.classList.add('hovered');
      cursorDot.classList.add('hovered');
    }
  });

  document.body.addEventListener('mouseout', e => {
    const trigger = e.target.closest('a, button, .bento-cell, .pb, .bm-row, .const-node, .rst-lnk, .checkbox, #ciStrip');
    if (trigger) {
      cursorTrail.classList.remove('hovered');
      cursorDot.classList.remove('hovered');
    }
  });
}

// Initialize Custom Cursor immediately
initCustomCursor();

/* ════════════════════════════════════════════
   COVER BOOT — typewriter + masked reveals
════════════════════════════════════════════ */
(async () => {
  document.getElementById('cDate').textContent =
    new Date().toLocaleDateString([], { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  await wait(330);

  const wm  = document.getElementById('cWord');
  wm.innerHTML = '<span class="cur"></span>';
  const cur = wm.querySelector('.cur');
  for (const ch of 'Logbook') {
    const sp = document.createElement('span'); sp.textContent = ch;
    wm.insertBefore(sp, cur);
    await wait(58 + Math.random() * 26);
  }
  await wait(950);
  cur.style.transition = 'opacity .4s'; cur.style.opacity = '0';
  await wait(420); cur.remove();

  document.getElementById('cTag').classList.add('v');
  await wait(190);
  document.getElementById('openBtn').classList.add('v');
  await wait(110);
  document.getElementById('cDate').classList.add('v');
})();

/* ════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════ */
addPassiveToggle('openBtn', async () => {
  goLogbook();
  await wait(620);
  await renderLog();
});

addPassiveToggle('btnCover', goCover);

addPassiveToggle('btnToday', () => {
  vDay = toK(new Date()); isFirst = true;
  leaveWeek(); closeBM(); navOn('btnToday');
  renderLog();
  VLog.scrollTo({ top:0, behavior:'smooth' });
});

addPassiveToggle('btnWeek', async () => {
  closeBM(); goWeek(); await renderWeek();
});
