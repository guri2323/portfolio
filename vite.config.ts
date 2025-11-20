import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration enabling React + TypeScript
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
