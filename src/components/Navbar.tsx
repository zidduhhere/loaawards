import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS: { label: string; id?: string; href?: string; external?: boolean }[] = [
  { label: "HOME", id: "home" },
  { label: "CATEGORIES", id: "categories" },
  { label: "JURY MEMBERS", id: "jury" },
  { label: "APPLY NOW", href: "https://loaawards.com", external: true },
];

function smoothScrollTo(targetPosition: number, duration: number) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // easeInOutCubic
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

function scrollToSection(id: string) {
  const duration = 1200; // 1.2 seconds for slow, smooth scroll

  if (id === "home") {
    smoothScrollTo(0, duration);
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const targetPosition = el.getBoundingClientRect().top + window.pageYOffset;
    smoothScrollTo(targetPosition, duration);
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <nav className="absolute w-full top-10 z-50">
      {/* Desktop nav */}
      <ul className="hidden md:flex list-none items-center justify-center">
        {NAV_LINKS.map(({ label, id, href, external }, index) => (
          <li key={id || label} className="flex flex-row items-center">
            <a
              href={href || `#${id}`}
              onClick={(e) => {
                if (!external && id) handleClick(e, id);
              }}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={
                external
                  ? "text-[14px] tracking-widest bg-loa-yellow text-loa-purple font-body font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 px-6 py-2 rounded-full mx-6 shadow-lg inline-block"
                  : "text-[14px] tracking-widest text-white font-body font-bold transition-all duration-300 px-10 hover:text-loa-yellow hover:scale-110 hover:-translate-y-1 inline-block"
              }
            >
              {label}
            </a>
            {index < NAV_LINKS.length - 1 && !NAV_LINKS[index + 1].external && !external && (
              <div className="w-[2px] h-4 bg-red-400"></div>
            )}
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
          {NAV_LINKS.map(({ label, id, href, external }) => (
            <li key={id || label}>
              <a
                href={href || `#${id}`}
                onClick={(e) => {
                  if (!external && id) handleMobileClick(e, id);
                }}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={
                  external
                    ? "text-[14px] tracking-widest bg-loa-yellow text-loa-purple font-body font-bold transition-transform hover:scale-105 px-6 py-3 rounded-full shadow-lg block mt-2 text-center"
                    : "text-[14px] tracking-widest text-white font-body font-bold transition-colors"
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
