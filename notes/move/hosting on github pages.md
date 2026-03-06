{
  "name": "cs-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://igris-marvin.github.io/cs-portfolio/",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "antd": "^6.1.1",
    "bootstrap": "^5.3.8",
    "bootstrap-icons": "^1.13.1",
    "dayjs": "^1.11.18",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-router-dom": "^7.9.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react-swc": "^4.1.0",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "gh-pages": "^6.3.0",
    "globals": "^16.4.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.44.0",
    "vite": "^7.1.7"
  }
}


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(
  {
    plugins: [react()],
    // url base for the define config function
    // syntax -> base: "/<name of the repository>"
    // this is the endpoint where the code is going to exist when it's pushed to git pages
    // avoids black screen or 404 after deployment

    base: '/cs-portfolio/',

    // in package json add the homepage as the key and full url as the value
    // Syntax -> "homepage": "https://<github-username>.github.io/<repository-name>/"
  }
)
