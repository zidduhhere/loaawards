const About = () => {
  const paragraph =
    "Celebrating the genuine love for advertising behind every powerful idea and the passion that inspires people to create with care, connect with meaning, and build lasting bonds between brands and people.";
  return (
    <div className="w-screen min-h-screen flex-center px-24 md:px-30 overflow-hidden">
      <div className="text-loa-yellow font-display">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center">
          <h3 className="text-[15vw] sm:text-[18vw] md:text-[10vh] drop-shadow-amber-300 drop-shadow-md">
            DRIVEN <br />
            <span className="text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
              BY
            </span>
          </h3>

          <h3 className="order-2 md:order-3 w-full">
            <span className=" text-[20vw] sm:text-[25vw] md:text-[30vh] drop-shadow-amber-300 drop-shadow-md leading-none">
              LOVE
            </span>
          </h3>

          <p className="order-3 md:order-2  font-body text-base md:text-xl w-100 gap-4  leading-7 md:leading-8 opacity-80 mt-4 md:mt-0 md:ml-12">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
