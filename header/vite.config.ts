import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "symplast-header",
      fileName: (format) => `header.${format}.js`,
    },
    outDir: './public',
    target: "esnext",
  },
})
