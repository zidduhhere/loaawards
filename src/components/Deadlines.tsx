import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, ArrowUpRight, Ticket } from "lucide-react";

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
              THE LEELA RAVIZ, KOVALAM
            </p>
            <p className="font-body text-xs sm:text-sm font-bold tracking-widest uppercase text-loa-white mt-2.5">
              TRIVANDRUM, KERALA
            </p>
          </div>
        </div>

        {/* ── Bottom: Delegate Pass & CTA ── */}
        <div ref={ctaRef} className="flex flex-col items-center w-full max-w-2xl mx-auto mt-2">
          {/* Lanyard Top Attachment */}
          <div className="flex flex-col items-center -mb-2 z-20 relative select-none pointer-events-none">
            {/* Lanyard strap tab */}
            <div className="w-8 h-5 bg-loa-purple border-x-4 border-t-4 border-loa-black rounded-t-sm shadow-sm" />
            {/* Metal clasp clip */}
            <div className="w-12 h-3.5 bg-loa-yellow border-2 border-loa-black rounded-sm shadow-sm flex items-center justify-center">
              <div className="w-4 h-1 bg-loa-black/40 rounded-full" />
            </div>
          </div>

          {/* ── Badge / Pass Button ── */}
          <a
            href="https://forms.gle/7TPSFbBCbVJcx71f7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Delegate Pass for LOA Awards 2026 Gala Ceremony"
            className="group relative block w-full bg-loa-yellow text-loa-black border-4 border-loa-black shadow-[6px_6px_0px_#0A0A0A] md:shadow-[10px_10px_0px_#0A0A0A] rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:-rotate-1 hover:shadow-[14px_14px_0px_#0A0A0A] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_#0A0A0A] overflow-hidden text-left cursor-pointer"
          >
            {/* Diagonal glint reflection sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

            {/* Left ticket punch notch */}
            <div className="absolute -left-4 top-[64%] -translate-y-1/2 w-8 h-8 rounded-full bg-loa-pink border-4 border-loa-black pointer-events-none z-10" />

            {/* Right ticket punch notch */}
            <div className="absolute -right-4 top-[64%] -translate-y-1/2 w-8 h-8 rounded-full bg-loa-pink border-4 border-loa-black pointer-events-none z-10" />

            {/* Lanyard punch-hole cutout slot */}
            <div className="w-14 h-2.5 bg-loa-pink border-2 border-loa-black rounded-full mx-auto mb-4 shadow-inner pointer-events-none" />

            {/* Pass Header Row */}
            <div className="flex items-center justify-between gap-2 border-b-2 border-loa-black/15 pb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-loa-purple text-loa-yellow border-2 border-loa-black text-[11px] sm:text-xs font-display tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-loa-yellow inline-block" />
                <span>ALL-ACCESS PASS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display tracking-widest text-xs sm:text-sm uppercase text-loa-black font-bold">
                  LOA '26
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 font-body text-[11px] font-bold tracking-widest bg-loa-black text-loa-yellow px-2 py-0.5 rounded-md">
                  <Ticket className="w-3 h-3" />
                  <span>VIP DELEGATE</span>
                </span>
              </div>
            </div>

            {/* Main Pass Title & Details */}
            <div className="my-4 sm:my-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="font-body text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-loa-purple">
                  OFFICIAL EVENT CREDENTIAL
                </p>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-loa-black leading-[0.9] mt-1">
                  DELEGATE PASS
                </h3>
              </div>
              <div className="text-left sm:text-right font-body">
                <span className="inline-block text-[10px] sm:text-xs uppercase font-bold tracking-widest text-loa-black/70 bg-white/70 px-2 py-0.5 rounded border border-loa-black/20 mb-1">
                  ADMIT ONE
                </span>
                <p className="font-display text-sm sm:text-base uppercase text-loa-purple tracking-wider leading-tight">
                  THE LEELA RAVIZ KOVALAM
                </p>
              </div>
            </div>

            {/* Perforated Tear Line */}
            <div className="relative w-full border-t-2 border-dashed border-loa-black/35 my-4 sm:my-5" />

            {/* Bottom Pass Stub: Barcode & Interactive CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              {/* Barcode & Serial */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-[3px] h-9 sm:h-10 opacity-90 py-1"
                  aria-hidden="true"
                >
                  <span className="w-1 h-full bg-loa-black" />
                  <span className="w-[2px] h-full bg-loa-black" />
                  <span className="w-1.5 h-full bg-loa-black" />
                  <span className="w-[1px] h-full bg-loa-black" />
                  <span className="w-2 h-full bg-loa-black" />
                  <span className="w-[2px] h-full bg-loa-black" />
                  <span className="w-1 h-full bg-loa-black" />
                  <span className="w-3 h-full bg-loa-black" />
                  <span className="w-[2px] h-full bg-loa-black" />
                  <span className="w-1.5 h-full bg-loa-black" />
                  <span className="w-[1px] h-full bg-loa-black" />
                  <span className="w-2 h-full bg-loa-black" />
                  <span className="w-1 h-full bg-loa-black" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-loa-black">
                    LOA-2026-DEL-PASS
                  </span>
                  <span className="font-body text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-loa-black/60">
                    SCAN AT CEREMONY ENTRANCE
                  </span>
                </div>
              </div>

              {/* Action Button Stamp inside Badge */}
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-loa-purple text-loa-yellow border-2 sm:border-3 border-loa-black shadow-[4px_4px_0px_#0A0A0A] group-hover:shadow-[2px_2px_0px_#0A0A0A] group-hover:translate-x-[2px] group-hover:translate-y-[2px] px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-display tracking-widest text-sm sm:text-base md:text-lg uppercase transition-all duration-200">
                <span>GET DELEGATE PASS</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </a>

          {/* Secondary CTA: Submission Guidelines */}
          <div className="mt-6 flex items-center justify-center">
            <a
              href="https://loa-awards-content-network.b-cdn.net/loa-handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 font-display tracking-widest text-xs sm:text-sm bg-loa-purple text-loa-yellow border-2 md:border-[3px] border-loa-black shadow-[4px_4px_0px_#0A0A0A] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-200 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-1 uppercase leading-tight group"
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
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>SUBMISSION GUIDELINES</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
