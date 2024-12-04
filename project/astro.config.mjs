import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      include: ['@solflare-wallet/sdk', '@solana/web3.js', 'chart.js', 'date-fns', 'aos']
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/]
      }
    }
  }
});