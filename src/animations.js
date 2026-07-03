/**
 * animations.js — Physics & Animation Engine (Phase 3)
 *
 * Owns:
 *  • Lenis smooth scroll instance (global, exported)
 *  • GSAP ScrollTrigger ↔ Lenis bridge
 *  • Bento cell entrance animations (spring physics via GSAP)
 *  • Block modal open animation (elastic snap)
 *  • Masked text reveals (overflow:hidden + Y translate)
 *  • Parallax: peripheral elements scroll at 0.4× speed
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/* ════════════════════════════════════════════
   LENIS — global smooth scroll instance
   Options tuned for a crisp, weighty feel.
════════════════════════════════════════════ */
let lenis = null;

export function initLenis(scrollContainer) {
  lenis = new Lenis({
    wrapper:   scrollContainer,   // the fixed overflow-y:auto view
    content:   scrollContainer,
    duration:  1.1,               // slightly longer than default → feels substantial
    easing:    t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
    direction: 'vertical',
    smooth:    true,
    smoothTouch: false,           // native on touch — better mobile feel
    touchMultiplier: 2.0,
  });

  /* Bind GSAP ScrollTrigger to Lenis RAF */
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis() { return lenis; }

/* ════════════════════════════════════════════
   CELL ENTRANCE — spring physics
   Called after each cell's container is appended
   and its .shown class is about to be toggled.
   We own the animation; CSS transitions are
   stripped from .bento-cell for GSAP-animated cells.
════════════════════════════════════════════ */
export function animateCellIn(cell, delay = 0) {
  // Ensure starting state
  gsap.set(cell, { opacity: 0, y: 28, scale: 0.96 });

  return gsap.to(cell, {
    opacity:  1,
    y:        0,
    scale:    1,
    duration: 0.7,
    delay,
    ease:     'back.out(1.4)',   // spring-like overshoot, not elastic (keeps it readable)
    onComplete() {
      cell.classList.add('shown'); // re-enable hover effects that need .shown
    },
  });
}

/* ════════════════════════════════════════════
   MODAL OPEN — elastic magnetic snap
   Called in place of the CSS transition.
════════════════════════════════════════════ */
export function animateModalOpen(bmEl) {
  // Reset to pre-open state
  gsap.set(bmEl, {
    opacity:  0,
    scale:    0.82,
    y:        '-50%',   // keep vertically centred (top:50% in CSS)
    yPercent: 0,
  });

  gsap.to(bmEl, {
    opacity:  1,
    scale:    1,
    duration: 0.65,
    ease:     'elastic.out(1, 0.7)',   // magnetic snap
  });
}

export function animateModalClose(bmEl, onComplete) {
  gsap.to(bmEl, {
    opacity:  0,
    scale:    0.90,
    duration: 0.22,
    ease:     'power2.in',
    onComplete,
  });
}

/* ════════════════════════════════════════════
   MASKED TEXT REVEAL
   Each word/element is wrapped in a .clip-wrap
   (overflow:hidden) and the inner span translates
   from Y 100% → 0% — the text "rises" into view.

   Usage:
     const clips = wrapForReveal(titleEl);
     revealMasked(clips, { stagger: 0.05 });
════════════════════════════════════════════ */

/** Wraps each word inside `el`'s text in a clip container.
 *  Returns the array of inner spans to animate. */
export function wrapWordsForReveal(el, text) {
  el.innerHTML = '';
  const words = text.split(' ');
  const inners = words.map((word, i) => {
    const outer = document.createElement('span');
    outer.className = 'clip-wrap';
    outer.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;';

    const inner = document.createElement('span');
    inner.className = 'clip-inner';
    inner.textContent = (i > 0 ? '\u00a0' : '') + word; // non-breaking space between words
    inner.style.cssText = 'display:inline-block;transform:translateY(100%);';

    outer.appendChild(inner);
    el.appendChild(outer);
    return inner;
  });
  return inners;
}

/** Animates an array of clip-inner spans from Y=100% to Y=0 */
export function revealMasked(innerSpans, { delay = 0, stagger = 0.06 } = {}) {
  return gsap.to(innerSpans, {
    y:        '0%',
    duration: 0.52,
    delay,
    stagger,
    ease:     'power3.out',
  });
}

/** Single-element masked reveal (for modal title, cover word, etc.) */
export function revealMaskedEl(el, { delay = 0 } = {}) {
  const wrap = document.createElement('span');
  wrap.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;';
  el.parentNode.insertBefore(wrap, el);
  wrap.appendChild(el);
  gsap.set(el, { y: '100%' });
  return gsap.to(el, {
    y:        '0%',
    duration: 0.55,
    delay,
    ease:     'power3.out',
  });
}

/* ════════════════════════════════════════════
   PARALLAX SCROLLING
   Bind a peripheral element (right-rail card,
   decorative element) to the logbook scroll
   container so it translates at 0.4× speed —
   giving an illusion of depth vs. main cards.

   scrollEl  — the overflow scroll container
   targets   — NodeList / array of elements to parallax
   factor    — translation multiplier (default 0.4 = 60% slower)
════════════════════════════════════════════ */
export function bindParallax(scrollEl, targets, factor = 0.4) {
  if (!targets || !targets.length) return;

  const onScroll = () => {
    const st = scrollEl.scrollTop;
    targets.forEach(el => {
      gsap.set(el, { y: st * factor * -1 });
    });
  };

  scrollEl.addEventListener('scroll', onScroll, { passive: true });
}

/* ════════════════════════════════════════════
   BENTO CELL HOVER LIFT (3D Perspective tilt)
   Calculates pointer offsets to tilt cell along X/Y
   and lift on the Z-axis (foreground translation).
════════════════════════════════════════════ */
export function bindCellHover(cell) {
  const isObligation = cell.classList.contains('cat-obligation');
  if (isObligation) return;

  // Enable 3D rendering context on this cell
  gsap.set(cell, { transformPerspective: 1000, transformStyle: "preserve-3d" });

  const onMouseMove = (e) => {
    const rect = cell.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const nx = x / (rect.width / 2);
    const ny = y / (rect.height / 2);

    gsap.to(cell, {
      rotateY: nx * 8,   // Rotates horizontally
      rotateX: -ny * 8,  // Rotates vertically
      z: 26,             // Pulls card forward (3D depth)
      boxShadow: "0 28px 60px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(0, 0, 0, 0.04)",
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  const onMouseLeave = () => {
    gsap.to(cell, {
      rotateY: 0,
      rotateX: 0,
      z: 0,
      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  cell.addEventListener('mousemove', onMouseMove);
  cell.addEventListener('mouseleave', onMouseLeave);
}

/* ════════════════════════════════════════════
   PHYSICAL GRID RECOIL (Shockwave Shake)
   Shakes all other bento cells when one is clicked.
════════════════════════════════════════════ */
export function shakeOtherCells(clickedCell) {
  const cells = document.querySelectorAll('.bento-cell');
  cells.forEach(cell => {
    if (cell !== clickedCell && !cell.classList.contains('cat-obligation')) {
      // Rapid physical shake on X, Y and Z-rotations
      gsap.fromTo(cell, 
        { x: 0, y: 0, rotateZ: 0 }, 
        {
          x: () => gsap.utils.random(-7, 7),
          y: () => gsap.utils.random(-5, 5),
          rotateZ: () => gsap.utils.random(-1.2, 1.2),
          duration: 0.05,
          repeat: 7,
          yoyo: true,
          ease: "sine.inOut",
          onComplete: () => {
            gsap.to(cell, { x: 0, y: 0, rotateZ: 0, duration: 0.25, ease: "power2.out" });
          }
        }
      );
    }
  });
}

/* ════════════════════════════════════════════
   CI STRIP PULSE
   When check-in is verified, do a single green
   pulse to confirm the state change.
════════════════════════════════════════════ */
export function pulseStrip(stripEl) {
  gsap.fromTo(stripEl,
    { boxShadow: '0 0 0px rgba(129,201,149,0)' },
    { boxShadow: '0 0 20px rgba(52,168,83,0.45)', duration: 0.3,
      yoyo: true, repeat: 1, ease: 'power2.out' }
  );
}
