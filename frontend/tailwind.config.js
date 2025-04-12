// tailwind.config.js or tailwind.config.ts
import motion from 'tailwindcss-motion'
import tailwind from "tailwindcss"
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [motion],
}
