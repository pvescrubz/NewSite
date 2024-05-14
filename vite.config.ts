import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // @ts-ignore
          if (assetInfo.name.endsWith('.pdf')) {
            return '[name].[ext]';
          } else {
            return 'assets/[name].[ext]';
          }
        },
      },
    },
  },
});