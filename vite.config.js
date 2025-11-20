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
});
