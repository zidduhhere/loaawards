# Section Padding Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce top padding on Register, Deadlines, Awards, and Categories sections so content is immediately visible when each section fills the viewport.

**Architecture:** Pure CSS/Tailwind class changes — no new components, no new logic. Register also removes its GSAP entrance animation since the curtain transition handles the reveal. Each section gets `pt-6` (mobile) / `pt-10` (md) or similar, replacing the current large values.

**Tech Stack:** React, Tailwind CSS, GSAP (animation removal in Register)

---

### Task 1: Fix Register section

**Files:**
- Modify: `src/components/Register.tsx`

- [ ] **Step 1: Remove the GSAP entrance animation and its refs**

Replace the entire file content with:

```tsx
export default function Register() {
  return (
    <section className="bg-loa-yellow flex justify-start items-center flex-col max-h-full pt-6 pb-16 overflow-hidden">
      <div className="flex flex-col px-12 md:px-0 md:flex-row items-start justify-start md:items-center w-[88vw] md:w-[80vw] gap-8">
        <div className="flex-5 min-w-0">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[11vw] text-loa-purple uppercase leading-none">
            <span className="text-[14vw] sm:text-[12vw] md:text-[14vw] block">
              LOA
            </span>
            <span className="block">2026</span>
          </h2>
          <h2 className="text-[10vw] sm:text-[9vw] md:text-[9vw] font-display leading-[0.88] text-loa-purple uppercase">
            Register
            <br />
            <span className="text-[16vw] sm:text-[14vw] md:text-[19vw] block">
              Now
            </span>
          </h2>
        </div>

        <div className="flex-2 items-start font-body">
          <p className="text-xl leading-relaxed text-loa-purple">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </p>
        </div>
      </div>
      <button className="px-8 max-w-2xl lg:mt-10 font-display uppercase bg-loa-purple py-8 text-loa-yellow text-xl hover:bg-loa-black hover:text-loa-purple transition-colors duration-300 cursor-pointer">
        Register Now
      </button>
    </section>
  );
}
```

- [ ] **Step 2: Verify the dev server shows no errors**

Run: `npm run dev` (if not already running) and check browser at the Register section. LOA/2026/Register Now text should be visible near the top of the section immediately.

- [ ] **Step 3: Commit**

```bash
git add src/components/Register.tsx
git commit -m "fix: remove gsap entrance animation, reduce top padding in Register"
```

---

### Task 2: Fix Deadlines section

**Files:**
- Modify: `src/components/Deadlines.tsx`

- [ ] **Step 1: Reduce top padding**

In `src/components/Deadlines.tsx`, find this class on the inner div:

```
className="pt-12 md:pt-20 px-16 md:px-30"
```

Replace with:

```
className="pt-6 md:pt-10 px-16 md:px-30"
```

- [ ] **Step 2: Verify in browser**

Scroll to the Deadlines (pink) section. The EARLY/FINAL deadline dates should be visible near the top of the section when it fills the screen.

- [ ] **Step 3: Commit**

```bash
git add src/components/Deadlines.tsx
git commit -m "fix: reduce top padding in Deadlines section"
```

---

### Task 3: Fix Awards section

**Files:**
- Modify: `src/components/Awards.tsx`

- [ ] **Step 1: Reduce top padding and remove min-h**

In `src/components/Awards.tsx`, find the section opening tag:

```
className="bg-loa-yellow px-10 py-20 h-fit min-h-[60vh] md:overflow-hidden"
```

Replace with:

```
className="bg-loa-yellow px-10 pt-6 pb-16 h-fit md:overflow-hidden"
```

- [ ] **Step 2: Verify in browser**

Scroll to the Awards (yellow) section. The awards heading and cards should be visible near the top of the section immediately. No large blank yellow area before content.

- [ ] **Step 3: Commit**

```bash
git add src/components/Awards.tsx
git commit -m "fix: reduce top padding and remove min-h in Awards section"
```

---

### Task 4: Fix Categories section

**Files:**
- Modify: `src/components/Categories.tsx`

- [ ] **Step 1: Reduce top padding**

In `src/components/Categories.tsx`, find the section opening tag:

```
className="bg-loa-purple px-10 py-20 h-FIT overflow-hidden"
```

Replace with:

```
className="bg-loa-purple px-10 pt-6 pb-16 h-fit overflow-hidden"
```

- [ ] **Step 2: Verify in browser**

Scroll to the Categories (purple) section. Category items should be visible near the top of the section immediately.

- [ ] **Step 3: Commit**

```bash
git add src/components/Categories.tsx
git commit -m "fix: reduce top padding in Categories section"
```
