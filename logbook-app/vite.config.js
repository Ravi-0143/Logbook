import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  // GitHub Pages: https://ravi-0143.github.io/Logbook/
  base: '/Logbook/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Output to repo root /docs — one level up from logbook-app/
    // GitHub Pages is set to serve from main branch, /docs folder
    outDir: '../docs',
    emptyOutDir: true,
  },
});
