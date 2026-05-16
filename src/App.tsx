import { useRef } from "react";
import { useGSAP } from "@gsap/react";
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

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const deadlinesRef = useRef<HTMLDivElement>(null);
  const heroPanelRef = useRef<HTMLDivElement>(null);
  const deadlinesPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero → Register: yellow curtain rises from bottom
      gsap.fromTo(
        heroPanelRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "60% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Deadlines → Awards: yellow curtain rises from bottom
      gsap.fromTo(
        deadlinesPanelRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: deadlinesRef.current,
            start: "60% top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-screen">
      <Navbar />

      {/* Hero wrapped for overflow-clipped curtain */}
      <div ref={heroRef} className="relative overflow-hidden">
        <Hero />
        {/* Yellow curtain: absolute, bottom-anchored, viewport-height, starts below */}
        <div
          ref={heroPanelRef}
          className="absolute bottom-0 left-0 w-full h-screen bg-loa-yellow pointer-events-none z-10"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      <Register />
      <About />

      {/* Deadlines wrapped for overflow-clipped curtain */}
      <div ref={deadlinesRef} className="relative overflow-hidden">
        <Deadlines />
        {/* Yellow curtain: absolute, bottom-anchored, viewport-height, starts below */}
        <div
          ref={deadlinesPanelRef}
          className="absolute bottom-0 left-0 w-full h-screen bg-loa-yellow pointer-events-none z-10"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      <Awards />
      <Categories />
      <JuryMembers />
      <Winners />
      <Footer />
    </div>
  );
}
