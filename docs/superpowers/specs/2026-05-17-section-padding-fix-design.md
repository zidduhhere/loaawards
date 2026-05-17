# Section Padding Fix — Design Spec
Date: 2026-05-17

## Problem
When a section's color fills the screen (during or after the GSAP curtain transition), the section's main content is not yet visible. The user sees a blank colored screen before having to scroll further. The cause is excessive top padding and, in Register's case, a GSAP entrance animation that delays content arrival.

## Goal
Each section's key content should be visible within the top ~60% of the viewport the moment the section fills the screen. Content must be fully settled — no mid-animation states.

## Sections and Changes

### Register (`src/components/Register.tsx`)
- **Current:** `py-16` (64px top + bottom). GSAP entrance animation starts elements at `y:180, opacity:0` and scrubs to completion.
- **Change:** Replace `py-16` with `pt-6 pb-16`. Remove the GSAP entrance animation entirely — it fights the curtain transition and delays content. The LOA/2026/Register Now text should be pre-positioned and immediately visible.

### Deadlines (`src/components/Deadlines.tsx`)
- **Current:** `pt-12 md:pt-20` (48px / 80px)
- **Change:** Replace with `pt-6 md:pt-10`

### Awards (`src/components/Awards.tsx`)
- **Current:** `py-20 min-h-[60vh]`
- **Change:** Replace `py-20` with `pt-6 pb-16`. Remove `min-h-[60vh]` — it forces dead vertical space at the top.

### Categories (`src/components/Categories.tsx`)
- **Current:** `py-20`
- **Change:** Replace with `pt-6 pb-16`

## What is NOT changing
- GSAP curtain animations in `App.tsx` — untouched
- Section backgrounds, colors, fonts, content structure
- Bottom padding (keeps breathing room at section ends)
- About, JuryMembers, Winners, Footer — not affected
