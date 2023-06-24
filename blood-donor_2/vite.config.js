import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jquery', 'jquery-nice-select'],
  },
})

// import { defineConfig } from 'vite';

// export default defineConfig({
//   // Other Vite config options 
//   optimizeDeps: {
//     include: ['jquery', 'jquery-nice-select'],
//   },
// });
