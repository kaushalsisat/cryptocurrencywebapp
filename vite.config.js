import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000, // Increase warning limit slightly
  },
  base: "/cryptocurrencywebapp/",//add this line
})
