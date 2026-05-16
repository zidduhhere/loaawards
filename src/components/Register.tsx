export default function Register() {
  return (
    <section className="bg-loa-yellow flex-center h-auto md:h-screen py-16 md:py-0">
      <div className="flex flex-col md:flex-row items-start md:items-center w-[88vw] md:w-[80vw] gap-8 md:gap-0">
        <div className="flex-5">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[11vw] text-loa-purple uppercase leading-[1]">
            <span className="text-[14vw] sm:text-[12vw] md:text-[14vw]">LOA</span>
            <br />
            2026
          </h2>
          <h2 className="text-[10vw] sm:text-[9vw] md:text-[9vw] font-display leading-[0.88] text-loa-purple uppercase">
            Register
            <br />
            <span className="text-[16vw] sm:text-[14vw] md:text-[19vw]">Now</span>
          </h2>
        </div>

        <div className="flex-2 items-start font-body">
          <p className="text-sm leading-relaxed text-loa-purple">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </p>
        </div>
      </div>
    </section>
  );
}
