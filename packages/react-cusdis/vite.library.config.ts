import { defineConfig } from "vite";
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src", "ReactCusdis"),
      name: "ReactCusdis"
    },
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      external: ['cusdis', 'react']
    }
  },
});
