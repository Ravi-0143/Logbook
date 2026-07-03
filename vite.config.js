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
    // Built output served by GitHub Pages (main branch, /docs folder)
    outDir: 'docs',
    emptyOutDir: true,
  },
});
