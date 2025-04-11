import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //adicionado manualmente, junto com tailwindcss() após react()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
