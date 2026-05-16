const TROPHIES = [
  { src: "/assets/black.png", alt: "Award 1" },
  { src: "/assets/cyan.png", alt: "Award 2" },
  { src: "/assets/magenta.png", alt: "Award 3" },
  { src: "/assets/yellow.png", alt: "Award 4" },
];

export default function Awards() {
  return (
    <section className="bg-loa-yellow px-10 py-20 h-screen overflow-hidden">
      <div className=" mx-auto w-full flex flex-col items-center  h-full">
        <h2
          className="absolute z-30 text-6xl md:text-8xl lg:text-[140px] text-loa-purple uppercase leading-none tracking-tight text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AWARDS
        </h2>
        <div className="flex flex-col items-center h-full justify-center w-full gap-8">
          <div className=" max-w-5xl flex w-full justify-between ">
            {TROPHIES.map((t) => (
              <img
                key={t.src}
                src={t.src}
                alt={t.alt}
                className="h-32 md:h-48 lg:h-60 aspect-square object-contain hover:-translate-y-2 transition-transform duration-300 bg-white rounded-full"
              />
            ))}
          </div>
        </div>
        <p className="text-[24px] leading-relaxed text-loa-purple  text-center max-w-9xl">
          Four distinct awards, each a reflection of bold ideas and creative
          spirit, come together to celebrate the many ways passion shapes
          advertising into something truly meaningful.
        </p>
      </div>
    </section>
  );
}
