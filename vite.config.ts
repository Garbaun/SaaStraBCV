import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SaaStraBCV/', // GitHub Pages için repo adı
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
