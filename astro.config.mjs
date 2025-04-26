import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["it", "en"],
    // Prefix for en default lang.
    prefixDefault: true,
    redirectToDefaultLocale: true,
    // If it/en is not working, try to change the fallback to the opposite.
    fallback: {
      "it": "en",
    },
  },

  /*
  Non usato alla fine la modalità hybrid.
  La api deve essere in pages/api.
  Il file api endpoint deve essere .ts.
  import node from "@astrojs/node";
  output: 'hybrid',
  // Sostituire con Netlify in deploy.
  adapter: node({
    mode: "standalone"
  })
  */


    redirects: {
      '/blog/index.astro': '/blog/Blog',
    },
    prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport'
    }

    
});