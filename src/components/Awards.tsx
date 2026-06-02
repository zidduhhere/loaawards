

const TROPHIES = [
  { src: "https://loa-awards-content-network.b-cdn.net/black.webp", alt: "Black Heart", bg: "bg-loa-pink" },
  { src: "https://loa-awards-content-network.b-cdn.net/cyan.webp", alt: "Cyan Heart", bg: "bg-loa-purple" },
  { src: "https://loa-awards-content-network.b-cdn.net/magenta.webp", alt: "Magenta Heart", bg: "bg-loa-black" },
  { src: "https://loa-awards-content-network.b-cdn.net/yellow.webp", alt: "Yellow Heart", bg: "bg-loa-purple" },
];

export default function Awards() {
  return (
    <section className="relative bg-loa-yellow px-6 md:px-24 lg:px-48 py-24 md:py-32 flex flex-col justify-start items-center overflow-hidden min-h-screen">

      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa-black.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="absolute top-6 right-8 h-18 object-contain z-10 hidden md:block"
      />

      <h2
        className="pb-4 text-5xl md:text-7xl lg:text-[150px] text-loa-purple uppercase leading-none tracking-tight text-center w-full relative z-10 pointer-events-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        THE HEARTS OF{" "}
        <span className="text-red-500 hover:text-loa-purple transition-colors duration-300 pointer-events-auto cursor-default">
          LOA
        </span>
      </h2>
      <p className="pb-16 text-md text-loa-purple text-center max-w-3xl mx-auto font-body leading-relaxed opacity-90 relative z-10 pointer-events-none">
        Inspired by the CMYK spectrum that brings creative expression to life,
        the Hearts of LOA honour work that stands apart for its originality,
        execution, and impact.
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
                className={`absolute w-[150%] h-[150%] max-w-none object-contain drop-shadow-xl`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
