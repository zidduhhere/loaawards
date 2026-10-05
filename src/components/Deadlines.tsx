import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Deadlines() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      };

      // Image fade in from left
      gsap.from(imageRef.current, {
        x: "-50px",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });

      // Placeholder fade in from right (ready for future content)
      gsap.from(placeholderRef.current, {
        x: "50px",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.1,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });

      // Bottom fades up last
      gsap.from(bottomRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:h-screen max-h-[100vh] bg-loa-pink text-loa-yellow flex flex-col overflow-hidden py-12 md:py-0 justify-center"
    >
      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-20 pointer-events-none"
      />

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-[1500px] mx-auto pl-4 md:pl-8 lg:pl-12 pr-6 md:pr-12 lg:pr-24 pt-16 md:pt-24 lg:pt-28">
        {/* Left Col: Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start pr-0 md:pr-4 lg:pr-8">
          <img
            ref={imageRef}
            src="https://loa-awards-content-network.b-cdn.net/loa-poster-loc.jpg"
            alt="LOA Poster LOC"
            loading="lazy"
            decoding="async"
            className="w-[65%] sm:w-[60%] md:w-full max-w-70 sm:max-w-[320px] md:max-w-162.5 lg:max-w-187.5 h-auto object-cover border-4 border-loa-black shadow-[6px_6px_0px_#0A0A0A] md:shadow-[8px_8px_0px_#0A0A0A] rounded-2xl"
          />
        </div>
        
        {/* Right Col: Event Details */}
        <div ref={placeholderRef} className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left gap-6 md:gap-8">
          <h2 
            className="font-display leading-[0.95] uppercase"
            style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            <span className="block whitespace-nowrap">LOVE TAKES</span>
            <span className="block whitespace-nowrap">CENTER STAGE</span>
          </h2>
          <div className="flex flex-col gap-2 font-display text-xl md:text-3xl tracking-wide text-loa-white">
            <p>
              <span className="text-loa-yellow text-sm md:text-lg block mb-1">VENUE :</span>
              THE LEELA KOVALAM,<br />TRIVANDRUM
            </p>
            <p className="mt-4 md:mt-6">
              <span className="text-loa-yellow text-sm md:text-lg block mb-1">DATE :</span>
              24TH OCTOBER
            </p>
          </div>
        </div>

      </div>

      {/* ── Bottom: CTA ── */}
      <div
        ref={bottomRef}
        className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pb-6 md:pb-10 pt-4 md:pt-6 flex flex-col items-center gap-6 md:gap-8"
      >
        <a
          href="https://loa-awards-content-network.b-cdn.net/loa-handbook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 md:gap-4 font-display tracking-widest text-sm md:text-2xl bg-loa-purple text-loa-yellow border-[3px] md:border-4 border-loa-black shadow-[5px_5px_0px_#0A0A0A] px-5 py-2.5 md:px-10 md:py-5 rounded-xl md:rounded-2xl transition-all duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-3 uppercase leading-tight"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="text-left">
            SUBMISSION
            <br />
            GUIDELINES
          </span>
        </a>
      </div>
    </section>
  );
}
