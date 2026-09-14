# Illustrations

Redrawn SVG art for the landing page, one file per illustration. Nothing in
`index.html` or `css/styles.css` references these yet; each file below names
the element whose inline `<svg>` it replaces and the size that element renders
the SVG at. Every file has a `viewBox` and no `width`/`height`, so it can be
inlined or loaded with `<img>` and sized by the existing CSS.

`contact-sheet.png` shows every file at its intended size and enlarged.

## Value cards (isometric line art)

Single 1.2px `#1A1A1A` stroke, no fill, round joins, 30-degree isometric axes
with hidden lines removed. Drawn on `0 0 160 160`, occupying the top-left
150x130 like the reference.

| File | Replaces | Renders at |
| --- | --- | --- |
| `value-cited.svg` | `.value-card:nth-child(1) .art svg` (Cited research) | 160x160 |
| `value-precedents.svg` | `.value-card:nth-child(2) .art svg` (Precedent evidence) | 160x160 |
| `value-thesis.svg` | `.value-card:nth-child(3) .art svg` (Thesis tracking) | 160x160 |

Cited: a loose stack of three pages, text lines on the top page, a leader from
one line to a small block at the margin with a flag on a stem. Precedents:
three stepped extruded slabs with a bar rising from the top one. Thesis: an
extruded check standing on its edge.

## How-it-works cards (pixel-block isometric)

`fill="currentColor"`, built only from filled squares on a 2px grid (32x36
cells) inside `0 0 64 72`, `shape-rendering="crispEdges"`. Note: the brief
asked for an 8px grid, which is 8x9 cells at this size and cannot hold a cube
with rods or a cylinder cluster; 2px cells give the reference's pixel density
(its pixels are about 2-3px at 64px wide). Tones: outline and left face solid,
right face checker-dithered, top face empty.

| File | Replaces | Renders at |
| --- | --- | --- |
| `how-1.svg` | `.how-card:nth-child(1) .art svg` (A news item comes in), three stacked slabs | 64x72 |
| `how-2.svg` | `.how-card:nth-child(2) .art svg` (Agents find the precedents), cube with six rods | 64x72 |
| `how-3.svg` | `.how-card:nth-child(3) .art svg` (The desk reads the evidence), cluster of six cylinders | 64x72 |
| `how-4.svg` | `.how-card:nth-child(4) .art svg` (Reality grades the call), two extruded chevrons | 64x72 |

Colour comes from `.how-card .art { color: var(--grey-1) }` and the active
card's blue, as today.

## Cap-bottom icons

3px `currentColor` stroke on `0 0 56 56`, half-pixel coordinates so the stroke
sits on whole pixels.

| File | Replaces | Renders at |
| --- | --- | --- |
| `icon-square.svg` | `.cap-bottom > div:nth-child(2) .icon svg` (Built to disagree) | 56x56 |
| `icon-stack.svg` | `.cap-bottom > div:nth-child(3) .icon svg` (Graded after the fact) | 56x56 |

## Diagram list icons

1.2px `currentColor` stroke on `0 0 16 16`, round caps and joins.

| File | Replaces | Renders at |
| --- | --- | --- |
| `d-filing.svg` | `.diagram .col:first-child li:nth-child(1) svg` (Filings) | 16x16 |
| `d-news.svg` | `.diagram .col:first-child li:nth-child(2) svg` (News) | 16x16 |
| `d-prices.svg` | `.diagram .col:first-child li:nth-child(3) svg` (Prices) | 16x16 |
| `d-positions.svg` | `.diagram .col:first-child li:nth-child(4) svg` (Positions) | 16x16 |
| `d-company.svg` | `.diagram .col:last-child li:nth-child(1) svg` (Company) | 16x16 |
| `d-event.svg` | `.diagram .col:last-child li:nth-child(2) svg` (Event class) | 16x16 |
| `d-sector.svg` | `.diagram .col:last-child li:nth-child(3) svg` (Sector) | 16x16 |
| `d-regime.svg` | `.diagram .col:last-child li:nth-child(4) svg` (Regime) | 16x16 |

## Outputs (signals)

1.2px `currentColor` stroke on `0 0 18 18`.

| File | Replaces | Renders at |
| --- | --- | --- |
| `s-list.svg` | `.signals .row span[title="Precedent list"] svg` | 18x18 |
| `s-diamond.svg` | `.signals .row span[title="Cited writeup"] svg` | 18x18 |
| `s-bell.svg` | `.signals .row span[title="Watch"] svg` | 18x18 |

## Data-source strip

1.4px `currentColor` stroke on `0 0 20 20`.

| File | Replaces | Renders at |
| --- | --- | --- |
| `src-bse.svg` | `.logo-strip div:nth-child(1) svg` (BSE filings) | 20x20 |
| `src-nse.svg` | `.logo-strip div:nth-child(2) svg` (NSE prices) | 20x20 |
| `src-gdelt.svg` | `.logo-strip div:nth-child(3) svg` (GDELT) | 20x20 |
| `src-news.svg` | `.logo-strip div:nth-child(4) svg` (Google News) | 20x20 |
| `src-iima.svg` | `.logo-strip div:nth-child(5) svg` (IIM-A factors) | 20x20 |
| `src-vix.svg` | `.logo-strip div:nth-child(6) svg` (India VIX) | 20x20 |

## Changelog

1.2px `currentColor` stroke on `0 0 14 14`.

| File | Replaces | Renders at |
| --- | --- | --- |
| `log-code.svg` | `.log-item:nth-child(1) .ico svg` (code brackets) | 14x14 |
| `log-check2.svg` | `.log-item:nth-child(2) .ico svg` and `:nth-child(3)` (double check) | 14x14 |
| `log-check.svg` | spare single check for future entries | 14x14 |

## Rules every file follows

`viewBox` present, no `width`/`height`, no external references, integer or
half-pixel coordinates, `stroke-linejoin="round"` on stroked art, and
`currentColor` everywhere except the three value cards, which are `#1A1A1A`.
