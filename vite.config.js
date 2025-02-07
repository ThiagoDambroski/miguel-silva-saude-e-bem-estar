import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/miguel-silva-saude-e-bem-estar/',
  plugins: [react()],
})
