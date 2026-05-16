# Mobile Responsiveness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all 6 components of the LOA Awards site fully responsive for phones (375px+) and tablets (768px+) using Tailwind mobile-first breakpoints.

**Architecture:** Pure Tailwind class changes across existing components — no new files except the Navbar hamburger state. Each component is edited independently. No abstractions added.

**Tech Stack:** React 19, Tailwind CSS v4, Vite, TypeScript

---

## File Map

| File | Change |
|------|--------|
| `src/components/Navbar.tsx` | Add `useState` hamburger toggle, mobile dropdown menu |
| `src/components/About.tsx` | Responsive padding, flex direction, font sizes |
| `src/components/Deadlines.tsx` | Responsive padding, flex direction, font sizes |
| `src/components/Register.tsx` | Responsive flex direction, height, font sizes |
| `src/components/Footer.tsx` | Responsive flex direction, padding |
| `src/components/JuryMembers.tsx` | Responsive grid columns, header flex direction |

---

### Task 1: Navbar — Hamburger Menu

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add useState import and menuOpen state**

Replace the entire file with:

```tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["HOME", "CATEGORIES", "JURY MEMBERS", "WINNERS", "SIGN IN"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full top-5 z-50">
      {/* Desktop nav */}
      <ul className="hidden md:flex list-none gap-20 items-center justify-center">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[14px] tracking-widest text-white font-body font-bold transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <div className="md:hidden flex justify-end px-6">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden list-none flex flex-col items-center gap-6 mt-4 bg-loa-purple/90 py-8 px-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] tracking-widest text-white font-body font-bold transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify in browser**

Run `npm run dev`. Open DevTools → toggle device toolbar → set to 375px width. Confirm:
- Hamburger icon (☰) appears top-right
- Clicking it opens the link list
- Clicking a link closes the menu
- At 768px+ the hamburger is gone and the horizontal links appear

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add hamburger menu for mobile navbar"
```

---

### Task 2: About — Responsive Layout & Typography

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Update About component**

Replace the entire file with:

```tsx
const About = () => {
  const paragraph =
    "Celebrating the genuine love for advertising behind every powerful idea and the passion that inspires people to create with care, connect with meaning, and build lasting bonds between brands and people.";
  return (
    <div className="w-screen min-h-screen flex items-center px-6 md:px-30 z-50 overflow-hidden">
      <div className="text-loa-yellow font-display flex">
        <div>
          <div id="driven-by-para" className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            <h3 className="text-[15vw] sm:text-[18vw] md:text-[10vh] drop-shadow-amber-300 drop-shadow-md">
              DRIVEN <br />
              <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
                BY
              </span>
            </h3>
            <p className="text-loa-yellow font-body text-base md:text-2xl w-full md:w-[clamp(100px,30vw,200px)] leading-7 md:leading-8 opacity-80">
              {paragraph}
            </p>
          </div>

          <h3>
            <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
              LOVE
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
```

- [ ] **Step 2: Verify in browser**

At 375px: paragraph stacks below "DRIVEN BY", text is legible and not overflowing.
At 768px: side-by-side layout with large type restored.

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: responsive layout and typography for About section"
```

---

### Task 3: Deadlines — Responsive Layout & Typography

**Files:**
- Modify: `src/components/Deadlines.tsx`

- [ ] **Step 1: Update Deadlines component**

Replace the entire file with:

```tsx
type DeadlineItemProps = {
  title: string;
  subtitle: string;
  date: string;
};

const DeadlineItem = ({ title, subtitle, date }: DeadlineItemProps) => (
  <div className="font-display flex items-center justify-between text-loa-yellow">
    <p>
      <span className="text-4xl sm:text-5xl md:text-7xl">{title}</span>
      <br />
      <span className="text-xl sm:text-2xl md:text-3xl tracking-wide leading-8">{subtitle}</span>
    </p>

    <span className="text-4xl sm:text-5xl md:text-7xl mx-2 md:mx-4">:</span>
    <span className="text-5xl sm:text-6xl md:text-8xl text-start">{date}</span>
  </div>
);

export default function Deadlines() {
  return (
    <section className="w-full h-fit pb-20 md:pb-30 bg-loa-pink text-loa-yellow">
      <div className="pt-12 md:pt-20 px-6 md:px-30">
        {/* ABOVE CONTENT */}
        <div className="flex flex-col md:flex-row w-full md:justify-around md:items-center gap-8 md:gap-0">
          <div>
            <DeadlineItem title="EARLY" subtitle="BIRD DEADLINE" date="25/10" />
            <DeadlineItem title="FINAL" subtitle="DEADLINE" date="14/12" />
          </div>

          <div className="font-body text-base md:text-xl md:w-80">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </div>
        </div>

        {/* BELOW CONTENT */}
        <div
          id="container"
          className="
          bg-loa-purple rounded-2xl
          max-w-6xl mx-auto mt-12 md:mt-20
          flex-center
          font-display text-loa-yellow
          leading-none
          text-[8vw] md:text-[min(10vw,14vh)] py-5
          "
        >
          DOWNLOAD <br />
          GUIDELINES
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

At 375px: dates stack above paragraph, no horizontal overflow, text is readable.
At 768px: side-by-side layout with large deadline dates restored.

- [ ] **Step 3: Commit**

```bash
git add src/components/Deadlines.tsx
git commit -m "feat: responsive layout and typography for Deadlines section"
```

---

### Task 4: Register — Responsive Layout & Typography

**Files:**
- Modify: `src/components/Register.tsx`

- [ ] **Step 1: Update Register component**

Replace the entire file with:

```tsx
export default function Register() {
  return (
    <section className="bg-loa-yellow flex-center h-auto md:h-screen py-16 md:py-0">
      <div className="flex flex-col md:flex-row items-start md:items-center w-[88vw] md:w-[80vw] gap-8 md:gap-0">
        <div className="flex-5">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[11vw] text-loa-purple uppercase leading-[1]">
            <span className="text-[14vw] sm:text-[12vw] md:text-[14vw]">LOA</span>
            <br />
            2026
          </h2>
          <h2 className="text-[10vw] sm:text-[9vw] md:text-[9vw] font-display leading-[0.88] text-loa-purple uppercase">
            Register
            <br />
            <span className="text-[16vw] sm:text-[14vw] md:text-[19vw]">Now</span>
          </h2>
        </div>

        <div className="flex-2 items-start font-body">
          <p className="text-sm leading-relaxed text-loa-purple">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

At 375px: "LOA 2026 / Register / Now" stacks vertically, paragraph sits below, nothing overflows.
At 768px: side-by-side layout with large type on the left, paragraph on the right.

- [ ] **Step 3: Commit**

```bash
git add src/components/Register.tsx
git commit -m "feat: responsive layout and typography for Register section"
```

---

### Task 5: Footer — Responsive Stacking

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update Footer flex layout**

In `src/components/Footer.tsx`, change the inner `div` from:

```tsx
<div className="flex justify-between items-start px-16 py-10">
```

to:

```tsx
<div className="flex flex-col gap-8 md:flex-row md:justify-between items-start px-6 md:px-16 py-10">
```

- [ ] **Step 2: Verify in browser**

At 375px: Related Sites, Need Help, Connect with us stack vertically with spacing.
At 768px: three columns side by side restored.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: responsive stacking for Footer section"
```

---

### Task 6: JuryMembers — Responsive Grid

**Files:**
- Modify: `src/components/JuryMembers.tsx`

- [ ] **Step 1: Update JuryMembers component**

Replace the entire file with:

```tsx
const JURY = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/7.png",
  "/assets/8.png",
  "/assets/9.png",
];

const BG_COLORS = [
  "bg-loa-pink",
  "bg-loa-purple",
  "bg-loa-yellow",
  "bg-loa-pink",
  "bg-loa-yellow",
  "bg-loa-purple",
  "bg-loa-pink",
  "bg-loa-yellow",
];

export default function JuryMembers() {
  return (
    <section
      id="jury"
      className="bg-loa-black px-6 md:px-10 py-12 md:py-20 h-fit overflow-hidden"
    >
      <div className="flex flex-col md:flex-row mx-auto items-start md:items-center w-full md:w-fit gap-4 md:gap-8 mb-6">
        <span className="flex-2 font-display text-loa-yellow text-[15vw] md:text-8xl">
          <span className="text-[15vw]">JURY</span> <br /> MEMBERS
        </span>
        <p className="flex-1 text-loa-yellow text-base md:text-xl max-w-full md:max-w-60">
          Meet the jury, a collective of passionate minds and industry leaders
          who share a deep love for advertising and a sharp eye for ideas that
          truly connect.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-10">
        {JURY.map((src, i) => (
          <div
            key={i}
            className={`col-span-1 sm:col-span-2 rounded-full aspect-square overflow-hidden ${i === 6 ? "md:col-start-2" : ""} ${BG_COLORS[i % BG_COLORS.length]}`}
          >
            <img
              src={src}
              alt={`Jury member ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

At 375px: 2-column grid of portraits, header stacks vertically.
At 640px: 2-column grid (4-col grid with col-span-2).
At 768px: 3-column grid with centered 7th portrait on last row.

- [ ] **Step 3: Commit**

```bash
git add src/components/JuryMembers.tsx
git commit -m "feat: responsive grid and layout for JuryMembers section"
```

---

### Task 7: Final Cross-Device Verification

- [ ] **Step 1: Run dev server**

```bash
npm run dev
```

- [ ] **Step 2: Check each section at 375px (iPhone SE)**

Open DevTools → device toolbar → iPhone SE (375px). Scroll through every section:
- [ ] Navbar: hamburger visible, opens/closes correctly
- [ ] Hero: SVG centered, no overflow
- [ ] About: "DRIVEN BY LOVE" readable, paragraph below
- [ ] Awards: trophies visible, not overflowing
- [ ] Deadlines: dates above paragraph, "DOWNLOAD GUIDELINES" fits
- [ ] JuryMembers: 2-col grid, header stacked
- [ ] Register: type stacked above paragraph, no overflow
- [ ] Footer: 3 sections stacked vertically

- [ ] **Step 3: Check each section at 768px (tablet)**

Switch to iPad Mini (768px). Scroll through every section and confirm desktop layouts are restored where expected.

- [ ] **Step 4: Check TypeScript**

```bash
npm run build
```

Expected: no TypeScript errors, build succeeds.
