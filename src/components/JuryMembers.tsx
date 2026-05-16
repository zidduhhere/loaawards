type JuryMember = {
  src: string;
  name: string;
  position: string;
};

const JURY: JuryMember[] = [
  {
    src: "/assets/1.png",
    name: "Sarah Mitchell",
    position: "Chief Creative Officer",
  },
  {
    src: "/assets/2.png",
    name: "James Okafor",
    position: "Executive Producer",
  },
  {
    src: "/assets/4.png",
    name: "Priya Nair",
    position: "Global Strategy Director",
  },
  {
    src: "/assets/5.png",
    name: "Marco Ferretti",
    position: "Head of Brand Experience",
  },
  { src: "/assets/6.png", name: "Lena Bauer", position: "Creative Director" },
  { src: "/assets/7.png", name: "Daniel Chow", position: "VP of Marketing" },
  {
    src: "/assets/8.png",
    name: "Amara Diallo",
    position: "Head of Design Innovation",
  },
  {
    src: "/assets/9.png",
    name: "Tom Reeves",
    position: "Chief Marketing Officer",
  },
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
        <span className="flex-2 font-display text-loa-yellow text-[15vw] md:text-8xl leading-20">
          <span className="text-[15vw]">JURY</span> <br /> MEMBERS
        </span>
        <p className="flex-1 text-loa-yellow text-base md:text-xl max-w-full md:max-w-60">
          Meet the jury, a collective of passionate minds and industry leaders
          who share a deep love for advertising and a sharp eye for ideas that
          truly connect.
        </p>
      </div>
      <div className="px-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-10 max-w-5xl mx-auto">
        {JURY.map((member, i) => (
          <div
            key={i}
            className={`col-span-1 sm:col-span-2 aspect-square ${i === 6 ? "md:col-start-2" : ""} perspective-[600px] group`}
          >
            {/* Flip wrapper */}
            <div className="relative w-full h-full transform-3d transition-transform duration-500 group-hover:transform-[rotateY(180deg)]">
              {/* Front — photo */}
              <div
                className={`absolute inset-0 rounded-full overflow-hidden backface-hidden ${BG_COLORS[i % BG_COLORS.length]}`}
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              {/* Back — name & position */}
              <div
                className={`absolute inset-0 rounded-full backface-hidden transform-[rotateY(180deg)] ${BG_COLORS[i % BG_COLORS.length]} flex flex-col items-center justify-center px-3 text-center`}
              >
                <p className="font-display text-loa-white text-2xl leading-tight">
                  {member.name}
                </p>
                <p className="font-body text-loa-black text-[10px] sm:text-xs mt-1 opacity-80 leading-snug">
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
