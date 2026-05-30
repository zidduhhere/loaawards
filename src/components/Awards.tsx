interface Trophy {
  src: string;
  alt: string;
  name: string;
  color: string;
  textColor: string;
  description: string;
}

const TROPHIES: Trophy[] = [
  {
    src: "/assets/black.png",
    alt: "Black Heart",
    name: "Black Heart",
    color: "#1a1a1a",
    textColor: "#FFE600",
    description:
      "The highest honour. Awarded for work of extraordinary originality that redefines what advertising can be. Reserved for ideas that are not just great — but genuinely new.",
  },
  {
    src: "/assets/cyan.png",
    alt: "Cyan Heart",
    name: "Cyan Heart",
    color: "#00B4D8",
    textColor: "#0a0a0a",
    description:
      "Recognising ideas with exceptional clarity and creative precision that cut through noise with purpose. Work that communicates with intelligence and intention.",
  },
  {
    src: "/assets/magenta.png",
    alt: "Magenta Heart",
    name: "Magenta Heart",
    color: "#FF2D8B",
    textColor: "#FFE600",
    description:
      "Celebrating bold, fearless creative risk-taking that commands attention and sparks emotion. For work that dares to be different and earns its audience's admiration.",
  },
  {
    src: "/assets/yellow.png",
    alt: "Yellow Heart",
    name: "Yellow Heart",
    color: "#FFE600",
    textColor: "#1a1a1a",
    description:
      "Honouring work driven by pure passion for the craft — ideas born from genuine love for advertising. For the work that reminds everyone why they got into this industry.",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-loa-yellow px-24 md:px-48 min-h-screen flex flex-col justify-start items-center pt-16">
      <img
        src="/assets/logo-loa-black.png"
        alt="LOA Logo"
        className="absolute top-6 right-8 h-16 object-contain z-10"
      />
      <div className="mx-auto w-full flex flex-col items-center justify-start">
        <h2
          className="pb-6 text-6xl md:text-8xl lg:text-[120px] text-loa-purple uppercase leading-none tracking-tight text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          THE HEARTS OF LOA
        </h2>
        <div className="max-w-5xl flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center w-full items-center lg:justify-between gap-6">
          {TROPHIES.map((t) => (
            <img
              key={t.src}
              src={t.src}
              alt={t.alt}
              className="h-40 lg:h-52 aspect-square object-contain hover:-translate-y-2 transition-transform duration-300 bg-white rounded-full"
            />
          ))}
        </div>
        <p className="mt-6 lg:text-[22px] leading-relaxed text-loa-purple mx-auto text-center max-w-6xl">
          Inspired by the CMYK spectrum that brings creative expression to life,
          the Hearts of LOA honour work that stands apart for its originality,
          execution, and impact.
        </p>
      </div>
    </section>
  );
}
