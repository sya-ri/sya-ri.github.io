# sya_ri's portfolio

An interactive portfolio for sya_ri's projects and open-source libraries at [s7a.dev](https://s7a.dev). The Astro site builds to static HTML. A small browser script handles horizontal navigation and animates Shari as you scroll.

## Development

Use Node.js 24 and install the pinned dependencies with `npm ci`. The project includes the Vite+ CLI.

```sh
npx vp run dev
npx vp fmt --check
npx vp lint
npx vp run check
npx vp run build
npx vp run preview
```

Vite+ runs Oxfmt and Oxlint. The check task runs Astro diagnostics. To apply formatting, run `npx vp fmt`. The production build writes to `dist/`.

## Editing the portfolio

Edit the ordered project and library entries in `src/data/portfolio.ts`. Library code samples live in `src/examples/`, and artwork lives in `public/images/`. The About section and traveler use the same color palette.

## Hosting

Vercel serves the Astro build at `s7a.dev`. The `docs/` directory serves the existing GitHub Pages redirects for `gh.s7a.dev`. The publisher record is served from `public/ads.txt`.
