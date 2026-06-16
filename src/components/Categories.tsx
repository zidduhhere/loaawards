import { useState, useMemo, useRef } from "react";
import TermsOverlay from "./TermsOverlay";

interface Subcategory {
  name: string;
  parent: string;
}

interface CategoryGroup {
  title: string;
  discipline: string;
  description: string;
  color: string;
  textColor: string;
  subcategories: string[];
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    title: "For the Love of Ideas",
    discipline: "Traditional & Broadcast Advertising",
    description:
      "From a striking print visual to a memorable radio spot, an iconic outdoor execution, or a film that stays with you long after it ends, this category honours ideas crafted with clarity, creativity, and a genuine love for storytelling.",
    color: "#FFE600",
    textColor: "#5B1BE8",
    subcategories: [
      "Print – Single / Campaign",
      "Outdoor – Hoardings – Single / Campaign",
      "Outdoor – Banners – Single / Campaign",
      "Outdoor – Posters – Single / Campaign",
      "Outdoor – Ambient / POP – Single / Campaign",
      "Radio – Single / Campaign",
      "Radio – RJ / Branded Content",
      "TVCs – Single / Campaign",
    ],
  },
  {
    title: "For the Love of Design",
    discipline: "Design Craft & Collateral",
    description:
      "From iconic identities and striking posters to thoughtfully crafted collateral and packaging, this category honours design that blends creativity, purpose, and craftsmanship, to turn ideas into compelling visual experiences.",
    color: "#FF2D8B",
    textColor: "#FFE600",
    subcategories: [
      "Identity – Brand Identity",
      "Identity – Logos",
      "Posters – Brand Posters",
      "Posters – Film Posters",
      "Packaging & Products – Brochures",
      "Packaging & Products – Calendars",
      "Packaging & Products – Packaging",
      "Packaging & Products – Others",
    ],
  },
  {
    title: "For the Love of Integration",
    discipline: "Integrated Campaign",
    description:
      "From a powerful idea executed across different platforms, this category celebrates campaigns that bring together multiple mediums in a connected and seamless way. It honours work that turns one creative thought into a unified communication experience.",
    color: "#FFE600",
    textColor: "#5B1BE8",
    subcategories: ["Integrated Campaign"],
  },
  {
    title: "For the Love of Craft",
    discipline: "Craft in Communication",
    description:
      "For the Love of Craft celebrates the artistry behind exceptional communication — the details that transform an idea into something unforgettable. From compelling words and striking visuals to thoughtful typography, evocative imagery, and masterful illustration, this category honours the skill, precision, and passion that bring creative work to life.",
    color: "#FF2D8B",
    textColor: "#FFE600",
    subcategories: [
      "Art Direction",
      "Copywriting",
      "Typography",
      "Illustration",
      "Photography",
    ],
  },
  {
    title: "For the Love of Filmmaking",
    discipline: "Audio Visual Craft & Innovation",
    description:
      "Honouring the craft, vision, and innovation that transform moving images into unforgettable stories. This category honours the creative excellence behind every frame — from inspired direction to cutting edge visual technologies.",
    color: "#FFE600",
    textColor: "#5B1BE8",
    subcategories: [
      "Animation – Single / Campaign",
      "Casting & Performance – Single / Campaign",
      "Cinematography – Single / Campaign",
      "Use of AI / AI Integration – Single / Campaign",
      "Direction – Single / Campaign",
      "Editing – Single / Campaign",
      "Formats & Layouts – Single / Campaign",
      "Production Design – Single / Campaign",
      "Best Use of Low Budget (Under ₹5 Lakhs) – Single / Campaign",
      "Sound Design / SFX – Single / Campaign",
      "Use of Music – Single / Campaign",
      "Special Effects / VFX – Single / Campaign",
      "Writing & Scripts – Single / Campaign",
    ],
  },
  {
    title: "For the Love of Innovation",
    discipline: "AI-Led Creativity",
    description:
      "For the Love of Innovation celebrates the bold intersection of creativity and technology, where imagination is amplified by artificial intelligence. From intelligent storytelling and generative visuals to immersive brand experiences, the creative work that redefines what's possible through AI-led thinking.",
    color: "#FF2D8B",
    textColor: "#FFE600",
    subcategories: [
      "AI in Traditional Media – Print",
      "AI in Traditional Media – Outdoor",
      "AI in Social Media – Static Posts",
      "AI in Social Media – Reels & Shorts",
      "AI in Films – Digital Films",
      "AI in Films – TVCs",
      "AI in Sound, Radio & Audio",
      "AI in Experiential Marketing",
      "AI in Integrated Campaigns",
      "Use of AI – Generative AI",
      "Use of AI – Content Creation",
      "Use of AI – Social Cause",
    ],
  },
  {
    title: "For the Love of Creation",
    discipline: "Creator-Led Branded Content",
    description:
      "Celebrating the storytellers and creators shaping the way brands connect with audiences today. Compelling short-form content and long-form narratives, creator-led campaigns, influencer partnerships, and community-driven storytelling — this category honours content that feels authentic, engaging, and built to spark culture, conversation, and connection.",
    color: "#FFE600",
    textColor: "#5B1BE8",
    subcategories: [
      "Branded Content – Short-Form",
      "Branded Content – Long-Form",
      "Branded Content – Campaign",
      "Creator-Led Advertising – Single / Campaign",
      "Use of Creators – Integrated Content Campaign",
      "Use of Creators – Brand Collaboration",
      "Use of Creators – User-Generated Content",
      "Use of Creators – Use of Influencers",
    ],
  },
  {
    title: "For the Love of Screen",
    discipline: "Digital Experiences & Social Engagement",
    description:
      "For the Love of the Screen celebrates ideas designed not just to be seen, but to be shared and talked about. From immersive digital experiences and compelling branded content to scroll-stopping social campaigns and real-time cultural moments, this category considers work that sparks connection, inspires interaction, and builds meaningful conversations in the ever-evolving world.",
    color: "#FF2D8B",
    textColor: "#FFE600",
    subcategories: [
      "Digital – Websites",
      "Digital – Microsites",
      "Digital – Branded Content",
      "Social Media – Static – Single / Campaign",
      "Social Media – Films – Single / Campaign",
      "Social Media – Reels & Shorts – Single / Campaign",
      "Social Media – Memes",
      "Social Media – Activations & Contests",
      "Social Media – Moment Marketing",
    ],
  },
  {
    title: "For the Love of Possibility",
    discipline: "Unpublished Works",
    description:
      "For the Love of Risk honours bold, unpublished ideas — work that carries the originality, ambition, and creative conviction to challenge conventions and inspire what comes next. Open to professionals and students alike, it celebrates fresh thinking and untapped creative potential across disciplines.",
    color: "#FFE600",
    textColor: "#5B1BE8",
    subcategories: [
      "Unpublished Works – For Professionals",
      "Unpublished / Published Works – For Students",
    ],
  },
  {
    title: "For the Love of the Game",
    discipline: "Independent Creative Excellence",
    description:
      "Celebrating outstanding non-brand driven work by individuals, freelancers, in-house designers, studios and hotshops. This category recognises ideas that prove great creativity is not defined by scale, but by vision, courage, and the drive to make an impact. It includes everyday and independent creative expressions — from posters and magazine or book covers to wall paintings, signage and messages — that exist outside traditional brand-led communication.",
    color: "#FF2D8B",
    textColor: "#FFE600",
    subcategories: ["Independent Creative Excellence"],
  },
];

const ALL_SUBCATEGORIES: Subcategory[] = CATEGORY_GROUPS.flatMap((g) =>
  g.subcategories.map((name) => ({ name, parent: g.title })),
);

const APPLY_URL = "https://actloa.awardsengine.com/";

export default function Categories() {
  const [activeFilter, setActiveFilter] = useState<string>(
    CATEGORY_GROUPS[0].title,
  );
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const filters = CATEGORY_GROUPS.map((g) => g.title);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };

  const filtered = useMemo(() => {
    return ALL_SUBCATEGORIES.filter((s) => {
      return s.parent === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section
      id="categories"
      className="relative bg-loa-purple px-6 md:px-24 lg:px-48 pt-24 md:pt-36 pb-16 overflow-hidden"
    >
      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-10 pointer-events-none"
      />
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-8">
        {/* Heading */}
        <h2
          className="text-4xl md:text-8xl lg:text-[140px] text-loa-yellow uppercase leading-none text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CATEGORIES
        </h2>

        <p className="text-sm leading-relaxed text-white/70 text-center max-w-2xl">
          Work released in India between 1 January 2025 and 31st March 2026. Any
          entity involved in the creation - agency, client, production house, or
          individual - may enter subject to meeting the entry criteria.
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
          <a
            href="https://loa-awards-content-network.b-cdn.net/loa-handbook.pdf"
            download="LOA-Handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-loa-black font-bold uppercase tracking-widest px-6 py-4 rounded border-4 border-loa-black shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-1 hover:-translate-x-1 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Submission Guidelines
          </a>
          <button
            onClick={() => setIsTermsOpen(true)}
            className="flex items-center gap-3 bg-loa-yellow text-loa-black font-bold uppercase tracking-widest px-6 py-4 rounded border-4 border-loa-black shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-1 hover:-translate-x-1 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Terms &amp; Conditions
          </button>
        </div>

        {/* Filter tabs (Neo-Brutalist Design) */}
        <div className="relative w-full flex items-center gap-4 py-6">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="shrink-0 w-12 h-12 rounded bg-loa-white border-4 border-loa-black shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[0px_0px_0px_#0A0A0A] active:translate-y-1 active:translate-x-1 flex items-center justify-center text-loa-black transition-all duration-200 z-20"
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Scrollable row */}
          <div className="relative flex-1 min-w-0">
            <div
              ref={scrollRef}
              className="overflow-x-auto no-scrollbar px-2 py-4"
            >
              <div className="flex gap-4 md:gap-6 min-w-max">
                {filters.map((f) => {
                  const isActive = activeFilter === f;
                  const group = CATEGORY_GROUPS.find((g) => g.title === f);
                  const accentColor = group?.color ?? "#FFE600";
                  return (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`relative shrink-0 rounded px-6 py-3 uppercase tracking-widest text-sm md:text-base font-bold transition-all duration-300 border-4 border-loa-black ${
                        isActive
                          ? "shadow-[6px_6px_0px_#0A0A0A] -translate-y-1 -translate-x-1 -rotate-2"
                          : "shadow-[2px_2px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-1 hover:-translate-x-1 hover:-rotate-1 opacity-90 hover:opacity-100"
                      }`}
                      style={{
                        fontFamily: "var(--font-display)",
                        backgroundColor: isActive ? accentColor : "#FFFFFF",
                        color: isActive
                          ? (group?.textColor ?? "#5B1BE8")
                          : "#0A0A0A",
                      }}
                    >
                      {f.replace("For the Love of ", "")}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="shrink-0 w-12 h-12 rounded bg-loa-white border-4 border-loa-black shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5 hover:-translate-x-0.5 active:shadow-[0px_0px_0px_#0A0A0A] active:translate-y-1 active:translate-x-1 flex items-center justify-center text-loa-black transition-all duration-200 z-20"
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Group Description */}
        <div className="w-full max-w-3xl text-center px-4 mt-2 mb-4">
          <p className="text-loa-yellow text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            {CATEGORY_GROUPS.find((g) => g.title === activeFilter)?.discipline}
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {CATEGORY_GROUPS.find((g) => g.title === activeFilter)?.description}
          </p>
        </div>

        {/* Category grid */}
        <div className="group/grid w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center">
          {filtered.map((sub) => {
            const group = CATEGORY_GROUPS.find((g) => g.title === sub.parent)!;
            const nameParts = sub.name.split(" – ");
            const mainTitle = nameParts[0];
            const subTitle = nameParts.slice(1).join(" – ");

            return (
              <a
                key={sub.name + sub.parent}
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative aspect-square w-full max-w-[220px] cursor-pointer group-hover/grid:opacity-40 group-hover/grid:scale-[0.98] hover:opacity-100! hover:scale-100!"
                style={
                  {
                    "--card-bg": group.color,
                    "--card-fg": group.textColor,
                    "--card-border":
                      group.color === "#FFE600" ? "#0A0A0A" : group.textColor,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 rounded-full border-4 border-(--card-border) bg-(--card-bg) p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_var(--card-border)] transition-all duration-200 ease-out group-hover/card:translate-x-[4px] group-hover/card:translate-y-[4px] group-hover/card:shadow-[0px_0px_0px_var(--card-border)] group-hover/card:-rotate-3">
                  <h3 className="font-display text-(--card-fg) flex flex-col items-center justify-center uppercase leading-tight w-full px-1 mb-2 sm:mb-3">
                    <span className="text-sm sm:text-base md:text-lg truncate w-full text-center">
                      {mainTitle}
                    </span>
                    {subTitle && (
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] opacity-80 line-clamp-2 mt-0.5">
                        {subTitle}
                      </span>
                    )}
                  </h3>

                  <span className="rounded-full border-2 border-(--card-border) bg-(--card-fg) text-(--card-bg) px-2.5 py-1 sm:px-4 sm:py-1.5 font-body text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-200 group-hover/card:bg-(--card-bg) group-hover/card:text-(--card-fg)">
                    Apply Here
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <TermsOverlay
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </section>
  );
}
