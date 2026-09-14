# Sitrep landing page

The marketing site for Sitrep, kept apart from the app and the research tree so it never gets in their way.

## What it is

One static page: `index.html`, `css/styles.css`, `js/main.js`, the logos and one self-hosted font. No build step, no framework. Vercel serves it as-is; any static host works.

- **Layout** is traced section by section from the reference site (aeye.framer.ai) at 1440px: an 1200px container with 120px gutters, 80px section padding, 48px grid cells, Geist for text, Geist Mono for labels and buttons, Geist Pixel Square for the bracketed word in the hero and the closing card.
- **Palette** is Sitrep's: blue `#0151AF`, cream `#F9EDDD` in place of white, ink `#1A1A1A`. Lines and panels are cream-tinted so nothing reads as grey-on-white.
- **Copy** takes its shape from kimpton.ai (agents research, the team decides, graded by reality) and its facts from the research tree: 877,067 measured events, 150,045 filings with full text, 43 feeds plus GDELT, 460 macro events, the seven invariants, the dated changelog. No em dashes, short sentences, the analyst concludes.

## Sections

Hero band with nav and twinkling grid, hero with the pixel word, data-source strip, positioning marquee, then eleven numbered sections: what it does, the corpus, core layers (dark, with the inputs → contexts diagram), how it works (scroll-driven cards), integration (scroll-driven code tabs: MCP, Python, REST), documentation, invariants carousel (dark), pricing with a monthly/annual toggle, changelog, research notes, FAQ. Then the ticker, the closing card on the dark grid, and the footer.

## Run it

```
python3 -m http.server 8811
```

Then open http://127.0.0.1:8811/. Opening `index.html` directly also works.

## Deploy

```
vercel --prod
```

The project is static; `vercel.json` only turns on clean URLs and long cache headers for `assets/`.

## Things to decide before it goes public

- **Pricing** is a draft. Analyst $160/month and Desk $120/seat/month are anchored to the $1,600/year seat in the seat-cost note; the annual toggle shows the 20% lower numbers. Change or remove in `index.html` under `id="pricing"`.
- **Contact** goes to `hello@sitrep.so` via mailto, and the newsletter form does the same. Swap for a real form endpoint when there is one.
- **Social links** (X, LinkedIn, GitHub) and the Privacy and Terms pages point at `#`.
- **Research links** all go to https://research.sitrep.so.

## Assets

`assets/logo/` holds the four supplied SVGs (mark and wordmark, on light and on dark). `assets/fonts/GeistPixelSquare.woff2` is Vercel's Geist Pixel (OFL). Geist and Geist Mono load from Google Fonts.
