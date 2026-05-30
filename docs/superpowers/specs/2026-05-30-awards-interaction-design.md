# Awards Section Interaction Design

**Date:** 2026-05-30  
**Component:** `src/components/Awards.tsx`

---

## Goal

Transform the static trophy grid in the Awards section into an animated interactive experience where clicking a trophy reveals its details in a sliding right panel on desktop, while mobile shows a plain inline reveal.

---

## Data Model

Extend the `TROPHIES` array with per-award metadata:

```ts
interface Trophy {
  src: string;
  alt: string;
  name: string;
  color: string;       // accent color for panel (e.g. "#000000" for Black Heart)
  textColor: string;   // text color inside the panel
  description: string;
}
```

Four entries (CMYK-inspired):
- **Black Heart** — `#1a1a1a` — The highest honour. Awarded for work of extraordinary originality that redefines what advertising can be.
- **Cyan Heart** — `#00B4D8` — Recognising ideas with exceptional clarity and creative precision that cut through noise with purpose.
- **Magenta Heart** — `#FF2D8B` — Celebrating bold, fearless creative risk-taking that commands attention and sparks emotion.
- **Yellow Heart** — `#FFE600` — Honouring work driven by pure passion for the craft — ideas born from genuine love for advertising.

---

## Desktop Behaviour (md and above)

### Default State
- Title centered at top
- 4 trophies in a horizontal row, centered
- Paragraph below trophies

### On Trophy Click — Animation Sequence (GSAP timeline)
1. Section transitions to `flex-row` two-column layout
2. Left column (55%): title + trophy row — trophies scale down to ~70% size, compress toward left; selected trophy gets a subtle `scale(1.1)` and a colored drop shadow matching its `color`
3. Right column (45%): panel slides in from `x: 100%` → `x: 0` with `power3.out`, duration 0.6s
4. Inside the panel: award name fades + slides up, description fades in with 0.15s stagger
5. Panel background uses the trophy's `color`, text uses `textColor`

### Switching Trophies
- Clicking a different trophy: panel content cross-fades (old content fades out, new fades in), selected trophy indicator transfers

### Closing
- Clicking the active trophy again reverses the full timeline — panel slides out, layout returns to centered default

### State
- `selectedId: string | null` — React state drives which trophy is active
- GSAP `useLayoutEffect` watches `selectedId` to drive timelines

---

## Mobile Behaviour (below md)

- Trophies displayed in a 2×2 grid
- Clicking a trophy toggles a plain detail block below the grid
- No animation — instant show/hide with `display` toggle or simple opacity
- Detail block shows: award name (bold), description (body text), colored left border using trophy `color`

---

## Component Structure

Single file `Awards.tsx` — no new files needed. Refs:
- `sectionRef` — the outer section
- `trophyRefs` — array of refs for each trophy image
- `panelRef` — the right detail panel
- `panelContentRef` — inner content for staggered reveal

---

## Constraints
- No layout shift visible to the user — section height stays `min-h-screen` throughout
- GSAP context cleaned up on unmount
- Trophy images keep `rounded-full` and `object-contain` styling throughout
- Existing paragraph below trophies hides when panel is open on desktop
