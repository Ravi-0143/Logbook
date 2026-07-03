/**
 * webgl-bg.js — Three.js WebGL background with GPGPU-style particle cursor
 *
 * Implements Phase 2:
 *  - Screen-aligned background quad rendering custom SDF shapes (circles, rings, plus signs)
 *    translating on the Y-axis based on scroll position (parallax depth).
 *  - High-performance InstancedMesh FBO cursor particle trail drawing subtractive dark
 *    geometric dots and '+' signs that drift elastically.
 *
 * Z-index: var(--z-webgl) → 0 (behind everything)
 */

import * as THREE from 'three';

/* ════════════════════════════════════════════
   SHADERS — Background SDF
════════════════════════════════════════════ */
const BG_VERT = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const BG_FRAG = /* glsl */`
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform float uScroll; // Linked to scroll progress

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  float sdPlus(vec2 p, float size, float thickness) {
    vec2 d = abs(p);
    float bar1 = max(d.x - size, d.y - thickness);
    float bar2 = max(d.y - size, d.x - thickness);
    return min(bar1, bar2);
  }

  float drawSDF(float dist, float thickness) {
    return smoothstep(thickness + 0.0015, thickness, abs(dist));
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 auv = (uv - 0.5) * vec2(aspect, 1.0);
    
    // Antigravity Light Theme background gradient (pristine light environment)
    vec3 bgCol = mix(vec3(0.973, 0.976, 0.980), vec3(1.0, 1.0, 1.0), uv.y);
    vec3 col = bgCol;

    float scr = uScroll * 0.001; // Scale down scroll pixels

    // Layer 1: Plus signs floating slowly (deep layer)
    {
      vec2 p = auv + vec2(-0.35 * aspect, 0.15 + scr * 0.12);
      p += vec2(sin(uTime * 0.0012) * 0.01, cos(uTime * 0.0009) * 0.008);
      float d = sdPlus(p, 0.035, 0.0008);
      float mask = drawSDF(d, 0.001);
      col = mix(col, vec3(0.902, 0.914, 0.933), mask);
    }

    // Layer 2: Ring circles floating medium speed (middle layer)
    {
      vec2 p = auv + vec2(0.28 * aspect, -0.22 + scr * 0.24);
      p += vec2(cos(uTime * 0.0015) * 0.015, sin(uTime * 0.0011) * 0.01);
      float d = sdCircle(p, 0.1);
      float mask = drawSDF(d, 0.0008);
      col = mix(col, vec3(0.922, 0.933, 0.949), mask);
    }

    // Layer 3: Dashed orbit circle (front-middle layer)
    {
      vec2 p = auv + vec2(-0.25 * aspect, -0.55 + scr * 0.38);
      p += vec2(sin(uTime * 0.0008) * 0.008, cos(uTime * 0.0012) * 0.012);
      float d = sdCircle(p, 0.16);
      float angle = atan(p.y, p.x);
      float dash = step(0.4, sin(angle * 28.0));
      float mask = drawSDF(d, 0.0006) * dash;
      col = mix(col, vec3(0.937, 0.945, 0.957), mask);
    }

    // Layer 4: Tiny plus signs (fastest layer)
    {
      vec2 p = auv + vec2(0.38 * aspect, 0.45 + scr * 0.52);
      p += vec2(cos(uTime * 0.0018) * 0.012, sin(uTime * 0.0014) * 0.015);
      float d = sdPlus(p, 0.02, 0.0005);
      float mask = drawSDF(d, 0.0008);
      col = mix(col, vec3(0.882, 0.898, 0.922), mask);
    }

    // Subtle vignette
    float vig = 1.0 - smoothstep(0.5, 1.4, length(uv - 0.5) * 1.5);
    col = mix(col, col * vig, 0.25);

    gl_FragColor = vec4(col, 1.0);
  }
`;

/* ════════════════════════════════════════════
   SHADERS — Instanced Particles
════════════════════════════════════════════ */
const PART_VERT = /* glsl */`
  attribute float aScale;
  attribute float aType;
  varying float vType;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vType = aType;
    vec3 pos = position * aScale;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
  }
`;

const PART_FRAG = /* glsl */`
  precision highp float;
  varying vec2 vUv;
  varying float vType;
  void main() {
    vec2 p = vUv - 0.5;
    float dist = 0.0;
    
    if (vType < 0.5) {
      // Circle particle
      dist = length(p) - 0.45;
    } else {
      // Plus particle
      vec2 d = abs(p);
      float bar1 = max(d.x - 0.45, d.y - 0.06);
      float bar2 = max(d.y - 0.45, d.x - 0.06);
      dist = min(bar1, bar2);
    }
    
    float alpha = smoothstep(0.02, 0.0, dist);
    if (alpha < 0.1) discard;
    
    // Subtractive dark grey/blue color (#202124)
    gl_FragColor = vec4(0.125, 0.129, 0.141, alpha * 0.7);
  }
`;

/* ════════════════════════════════════════════
   INITIALIZATION
════════════════════════════════════════════ */
let bgUniforms = null;

export function initWebGLBackground() {
  const bgCanvas = document.getElementById('webgl-bg');
  const cursorCanvas = document.getElementById('webgl-cursor');
  if (!bgCanvas || !cursorCanvas) return;

  // Renderer 1: Background Quad (Behind all content)
  const bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, antialias: true, alpha: false });
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  bgRenderer.setSize(window.innerWidth, window.innerHeight);

  // Renderer 2: Cursor Particles overlay (Above content, transparent background)
  const cursorRenderer = new THREE.WebGLRenderer({ canvas: cursorCanvas, antialias: true, alpha: true });
  cursorRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  cursorRenderer.setSize(window.innerWidth, window.innerHeight);
  cursorRenderer.setClearColor(0x000000, 0);

  const bgScene = new THREE.Scene();
  const cursorScene = new THREE.Scene();
  
  // Camera for both layers (2D orthographic)
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // 1. Background plane
  const bgGeo = new THREE.PlaneGeometry(2, 2);
  bgUniforms = {
    uTime:       { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
    uScroll:     { value: 0 },
  };
  const bgMat = new THREE.ShaderMaterial({
    vertexShader: BG_VERT,
    fragmentShader: BG_FRAG,
    uniforms: bgUniforms,
    depthWrite: false,
    depthTest: false
  });
  const bgMesh = new THREE.Mesh(bgGeo, bgMat);
  bgScene.add(bgMesh);

  // 2. FBO instanced particle setup (On cursorScene overlay)
  const maxParticles = 140;
  const particles = Array.from({ length: maxParticles }, () => ({
    x: 0, y: 0,
    vx: 0, vy: 0,
    scale: 0,
    type: 0, // 0 = dot, 1 = plus
    age: 0,
    active: false
  }));

  // Create custom InstancedBufferGeometry for scaling and type attributes
  const particleBaseGeo = new THREE.PlaneGeometry(0.045, 0.045);
  const instancedGeo = new THREE.InstancedBufferGeometry().copy(particleBaseGeo);

  const scaleArray = new Float32Array(maxParticles);
  const typeArray = new Float32Array(maxParticles);

  const scaleAttribute = new THREE.InstancedBufferAttribute(scaleArray, 1);
  const typeAttribute = new THREE.InstancedBufferAttribute(typeArray, 1);

  instancedGeo.setAttribute('aScale', scaleAttribute);
  instancedGeo.setAttribute('aType', typeAttribute);

  const particleMat = new THREE.ShaderMaterial({
    vertexShader: PART_VERT,
    fragmentShader: PART_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false
  });

  const particleMesh = new THREE.InstancedMesh(instancedGeo, particleMat, maxParticles);
  particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  cursorScene.add(particleMesh);

  // Mouse physics properties
  const mouse = { x: 0, y: 0 };
  const prevMouse = { x: 0, y: 0 };
  let mouseVel = 0;

  window.addEventListener('mousemove', e => {
    // Normalised device coordinates (-1 to 1) for Three.js space
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Calculate mouse velocity
    const dx = mouse.x - prevMouse.x;
    const dy = mouse.y - prevMouse.y;
    mouseVel = Math.sqrt(dx * dx + dy * dy);

    // Spawn trailing particles on mouse movement
    if (mouseVel > 0.005) {
      const spawnCount = Math.min(4, Math.floor(mouseVel * 180) + 1);
      let spawned = 0;
      for (let i = 0; i < maxParticles && spawned < spawnCount; i++) {
        if (!particles[i].active) {
          particles[i].active = true;
          particles[i].x = mouse.x + (Math.random() - 0.5) * 0.02;
          particles[i].y = mouse.y + (Math.random() - 0.5) * 0.02;
          
          // Velocity opposes mouse vector with slight randomness
          particles[i].vx = -dx * 0.15 + (Math.random() - 0.5) * 0.008;
          particles[i].vy = -dy * 0.15 + (Math.random() - 0.5) * 0.008;
          
          particles[i].scale = 1.0;
          particles[i].type = Math.random() > 0.65 ? 1.0 : 0.0; // 35% plus signs
          particles[i].age = 0;
          spawned++;
        }
      }
    }

    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;

    // Update background shader mouse uniforms
    if (bgUniforms) {
      bgUniforms.uMouse.value.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    }
  });

  // Track scroll position globally
  window.addEventListener('scroll', () => {
    updateScrollPos();
  }, { passive: true });

  function updateScrollPos() {
    if (!bgUniforms) return;
    const logbook = document.getElementById('view-logbook');
    const week = document.getElementById('view-week');
    let scrollTop = 0;
    if (logbook && logbook.classList.contains('on')) {
      scrollTop = logbook.scrollTop;
    } else if (week && week.classList.contains('on')) {
      scrollTop = week.scrollTop;
    }
    bgUniforms.uScroll.value = scrollTop;
  }

  // Window resize handler
  function onResize() {
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    cursorRenderer.setSize(window.innerWidth, window.innerHeight);
    if (bgUniforms) {
      bgUniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    }
  }
  window.addEventListener('resize', onResize);

  const dummyMatrix = new THREE.Object3D();
  let frame = 0;

  function animate() {
    requestAnimationFrame(animate);
    frame++;
    bgUniforms.uTime.value = frame;

    // Direct check to keep scroll uniforms updated
    updateScrollPos();

    // Physics update for particles
    for (let i = 0; i < maxParticles; i++) {
      const p = particles[i];
      if (p.active) {
        // Drift particles and slowly decelerate
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        
        // Shrink over time
        p.scale -= 0.024;
        p.age++;
        
        if (p.scale <= 0) {
          p.active = false;
          p.scale = 0;
        }

        // Apply coordinates to instance matrix
        dummyMatrix.position.set(p.x, p.y, 0);
        dummyMatrix.updateMatrix();
        particleMesh.setMatrixAt(i, dummyMatrix.matrix);
      } else {
        // Hide inactive instances
        dummyMatrix.position.set(9999, 9999, 9999);
        dummyMatrix.updateMatrix();
        particleMesh.setMatrixAt(i, dummyMatrix.matrix);
        p.scale = 0.0;
      }

      scaleArray[i] = p.scale;
      typeArray[i] = p.type;
    }

    // Flag instanced attributes for WebGL update
    scaleAttribute.needsUpdate = true;
    typeAttribute.needsUpdate = true;
    particleMesh.instanceMatrix.needsUpdate = true;

    // Render layers
    bgRenderer.render(bgScene, camera);
    cursorRenderer.render(cursorScene, camera);
  }
  animate();
}
