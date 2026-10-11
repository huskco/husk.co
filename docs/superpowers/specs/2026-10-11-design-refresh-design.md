# husk.co design refresh

**Branch:** `design-refresh`
**Status:** design approved in mockups, spec awaiting review
**Mockups:** `.superpowers/brainstorm/72755-1791735881/content/` (`product-page-v27.html`, `home-v9.html`; gitignored, local only)

## Goal

Make husk.co look like a considered, premium product site rather than a default Tailwind site: Apple and Stripe layout cues (one idea per section, large rounded tiles, type-first heroes) built on Husk's own materials (stone paper, ink, the box's green and gold, Tiempos Headline). The product page sells Existential Chicken; the home page is a short, mostly-ad page that sends people to it. The code should get cleaner, not just the look.

## Ground rules

- **Copy is fixed.** Use the copy listed in this spec exactly. No new headings, eyebrows, ledes, numbers, buttons or reworded lines. Anything not listed here is unchanged from the live site.
- **One system.** Every size, gap, radius and color comes from the tokens below. No raw Tailwind palette colors (`stone-*`, `blue-*`) or one-off pixel values in page code.
- **Progressive enhancement.** Without JavaScript, every section is visible and the page works; motion is skipped for `prefers-reduced-motion: reduce`.

## Design tokens

Lives in `styles/_variables.module.css` and is exposed to Tailwind through `tailwind.config.js` so classes like `bg-paper`, `text-muted`, `p-base`, `rounded-surface` resolve to these tokens.

### Ratio

`--bigger: 1.4142` (√2), `--smaller: 1 / √2`. Everything below steps by this ratio.

### Type

| Token | Value |
|---|---|
| `--base-font-size` | `clamp(1.125rem, calc(0.66rem + 0.75vw), 1.5rem)` (existing) |
| `--small-font-size` | base ÷ √2 |
| `--large-font-size` | base × √2 |
| `--larger-font-size` | large × √2 |
| `--largest-font-size` | larger × √2 |
| `--display-font-size` | `min(largest × √2 × √2, 13.5vw)` |

- Headings: Tiempos Headline semibold (600), tight tracking (`-0.025em`, display `-0.035em` to `-0.04em`), `text-wrap: balance` on all `h1`–`h3`.
- Body: system sans (`-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`) at regular weight (not light), `text-wrap: pretty` on paragraphs.
- Tiempos loads with `next/font/local` from `public/fonts/` (light, regular, regular italic, semibold). Remove the unused Google Fonts request for Source Serif 4.

### Spacing

Defined as multiples of the base **font size** (not `em`), so a step means the same thing inside a giant headline as in body text.

| Token | Value |
|---|---|
| `--base-spacing` | `calc(var(--base-font-size) * 1.5)` |
| `--small-spacing` / `--smaller-spacing` / `--smallest-spacing` | successive ÷ √2 |
| `--large-spacing` / `--larger-spacing` | successive × √2 |
| `--largest-spacing` *(new)* | larger × √2 (section padding on phones) |
| `--huge-spacing` *(new)* | largest × √2 (section padding on desktop) |

### Radii

Tied to spacing, as before: `--surface-border-radius: var(--smaller-spacing)` for small tiles, `--large-border-radius: var(--base-spacing)` for photos, gallery tiles and the closing band. Buttons and the buy pill are full pills.

### Motion

Existing tokens: `--fast-timing: 100ms`, `--base-timing: 250ms`, `--slow-timing: 750ms`, `--base-easing: cubic-bezier(.60, 0, 0, 1)`.

### Color

| Token | Value | Use |
|---|---|---|
| `--paper` | `#EFEBE5` | page background |
| `--paper-raised` | `#F7F5F1` | alternating section fields, step tiles |
| `--card-white` | `#FFFEFA` | the definition card (game-card white) |
| `--ink` | `#22201D` | text |
| `--muted` | `#6B645C` | secondary text |
| `--rule` | `#D9D3CA` | hairlines, light numerals |
| `--green` | `#3F5A36` | buttons, closing band (sampled from the printed box) |
| `--green-deep` | `#2E4228` | button hover |
| `--gold` | `#CDAA5E` | text on green only |

### Paper grain

`--grain`: an inline SVG `feTurbulence` noise (data URI, no file), multiplied at low strength onto raised-paper sections and step tiles. Not on the white definition card (it greys the white).

## Shared components

| Component | Job |
|---|---|
| `Layout` | Head/meta (unchanged behavior), header, footer, font class |
| `Section` | A full-width field (`paper` or `raised`) with section padding and the content container |
| `Tile` | Rounded tile with variants: `cinema`, `definition`, `photo`, `step` |
| `BuyButton` | Green pill + price + the two fine-print lines (existing component, restyled) |
| `BuyPill` | The floating vellum pill (below) |
| `Facts` | The 12+ / 20 / 2–12 row |
| `FaqItem` | Native `<details>`/`<summary>` row with a + that rotates to × |
| `Reveal` | Wrapper that fades/rises content in on scroll (one shared IntersectionObserver) |

`Area`, `Badge` and `Glass` are removed once nothing uses them.

## Header and footer

- Header: logo + "Husk" on the left; "About" and "Support" links on the right (Support is the existing `mailto:hello@husk.co`).
- Footer: logo at low opacity and "© {year} Husk, LLC." on the left; Home, About, Support, Return Policy, Privacy Policy, Terms of Service on the right; small muted text; wraps and centers on phones.

## Product page (`/existential-chicken`)

Sections in order. Backgrounds alternate as listed.

1. **Hero** (paper, centered)
   - Eyebrow: "A philosophy game"
   - `h1` on two lines: "Big questions." then "Small cards." at 80% of the first line's size, with clear space between the lines (no descender/ascender collision).
   - `BuyButton`: "Buy Now", "$24 + shipping", then "Makes a great gift for the deep thinker in your life" / "Secure checkout with Stripe · 30-day returns".
   - The stone-and-box photo, full content width, `large` radius, 16:8 crop (4:3 on phones).
2. **Description** (raised paper, two columns; stacks on phones)
   - Left: "Speedrun your friends' worldviews." as the section heading.
   - Right: the live description paragraph (from "Each card asks one of philosophy's biggest questions…" through "It is not a game about chickens."), then the "Perfect for" line, then `Facts`: 12+ Ages · 20 Minutes · 2–12 Players, divided by hairlines.
3. **Gallery** (paper)
   - Cinematic tile: black, 2.2:1, the line "Challenge your friends to see who can answer the toughest questions in the universe" in Tiempos italic on the left, the statue anchored bottom-right. On phones: 4:5, quote on top, statue at 78% width below.
   - Matched pair of squares (stack on phones): the definition card (white card, hairline edge, soft resting shadow; "chicken" large, "/ˈtʃɪk.ɪn/ noun" in italic muted, then the definition) and the card-stack photo cropped square.
4. **What's in the box?** (paper, centered): heading, box image, then "Includes" and the list "52 question cards · 1 instruction booklet · 0 chickens" in one row (stacked on phones).
5. **How do you play?** (raised paper, centered): heading, three step tiles on paper (`surface` radius), each with a light Tiempos numeral, the existing illustration and the existing step text.
6. **Try out #14** (paper, centered): heading and the card photo at `large` radius.
7. **Frequently asked questions** (paper, narrow ~40em column, centered heading): the five live questions and answers, unchanged, as `FaqItem` rows divided by hairlines.
8. **Closing band** (green, `large` radius, inset from the page edges): "Who will crack first?" in gold display type, "52 questions, one instruction booklet, and plenty of late-night debate. Pour some wine and find out what your friends really think.", `BuyButton` inverted (paper button, green text), the box image.

### Buy pill

A floating pill, bottom center, that keeps the purchase one tap away.

- **Content:** "Skip the small talk." (Tiempos italic) · hairline divider · "$24 + shipping" · "Buy Now" green pill. The entire pill is one link to checkout.
- **Position:** `bottom: calc(var(--base-spacing) + env(safe-area-inset-bottom))`, centered with `left: 0; right: 0; margin-inline: auto; width: fit-content` (not `translateX(-50%)`, so hover scales from the true center).
- **Padding:** `.85em .85em .85em 2.2em`; button `.85em 1.7em`.
- **Material (vellum):** `backdrop-filter: blur(20px) saturate(.65) brightness(1.04)` over `rgb(239 235 229 / .62)` with the grain; a soft lifted shadow plus a 1px white inset highlight on top; a 1px gradient hairline border that is transparent at the top and strongest at the bottom (masked border technique). No `mix-blend-mode` anywhere inside the pill (it breaks the backdrop blur in Chrome).
- **Light:** a `<canvas>` layer drifts two soft warm-light patches (`rgba(255,244,222,…)`, alphas .38 and .26) on unrelated 13–31s loops with a slow "breathing" intensity. Runs only while the pill is visible; pauses with the tab (rAF); renders at `min(devicePixelRatio, 2)`; with reduced motion, draws one still frame.
- **Sheen:** a faint radial highlight (`rgb(255 255 255 / .16)`) that leans toward the pointer; only for `(hover: hover)` and no reduced motion.
- **Behavior:** slides up from below once the hero's buy button has scrolled out of view; hides again while the closing band is ≥30% on screen. Hover: `scale: 1.04` (independent `scale` property, `--base-timing`). Uses transform/opacity only, so it never shifts layout.
- **Phones (<480px):** hides the divider and "+ shipping", tighter padding.

## Home page (`/`)

Stripe-style split hero, everything above the fold on a laptop; stacks on phones (text, link, photo).

- Left: `h1` "Making thoughtful things for curious minds" (upright semibold, `largest × √2`, tight tracking), then the paragraph "We're a tiny creative studio creating digital and physical goods for a better world." with a line break before "Based in Denver, Colorado." (muted, ~1.15× base, 24ch measure), then the existing link "But first a card game →" styled as a compact green pill whose arrow nudges right on hover.
- Right: the stone-and-box photo in a tall 4:5 tile (4:3 on phones), `large` radius, soft shadow, slight zoom on hover; links to `/existential-chicken`.
- Page title and description unchanged.

## About and legal pages

Same header, footer, tokens and type scale; narrow text column like the FAQ. Copy and structure unchanged.

## Code cleanup

- Remove from `_variables.module.css`: the unused ~100-color palette (red, purple, violet, blue, cyan, teal, orange, yellow, brown, green scales) and breakpoints/page-width tokens nothing uses.
- Remove from `_typography.module.css`: rules referencing undefined `--theme-*` variables, the code-highlighting rules, and anything superseded by the new type styles.
- Replace hard-coded Tailwind values in pages with token-backed classes or the shared components.
- Remove `components/Area.tsx`, `Badge.tsx`, `Glass.tsx` and `styles/components/_area.module.css` once unused.

## Testing

- `npm run build` and `npx tsc --noEmit` pass.
- Visual check of `/`, `/existential-chicken`, `/about` and one legal page at 1440px and ~390px wide, against the mockups.
- Buy pill: appears after the hero button scrolls away, hides at the closing band, hover scales from center, light animates; reduced-motion shows a still pill and no reveal motion.
- No layout shift from the pill or reveals (Lighthouse CLS ≈ 0).
- With JavaScript disabled, all sections are visible and both buy links work.

## Open questions

1. **3D box render colors.** `existential-chicken-box.png` (used in "What's in the box?" and the closing band) is brighter green and yellow than the printed box and clashes with the green band. Options: a corrected render from Joshua, or tone the existing image toward the photographed box.
2. **Product name on the product page.** With the hero now "Big questions. Small cards." and the eyebrow "A philosophy game", the words "Existential Chicken" appear on the page only in the FAQ and the box photo. The page `<title>` and meta description still carry the name for search. Flagged for a decision; no change planned without one.

## Out of scope

- New copy beyond what is listed here.
- Shipping-cost wording, the "Draw a card" feature, and Tailwind 4 migration.
- Merging to `main` or deploying; that happens only after review on the branch.
