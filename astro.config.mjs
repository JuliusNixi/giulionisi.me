import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// LaTeX and Math.
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
    // Prefix also needed for en default lang.
    prefixDefault: true,
    redirectToDefaultLocale: true,
  },

    redirects: {
      '/blog/index.astro': '/blog/Blog',
    },
    prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport'
    }

    
});