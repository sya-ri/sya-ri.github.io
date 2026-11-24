import { defineConfig } from "vite-plus";

// Keep the native Astro compiler loaded while Oxfmt shuts down its worker threads.
import "@astrojs/compiler-rs";

export default defineConfig({
  fmt: {
    astro: true,
    ignorePatterns: ["dist/**", ".astro/**", "docs/**", "public/**", "src/examples/**"],
  },
  lint: { ignorePatterns: ["dist/**", ".astro/**"], categories: { correctness: "error" } },
});
