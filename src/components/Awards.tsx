import FaultyTerminal from "./FaultyTerminal";

const TROPHIES = [
  { src: "/assets/black.png", alt: "Black Heart", bg: "bg-loa-pink" },
  { src: "/assets/cyan.png", alt: "Cyan Heart", bg: "bg-loa-purple" },
  { src: "/assets/magenta.png", alt: "Magenta Heart", bg: "bg-loa-black" },
  { src: "/assets/yellow.png", alt: "Yellow Heart", bg: "bg-loa-purple" },
];

export default function Awards() {
  return (
    <section className="relative bg-loa-yellow px-6 md:px-24 lg:px-48 py-24 md:py-32 flex flex-col justify-start items-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 hidden md:block">
        <FaultyTerminal
          scale={4.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#FF0000"
          backgroundColor="#FFE600"
          mouseReact={true}
          mouseStrength={1.0}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      <img
        src="/assets/logo-loa-black.png"
        alt="LOA Logo"
        className="absolute top-6 right-8 h-18 object-contain z-10 hidden md:block"
      />

      <h2
        className="pb-4 text-5xl md:text-8xl lg:text-[100px] text-loa-purple uppercase leading-none tracking-tight text-center w-full relative z-10 pointer-events-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        THE HEARTS OF LOA
      </h2>
      <p className="pb-16 text-md text-loa-purple text-center max-w-3xl mx-auto font-body leading-relaxed opacity-90 relative z-10 pointer-events-none">
        Inspired by the CMYK spectrum that brings creative expression to life, the Hearts of LOA honour work that stands apart for its originality, execution, and impact.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
        {TROPHIES.map((t) => (
          <div key={t.src} className="flex flex-col items-center w-full">
            <img
              src={t.src}
              alt={t.alt}
              className={`w-full max-w-[280px] sm:max-w-none mx-auto aspect-square object-contain rounded-full p-2 sm:p-4 border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] transition-all duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-3 ${t.bg}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
