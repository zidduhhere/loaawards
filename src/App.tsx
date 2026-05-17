import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./components/Register";
import About from "./components/About";
import Deadlines from "./components/Deadlines";
import Awards from "./components/Awards";
import Categories from "./components/Categories";
import JuryMembers from "./components/JuryMembers";
import Winners from "./components/Winners";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const deadlinesRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const heroPanelRef = useRef<HTMLDivElement>(null);
  const deadlinesPanelRef = useRef<HTMLDivElement>(null);
  const awardsPanelRef = useRef<HTMLDivElement>(null);
  //
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero → Register: yellow curtain rises from bottom via clip-path
      gsap.fromTo(
        heroPanelRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Deadlines → Awards: yellow curtain rises from bottom via clip-path
      gsap.fromTo(
        deadlinesPanelRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: deadlinesRef.current,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Awards → Categories: yellow curtain rises from bottom via clip-path
      gsap.fromTo(
        awardsPanelRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: awardsRef.current,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen">
      <Navbar />

      {/* Hero wrapped for curtain */}
      <div ref={heroRef} className="relative">
        <Hero />
        {/* Yellow curtain: clip-path reveals from bottom */}
        <div
          ref={heroPanelRef}
          className="absolute inset-0 bg-loa-yellow pointer-events-none z-10"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        />
      </div>

      <Register />
      <About />

      {/* Deadlines wrapped for curtain */}
      <div ref={deadlinesRef} className="relative">
        <Deadlines />
        {/* Yellow curtain: clip-path reveals from bottom */}
        <div
          ref={deadlinesPanelRef}
          className="absolute inset-0 bg-loa-yellow pointer-events-none z-10"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        />
      </div>

      {/* Awards wrapped for curtain */}
      <div ref={awardsRef} className="relative">
        <Awards />
        {/* Yellow curtain: clip-path reveals from bottom */}
        <div
          ref={awardsPanelRef}
          className="absolute inset-0 bg-loa-purple pointer-events-none z-10"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        />
      </div>

      <Categories />
      <JuryMembers />
      <Winners />
      <Footer />
    </div>
  );
}
