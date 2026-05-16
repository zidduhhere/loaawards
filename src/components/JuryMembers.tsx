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

export default function JuryMembers() {
  return (
    <section
      id="jury"
      className="bg-loa-black px-10 py-20 h-fit overflow-hidden"
    >
      <div>
        <div className="flex flex-row mx-auto items-center w-fit gap-8  ">
          {/* DIV */}
          <span className="flex-2 font-display text-loa-yellow text-8xl">
            <span className="text-[15vw]">JURY</span> <br /> MEMBERS
          </span>
          <p className="flex-1 text-loa-yellow text-xl max-w-60">
            Meet the jury, a collective of passionate minds and industry leaders
            who share a deep love for advertising and a sharp eye for ideas that
            truly connect.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-10 mt-6">
          {/* IMAGES */}
          {JURY.map((src, i) => (
            <div
              key={i}
              className={`col-span-2 ${i === 6 ? "col-start-2" : ""}`}
            >
              <img
                src={src}
                alt={`Jury member ${i + 1}`}
                className="bg-amber-300 rounded-full aspect-square object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
