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
