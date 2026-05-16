const About = () => {
  const paragraph =
    "Celebrating the genuine love for advertising behind every powerful idea and the passion that inspires people to create with care, connect with meaning, and build lasting bonds between brands and people.";
  return (
    <div className="w-screen min-h-screen flex items-center px-6 md:px-30 z-50 overflow-hidden">
      <div className="text-loa-yellow font-display flex">
        <div>
          <div id="driven-by-para" className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            <h3 className="text-[15vw] sm:text-[18vw] md:text-[10vh] drop-shadow-amber-300 drop-shadow-md">
              DRIVEN <br />
              <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
                BY
              </span>
            </h3>
            <p className="text-loa-yellow font-body text-base md:text-2xl w-full md:w-[clamp(100px,30vw,200px)] leading-7 md:leading-8 opacity-80">
              {paragraph}
            </p>
          </div>

          <h3>
            <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
              LOVE
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
