import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // url base for the define config function
    // syntax -> base: "/<name of the repository>"
    // this is the endpoint where the code is going to exist when it's pushed to git pages
    // avoids black screen or 404 after deployment
  base: "/cs-portfolio/",

    // in package json add the homepage as the key and full url as the value
    // Syntax -> "homepage": "https://<github-username>.github.io/<repository-name>/"
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
