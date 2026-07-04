import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CaseStudyLayout({
  eyebrow = "Case study",
  title,
  projectName,
  summary,
  meta = [],
  sections = [],
  githubUrl = "https://github.com/asadasjad/feedback-insight-dashboard",
  liveUrl = "https://insight-dashboard-alpha.vercel.app/",
}) {
  const navigate = useNavigate();

  return (
    <article className="min-h-screen bg-white text-slate-950">
      <header className="relative overflow-hidden px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="group mb-14 sm:mb-20 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-slate-950"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to work
          </button>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="mb-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {eyebrow}
            </p>

            <h1 className="max-w-5xl text-[2.8rem] sm:text-[4.4rem] lg:text-[5.8rem] font-bold tracking-[-0.06em] leading-[0.92] text-slate-950">
              {title}
            </h1>

            <div className="mt-10 sm:mt-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-20 items-end">
              <p className="max-w-2xl text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-[-0.02em] text-slate-600">
                {summary}
              </p>

              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-500 hover:px-6"
                  >
                    Live demo
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:px-6"
                  >
                    View code
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {meta.length > 0 && (
            <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 border-t border-slate-200 pt-7">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-slate-700">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="px-5 sm:px-8 lg:px-12 pb-24 sm:pb-36">
        <div className="max-w-6xl mx-auto">
          {projectName && (
            <div className="mb-20 sm:mb-28 lg:mb-36 flex justify-end">
              <p className="max-w-md text-right text-xs sm:text-sm leading-6 text-slate-400">
                {projectName}
              </p>
            </div>
          )}

          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {sections.map((section, index) => {
              const alignRight = index % 2 === 1;

              return (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`grid lg:grid-cols-12 gap-6 lg:gap-8 ${
                    alignRight ? "lg:text-left" : ""
                  }`}
                >
                  <div
                    className={
                      alignRight
                        ? "lg:col-start-7 lg:col-span-2"
                        : "lg:col-start-1 lg:col-span-2"
                    }
                  >
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                      0{index + 1}
                    </p>
                  </div>

                  <div
                    className={
                      alignRight
                        ? "lg:col-start-8 lg:col-span-5"
                        : "lg:col-start-3 lg:col-span-7"
                    }
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.045em] leading-tight text-slate-950">
                      {section.heading}
                    </h2>

                    {section.body && (
                      <p className="mt-6 max-w-2xl text-[0.95rem] sm:text-lg leading-8 text-slate-600">
                        {section.body}
                      </p>
                    )}

                    {section.list && (
                      <ul className="mt-7 space-y-4">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="grid grid-cols-[auto_1fr] gap-4 text-[0.95rem] sm:text-base leading-7 text-slate-600"
                          >
                            <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.media && (
                      <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-3 sm:p-5 shadow-xl shadow-slate-950/5">
                        {section.media}
                      </div>
                    )}
                  </div>
                </motion.section>
              );
            })}
          </div>

          <section className="mt-28 sm:mt-40 lg:mt-52 border-t border-slate-200 pt-10 sm:pt-14">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-end">
              <h2 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.055em] leading-[0.95] text-slate-950">
                That&apos;s the thinking.
                <span className="block sm:ml-[10%] font-serif italic font-normal tracking-[-0.025em] text-slate-500">
                  Now see the work.
                </span>
              </h2>

              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-between gap-8 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600"
                  >
                    Open live demo <span>↗</span>
                  </a>
                )}
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex min-h-12 items-center justify-between gap-8 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  More projects <span>→</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
