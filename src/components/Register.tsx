import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Register() {
  const sectionRef = useRef<HTMLElement>(null);
  const loaRef = useRef<HTMLSpanElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const registerRef = useRef<HTMLHeadingElement>(null);
  const nowRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.fromTo(
        loaRef.current,
        { y: 180, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
      )
        .fromTo(
          yearRef.current,
          { y: 180, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          registerRef.current,
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          nowRef.current,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          bodyRef.current,
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          btnRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-loa-yellow flex justify-start items-center flex-col max-h-full py-16 overflow-hidden"
    >
      <div className="flex flex-col px-12 md:px-0 md:flex-row items-start justify-start md:items-center w-[88vw] md:w-[80vw] gap-8 ">
        <div className="flex-5 min-w-0">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[11vw] text-loa-purple uppercase leading-none">
            <span
              ref={loaRef}
              className="text-[14vw] sm:text-[12vw] md:text-[14vw] block"
            >
              LOA
            </span>
            <span ref={yearRef} className="block">
              2026
            </span>
          </h2>
          <h2
            ref={registerRef}
            className="text-[10vw] sm:text-[9vw] md:text-[9vw] font-display leading-[0.88] text-loa-purple uppercase"
          >
            Register
            <br />
            <span
              ref={nowRef}
              className="text-[16vw] sm:text-[14vw] md:text-[19vw] block"
            >
              Now
            </span>
          </h2>
        </div>

        <div ref={bodyRef} className="flex-2 items-start font-body">
          <p className="text-xl leading-relaxed text-loa-purple">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </p>
        </div>
      </div>
      <button
        ref={btnRef}
        className="px-8 max-w-2xl lg:mt-10 font-display uppercase bg-loa-purple py-8 text-loa-yellow text-xl hover:bg-loa-black hover:text-loa-purple transition-colors duration-300 cursor-pointer"
      >
        Register Now
      </button>
    </section>
  );
}
