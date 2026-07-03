# Logbook App

A personal daily study logbook with a spatial, glassmorphic UI built with Vite, GSAP, Lenis, and Three.js.

## Live App
👉 **https://ravi-0143.github.io/Logbook/**

## Local Development
```bash
cd logbook-app
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build   # outputs to docs/
# commit docs/ and push to main → GitHub Pages auto-deploys
```

## Stack
- **Vite** — build tool
- **Three.js** — WebGL background shader
- **GSAP** — spring animations, elastic modal, masked text reveals
- **Lenis** — smooth momentum scroll

## Privacy
All data stored via the host WebView storage API. No data leaves the device.
