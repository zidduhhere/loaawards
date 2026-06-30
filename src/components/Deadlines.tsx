import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Deadlines() {
  const sectionRef = useRef<HTMLElement>(null);
  const earlyRef = useRef<HTMLDivElement>(null);
  const date1Ref = useRef<HTMLSpanElement>(null);
  const finalRef = useRef<HTMLSpanElement>(null);
  const date2Ref = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      };

      // EARLY BIRD crashes in from left
      gsap.from(earlyRef.current, {
        x: "-110%",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });

      // Date slams in from right with slight delay
      gsap.from(date1Ref.current, {
        x: "110%",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.1,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });

      // FINAL crashes in from left, staggered
      gsap.from(finalRef.current, {
        x: "-110%",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.25,
        scrollTrigger: trigger,
        willChange: "transform, opacity",
        force3D: true,
      });

      // Second date from right, staggered
      gsap.from(date2Ref.current, {
        x: "110%",
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.35,
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
        delay: 0.5,
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
      className="relative w-full min-h-[60vh] md:min-h-screen bg-loa-pink text-loa-yellow flex flex-col overflow-hidden py-12 md:py-0"
    >
      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-20 pointer-events-none"
      />

      {/* ── Deadline rows ── */}
      <div className="flex-1 grid grid-cols-[1fr_auto] gap-y-6 md:gap-y-10 w-full max-w-[1600px] mx-auto px-6 md:px-24 lg:px-48 pt-24 md:pt-32 lg:pt-40 items-end">
        {/* Early Bird */}
        <div ref={earlyRef} className="flex flex-col self-center">
          <span
            className="font-display block whitespace-nowrap"
            style={{
              fontSize: "clamp(1.5rem, 6.5vw, 8.5rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
            }}
          >
            EARLY
          </span>
          <span
            className="font-display block whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 8.5vw, 10.5rem)",
              letterSpacing: "0.025em",
              lineHeight: 0.88,
            }}
          >
            BIRD
          </span>
        </div>

        <span
          ref={date1Ref}
          className="font-display flex items-center tabular-nums whitespace-nowrap self-center"
          style={{
            fontSize: "clamp(1.5rem, 6.5vw, 8.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 0.88,
          }}
        >
          13{" "}
          <span className="font-body mx-2 md:mx-4 font-light text-[0.8em]">
            /
          </span>{" "}
          07
        </span>

        {/* Final */}
        <div>
          <span
            className="font-display block whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 8vw, 10.5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.88,
            }}
          >
            FINAL
          </span>
          <span
            className="font-display block whitespace-nowrap"
            style={{
              fontSize: "clamp(1.2rem, 4.5vw, 6rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
            }}
          >
            DEADLINE
          </span>
        </div>
        <span
          ref={date2Ref}
          className="font-display flex items-center tabular-nums whitespace-nowrap self-end"
          style={{
            fontSize: "clamp(1.5rem, 6.5vw, 8.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 0.88,
          }}
        >
          17{" "}
          <span className="font-body mx-2 md:mx-4 font-light text-[0.8em] ">
            /
          </span>{" "}
          08
        </span>
      </div>

      {/* ── Bottom: paragraph + CTA ── */}
      <div
        ref={bottomRef}
        className="w-full max-w-[1600px] mx-auto px-6 md:px-24 lg:px-48 pb-10 md:pb-14 pt-8 flex flex-col items-center gap-6 md:gap-8"
      >
        <p className="font-body text-sm md:text-base leading-relaxed opacity-80 max-w-2xl text-center">
          If you believe in the power of what you create, this is your moment to
          share it with the world and let it shine. Early bird entries are now
          open — secure your spot and make the most of special entry benefits
          while they last.
        </p>

        <a
          href="https://loa-awards-content-network.b-cdn.net/loa-handbook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 md:gap-6 font-display tracking-widest text-xl md:text-4xl bg-loa-purple text-loa-yellow border-4 border-loa-black shadow-[8px_8px_0px_#0A0A0A] px-8 py-4 md:px-16 md:py-8 rounded-2xl transition-all duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-3 uppercase leading-tight"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12">
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
