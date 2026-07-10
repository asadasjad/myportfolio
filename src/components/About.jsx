export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-16 sm:py-32 bg-white"
    >
      <div className="pointer-events-none absolute -left-44 bottom-4 h-72 w-72 sm:-left-32 sm:bottom-8 sm:h-80 sm:w-80 rounded-full bg-indigo-100/30 sm:bg-indigo-100/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12 sm:gap-14 lg:gap-20 items-start">
          <div className="lg:pt-3">
            <p className="mb-3 sm:mb-5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              A little about me
            </p>

            <p className="max-w-[18rem] sm:max-w-xs text-[0.78rem] sm:text-base leading-[1.7] sm:leading-7 text-slate-500">
              Developer by craft. Product-minded by instinct. Usually somewhere
              between a half-finished idea and making it real.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-[2.55rem] sm:text-[3.6rem] lg:text-[4.25rem] font-bold tracking-[-0.06em] sm:tracking-[-0.05em] leading-[0.9] sm:leading-[0.98] text-slate-950">
              I care about the
              <span className="block ml-[7%] sm:ml-0 lg:-ml-[10%]">
                <span className="font-serif italic font-normal tracking-[-0.025em] text-slate-500">
                  feeling
                </span>{" "}
                behind the interface.
              </span>
            </h2>

            <div className="mt-8 sm:mt-14 grid sm:grid-cols-2 gap-5 sm:gap-10 lg:gap-14">
              <p className="max-w-[19rem] text-[0.8rem] sm:text-base leading-[1.7] sm:leading-7 text-slate-600">
                I&apos;m a frontend developer who likes working where design,
                engineering, and product thinking overlap. The goal isn&apos;t just
                to make something clean — it&apos;s to make it obvious, fast, and
                satisfying to use.
              </p>

              <p className="max-w-[18.5rem] ml-[8%] sm:ml-0 text-[0.8rem] sm:text-base leading-[1.7] sm:leading-7 text-slate-600 sm:mt-12">
                I&apos;m especially drawn to ambitious ideas, thoughtful interaction,
                and the tiny details people may never notice consciously — but
                would absolutely miss if they were gone.
              </p>
            </div>

            <div className="mt-9 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2.5 sm:gap-y-3 text-[9px] sm:text-xs text-slate-500">
              <span>Frontend engineering</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Product thinking</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Interaction design</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Visual storytelling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
