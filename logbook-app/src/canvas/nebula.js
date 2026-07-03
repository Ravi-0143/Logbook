/**
 * nebula.js — Animated deep-space nebula using oscillating radial gradients.
 * Renders onto #nebula canvas at z-index var(--z-webgl).
 * Sits behind everything as a static ambience layer.
 */
export function initNebula() {
  const cv  = document.getElementById('nebula');
  const ctx = cv.getContext('2d');
  let W, H, t = 0;

  // Nebula cloud definitions: position (0–1), colour, opacity, drift speed
  const CLOUDS = [
    { cx: 0.18, cy: 0.42, r: 0.58, rgb: [60,  28, 105], a: 0.24, speed: 0.00028, phase: 0.0 },
    { cx: 0.80, cy: 0.18, r: 0.50, rgb: [22,  58, 110], a: 0.19, speed: 0.00022, phase: 1.2 },
    { cx: 0.54, cy: 0.84, r: 0.52, rgb: [14,  82,  62], a: 0.16, speed: 0.00018, phase: 2.4 },
    { cx: 0.68, cy: 0.55, r: 0.38, rgb: [80,  44, 128], a: 0.13, speed: 0.00032, phase: 3.6 },
    { cx: 0.30, cy: 0.75, r: 0.42, rgb: [44,  18,  80], a: 0.10, speed: 0.00020, phase: 0.8 },
  ];

  function resize() {
    W = cv.width  = innerWidth;
    H = cv.height = innerHeight;
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    // Deep space base
    ctx.fillStyle = '#06090e';
    ctx.fillRect(0, 0, W, H);

    for (const cl of CLOUDS) {
      const ox = Math.sin(t * cl.speed + cl.phase) * 0.04 * W;
      const oy = Math.cos(t * cl.speed * 0.8 + cl.phase + 1) * 0.03 * H;
      const x  = cl.cx * W + ox;
      const y  = cl.cy * H + oy;
      const r  = cl.r * W;
      const g  = ctx.createRadialGradient(x, y, 0, x, y, r);
      const [rv, gv, bv] = cl.rgb;
      g.addColorStop(0,   `rgba(${rv},${gv},${bv},${cl.a})`);
      g.addColorStop(0.5, `rgba(${rv},${gv},${bv},${cl.a * 0.45})`);
      g.addColorStop(1,   'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }
    t++;
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();
}
