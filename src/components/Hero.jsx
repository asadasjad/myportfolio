export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      80

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-0 sm:min-h-screen flex items-center px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:py-28"
    >
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.08fr_0.92fr] gap-10 sm:gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <p className="mb-4 sm:mb-5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.2em] text-indigo-600">
            Product-focused · Frontend Developer
          </p>

          <h1 className="max-w-2xl text-[2.65rem] sm:text-[3.6rem] lg:text-[4.25rem] font-bold tracking-[-0.055em] sm:tracking-[-0.05em] leading-[0.94] sm:leading-[0.98] text-slate-950">
            <span className="block">Your customers</span>
            <span className="block sm:whitespace-nowrap">
              <span className="mr-2 sm:mr-3 font-serif italic font-normal tracking-[-0.025em] text-slate-500">
                already
              </span>
              <span>expect better.</span>
            </span>
          </h1>

          <p className="mt-6 sm:mt-10 max-w-[22rem] sm:max-w-lg text-[0.9rem] sm:text-base leading-6 sm:leading-7 text-slate-600">
            I build fast, thoughtful digital experiences people love to use —
            great digital products aren&apos;t optional anymore.
          </p>

          <div className="mt-7 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="shiny-btn basis-[62%] sm:basis-auto sm:flex-none sm:w-auto px-5 py-2.5 sm:py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-600/20 hover:scale-[1.03] hover:px-6 transition-all duration-300"
            >
              See my work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="shiny-btn flex-1 sm:flex-none sm:w-auto px-5 py-2.5 sm:py-2 text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full hover:scale-[1.03] hover:px-6 transition-all duration-300"
            >
              Let's talk
            </button>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4 text-[10px] sm:text-xs text-slate-500">
            <span>Fast execution</span>
            <span className="text-slate-300">/</span>
            <span>Thoughtful UX</span>
            <span className="text-slate-300">/</span>
            <span>Built to perform</span>
          </div>
        </div>

        <div className="relative min-h-0 lg:min-h-[440px] flex items-center justify-center -mt-1 sm:mt-0">
          <div className="absolute -inset-2 sm:inset-10 bg-indigo-100/70 rounded-[2.5rem] blur-3xl" />

          <a
            href="/projects/uniway"
            className="group relative block w-[96%] ml-auto sm:ml-0 sm:w-full max-w-[31rem] overflow-hidden rounded-[1.4rem] sm:rounded-[1.6rem] border border-slate-200 bg-white p-2.5 sm:p-4 text-left shadow-xl shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-slate-900/15"
          >
            <div className="relative min-h-[18rem] sm:min-h-0 sm:aspect-[4/3] rounded-[1.05rem] sm:rounded-[1.25rem] bg-slate-950 p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-xs uppercase tracking-[0.18em] text-slate-400">
                  Sneak peek
                </span>
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-5 top-[4.2rem] bottom-[6.6rem] sm:hidden" aria-hidden="true">
                <div className="absolute left-[8%] top-[58%] h-px w-[32%] origin-left -rotate-[18deg] bg-indigo-400/45" />
                <div className="absolute left-[36%] top-[47%] h-px w-[28%] origin-left rotate-[14deg] bg-indigo-400/45" />
                <div className="absolute left-[61%] top-[56%] h-px w-[25%] origin-left -rotate-[28deg] bg-indigo-400/45" />

                <span className="absolute left-[5%] top-[54%] h-2.5 w-2.5 rounded-full border border-indigo-300 bg-slate-950 shadow-[0_0_0_4px_rgba(99,102,241,0.08)]" />
                <span className="absolute left-[36%] top-[42%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.55)]" />
                <span className="absolute left-[62%] top-[52%] h-2 w-2 rounded-full border border-slate-500 bg-slate-950" />
                <span className="absolute right-[8%] top-[31%] grid h-7 w-7 place-items-center rounded-full border border-indigo-400/40 bg-indigo-400/10">
                  <span className="h-2 w-2 rounded-full bg-indigo-300" />
                </span>

                <div className="absolute left-[15%] top-[16%] h-px w-[68%] bg-slate-700/30" />
                <div className="absolute left-[24%] top-[78%] h-px w-[58%] bg-slate-700/25" />
                <div className="absolute left-[48%] top-[4%] h-[82%] w-px bg-slate-700/20" />
              </div>

              <div className="relative z-10">
                <p className="text-[10px] sm:text-sm text-indigo-300">
                  Something bigger is taking shape
                </p>
                <h2 className="mt-2 text-[2rem] sm:text-5xl font-semibold tracking-tight text-white">
                  UniWay
                </h2>
                <p className="mt-3 max-w-[17rem] sm:max-w-sm text-xs sm:text-base leading-5 sm:leading-relaxed text-slate-400">
                  A mobile-first campus navigation experience designed to make
                  finding your way effortless.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-2 pt-3.5 sm:pt-4 pb-1">
              <span className="text-[9px] sm:text-sm text-slate-500">
                Product · Frontend · UX
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm font-medium text-slate-700 sm:text-slate-900 whitespace-nowrap">
                Project in progress
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
