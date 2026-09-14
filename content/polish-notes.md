# Polish pass: findings and fixes

Method: served the site on 127.0.0.1:8822, screenshotted with headless Chrome at 1440 and 390 (4s after load, past the preloader and the typed headline), cut both our page and the reference full-page capture into section strips and 1:1 detail crops, and sampled pixel colours for lines, dots and grid. Section offsets already matched the reference within 50-100px, so this was a detail pass. All CSS fixes are in `css/polish.css`, one comment per fix. Before/after crops for the six most visible fixes are in `content/polish-shots/`.

## Linking

`index.html` line 16 links `css/polish.css` after `css/styles.css` (added in parallel while this pass ran). It must stay after `styles.css`; every rule in it overrides a rule there. The "before" halves of the shots were taken with the request for `polish.css` blocked, the "after" halves with the page as served.

## What made it read as flaky, and the fix

Measured against the reference (pixel samples from `ref/full.png`):

| Thing | Reference | Ours before | Fix |
|---|---|---|---|
| 1px lines on light | `#E0E0E0` on white, a 31-step drop | `#E1D4C1` on `#F9EDDD`, a 24-step drop | `--line: #DACBB4` (31-step drop) |
| 1px lines on dark | `#474747` everywhere, same as the hero grid | `#333333` in sections, `#474747` in the hero grid | `--line-dark: #474747` |
| Light dot texture | 2px dots at 7px pitch, soft | 2px dots at 8px, denser and darker looking | 10px pitch, lighter dot |
| Dark dot texture | 5px dots at 16px pitch, 15 steps above the panel | 2px pin-pricks at 12px, 38 steps above | 2.5px radius at 16px, `#262626` |
| Mono tags | 12px, padding 3px 4px, 22px tall | padding varied 2-4px vertical, 4-6px horizontal | one padding for all nine tag styles |
| Blur | none, hard edges only | radial blue glows on the research tiles and the invariant tile | solid blue cells on the tiles' own grid |

### Desktop, section by section

- **Hero**: matches. Grid `#474747` on `#1A1A1A` is the same as the reference. Button sizes (48px tall, 212px hero, 180px min elsewhere), marker square, ghost underline all match the computed-style dump. Reference's ghost marker is a hollow triangle; ours is filled. Left as is.
- **Logo strip / positioning**: structure matches; only the line and dot contrast changed (above).
- **01 What it does**: the line drawings occupied ~80px of a 160px box; the reference art is ~110px wide. Scaled 1.25x visually (transform), layout unchanged.
- **02 The corpus, stats grid**: the real bug. `1fr 1fr` columns have an auto minimum, so the nowrap "+1 / +3 / +5 / +10" stretched column 1 to 271px, squeezed column 2 to 201px, wrapped "News feeds, back to 2015" onto two lines and pushed the whole grid to 473px inside a 420px track (which squeezed the heading column). Now `minmax(0,1fr)` columns, a 480px stats track, and that one figure at 27px so it fits its 192px cell. Columns are now 240/240 and every label is one line.
- **02 chart**: guides, split line, legend chips and axis all match. Legend chips got nowrap (the parallel edit to styles.css did the same).
- **03 Core layers, diagram**: the blue wire (150px) ran straight through the OUTPUTS caption. Reference sits the columns ~140px from the panel top, runs a ~100px wire, then air, then the caption and the boxes. Ours had the columns 290px down and the caption on the wire. Rebuilt: `align-items: start`, 140px top padding, 100px solid wire (was a gradient fading out), signals row at 470px. Scoped to widths above 720 so the stacked mobile diagram is untouched.
- **03 bottom row**: icons were 56px at a 3px stroke where the reference is ~44px; chips were 46px tall where the reference is 40px.
- **04 How it works**: matches. Two titles wrap to two lines at 24px in a 262px cell ("Agents find the precedents", "The desk reads the evidence"); the reference titles are all one line. See copy notes below.
- **05 Integration**: matches, including the frame corner marks and the 720px panel height.
- **06 Documentation**: matches.
- **07 Invariants**: cards match. The tile card's radial glow was the softest thing on a page built from 1px lines; now a 96px solid blue block on the tile's 24px grid, top right, clear of the tag and the caption.
- **08 Pricing**: matches, including the rule at +42px on every card (checked: the reference draws it on the non-featured cards too), the 8px featured offset and the blue corner marks. "/seat /month" got nowrap.
- **09 Changelog**: date pill, icon box and dashed rule align on one centre line as in the reference. Two titles wrap; see copy notes.
- **10 Research**: the two blurred glows per tile are gone; each tile now has two lit cells on its 32px grid, the same device as the hero band's twinkling cells.
- **11 FAQ**: `.n` is a flex row with a 12px gap, so "//" and "001" rendered as "//  001". Reference is a tight "//001". Gap moved to the leader.
- **CTA, tickers, footer**: match (24px corner squares at 8px inset, 64px tickers, footer columns and social leaders).

### Mobile (390px)

Every section stacks with 24px gutters. Fixed:

- Hero: the pixel word wrapped to two lines and the cursor block floated at the right edge of line one (`.pixel-line` was `display: flex`). Now inline, 40px, so "[Claude Code]" fits the 342px column with the cursor after the last glyph.
- Trust row: separator was orphaned at a line end. Hidden on mobile; the count sits on its own line.
- Value cards: the tag sat directly under the body copy (`margin-top: auto` collapses when content is taller than the min-height). 24px gap.
- Chart: legend chips wrapped onto two lines; nine axis labels crowded 342px. Legend nowrap, axis at 13px with every second label hidden.
- Chart legend overflow: the parallel edit moved the legend to 10/11 of the chart width, so on a 342px chart its right half hung outside the viewport and the document scrolled sideways to 442px (measured with polish.css blocked; this was present before it). Pinned to the chart's right edge on mobile. Document width is 390 with polish.css loaded.
- Pricing: "/seat /month" wrapped beside the price. Price at 52px, per nowrap.

### Things checked and left alone

Type scale, tracking and weights (h1 72px/-0.06em, h2 56px/-0.06em, body -0.05em, mono -0.04em, buttons 16px/600) match the computed-style dump. Section padding 80px, label to heading 24px, heading to grid 64px, card padding 24px, 8px grid gaps all match. Value cards carry body copy where the reference has none; that is content, not drift.

## Copy suggestions (HTML, not done)

These would remove the remaining wraps that the reference does not have. Optional.

- `.stats` cell 3: `<div class="n">+1 / +3 / +5 / +10</div>` to `<div class="n">+1/+3/+5/+10</div>`. Then the `.stats > div:nth-child(3) .n` rules in polish.css can go.
- `.how-card` titles: "Agents find the precedents" and "The desk reads the evidence" wrap at 24px in a 262px cell. "Agents find precedents" and "The desk reads it" fit on one line.
- `.log-item` titles wrap in the 408px text column; reference titles are one line.

## Note on the moving target

`index.html` (copy and new illustrations), `styles.css` (two lines: legend position, legend nowrap) and `main.js` changed during this pass. Baseline and after screenshots were re-taken on the current files, so the before/after pairs are like for like. Nothing in polish.css depends on the old copy.
