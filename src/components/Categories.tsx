const CATEGORIES = [
  "For the Love of Craft",
  "For the Love of Design",
  "For the Love of the Game",
  "For the Love of Filmmaking",
  "For the Love of Creation",
  "For the Love of Innovation",
  "For the Love of the Screen",
  "For the Love of Possibility",
  "For the Love of Ideas",
  "For the Love of Risk",
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-loa-purple px-10 pt-6 pb-16 h-fit overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-8">
        <h2
          className="text-4xl md:text-8xl lg:text-[140px] text-loa-yellow uppercase leading-none text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CATEGORIES
        </h2>

        <p className="text-sm leading-relaxed text-white/80 text-center max-w-lg">
          Bring your passion for advertising to life with confidence and
          purpose, and give your ideas the stage they deserve.
        </p>

        <div className="flex flex-col items-center">
          <span
            className="text-lg md:text-2xl lg:text-4xl text-white uppercase tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SUBMIT YOUR ENTRIES
          </span>
          <a
            href="#submit"
            className="text-5xl md:text-8xl lg:text-[120px] text-loa-pink uppercase leading-[0.9] flex items-center gap-3 hover:text-loa-yellow transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            HERE
            <img
              src="/assets/down-arrow.svg"
              alt="arrow"
              className="w-8 md:w-12 lg:w-16 invert sepia hue-rotate-[295deg]"
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className="bg-loa-yellow rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center p-4 hover:scale-105 hover:bg-white transition-all duration-200 cursor-default"
            >
              <span
                className="text-[11px] md:text-xs lg:text-sm text-loa-purple uppercase text-center leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
