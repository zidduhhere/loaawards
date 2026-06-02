export default function Register() {
  return (
    <section id="register" className="relative bg-loa-yellow px-24 md:px-48 flex justify-start items-start flex-col pt-10 md:pt-16 pb-16 overflow-hidden h-fit">
      <img src="https://loa-awards-content-network.b-cdn.net/logo-loa.webp" alt="LOA Logo" loading="lazy" decoding="async" className="hidden md:block absolute md:top-4 md:right-4 md:h-20 lg:top-6 lg:right-8 lg:h-32 object-contain z-10" />
      <div className="flex flex-col md:flex-row items-start justify-start md:items-center w-full gap-8">
        <div className="flex-5 min-w-0">
          <h2 className="font-display text-[12vw] sm:text-[10vw] md:text-[11vw] text-loa-purple uppercase leading-none">
            <span className="text-[14vw] sm:text-[12vw] md:text-[14vw] block">
              LOA
            </span>
            <span className="block">2026</span>
          </h2>
          <h2 className="text-[10vw] sm:text-[9vw] md:text-[9vw] font-display leading-[0.88] text-loa-purple uppercase">
            Register
            <br />
            <span className="text-[16vw] sm:text-[14vw] md:text-[19vw] block">
              Now
            </span>
          </h2>
        </div>

        <div className="flex-2 items-start font-body">
          <p className="text-xl leading-relaxed text-loa-purple">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </p>
        </div>
      </div>
      <button className="px-8 max-w-2xl lg:mt-10 font-display uppercase bg-loa-purple py-8 text-loa-yellow text-xl hover:bg-loa-black hover:text-loa-purple transition-colors duration-300 cursor-pointer">
        Register Now
      </button>
    </section>
  );
}
