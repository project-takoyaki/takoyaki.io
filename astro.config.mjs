// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mewski.pages.mewski.dev",
  base: "/takoyaki.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
