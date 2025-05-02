import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Для алиасов

export default defineConfig({
  plugins: [
    react({
      // Оптимизации для больших проектов
      jsxRuntime: 'automatic', // Для React 17+
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
  resolve: {
    alias: {
      // Алиасы для абсолютных путей (совместимо с FSD)
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // Увеличиваем лимит для 3D-виджетов
    minify: 'terser', // Оптимизация для продакшна
  },
  server: {
    host: true, // Доступ с других устройств
    port: 3000, // Фиксируем порт
    open: true, // Автооткрытие в браузере
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Для SCSS-модулей
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
