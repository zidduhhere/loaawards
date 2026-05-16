type DeadlineItemProps = {
  title: string;
  subtitle: string;
  date: string;
};

const DeadlineItem = ({ title, subtitle, date }: DeadlineItemProps) => (
  <div className="font-display flex items-center justify-between text-loa-yellow">
    <p>
      <span className="text-4xl sm:text-5xl md:text-7xl">{title}</span>
      <br />
      <span className="text-xl sm:text-2xl md:text-3xl tracking-wide leading-8">{subtitle}</span>
    </p>

    <span className="text-4xl sm:text-5xl md:text-7xl mx-2 md:mx-4">:</span>
    <span className="text-5xl sm:text-6xl md:text-8xl text-start">{date}</span>
  </div>
);

export default function Deadlines() {
  return (
    <section className="w-full h-fit pb-20 md:pb-30 bg-loa-pink text-loa-yellow">
      <div className="pt-12 md:pt-20 px-6 md:px-30">
        {/* ABOVE CONTENT */}
        <div className="flex flex-col md:flex-row w-full md:justify-around md:items-center gap-8 md:gap-0">
          <div>
            <DeadlineItem title="EARLY" subtitle="BIRD DEADLINE" date="25/10" />
            <DeadlineItem title="FINAL" subtitle="DEADLINE" date="14/12" />
          </div>

          <div className="font-body text-base md:text-xl md:w-80">
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
          text-[8vw] md:text-[min(10vw,14vh)] py-5
          "
        >
          DOWNLOAD <br />
          GUIDELINES
        </div>
      </div>
    </section>
  );
}
