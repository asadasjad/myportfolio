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
      className="min-h-screen flex items-center px-5 sm:px-8 lg:px-12 py-24 sm:py-28"
    >
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <p className="mb-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Product-focused · Frontend Developer
          </p>

          <h1 className="max-w-2xl text-[2.7rem] sm:text-[3.6rem] lg:text-[4.25rem] font-bold tracking-[-0.05em] leading-[0.98] text-slate-950">
            <span className="block">Your customers</span>
            <span className="block whitespace-nowrap">
              <span className="mr-2 sm:mr-3 font-serif italic font-normal tracking-[-0.025em] text-slate-500">
                already
              </span>
              <span>expect better.</span>
            </span>
          </h1>

          <p className="mt-8 sm:mt-10 max-w-lg text-[0.95rem] sm:text-base leading-7 text-slate-600">
            I build fast, thoughtful digital experiences people love to use —
             great digital products aren&apos;t optional anymore.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <button
              onClick={() => scrollTo("projects")}
              className="shiny-btn w-full sm:w-auto px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-600/20 hover:scale-[1.03] hover:px-6 transition-all duration-300"
            >
              See my work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="shiny-btn w-full sm:w-auto px-5 py-2 text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full hover:scale-[1.03] hover:px-6 transition-all duration-300"
            >
              Let's talk
            </button>
          </div>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-500">
            <span>Fast execution</span>
            <span className="text-slate-300">•</span>
            <span>Thoughtful UX</span>
            <span className="text-slate-300">•</span>
            <span>Built to perform</span>
          </div>
        </div>

        <div className="relative lg:min-h-[440px] flex items-center justify-center">
          <div className="absolute inset-4 sm:inset-10 bg-indigo-100/70 rounded-[2.5rem] blur-3xl" />

          <button
            onClick={() => scrollTo("projects")}
            className="group relative w-full max-w-[31rem] overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-3 sm:p-4 text-left shadow-xl shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-slate-900/15"
          >
            <div className="aspect-[4/3] rounded-[1.25rem] bg-slate-950 p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-slate-400">
                  Sneak peek
                </span>
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-indigo-300">Something bigger is taking shape</p>
                <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                  UniWay
                </h2>
                <p className="mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-slate-400">
                  A mobile-first campus navigation experience designed to make
                  finding your way effortless.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-4 pb-1">
              <span className="text-xs sm:text-sm text-slate-500">
                Product · Frontend · UX
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-900">
                Project in progress
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
