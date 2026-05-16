import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-loa-purple h-screen flex flex-col justify-center relative"
    >
      <div className="flex-center">
        <img src="/assets/hero-full.svg" className="max-w-[80vw]" />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <ChevronDown className="w-4 h-4 text-white" strokeWidth={1.5} />
        <span className="text-[10px] tracking-[0.15em] text-white">
          SCROLL DOWN
        </span>
      </div>
    </section>
  );
}
