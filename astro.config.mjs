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
      "en": "it"
    },
  }
});