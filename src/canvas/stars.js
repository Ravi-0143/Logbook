/**
 * stars.js — Gentle drift + twinkle + connecting lines.
 * Renders onto #stars canvas at z-index var(--z-stars).
 * No mouse tracking.
 */
export function initStars() {
  const cv  = document.getElementById('stars');
  const ctx = cv.getContext('2d');
  const mob = window.matchMedia('(max-width:768px)').matches;
  const N   = mob ? 60 : 110;
  const CONN = mob ? 68 : 96;
  let W, H, stars = [];

  function Star() {
    this.x  = this.ox = Math.random() * W;
    this.y  = this.oy = Math.random() * H;
    this.r  = Math.random() * 1.3 + 0.22;
    this.a  = Math.random() * 0.55 + 0.1;
    this.da = (Math.random() - 0.5) * 0.012;
  }

  Star.prototype.tick = function () {
    // Gentle home drift
    this.ox += (Math.random() - 0.5) * 0.045;
    this.oy += (Math.random() - 0.5) * 0.045;
    this.ox  = Math.max(0, Math.min(W, this.ox));
    this.oy  = Math.max(0, Math.min(H, this.oy));
    // Spring back to home
    this.x  += (this.ox - this.x) * 0.035;
    this.y  += (this.oy - this.y) * 0.035;
    // Twinkle
    this.a  += this.da;
    if (this.a < 0.06 || this.a > 0.7) this.da *= -1;
  };

  function resize() {
    W = cv.width  = innerWidth;
    H = cv.height = innerHeight;
    stars = Array.from({ length: N }, () => new Star());
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    // Connecting lines between nearby stars
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONN) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(138,180,248,${((1 - d / CONN) * 0.16).toFixed(3)})`;
          ctx.lineWidth   = 0.5;
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
    // Star dots
    for (const s of stars) {
      s.tick();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,234,237,${s.a.toFixed(2)})`;
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();
}
