import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import ScrollVelocity from "./ScrollVelocity";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Desktop: video background */}
      <video
        ref={videoRef}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // poster="/assets/hero-poster.jpg" // Add a lightweight screenshot of the first frame here to fix perceived loading lag!
      >
        <source src="/assets/loa_hero_viideowe.webm" type="video/webm" />
        <source src="/assets/lloa-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Mobile: purple background with LOA logo */}
      <div className="md:hidden absolute inset-0 bg-loa-purple flex flex-col items-center justify-center overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-loa-pink rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-loa-yellow rounded-full blur-[80px] opacity-20 mix-blend-screen pointer-events-none" />

        {/* Heavy Stamp Logo */}
        <motion.img
          src="/assets/hero-full.svg"
          alt="LOA Awards"
          className="max-w-[80vw] mb-12 relative z-10 filter drop-shadow-2xl cursor-pointer"
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, mass: 1 }}
          whileTap={{ scale: 0.9, rotate: -3 }}
        />

        {/* Kinetic Tickers Below Logo */}
        <motion.div 
          className="w-full flex flex-col justify-center gap-8 z-0"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="w-full bg-loa-yellow py-4 sm:py-5 -rotate-3 scale-110 shadow-xl border-y-4 border-[#0A0A0A]">
            <ScrollVelocity
              texts={["FOR THE LOVE OF CREATIVITY"]}
              velocity={80}
              className="text-loa-purple font-display tracking-widest font-bold text-3xl uppercase px-4"
            />
          </div>
          <div className="w-full bg-loa-pink py-4 sm:py-5 rotate-2 scale-110 shadow-xl border-y-4 border-[#0A0A0A]">
            <ScrollVelocity
              texts={["THE HEARTS OF LOA"]}
              velocity={-80}
              className="text-loa-yellow font-display tracking-widest font-bold text-3xl uppercase px-4"
            />
          </div>
        </motion.div>
      </div>

      {/* ACT logo */}
      <img
        src="/act-logo.png"
        alt="ACT Logo"
        className="hidden md:block absolute top-6 right-8 h-10 object-contain z-10"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce z-10">
        <ChevronDown className="w-4 h-4 text-white" strokeWidth={1.5} />
        <span className="text-[10px] tracking-[0.15em] text-white">
          SCROLL DOWN
        </span>
      </div>
    </div>
  );
}
