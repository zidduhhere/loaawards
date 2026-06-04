export default function Footer() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Deadlines", href: "#deadlines" },
    { label: "Jury", href: "#jury" },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      href: "#",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF1493" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#FF1493" }}>
      {/* Big wordmark band */}
      <div className="overflow-hidden border-b border-black/10 py-6 px-24 md:px-48">
        <p
          className="text-black/10 uppercase leading-none select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 14rem)",
            letterSpacing: "-0.02em",
          }}
        >
          LOA AWARDS
        </p>
      </div>

      {/* Main content grid */}
      <div className="px-24 md:px-48 pt-12 pb-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="md:col-span-1 flex flex-col gap-5">
          <div>
            <p
              className="text-black text-2xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Love of<br />Advertising<br />Awards
            </p>
          </div>
          <p className="text-black/70 text-xs leading-relaxed max-w-[220px]">
            Launched by the Advertising Club Trivandrum. Awards by people who love advertising, for people who love creating it.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-[#FF1493] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold text-xs uppercase tracking-widest mb-1">Navigate</p>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black/70 hover:text-black text-sm transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold text-xs uppercase tracking-widest mb-1">Get in Touch</p>
          <div className="flex flex-col gap-1">
            <p className="text-black/50 text-xs uppercase tracking-wider">Email</p>
            <a
              href="mailto:advertismentclubtrivandrum@gmail.com"
              className="text-black text-sm hover:underline break-all"
            >
              advertismentclubtrivandrum@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-black/50 text-xs uppercase tracking-wider">Phone</p>
            <a
              href="tel:+919847257468"
              className="text-black text-sm hover:underline"
            >
              +91 98472 57468
            </a>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-black/50 text-xs uppercase tracking-wider">Website</p>
            <a
              href="https://loveofadvertising.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm hover:underline"
            >
              loveofadvertising.com
            </a>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-black/50 text-xs uppercase tracking-wider">Organiser</p>
            <p className="text-black text-sm">Advertising Club Trivandrum</p>
          </div>
        </div>

        {/* Eligibility / CTA */}
        <div className="flex flex-col gap-4">
          <p className="text-black font-semibold text-xs uppercase tracking-widest mb-1">Enter Now</p>
          <a
            href="https://www.loaawards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 bg-black text-[#FF1493] text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-full hover:bg-[#FFE600] hover:text-black transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Submit Your Entry
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div className="mt-4">
            <a href="https://adclubtvm.com" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
              <img src="https://loa-awards-content-network.b-cdn.net/act-logo.png" alt="ACT Logo" loading="lazy" decoding="async" className="h-12 object-contain mix-blend-multiply" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 px-24 md:px-48 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-black/50 text-xs">
          © {new Date().getFullYear()} LOA Awards · Advertising Club Trivandrum. All rights reserved.
        </p>
        <p
          className="text-black/30 text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Driven by Love
        </p>
      </div>
    </footer>
  );
}
