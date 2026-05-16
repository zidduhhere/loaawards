export default function Register() {
  return (
    <section className="bg-loa-yellow flex-center h-screen">
      <div className="scale-100 flex-center w-[80vw] h-screen">
        <div className="flex-5">
          <h2 className="font-display text-[clamp(80px,11vw,300px)] text-loa-purple uppercase leading-[10vw]">
            <span className="text-[clamp(100px,14vw,300px)]">LOA</span>
            <br />
            2026
          </h2>
          <h2 className="text-[clamp(80px,9vw,180px)] font-display  leading-[0.88] text-loa-purple uppercase">
            Register
            <br />
            <span className="text-[clamp(120px,19vw,350px)]">Now</span>
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
