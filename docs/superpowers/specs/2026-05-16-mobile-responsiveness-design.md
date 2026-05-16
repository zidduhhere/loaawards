# Mobile Responsiveness Design

**Date:** 2026-05-16  
**Project:** LOA Awards  
**Scope:** Phones + tablets (375px–1024px)  
**Approach:** Tailwind mobile-first breakpoints throughout — no new abstractions

---

## Target Breakpoints

| Breakpoint | Width    | Usage          |
|------------|----------|----------------|
| (base)     | < 640px  | Mobile phones  |
| `sm:`      | ≥ 640px  | Large phones   |
| `md:`      | ≥ 768px  | Tablets        |

---

## Section 1 — Navbar

**Problem:** Navbar is `hidden md:flex` — no navigation exists on mobile.

**Solution:** Hamburger menu pattern using `useState`.

- Add `menuOpen: boolean` state to Navbar component
- On mobile (`md:hidden`): show a `Menu` icon (Lucide) top-right; tapping toggles `menuOpen`
- When `menuOpen`: render a full-width dropdown below the nav bar with all links stacked vertically, same letter-spacing/tracking style as desktop links
- On `md:` and above: existing horizontal link row renders as-is; hamburger and dropdown are hidden

---

## Section 2 — Typography Scaling

**Problem:** Several components use `clamp()` with large minimums (100px+) or fixed large sizes (`text-7xl`, `text-8xl`) that overflow on mobile.

**Solution:** Replace with Tailwind responsive stepped classes (mobile-first).

| Component  | Element              | Mobile        | sm:           | md:               |
|------------|----------------------|---------------|---------------|-------------------|
| About      | "DRIVEN / BY / LOVE" | `text-[15vw]` | `text-[20vw]` | `text-[30vh]`     |
| Register   | "LOA 2026 / Register / Now" | `text-[12vw]` | `text-[10vw]` | `text-[11vw]`  |
| Deadlines  | Date numbers         | `text-5xl`    | `text-6xl`    | `text-8xl`        |
| Deadlines  | Title ("EARLY/FINAL")| `text-4xl`    | `text-5xl`    | `text-7xl`        |

All `clamp()` values with minimums above 60px are replaced.

---

## Section 3 — Layout Stacking

**Problem:** Four components use side-by-side (`flex-row`) layouts and large horizontal padding that break on narrow screens.

### About
- `mx-30` → `px-6 md:px-30`
- Inner flex: `flex-col md:flex-row`
- Paragraph moves below "DRIVEN BY" text on mobile

### Deadlines
- Outer padding: `px-30` → `px-6 md:px-30`
- Dates + paragraph container: `flex-col md:flex-row` (dates first, paragraph below)
- "DOWNLOAD GUIDELINES" block: `text-[8vw] md:text-[min(10vw,14vh)]`

### Register
- Inner container: `flex-col md:flex-row` (typography first, paragraph below)
- Height: `h-screen` → `h-auto md:h-screen`

### Footer
- Main flex container: `flex-col gap-8 md:flex-row`
- Padding: `px-16` → `px-6 md:px-16`

---

## Section 4 — Jury Members Grid

**Problem:** Grid is always 3 columns (`grid-cols-6` + `col-span-2`) — portraits are too small on mobile.

**Solution:**

- Grid container: `grid-cols-2 sm:grid-cols-4 md:grid-cols-6`
- Each item: `col-span-1 sm:col-span-2`
- 7th item centering: `md:col-start-2` only (no offset on mobile/tablet)
- Header row (`JURY MEMBERS` + paragraph): `flex-col md:flex-row`

Result: 2 columns on phone, 2 columns on tablet (4-col grid, col-span-2), 3 columns on desktop.

---

## Components Not Requiring Changes

- **Hero**: `h-screen` with SVG at `max-w-[80vw]` scales naturally
- **Awards**: Already has `md:` and `lg:` image size breakpoints
- **Winners**: No layout changes needed
- **Categories**: No layout changes needed
