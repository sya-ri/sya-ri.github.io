# sya_ri's portfolio

[s7a.dev](https://s7a.dev) is a gallery of my projects and open-source libraries. Scroll through the gallery to walk alongside Shari, or use the section links to jump ahead. Each entry has its own URL.

## Development

Use Node.js 24 and the pnpm version pinned in `package.json`. Install dependencies with `pnpm install --frozen-lockfile`.

```sh
pnpm exec vp run dev
pnpm exec vp fmt --check
pnpm exec vp lint
pnpm exec vp run check
pnpm exec vp run build
pnpm exec vp run preview
```

Vite+ runs Oxfmt and Oxlint. The check task runs Astro diagnostics. Run `pnpm exec vp fmt` to apply formatting. Astro writes the static site to `dist/`.

## Editing the gallery

The order of the entries in `src/data/portfolio.ts` sets their order on the site. Each slug doubles as a shareable URL fragment. Code samples live in `src/examples/`. Shiki highlights them at build time. Screenshots and other artwork live in `public/images/`.

## Hosting

Vercel serves the portfolio at [s7a.dev](https://s7a.dev). The `docs/` directory contains the GitHub Pages redirects for `gh.s7a.dev`. The AdSense publisher record lives in `public/ads.txt`.
