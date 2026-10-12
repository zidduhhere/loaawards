import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Deadlines() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      };

      // Header reveal
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: trigger,
        willChange: "transform, opacity",
      });

      // Event details cards reveal
      gsap.from(detailsRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
      });

      // CTA reveal
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="deadlines"
      className="relative w-full min-h-screen bg-loa-pink text-loa-yellow flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-24"
    >
      {/* Brand watermark logo */}
      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-20 pointer-events-none"
      />

      {/* ── Main Content Container ── */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-10 md:gap-14 relative z-10">
        {/* Title & Badge */}
        <div ref={headerRef} className="flex flex-col items-center">
          <h2
            className="font-display uppercase leading-[0.92] tracking-tight text-center"
            style={{ fontSize: "clamp(2.75rem, 7vw, 7.5rem)" }}
          >
            <span className="block text-loa-yellow">LOVE TAKES</span>
            <span className="block text-loa-white">CENTER STAGE</span>
          </h2>
        </div>

        {/* Date & Venue Cards */}
        <div
          ref={detailsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mx-auto"
        >
          {/* Date Card */}
          <div className="group bg-loa-yellow text-loa-black border-4 border-loa-black shadow-[6px_6px_0px_#0A0A0A] md:shadow-[8px_8px_0px_#0A0A0A] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_#0A0A0A]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-loa-black text-loa-yellow text-xs md:text-sm font-display tracking-widest uppercase mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>DATE</span>
            </div>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none text-loa-black">
              24TH OCTOBER
            </p>
            <p className="font-body text-xs sm:text-sm font-bold tracking-widest uppercase text-loa-black/75 mt-2.5">
              2026 • GALA CEREMONY
            </p>
          </div>

          {/* Venue Card */}
          <div className="group bg-loa-purple text-loa-yellow border-4 border-loa-black shadow-[6px_6px_0px_#0A0A0A] md:shadow-[8px_8px_0px_#0A0A0A] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_#0A0A0A]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-loa-yellow text-loa-black text-xs md:text-sm font-display tracking-widest uppercase mb-3 border border-loa-black">
              <MapPin className="w-3.5 h-3.5" />
              <span>VENUE</span>
            </div>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-none text-loa-yellow">
              THE LEELA KOVALAM
            </p>
            <p className="font-body text-xs sm:text-sm font-bold tracking-widest uppercase text-loa-white mt-2.5">
              TRIVANDRUM, KERALA
            </p>
          </div>
        </div>

        {/* ── Bottom: CTA ── */}
        <div ref={ctaRef} className="flex flex-col items-center mt-2">
          <a
            href="https://loa-awards-content-network.b-cdn.net/loa-handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 md:gap-4 font-display tracking-widest text-sm md:text-2xl bg-loa-purple text-loa-yellow border-[3px] md:border-4 border-loa-black shadow-[5px_5px_0px_#0A0A0A] md:shadow-[6px_6px_0px_#0A0A0A] px-6 py-3.5 md:px-10 md:py-5 rounded-xl md:rounded-2xl transition-all duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-2 uppercase leading-tight group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-7 md:h-7 transition-transform group-hover:translate-y-0.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>SUBMISSION GUIDELINES</span>
          </a>
        </div>
      </div>
    </section>
  );
}
