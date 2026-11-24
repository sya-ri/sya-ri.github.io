# sya_ri's portfolio

[s7a.dev](https://s7a.dev) is a gallery of my projects and open-source libraries. Scroll through the gallery to walk alongside sya-ri’s Minecraft character, or use the section links to jump ahead. Each entry has its own URL.

## Development

Run `mise install` to install Node.js 26, pnpm, Java, and ktlint. With mise active, install dependencies with `pnpm install --frozen-lockfile`.

```sh
pnpm exec vp run dev
pnpm exec vp fmt --check
mise run check-kotlin
pnpm exec vp lint
pnpm exec vp run check
pnpm exec vp run build
pnpm exec vp run preview
```

Vite+ runs Oxfmt and Oxlint. The check task runs Astro diagnostics. Run `pnpm exec vp fmt` to format the site and `mise run format-kotlin` to format Kotlin and Gradle Kotlin DSL examples. Astro writes the static site to `dist/`.

## Editing the gallery

The order of the entries in `src/data/portfolio.ts` sets their order on the site. Each slug doubles as a shareable URL fragment. Code samples live in `src/examples/`. Shiki highlights them at build time. Screenshots and other artwork live in `public/images/`.

## Icon URLs

Request `/icon-BODY-EYE[-BACKGROUND].svg` or `.png` with three- or six-digit hex colors and no leading `#`. The first color fills the body. The second colors the eyes, mouth, and outline. Omit the third color for transparency.

- `/icon-84c5ad-253538.svg` returns the default mint character on a transparent background.
- `/icon-84c5ad-253538-fff.png` returns a mint character on white.

SVGs use the original 800 × 800 viewBox. PNGs match the supplied artwork at 750 × 750 with transparency and 1600 × 1600 with a background. Run `pnpm dev` to try the icon URLs locally.

## Hosting

Vercel serves the static portfolio and the Node.js 26 icon function at [s7a.dev](https://s7a.dev). The `docs/` directory contains the GitHub Pages redirects for `gh.s7a.dev`. The AdSense publisher record lives in `public/ads.txt`.
