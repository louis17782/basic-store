// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://freshvory.netlify.app/",
  prefetch: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Add valid SCSS options here if needed
        }
      }
    },
    server: {
      hmr: true,
    }
  },
});
