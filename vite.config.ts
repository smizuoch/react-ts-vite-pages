import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use the GitHub Pages repo name as the base path only for production builds.
  base: mode === 'production' ? '/react-ts-vite-pages/' : '/',
}))
