const About = () => {
  const paragraph =
    "Celebrating the genuine love for advertising behind every powerful idea and the passion that inspires people to create with care, connect with meaning, and build lasting bonds between brands and people.";
  return (
    <div className="w-screen h-screen flex-center">
      <div className="h-screen flex justify-around items-center z-50 overflow-hidden w-[90%] ">
        <div className="scale-110 text-loa-yellow font-display">
          <h3 className="text-[clamp(100px,10vh,10vh)]  drop-shadow-amber-300 drop-shadow-sm">
            DRIVEN
          </h3>

          <h3>
            <span className="text-[clamp(100px,30vh,60vh)] drop-shadow-amber-300 drop-shadow-md leading-60">
              BY
            </span>
            <br />
            <span className="text-[clamp(100px,30vh,60vh)] drop-shadow-amber-300 drop-shadow-md leading-60">
              LOVE
            </span>
          </h3>
          <p className="absolute top-1 right-[6%] text-loa-yellow font-body text-2 w-[clamp(100px,30vw,200px)] leading-8 opacity-80">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
