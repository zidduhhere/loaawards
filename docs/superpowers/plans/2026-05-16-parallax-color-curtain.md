# Parallax Color Curtain Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two GSAP ScrollTrigger-driven rising color curtain transitions — yellow rises from below during Hero→Register and Deadlines→Awards transitions.

**Architecture:** Each outgoing section (Hero, Deadlines) is wrapped in a `relative overflow-hidden` div. A `position: absolute, bottom: 0, height: 100vh` yellow panel sits inside each wrapper, starting at `translateY(100%)` (hidden below). GSAP ScrollTrigger with `scrub: true` animates each panel from `yPercent: 100` → `yPercent: 0` as the section scrolls out, creating a rising curtain that fills the viewport. `overflow-hidden` on the wrapper clips the panel so it only appears within the section's scroll bounds.

**Tech Stack:** React 19, GSAP 3, `@gsap/react` (`useGSAP`), GSAP ScrollTrigger plugin, Tailwind CSS v4, Vite

---

## File Map

| File | Change |
|------|--------|
| `package.json` | Add `gsap` and `@gsap/react` |
| `src/App.tsx` | Register ScrollTrigger plugin, add refs, insert two wrapper+panel divs, wire up `useGSAP` |

No other files change.

---

### Task 1: Install GSAP

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install packages**

```bash
npm install gsap @gsap/react
```

Expected: `added 2 packages` (or similar) with no errors.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: `✓ built in ...ms` with no errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install gsap and @gsap/react"
```

---

### Task 2: Implement Color Curtain Animations in App.tsx

**Files:**
- Modify: `src/App.tsx`

**Key implementation detail:** Each panel is `position: absolute`, `bottom: 0`, `height: 100vh`, inside a `relative overflow-hidden` wrapper. This means:
- The panel starts at `translateY(100%)` = shifted down by its own height (100vh) = fully below the wrapper, clipped by `overflow-hidden`
- As it animates to `translateY(0)`, it rises up and fills the wrapper (and viewport)
- `overflow-hidden` on the wrapper ensures the panel never bleeds into adjacent sections

- [ ] **Step 1: Replace App.tsx with the full implementation**

```tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./components/Register";
import About from "./components/About";
import Deadlines from "./components/Deadlines";
import Awards from "./components/Awards";
import Categories from "./components/Categories";
import JuryMembers from "./components/JuryMembers";
import Winners from "./components/Winners";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const deadlinesRef = useRef<HTMLDivElement>(null);
  const heroPanelRef = useRef<HTMLDivElement>(null);
  const deadlinesPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero → Register: yellow curtain rises from bottom
      gsap.fromTo(
        heroPanelRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "60% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Deadlines → Awards: yellow curtain rises from bottom
      gsap.fromTo(
        deadlinesPanelRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: deadlinesRef.current,
            start: "60% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-screen">
      <Navbar />

      {/* Hero wrapped for overflow-clipped curtain */}
      <div ref={heroRef} className="relative overflow-hidden">
        <Hero />
        {/* Yellow curtain: absolute, bottom-anchored, viewport-height, starts below */}
        <div
          ref={heroPanelRef}
          className="absolute bottom-0 left-0 w-full h-screen bg-loa-yellow pointer-events-none z-10"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      <Register />
      <About />

      {/* Deadlines wrapped for overflow-clipped curtain */}
      <div ref={deadlinesRef} className="relative overflow-hidden">
        <Deadlines />
        {/* Yellow curtain: absolute, bottom-anchored, viewport-height, starts below */}
        <div
          ref={deadlinesPanelRef}
          className="absolute bottom-0 left-0 w-full h-screen bg-loa-yellow pointer-events-none z-10"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      <Awards />
      <Categories />
      <JuryMembers />
      <Winners />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Run dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:5173`. Verify:
- Scroll slowly through Hero — in the last ~40% of Hero's height a yellow panel rises from the bottom of the screen
- Register arrives normally after Hero scrolls out
- Scroll slowly through Deadlines — in the last ~40% a yellow panel rises from the bottom
- Awards arrives normally after Deadlines scrolls out
- Scrolling back up reverses both curtains (scrub is bidirectional)
- No layout shift, no horizontal overflow, no pointer-event interference with Hero content

- [ ] **Step 3: Verify TypeScript build**

```bash
npm run build
```

Expected: `✓ built in ...ms` with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: GSAP ScrollTrigger rising yellow curtain between Hero→Register and Deadlines→Awards"
```
