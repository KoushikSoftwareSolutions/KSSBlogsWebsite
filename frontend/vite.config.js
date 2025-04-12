import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Dynamically import the CommonJS plugin

// Export the config
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ]
})
