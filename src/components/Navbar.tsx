const NAV_LINKS = ["HOME", "CATEGORIES", "JURY MEMBERS", "WINNERS", "SIGN IN"];

export default function Navbar() {
  return (
    <nav className="absolute w-full top-5 z-50">
      <ul className="hidden md:flex list-none gap-20 items-center justify-center">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[14px] tracking-widest text-white font-body font-bold  transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
