const TROPHIES = [
  {
    src: "https://loa-awards-content-network.b-cdn.net/black.webp",
    alt: "Black Heart",
    bg: "bg-loa-pink",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/cyan.webp",
    alt: "Cyan Heart",
    bg: "bg-loa-purple",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/magenta.webp",
    alt: "Magenta Heart",
    bg: "bg-loa-black",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/yellow.webp",
    alt: "Yellow Heart",
    bg: "bg-loa-purple",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-loa-yellow px-6 md:px-24 lg:px-48 py-24 md:py-32 flex flex-col justify-start items-center overflow-hidden min-h-screen">
      <img
        src="https://loa-awards-content-network.b-cdn.net/loa-blue.svg"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[56px] lg:top-10 lg:right-20 lg:h-[100px] md:p-3 lg:p-4 object-contain z-10"
      />

      <h2
        className="pb-4 text-loa-purple uppercase leading-none tracking-tight flex flex-wrap justify-center gap-x-2 md:gap-x-5 w-full relative z-10 pointer-events-none"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 9.5vw, 150px)" }}
      >
        <span className="whitespace-nowrap">THE HEARTS</span>
        <span className="whitespace-nowrap">
          OF{" "}
          <span className="text-red-500 hover:text-loa-purple transition-colors duration-300 pointer-events-auto cursor-default">
            LOA
          </span>
        </span>
      </h2>
      <p className="pb-16 text-md text-loa-purple text-center max-w-3xl mx-auto font-body leading-relaxed opacity-90 relative z-10 pointer-events-none">
        Meet the Hearts of LOA Awards - inspired by the CMYK spectrum that brings creative ideas to life, and created to honour work that leaves a lasting mark. Awarded across Cyan, Magenta and Yellow distinctions representing Gold, Silver and Bronze, the Hearts of LOA celebrate ideas that stand apart for their originality, execution and impact. At the highest level stands the Black Heart, reserved for rare brilliance across major honours.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
        {TROPHIES.map((t) => (
          <div key={t.src} className="flex flex-col items-center w-full">
            <div className="relative w-2/3 max-w-[240px] sm:w-full sm:max-w-none mx-auto aspect-square rounded-full bg-white transition-transform duration-300 ease-out hover:-translate-y-2 flex items-center justify-center">
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                decoding="async"
                className={`absolute w-[110%] h-[110%] lg:right-2 max-w-none object-contain drop-shadow-xl`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
