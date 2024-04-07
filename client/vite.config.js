import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/v1/.*": "https://centipe-do-list-backend-kljdmvz4z-millas-projects-7027ee8d.vercel.app/",
    },
  },
});

