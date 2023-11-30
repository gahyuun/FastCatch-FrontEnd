import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/back": {
        target: "http://ec2-43-201-113-97.ap-northeast-2.compute.amazonaws.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/back/, ""),
      },
    },
  },
});
