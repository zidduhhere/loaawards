# Design System — Love of Advertising Awards 2026 (LOA 2026)

## Product Context
- **What this is:** An advertising industry awards program celebrating passion, craft, and creativity in advertising
- **Who it's for:** Advertising professionals, creative directors, agencies, and brand marketers
- **Space/industry:** Awards / Advertising / Creative Industry
- **Project type:** Marketing site with event registration

## Aesthetic Direction
- **Direction:** Maximalist Chaos — Bold poster-graphic energy, graphic design meets punk zine
- **Decoration level:** Expressive — color blocks as architecture, type as decoration
- **Mood:** Loud, confident, and unapologetically passionate. The site itself is an act of advertising — bold enough to stop someone mid-scroll and make them feel something.
- **Memorable thing:** The yellow hits you before you read a single word.

## Typography
- **Display/Hero:** `Anton` (Google Fonts) — Condensed, all-caps, built for billboard scale. The font that says "this matters."
- **Body/Labels:** `DM Sans` (Google Fonts) — Clean, legible, confident without competing with the headlines
- **Accent/Numbers:** `Anton` — used for all deadline dates, award numbers, large counters
- **Loading:** `https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap`
- **Scale:**
  - `display`: 96–180px / Anton / line-height 0.9
  - `hero`: 64–96px / Anton
  - `section`: 48–72px / Anton
  - `sub`: 24–32px / Anton
  - `body`: 16–18px / DM Sans
  - `small`: 12–14px / DM Sans

## Color
- **Approach:** Expressive — color is the primary architectural tool. Sections are defined by color blocks, not dividers.
- **Purple (primary):** `#4B1BA5` — The brand anchor. Confidence, prestige, creative authority.
- **Yellow (accent):** `#FFE000` — Electric, attention-grabbing. Used for hero type, category badges, section headers.
- **Pink (energy):** `#FF2D8B` — Hot magenta. Deadline urgency, CTA buttons, circle frames.
- **Black:** `#0A0A0A` — Deep sections, maximum contrast for yellow type.
- **White:** `#FFFFFF` — Used sparingly for body text on dark backgrounds.
- **Semantic:** Not applicable — this is an expressive, non-semantic palette.
- **CSS Variables:**
  ```css
  --purple: #4B1BA5;
  --yellow: #FFE000;
  --pink: #FF2D8B;
  --black: #0A0A0A;
  --white: #FFFFFF;
  ```

## Spacing
- **Base unit:** 8px
- **Density:** Generous — sections breathe with 80–120px vertical padding
- **Scale:** xs(8) sm(16) md(32) lg(64) xl(96) 2xl(128)

## Layout
- **Approach:** Full-width alternating color blocks — no traditional grid. Color is the layout.
- **Grid:** Single column, full-bleed sections
- **Max content width:** 1200px centered within full-bleed color blocks
- **Circular elements:** Category badges and jury member photos use `border-radius: 50%`
- **Border radius:** `0` for sections and buttons (hard edges reinforce the poster aesthetic), `50%` for circular badge elements only

## Motion
- **Approach:** Intentional — entrance animations on scroll, no gratuitous motion
- **Easing:** ease-out for entrances
- **Duration:** short(200ms) for hover states, medium(400ms) for section reveals
- **Hover states:** Scale 1.05 on circular category badges, underline on nav links

## Section Architecture (top → bottom)
1. **Nav** — Purple bg, white text, logo left, links center, CTA right
2. **Hero** — Black bg, "DRIVEN BY LOVE" in yellow Anton, body copy in white
3. **Register** — Yellow bg, "LOA 2026 REGISTER NOW" in purple Anton with pink heart
4. **Deadlines** — Pink bg, deadline dates in black Anton, "DOWNLOAD GUIDELINES" CTA
5. **Awards** — Black bg, "AWARDS" in yellow, trophy silhouettes, description
6. **Categories** — Purple bg, "CATEGORIES" in yellow, circular yellow badges in grid
7. **Jury Members** — Black bg, "JURY MEMBERS" in yellow, circular photos with pink borders
8. **Winners** — Yellow bg, "WINNERS" in purple Anton, description, footer

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-11 | Anton as display font | Billboard-scale condensed caps match the awards poster aesthetic; not Inter |
| 2026-05-11 | Zero border-radius on buttons/sections | Hard edges reinforce the graphic design / poster aesthetic |
| 2026-05-11 | Color blocks as layout | No nav bars or horizontal rules — section identity comes from color alone |
| 2026-05-11 | Yellow on black for hero | Maximum contrast, maximum impact — the classic advertising combination |
| 2026-05-11 | Circular badges for categories | Creates a badge/stamp visual language — each category feels like a credential |
