import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  // GitHub Pages serves from: https://ravi-0143.github.io/Logbook/
  base: '/Logbook/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Output to docs/ — GitHub Pages can serve from docs/ on main branch.
    // No separate gh-pages branch needed.
    outDir: 'docs',
    emptyOutDir: true,
  },
});
