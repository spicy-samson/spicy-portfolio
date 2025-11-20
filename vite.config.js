import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // Allow access from network
    port: 5173, // Default Vite port
  },
});
