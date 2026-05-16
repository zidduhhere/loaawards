# Parallax Color Curtain Design

**Date:** 2026-05-16
**Project:** LOA Awards
**Scope:** Two scroll-triggered rising color curtain transitions between sections

---

## Concept

As the user scrolls through the final portion of an outgoing section, a colored panel matching the incoming section's background color rises from the bottom of the viewport. The panel fully covers the screen by the time the outgoing section scrolls out, giving the illusion that the next section's color "arrives early" before the content does.

---

## Transitions

| Outgoing Section | Incoming Section | Curtain Color |
|-----------------|-----------------|---------------|
| Hero (`bg-loa-purple`) | Register (`bg-loa-yellow`) | `#FFE600` |
| Deadlines (`bg-loa-pink`) | Awards (`bg-loa-yellow`) | `#FFE600` |

---

## Architecture

Two `div` panel elements are inserted in `App.tsx` between their respective section pairs. No existing section components are modified. A single `useGSAP` hook in `App.tsx` registers two ScrollTrigger animations — one per panel.

GSAP and `@gsap/react` are installed as project dependencies. `ScrollTrigger` is registered once globally at the top of `App.tsx`.

---

## Panel Styling

Each panel:
- `position: fixed` (managed via GSAP during the scroll window)
- `width: 100vw`, `height: 100vh`
- `z-index` below section content, above page background
- Background color matches the incoming section

---

## ScrollTrigger Configuration (per panel)

- **Trigger**: the outgoing section element (via ref)
- **Start**: `"60% top"` — begins when 60% of outgoing section has passed the top of the viewport
- **End**: `"bottom top"` — completes when outgoing section bottom hits viewport top
- **Scrub**: `true` — animation locked to scroll position
- **Animation**: `gsap.fromTo(panelRef, { yPercent: 100 }, { yPercent: 0 })`

---

## File Changes

| File | Change |
|------|--------|
| `package.json` | Add `gsap` and `@gsap/react` |
| `src/App.tsx` | Register ScrollTrigger, add `useGSAP` hook, insert two panel divs, add refs to outgoing sections |
| `src/components/Hero.tsx` | No change |
| `src/components/Deadlines.tsx` | No change |
| `src/components/Register.tsx` | No change |
| `src/components/Awards.tsx` | No change |

---

## Implementation Notes

- Use `useGSAP` from `@gsap/react` for proper React cleanup
- Panels use `ref` attached directly in `App.tsx` JSX
- Outgoing sections get a `ref` for use as ScrollTrigger trigger targets
- No `pin` used — panels animate purely via `yPercent`
