import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration enabling React + TypeScript
export default defineConfig({
  plugins: [react()],
  // Hard-coded GitHub Pages base path (repo name)
  base: '/portfolio/',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
});
