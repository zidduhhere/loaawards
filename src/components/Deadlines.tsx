type DeadlineItemProps = {
  title: string;
  subtitle: string;
  date: string;
};

const DeadlineItem = ({ title, subtitle, date }: DeadlineItemProps) => (
  <div className="font-display flex items-center justify-between text-loa-yellow">
    <p className="">
      <span className="text-7xl">{title}</span>
      <br />
      <span className="text-3xl tracking-wide leading-8">{subtitle}</span>
    </p>

    <span className="text-7xl mx-4">:</span>
    <span className="text-8xl text-start">{date}</span>
  </div>
);

export default function Deadlines() {
  return (
    <section className="w-full h-[80vh] bg-loa-pink text-loa-yellow">
      <div className="pt-20 px-30  ">
        {/* ABOVE CONTENT */}
        <div className="flex w-full justify-around items-center">
          <div className="">
            <DeadlineItem title="EARLY" subtitle="BIRD DEADLINE" date="25/10" />
            <DeadlineItem title="FINAL" subtitle="DEADLINE" date="14/12" />
          </div>

          <div className="font-body items-center text-xl w-80">
            If you believe in the power of what you create, this is your moment
            to share it with the world and let it shine. Early bird entries are
            nowopen. Secure your spot and make the most of special entry
            benefits while they last.
          </div>
        </div>

        {/* BELOW CONTENT */}
        <div className=" mt-20">
          <div
            id="container"
            className="
            bg-loa-purple rounded-2xl
            flex-center 
              font-display text-loa-yellow
              leading-[10vw]
              text-[10vw] py-5 
             "
          >
            DOWNLOAD <br />
            GUIDELINES
          </div>
        </div>
      </div>
    </section>
  );
}
