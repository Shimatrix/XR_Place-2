import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    hmr: {
      overlay: true, // Показывает ошибки поверх страницы
      protocol: 'ws', // Используем ws для подключения
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    minify: 'terser',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/globals.scss" as *;
          @use "@/styles/base";
        `,
      },
    },
  },
});
