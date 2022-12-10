/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    coverage: {
      reporter: ['json-summary', 'text', 'lcov'],
      reportsDirectory: resolve(__dirname, 'coverage'),
      provider: 'istanbul',
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    css: true,
    cache: {
      dir: resolve(__dirname, 'coverage/node_modules/.vitest'),
    },
  },
  plugins: [Vue(), VueTypeImports()],
})
