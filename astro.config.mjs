import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import simpleStackForm from "simple-stack-form";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";


// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://astro-nomy-opal.vercel.app",
  build: {
    format: "file",
  },
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
    gfm: true,
  }), react(), sitemap(), icon(), simpleStackForm(), pagefind(), playformCompress()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-navigation-menu', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-slot', '@radix-ui/react-tabs'],
            'animation-vendor': ['framer-motion'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@radix-ui/react-*'],
    },
  },
  // Using server output because the site has API routes for newsletter/waitlist
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});