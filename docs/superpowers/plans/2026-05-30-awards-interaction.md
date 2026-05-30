# Awards Interaction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static Awards trophy grid into an animated split-layout experience where clicking a trophy slides in a detail panel on desktop and toggles a plain reveal on mobile.

**Architecture:** Single `Awards.tsx` file. React state (`selectedId`) drives which trophy is active. On desktop, a GSAP timeline watches `selectedId` via `useLayoutEffect` to animate the layout split and panel slide-in. On mobile, a conditional render shows the detail block below the grid with no animation.

**Tech Stack:** React, GSAP + ScrollTrigger (already installed), Tailwind CSS v4

---

### Task 1: Extend the TROPHIES data model

**Files:**
- Modify: `src/components/Awards.tsx` (lines 1–6, the TROPHIES array)

- [ ] **Step 1: Replace the TROPHIES array with the full data model**

Replace the existing `TROPHIES` array at the top of `Awards.tsx` with:

```tsx
interface Trophy {
  src: string;
  alt: string;
  name: string;
  color: string;
  textColor: string;
  description: string;
}

const TROPHIES: Trophy[] = [
  {
    src: "/assets/black.png",
    alt: "Black Heart",
    name: "Black Heart",
    color: "#1a1a1a",
    textColor: "#FFE600",
    description:
      "The highest honour. Awarded for work of extraordinary originality that redefines what advertising can be. Reserved for ideas that are not just great — but genuinely new.",
  },
  {
    src: "/assets/cyan.png",
    alt: "Cyan Heart",
    name: "Cyan Heart",
    color: "#00B4D8",
    textColor: "#0a0a0a",
    description:
      "Recognising ideas with exceptional clarity and creative precision that cut through noise with purpose. Work that communicates with intelligence and intention.",
  },
  {
    src: "/assets/magenta.png",
    alt: "Magenta Heart",
    name: "Magenta Heart",
    color: "#FF2D8B",
    textColor: "#FFE600",
    description:
      "Celebrating bold, fearless creative risk-taking that commands attention and sparks emotion. For work that dares to be different and earns its audience's admiration.",
  },
  {
    src: "/assets/yellow.png",
    alt: "Yellow Heart",
    name: "Yellow Heart",
    color: "#FFE600",
    textColor: "#1a1a1a",
    description:
      "Honouring work driven by pure passion for the craft — ideas born from genuine love for advertising. For the work that reminds everyone why they got into this industry.",
  },
];
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `npm run dev` in the project root and check the browser console for TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Awards.tsx
git commit -m "feat: add trophy data model with name, color, and description"
```

---

### Task 2: Add React state and mobile layout

**Files:**
- Modify: `src/components/Awards.tsx`

- [ ] **Step 1: Add imports and state**

Replace the current `export default function Awards()` opening with:

```tsx
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Awards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedTrophy = TROPHIES.find((t) => t.src === selectedId) ?? null;

  const handleTrophyClick = (src: string) => {
    setSelectedId((prev) => (prev === src ? null : src));
  };
```

- [ ] **Step 2: Replace the return JSX with the new layout structure**

Replace the entire `return (...)` block with:

```tsx
  return (
    <section className="relative bg-loa-yellow px-24 md:px-48 min-h-screen flex flex-col justify-start items-center pt-16 overflow-hidden">
      <img
        src="/assets/logo-loa-black.png"
        alt="LOA Logo"
        className="absolute top-6 right-8 h-6 object-contain z-10"
      />

      {/* Title — always visible */}
      <h2
        className="pb-6 text-6xl md:text-8xl lg:text-[120px] text-loa-purple uppercase leading-none tracking-tight text-center w-full"
        style={{ fontFamily: "var(--font-display)" }}
      >
        THE HEARTS OF LOA
      </h2>

      {/* Desktop layout */}
      <div className="hidden md:flex w-full flex-row items-center min-h-[50vh] gap-0">
        {/* Left: trophy row */}
        <div className="flex flex-row items-center justify-center gap-6 transition-all duration-300"
          style={{ width: selectedId ? "55%" : "100%" }}
        >
          {TROPHIES.map((t) => (
            <button
              key={t.src}
              onClick={() => handleTrophyClick(t.src)}
              className="focus:outline-none"
            >
              <img
                src={t.src}
                alt={t.alt}
                className="object-contain rounded-full transition-transform duration-300 bg-white"
                style={{
                  height: selectedId === t.src ? "14rem" : selectedId ? "9rem" : "13rem",
                  boxShadow: selectedId === t.src ? `0 0 40px 8px ${t.color}88` : "none",
                  transform: selectedId === t.src ? "scale(1.08)" : "scale(1)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Right: detail panel — only rendered when a trophy is selected */}
        {selectedTrophy && (
          <div
            className="flex flex-col justify-center px-12 py-10 rounded-3xl ml-6"
            style={{
              width: "45%",
              backgroundColor: selectedTrophy.color,
              color: selectedTrophy.textColor,
              minHeight: "50vh",
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hearts of LOA
            </p>
            <h3
              className="text-4xl lg:text-6xl uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {selectedTrophy.name}
            </h3>
            <p
              className="text-base lg:text-lg leading-relaxed opacity-90 max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {selectedTrophy.description}
            </p>
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full flex flex-col items-center gap-6">
        <div className="grid grid-cols-2 gap-6 w-full">
          {TROPHIES.map((t) => (
            <button
              key={t.src}
              onClick={() => handleTrophyClick(t.src)}
              className="flex flex-col items-center focus:outline-none"
            >
              <img
                src={t.src}
                alt={t.alt}
                className="h-28 aspect-square object-contain rounded-full bg-white"
              />
            </button>
          ))}
        </div>

        {/* Mobile detail block */}
        {selectedTrophy && (
          <div
            className="w-full rounded-2xl px-6 py-6 border-l-4"
            style={{
              borderColor: selectedTrophy.color,
              backgroundColor: `${selectedTrophy.color}22`,
            }}
          >
            <p
              className="font-display text-2xl text-loa-purple uppercase mb-2"
            >
              {selectedTrophy.name}
            </p>
            <p className="font-body text-sm text-loa-purple leading-relaxed opacity-80">
              {selectedTrophy.description}
            </p>
          </div>
        )}
      </div>

      {/* Paragraph — hidden on desktop when panel open */}
      {!selectedId && (
        <p className="mt-6 lg:text-[22px] leading-relaxed text-loa-purple mx-auto text-center max-w-6xl font-body">
          Inspired by the CMYK spectrum that brings creative expression to life,
          the Hearts of LOA honour work that stands apart for its originality,
          execution, and impact.
        </p>
      )}
    </section>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check that:
- Trophies render in a row on desktop
- Clicking a trophy shows the detail panel on the right
- Clicking the same trophy again hides the panel
- Mobile shows a 2×2 grid and the detail block below

- [ ] **Step 4: Commit**

```bash
git add src/components/Awards.tsx
git commit -m "feat: awards click interaction with split layout and mobile detail block"
```

---

### Task 3: Add GSAP panel slide-in animation on desktop

**Files:**
- Modify: `src/components/Awards.tsx`

- [ ] **Step 1: Add refs for the panel and panel content**

Add these refs inside the component, after the existing state:

```tsx
  const panelRef = useRef<HTMLDivElement>(null);
  const panelContentRef = useRef<HTMLDivElement>(null);
```

- [ ] **Step 2: Add useLayoutEffect to animate panel on selectedId change**

Add this `useLayoutEffect` after the refs, before the `return`:

```tsx
  useLayoutEffect(() => {
    if (!panelRef.current) return;

    if (selectedId) {
      // Panel slides in from right
      gsap.fromTo(
        panelRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.55, ease: "power3.out" }
      );
      // Content staggers up inside panel
      if (panelContentRef.current) {
        gsap.fromTo(
          panelContentRef.current.children,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.1, delay: 0.25 }
        );
      }
    }
  }, [selectedId]);
```

- [ ] **Step 3: Attach refs to the panel JSX**

In the desktop detail panel div (the one with `style={{ width: "45%" }}`), add `ref={panelRef}`:

```tsx
          <div
            ref={panelRef}
            className="flex flex-col justify-center px-12 py-10 rounded-3xl ml-6"
            style={{
              width: "45%",
              backgroundColor: selectedTrophy.color,
              color: selectedTrophy.textColor,
              minHeight: "50vh",
            }}
          >
            <div ref={panelContentRef} className="flex flex-col">
              <p
                className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Hearts of LOA
              </p>
              <h3
                className="text-4xl lg:text-6xl uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {selectedTrophy.name}
              </h3>
              <p
                className="text-base lg:text-lg leading-relaxed opacity-90 max-w-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {selectedTrophy.description}
              </p>
            </div>
          </div>
```

- [ ] **Step 4: Verify animation in browser on desktop**

- Click a trophy → panel slides in from right, content staggers up
- Click another trophy → panel content swaps (instant re-render + animation)
- Click active trophy → panel disappears

- [ ] **Step 5: Commit**

```bash
git add src/components/Awards.tsx
git commit -m "feat: GSAP slide-in animation for awards detail panel"
```
