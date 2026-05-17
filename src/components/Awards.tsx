const TROPHIES = [
  { src: "/assets/black.png", alt: "Award 1" },
  { src: "/assets/cyan.png", alt: "Award 2" },
  { src: "/assets/magenta.png", alt: "Award 3" },
  { src: "/assets/yellow.png", alt: "Award 4" },
];

export default function Awards() {
  return (
    <section className="bg-loa-yellow px-10 min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto w-full flex flex-col items-center justify-center">
        <h2
          className="pb-6 text-6xl md:text-8xl lg:text-[120px] text-loa-purple uppercase leading-none tracking-tight text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AWARDS
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
          Four distinct awards, each a reflection of bold ideas and creative
          spirit, come together to celebrate the many ways passion shapes
          advertising into something truly meaningful.
        </p>
      </div>
    </section>
  );
}
