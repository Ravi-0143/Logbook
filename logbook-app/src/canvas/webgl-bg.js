/**
 * webgl-bg.js — Three.js WebGL background
 *
 * Replaces the Canvas2D nebula + stars with a single WebGL scene.
 * Renders 4–5 overlapping radial "soft light" patches via a custom
 * GLSL fragment shader. Mouse position is mapped to shader uniforms
 * through a heavy lerp — the scene breathes and follows the cursor
 * slowly, feeling alive without distracting from foreground data.
 *
 * Z-index: var(--z-webgl) → 0 (behind everything)
 */

import * as THREE from 'three';

/* ─── Vertex shader — a full-screen quad, passes UV ─── */
const VERT = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

/* ─── Fragment shader — 5 radial soft-light blobs + star field ─── */
const FRAG = /* glsl */`
  precision highp float;

  varying vec2 vUv;

  uniform float  uTime;
  uniform vec2   uResolution;
  uniform vec2   uMouse;        // 0..1 normalised, lerped

  /* ── Blob definitions ──
     Each blob: centre offset, radius, RGB colour, base opacity */
  const int N = 5;

  /* Smooth radial falloff */
  float blob(vec2 uv, vec2 centre, float radius) {
    float d = length(uv - centre);
    return smoothstep(radius, 0.0, d);
  }

  /* Cheap hash for star positions */
  float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv;

    /* Aspect-correct UV for blobs */
    float aspect = uResolution.x / uResolution.y;
    vec2 auv = vec2(uv.x * aspect, uv.y);

    /* Mouse influence — offset blobs slightly toward cursor */
    vec2 mouse = vec2(uMouse.x * aspect, uMouse.y);
    float mx = (uMouse.x - 0.5);
    float my = (uMouse.y - 0.5);

    /* ── Base deep-space colour ── */
    vec3 col = vec3(0.024, 0.035, 0.055);

    /* ── Blob 1: warm purple — top-left, reacts most to cursor ── */
    {
      vec2 c = vec2(0.18 * aspect + mx * 0.08, 0.42 - my * 0.06)
             + vec2(sin(uTime * 0.00028 + 0.0) * 0.04 * aspect,
                    cos(uTime * 0.00022 + 1.0) * 0.03);
      float f = blob(auv, c, 0.58 * aspect);
      col += f * vec3(0.235, 0.110, 0.412) * 0.46;
    }

    /* ── Blob 2: deep blue — top-right ── */
    {
      vec2 c = vec2(0.80 * aspect + mx * 0.04, 0.18 - my * 0.03)
             + vec2(cos(uTime * 0.00022 + 1.2) * 0.04 * aspect,
                    sin(uTime * 0.00018 + 2.0) * 0.03);
      float f = blob(auv, c, 0.50 * aspect);
      col += f * vec3(0.086, 0.227, 0.431) * 0.38;
    }

    /* ── Blob 3: teal-green — bottom-centre ── */
    {
      vec2 c = vec2(0.54 * aspect + mx * 0.03, 0.84 - my * 0.04)
             + vec2(sin(uTime * 0.00018 + 2.4) * 0.04 * aspect,
                    cos(uTime * 0.00015 + 3.0) * 0.03);
      float f = blob(auv, c, 0.52 * aspect);
      col += f * vec3(0.055, 0.322, 0.243) * 0.32;
    }

    /* ── Blob 4: violet — mid-right ── */
    {
      vec2 c = vec2(0.68 * aspect + mx * 0.05, 0.55 - my * 0.05)
             + vec2(cos(uTime * 0.00032 + 3.6) * 0.04 * aspect,
                    sin(uTime * 0.00028 + 0.5) * 0.03);
      float f = blob(auv, c, 0.38 * aspect);
      col += f * vec3(0.314, 0.173, 0.502) * 0.26;
    }

    /* ── Blob 5: deep indigo — bottom-left ── */
    {
      vec2 c = vec2(0.30 * aspect + mx * 0.06, 0.75 - my * 0.02)
             + vec2(sin(uTime * 0.00020 + 0.8) * 0.04 * aspect,
                    cos(uTime * 0.00016 + 1.6) * 0.03);
      float f = blob(auv, c, 0.42 * aspect);
      col += f * vec3(0.173, 0.071, 0.314) * 0.20;
    }

    /* ── Star field — scattered tiny bright points ── */
    vec2 grid = floor(uv * 140.0);
    float h = hash(grid);
    if (h > 0.92) {
      vec2 local = fract(uv * 140.0) - 0.5;
      float r = length(local);
      float twinkle = 0.55 + 0.45 * sin(uTime * (0.003 + h * 0.004) + h * 6.28);
      float star = smoothstep(0.22, 0.0, r) * twinkle * (h - 0.92) * 14.0;
      /* Connecting-line colour tint */
      col += star * vec3(0.542, 0.706, 0.973) * 0.55;
    }

    /* ── Subtle vignette ── */
    float vig = 1.0 - smoothstep(0.4, 1.2, length(uv - 0.5) * 1.6);
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function initWebGLBackground() {
  const canvas = document.getElementById('webgl-bg');
  if (!canvas) return;

  /* ── Renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  /* ── Scene / Camera (orthographic — we just want a 2D quad) ── */
  const scene  = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  /* ── Full-screen quad ── */
  const geo = new THREE.PlaneGeometry(2, 2);
  const uniforms = {
    uTime:       { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
  };
  const mat  = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  /* ── Mouse tracking — lerp target ── */
  const rawMouse  = { x: 0.5, y: 0.5 };
  const lerpMouse = { x: 0.5, y: 0.5 };
  const LERP_SPEED = 0.028; // heavy delay — background feels slow/massive

  window.addEventListener('mousemove', e => {
    rawMouse.x = e.clientX / window.innerWidth;
    rawMouse.y = 1.0 - e.clientY / window.innerHeight; // flip Y for GL coords
  });

  /* ── Resize ── */
  function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  /* ── Render loop ── */
  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame++;
    uniforms.uTime.value = frame;

    // Heavy lerp — cursor influence arrives slowly, feels weighted
    lerpMouse.x += (rawMouse.x - lerpMouse.x) * LERP_SPEED;
    lerpMouse.y += (rawMouse.y - lerpMouse.y) * LERP_SPEED;
    uniforms.uMouse.value.set(lerpMouse.x, lerpMouse.y);

    renderer.render(scene, camera);
  }
  animate();
}
