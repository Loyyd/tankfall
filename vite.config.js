import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Flying_Cube/', // Replace with your repository name
  plugins: [
    {
      name: 'html-full-reload',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({ type: 'full-reload' });
        }
      },
    },{
      name: 'css-full-reload',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.css')) {
          server.ws.send({ type: 'full-reload' });
        }
      },
    }
  ],
});