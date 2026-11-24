import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    astro: true,
    ignorePatterns: ["dist/**", ".astro/**", "docs/**", "public/**", "src/examples/**"],
  },
  lint: { ignorePatterns: ["dist/**", ".astro/**"], categories: { correctness: "error" } },
});
