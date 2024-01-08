import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/sajjad1384N/Weather_App.git",
  plugins: [react()],
})
