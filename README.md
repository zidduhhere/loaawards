# LOA Awards Website 🏆

Welcome to the official **LOA Awards** website repository! This is a modern, high-performance landing page built for the LOA 2026 Awards, recognizing the best and brightest.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS (v4)
- **Animations:** GSAP (`@gsap/react`), WebGL (OGL)
- **Deployment:** Vercel (recommended)

## ⚡ Performance Optimizations

This website has been heavily optimized for performance and Core Web Vitals following React best practices:

1. **Global CDN Delivery:** All media assets (images, videos) are served via a Bunny.net Content Delivery Network (`loa-awards-content-network.b-cdn.net`) for fast, global delivery.
2. **Intelligent Resource Loading:** 
   - Above-the-fold assets (e.g., hero logos) use `fetchPriority="high"` and `decoding="sync"` to optimize the Largest Contentful Paint (LCP).
   - Below-the-fold images utilize native `loading="lazy"` and `decoding="async"` to conserve bandwidth and accelerate initial page loads.
3. **Code Splitting:** Heavy interactive elements, such as the WebGL `<FaultyTerminal>` background, are code-split and lazy-loaded via `React.lazy` and `Suspense`, preventing them from blocking the main thread during initial load.
4. **Optimized Animations:** All GSAP animations are managed via the `@gsap/react` `useGSAP` hook for automated cleanup and strict mode compatibility, preventing memory leaks.

## 🛠️ Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## 📂 Project Structure

- `src/components/`: Contains all UI sections (Hero, About, Categories, Deadlines, Jury, etc.).
- `src/index.css`: Tailwind configuration and global styles.
- `public/`: Static assets (Note: bulk media is hosted on the CDN).

---

*“If you believe in the power of what you create, this is your moment to share it with the world and let it shine.”*
