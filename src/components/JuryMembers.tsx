import { useState } from "react";

type JuryMember = {
  src?: string;
  name: string;
  position: string;
  imageClassName?: string;
};

const JURY: JuryMember[] = [
  {
    src: "https://loa-awards-content-network.b-cdn.net/1.webp",
    name: "Bobby Pawar",
    position: "Former Chairman\nHavas - Jury Chair",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/3.webp",
    name: "Swarup BR",
    position: "Co-Founder\nStark Communications",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/4.webp",
    name: "Pooja Manek",
    position: "Founding Member\nTalented",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/9.webp",
    name: "Mithila Saraf",
    position: "CEO, Famous Innovations",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/8.webp",
    name: "Krishnanunni",
    position: "Creative Head, Ather Energy",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/2.webp",
    name: "Senthil Kumar",
    position: "CCO, VML",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/5.webp",
    name: "PK Anil Kumar",
    position: "Director\nCreative Excellence McCann",
    imageClassName: "object-bottom",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/6.webp",
    name: "Sagar Jadhav",
    position: "ECD, Ogilvy",
  },
  {
    name: "Nishad Ramachandran",
    position: "Chief AI & Digital Officer\nVidzai",
  },
  {
    src: "https://loa-awards-content-network.b-cdn.net/11.webp",
    name: "Anna Joseph",
    position: "Independent Filmmaker",
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
  "bg-loa-purple",
  "bg-loa-pink",
];

function JuryCard({ member, index }: { member: JuryMember; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const bg = BG_COLORS[index % BG_COLORS.length];
  const isYellow = bg === "bg-loa-yellow";
  const nameColor = isYellow ? "text-loa-black" : "text-loa-white";
  const posColor = isYellow ? "text-loa-black" : "text-loa-white";

  return (
    <div
      className={`col-span-1 aspect-square w-full max-w-[280px] sm:max-w-none mx-auto cursor-pointer mt-10 group/jury`}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`w-full h-full rounded-full border-4 border-loa-black shadow-[8px_8px_0px_#0A0A0A] transition-all duration-300 ease-out group-hover/jury:translate-x-[4px] group-hover/jury:translate-y-[4px] group-hover/jury:shadow-[0px_0px_0px_#0A0A0A] group-hover/jury:-rotate-3 perspective-[600px]`}
      >
        <div
          className={`relative w-full h-full transform-3d transition-transform duration-500 rounded-full ${flipped ? "transform-[rotateY(180deg)]" : ""}`}
        >
          {/* Front — photo */}
          <div
            className={`absolute inset-0 rounded-full overflow-hidden backface-hidden ${bg}`}
          >
            {member.src && (
              <img
                src={member.src}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${member.imageClassName || ""}`}
                onError={(e) => {
                  // If image fails to load, let's at least hide the broken icon so the background color shows
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
          {/* Back — name & position */}
          <div
            className={`absolute inset-0 rounded-full backface-hidden transform-[rotateY(180deg)] ${bg} flex flex-col items-center justify-center px-6 text-center`}
          >
            <p
              className={`font-display ${nameColor} text-xl sm:text-2xl md:text-3xl leading-none whitespace-pre-line`}
            >
              {member.name}
            </p>
            <p
              className={`font-body ${posColor} text-sm sm:text-base md:text-base mt-3 font-bold leading-snug whitespace-pre-line`}
            >
              {member.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JuryMembers() {
  return (
    <section
      id="jury"
      className="relative bg-loa-black px-6 md:px-24 lg:px-48 pt-24 md:pt-36 pb-12 md:pb-20 h-fit overflow-hidden"
    >
      <img
        src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp"
        alt="LOA Logo"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute md:top-4 md:right-4 md:h-[104px] lg:top-6 lg:right-8 lg:h-[166px] object-contain z-20 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col md:flex-row mx-auto items-start md:items-center w-full md:w-fit gap-4 md:gap-8 mb-6 pointer-events-none">
        <span className="flex-2 font-display text-loa-yellow text-[15vw] md:text-8xl leading-20">
          <span className="text-[15vw]">JURY</span> <br />
          <span className="inline-flex items-center gap-3">
            OF HEARTS
            <img
              src="/assets/love-icon-small.svg"
              alt="Heart"
              className="inline-block h-[0.75em] w-auto translate-y-[-5%]"
            />
          </span>
        </span>
        <p className="flex-1 text-loa-yellow text-base md:text-xl max-w-full md:max-w-60">
          Meet the jury, a collective of passionate minds and industry leaders
          who share a deep love for advertising and a sharp eye for ideas that
          truly connect.
        </p>
      </div>
      <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto w-full">
        {JURY.map((member, i) => (
          <JuryCard key={i} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
