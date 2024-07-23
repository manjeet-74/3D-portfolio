import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
