import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  tags = [],
  caseStudyLink,
  githubLink,
  liveLink,
  eyebrow,
  status,
  featured = false,
}) {
  return (
    <article
      className={`group relative overflow-hidden border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-950/[0.04] backdrop-blur-sm transition-all duration-500 sm:hover:-translate-y-1 sm:hover:shadow-2xl sm:hover:shadow-slate-950/[0.08] ${
        featured
          ? "rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8 lg:p-10"
          : "rounded-[1.45rem] p-4 sm:rounded-[1.75rem] sm:p-7"
      }`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-44 w-44 sm:-right-20 sm:-top-20 sm:h-48 sm:w-48 rounded-full bg-indigo-100/50 sm:bg-indigo-100/70 blur-3xl transition-transform duration-700 sm:group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3 sm:gap-5">
          <p className="pt-1 text-[8px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
            {eyebrow || "Selected project"}
          </p>

          {status && (
            <span className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-100 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-slate-500">
              <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-500" />
              {status}
            </span>
          )}
        </div>

        <div
          className={`mt-6 sm:mt-10 ${
            featured
              ? "grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-end"
              : ""
          }`}
        >
          <div>
            <h3
              className={`font-bold tracking-[-0.05em] leading-[0.98] text-slate-950 ${
                featured
                  ? "text-[2.35rem] sm:text-5xl lg:text-6xl"
                  : "text-[1.65rem] sm:text-3xl"
              }`}
            >
              {title}
            </h3>

            {!featured && (
              <p className="mt-3.5 sm:mt-5 max-w-xl text-[0.78rem] sm:text-[0.95rem] leading-[1.65] sm:leading-7 text-slate-600">
                {description}
              </p>
            )}
          </div>

          {featured && (
            <p className="mt-4 sm:mt-0 max-w-md text-[0.8rem] sm:text-base leading-[1.65] sm:leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>

        {tags.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${featured ? "mt-7 sm:mt-12" : "mt-5 sm:mt-7"}`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 text-[8px] sm:text-xs text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={`grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 ${featured ? "mt-7 sm:mt-10" : "mt-6 sm:mt-8"}`}>
          {caseStudyLink && (
            <Link
              to={caseStudyLink}
              className="group/link inline-flex min-h-10 sm:min-h-11 items-center justify-between gap-3 sm:gap-6 rounded-full bg-slate-950 px-3.5 sm:px-5 py-2 sm:py-2.5 text-[0.72rem] sm:text-sm font-medium text-white transition-all duration-300 sm:hover:bg-indigo-600 sm:hover:px-6"
            >
              View case study
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex min-h-10 sm:min-h-11 items-center justify-between gap-3 sm:gap-5 rounded-full border border-slate-300 bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-[0.72rem] sm:text-sm font-medium text-slate-600 transition-all duration-300 sm:hover:border-slate-400 sm:hover:text-slate-950 sm:hover:px-6"
            >
              Explore live
              <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
