import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Deadlines() {
  const sectionRef = useRef<HTMLElement>(null);
  const earlyRef = useRef<HTMLDivElement>(null);
  const date1Ref = useRef<HTMLSpanElement>(null);
  const finalRef = useRef<HTMLSpanElement>(null);
  const date2Ref = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-screen bg-loa-pink text-loa-yellow flex flex-col overflow-hidden py-12 md:py-0"
    >
      <img
        src="/assets/logo-loa.png"
        alt="LOA Logo"
        className="hidden md:block absolute top-6 right-6 h-28 md:h-32 object-contain z-20 pointer-events-none"
      />

      {/* ── Deadline rows ── */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1600px] mx-auto px-6 md:px-24 lg:px-48 pt-10 md:pt-12">
        {/* Early Bird */}
        <div className="flex flex-row items-center justify-between">
          <div ref={earlyRef} className="flex flex-col">
            <span
              className="font-display block"
              style={{
                fontSize: "clamp(2.5rem, 10vw, 10rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.88,
              }}
            >
              EARLY
            </span>
            <span
              className="font-display block"
              style={{
                fontSize: "clamp(3.1rem, 12.5vw, 12.5rem)",
                letterSpacing: "0.025em",
                lineHeight: 0.88,
              }}
            >
              BIRD
            </span>
          </div>

          <span
            ref={date1Ref}
            className="font-display block tabular-nums"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
            }}
          >
            25 / 10
          </span>
        </div>

        <div className="h-6 md:h-10" />

        {/* Final */}
        <div className="flex flex-row items-end justify-between">
          <span
            ref={finalRef}
            className="font-display block"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
            }}
          >
            FINAL
          </span>
          <span
            ref={date2Ref}
            className="font-display block tabular-nums"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 10rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
            }}
          >
            14 / 12
          </span>
        </div>
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

        <button className="font-display tracking-widest text-xl md:text-4xl bg-loa-purple text-loa-yellow border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] px-8 py-4 md:px-16 md:py-8 rounded-2xl transition-all duration-200 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0A0A0A] hover:-rotate-3 uppercase leading-tight">
          DOWNLOAD
          <br />
          GUIDELINES
        </button>
      </div>
    </section>
  );
}
