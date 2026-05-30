import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface Trophy {
  src: string;
  alt: string;
  name: string;
  color: string;
  textColor: string;
  bgColor: string;
  description: string;
}

const TROPHIES: Trophy[] = [
  {
    src: "/assets/black.png",
    alt: "Black Heart",
    name: "Black Heart",
    color: "#1a1a1a",
    textColor: "#FFE600",
    bgColor: "#FFE600",
    description:
      "The highest honour. Awarded for work of extraordinary originality that redefines what advertising can be. Reserved for ideas that are not just great — but genuinely new.",
  },
  {
    src: "/assets/cyan.png",
    alt: "Cyan Heart",
    name: "Cyan Heart",
    color: "#00B4D8",
    textColor: "#0a0a0a",
    bgColor: "#5B1BE8",
    description:
      "Recognising ideas with exceptional clarity and creative precision that cut through noise with purpose. Work that communicates with intelligence and intention.",
  },
  {
    src: "/assets/magenta.png",
    alt: "Magenta Heart",
    name: "Magenta Heart",
    color: "#FF2D8B",
    textColor: "#FFE600",
    bgColor: "#0A0A0A",
    description:
      "Celebrating bold, fearless creative risk-taking that commands attention and sparks emotion. For work that dares to be different and earns its audience's admiration.",
  },
  {
    src: "/assets/yellow.png",
    alt: "Yellow Heart",
    name: "Yellow Heart",
    color: "#FFE600",
    textColor: "#1a1a1a",
    bgColor: "#5B1BE8",
    description:
      "Honouring work driven by pure passion for the craft — ideas born from genuine love for advertising. For the work that reminds everyone why they got into this industry.",
  },
];

export default function Awards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedTrophy = TROPHIES.find((t) => t.src === selectedId) ?? null;
  const panelRef = useRef<HTMLDivElement>(null);
  const panelContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!panelRef.current || !selectedId) return;
    gsap.fromTo(
      panelRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.55, ease: "power3.out" },
    );
    if (panelContentRef.current) {
      gsap.fromTo(
        panelContentRef.current.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.25,
        },
      );
    }
  }, [selectedId]);

  const handleTrophyClick = (src: string) => {
    setSelectedId((prev) => (prev === src ? null : src));
  };

  return (
    <section className="relative bg-loa-yellow px-24 md:px-48 min-h-screen flex flex-col justify-start items-center pt-16 overflow-hidden">
      <img
        src="/assets/logo-loa-black.png"
        alt="LOA Logo"
        className="absolute top-6 right-8 h-6 object-contain z-10"
      />

      <h2
        className="pb-6 text-6xl md:text-8xl lg:text-[120px] text-loa-purple uppercase leading-none tracking-tight text-center w-full"
        style={{ fontFamily: "var(--font-display)" }}
      >
        THE HEARTS OF LOA
      </h2>

      {/* Desktop */}
      <div className="hidden md:flex w-full flex-row items-center min-h-[50vh] gap-0">
        <div
          className="flex flex-row items-center justify-center gap-6"
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
                className="object-contain aspect-square rounded-full"
                style={{
                  backgroundColor: t.bgColor,
                  height:
                    selectedId === t.src
                      ? "14rem"
                      : selectedId
                        ? "9rem"
                        : "13rem",
                  boxShadow:
                    selectedId === t.src ? `0 0 40px 8px ${t.color}88` : "none",
                  transform: selectedId === t.src ? "scale(1.08)" : "scale(1)",
                }}
              />
            </button>
          ))}
        </div>

        {selectedTrophy && (
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
        )}
      </div>

      {/* Mobile */}
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
                className="h-28 aspect-square object-contain rounded-full"
                style={{ backgroundColor: t.bgColor }}
              />
            </button>
          ))}
        </div>

        {selectedTrophy && (
          <div
            className="w-full rounded-2xl px-6 py-6 border-l-4"
            style={{
              borderColor: selectedTrophy.color,
              backgroundColor: `${selectedTrophy.color}22`,
            }}
          >
            <p className="font-display text-2xl text-loa-purple uppercase mb-2">
              {selectedTrophy.name}
            </p>
            <p className="font-body text-sm text-loa-purple leading-relaxed opacity-80">
              {selectedTrophy.description}
            </p>
          </div>
        )}
      </div>

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
