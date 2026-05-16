const JURY = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/7.png",
  "/assets/8.png",
  "/assets/9.png",
];

const BG_COLORS = [
  "bg-loa-pink",
  "bg-loa-purple",
  "bg-loa-yellow",
  "bg-loa-pink",
  "bg-loa-yellow",
  "bg-loa-purple",
  "bg-loa-pink",
  "bg-loa-yellow",
];

export default function JuryMembers() {
  return (
    <section
      id="jury"
      className="bg-loa-black px-6 md:px-10 py-12 md:py-20 h-fit overflow-hidden"
    >
      <div className="flex flex-col md:flex-row mx-auto items-start md:items-center w-full md:w-fit gap-4 md:gap-8 mb-6">
        <span className="flex-2 font-display text-loa-yellow text-[15vw] md:text-8xl">
          <span className="text-[15vw]">JURY</span> <br /> MEMBERS
        </span>
        <p className="flex-1 text-loa-yellow text-base md:text-xl max-w-full md:max-w-60">
          Meet the jury, a collective of passionate minds and industry leaders
          who share a deep love for advertising and a sharp eye for ideas that
          truly connect.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-10">
        {JURY.map((src, i) => (
          <div
            key={i}
            className={`col-span-1 sm:col-span-2 rounded-full aspect-square overflow-hidden ${i === 6 ? "md:col-start-2" : ""} ${BG_COLORS[i % BG_COLORS.length]}`}
          >
            <img
              src={src}
              alt={`Jury member ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
