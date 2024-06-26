import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'


const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: "ejy8ZUEesrxQrdd351UvRQtt",
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      navbar: 'storyblok/Navbar',
      hero: 'storyblok/Hero',
      article: 'storyblok/Article',
      matchInfo: 'storyblok/MatchInfo'
  },
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
  },
});