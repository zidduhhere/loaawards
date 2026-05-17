export default function Deadlines() {
  return (
    <section className="w-full h-screen pb-20 md:pb-30 bg-loa-pink text-loa-yellow">
      <div className="pt-6 md:pt-10 px-16 md:px-30">
        {/* ABOVE CONTENT */}
        <div className="flex flex-col md:flex-row w-full md:justify-around md:items-center gap-8 md:gap-0">
          <div className="font-display text-loa-yellow grid grid-cols-[auto_auto_auto] items-start gap-y-2">
            {/* Row 1 */}
            <div className="flex flex-col pr-2">
              <span className="text-3xl sm:text-4xl md:text-7xl leading-none">
                EARLY
              </span>
              <span className="text-sm sm:text-2xl md:text-2xl tracking-wide mt-1">
                BIRD DEADLINE
              </span>
            </div>
            <span className="text-4xl sm:text-5xl md:text-7xl leading-none px-2 md:px-4">
              :
            </span>
            <span className="text-4xl md:text-8xl leading-none  px-2">
              25/10
            </span>

            {/* Row 2 */}
            <div className="flex flex-col pr-2">
              <span className="text-3xl sm:text-4xl md:text-7xl leading-none">
                FINAL
              </span>
              <span className="text-sm sm:text-2xl md:text-2xl tracking-wide mt-1">
                DEADLINE
              </span>
            </div>
            <span className="text-4xl sm:text-5xl md:text-7xl leading-none px-2 md:px-4">
              :
            </span>
            <span className="text-4xl md:text-8xl leading-none  px-2">
              14/12
            </span>
          </div>

          <div className="font-body text-base md:text-xl md:w-[40vw] md:max-w-3xl">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            now open. Secure your spot and make the most of special entry
            benefits while they last.
          </div>
        </div>

        {/* BELOW CONTENT */}
        <div
          id="container"
          className="
          bg-loa-purple rounded-2xl
          max-w-6xl mx-auto mt-12 md:mt-20
          flex-center
          font-display text-loa-yellow
          leading-none
          text-[8vw] md:text-[min(10vw,7vw)] py-5
          "
        >
          DOWNLOAD <br />
          GUIDELINES
        </div>
      </div>
    </section>
  );
}
