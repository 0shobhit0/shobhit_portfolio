import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/shobhit_portfolio/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});