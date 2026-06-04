import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paragraph =
    "The Love Of Advertising Awards (LOA Awards) are built on a simple belief that the best ideas in advertising come from people who truly love the craft. Advertising keeps changing with new platforms, technologies and formats. But one thing remains constant: the passion to create ideas that connect with people and build brands. The LOA Awards celebrate this passion. At its heart, the idea is simple - awards by people who love advertising, for people who love creating it.";

  const sectionRef = useRef<HTMLDivElement>(null);
  const drivenRef = useRef<HTMLHeadingElement>(null);
  const loveRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen flex-center overflow-hidden lg:pb-24 pb-12"
    >
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        <img
          src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
          alt="LOA Logo"
          loading="lazy"
          decoding="async"
          className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-10"
        />
        <div className="text-loa-yellow font-display mt-24 md:mt-32 xl:mt-48 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12 xl:items-start">
            <div className="xl:col-span-8 flex flex-col leading-none uppercase tracking-tighter">
              <h3
                ref={drivenRef}
                style={{
                  fontSize: "clamp(5rem, 12.5vw, 12.5rem)",
                  lineHeight: 0.85,
                }}
              >
                DRIVEN <br />
                <span style={{ fontSize: "clamp(7rem, 18vw, 18rem)" }}>BY</span>
              </h3>
              <h3
                ref={loveRef}
                style={{
                  fontSize: "clamp(7rem, 18vw, 18rem)",
                  lineHeight: 0.85,
                }}
              >
                LOVE
              </h3>
            </div>

            <div className="xl:col-span-4 pb-2 xl:pb-12">
              <p className="font-body text-base md:text-lg xl:text-xl leading-relaxed opacity-90">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
