import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paragraph =
    "The Love Of Advertising Awards (LOA Awards) are built on a simple belief that the best ideas in advertising come from people who truly love the craft. Advertising keeps changing with new platforms, technologies and formats. But one thing remains constant: the passion to create ideas that connect with people and build brands. The LOA Awards celebrate this passion. At its heart, the idea is simple - awards by people who love advertising, for people who love creating it.";

  const sectionRef = useRef<HTMLDivElement>(null);
  const drivenRef = useRef<HTMLHeadingElement>(null);
  const loveRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(drivenRef.current, {
        x: "-120%",
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(loveRef.current, {
        x: "120%",
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative w-screen min-h-screen flex-center px-12 md:px-24 overflow-hidden"
    >
      <img
        src="/assets/logo-loa.png"
        alt="LOA Logo"
        className="absolute top-6 right-8 h-32 object-contain z-10"
      />
      <div className="text-loa-yellow font-display">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center">
          <h3
            ref={drivenRef}
            className="text-[15vw] sm:text-[18vw] md:text-[10vh] drop-shadow-amber-300 drop-shadow-md"
          >
            DRIVEN <br />
            <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] leading-none">
              BY
            </span>
          </h3>

          <h3 ref={loveRef} className="order-2 md:order-3 w-full">
            <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
              LOVE
            </span>
          </h3>

          <p className="order-3 md:order-2 font-body text-base md:text-md w-100 gap-4 leading-7 md:leading-8 opacity-80 mt-4 md:mt-0 md:ml-12">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
