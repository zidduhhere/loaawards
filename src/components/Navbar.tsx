import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS: { label: string; id: string }[] = [
  { label: "HOME", id: "home" },
  { label: "CATEGORIES", id: "categories" },
  { label: "JURY MEMBERS", id: "jury" },
  { label: "WINNERS", id: "winners" },
  { label: "SIGN IN", id: "register" },
];

function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        {NAV_LINKS.map(({ label, id }, index) => (
          <li key={id} className="flex flex-row items-center">
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="text-[14px] tracking-widest text-white font-body font-bold transition-colors px-10"
            >
              {label}
            </a>
            {index < NAV_LINKS.length - 1 && (
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
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleMobileClick(e, id)}
                className="text-[14px] tracking-widest text-white font-body font-bold transition-colors"
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
