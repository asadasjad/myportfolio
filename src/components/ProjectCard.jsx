import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  tags = [],
  caseStudyLink,
  githubLink,
  eyebrow,
  status,
  featured = false,
}) {
  return (
    <article
      className={`group relative overflow-hidden border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-950/[0.04] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.08] ${
        featured
          ? "rounded-[2rem] p-6 sm:p-8 lg:p-10"
          : "rounded-[1.75rem] p-5 sm:p-7"
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-100/70 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
            {eyebrow || "Selected project"}
          </p>

          {status && (
            <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {status}
            </span>
          )}
        </div>

        <div
          className={`mt-8 sm:mt-10 ${
            featured
              ? "grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-end"
              : ""
          }`}
        >
          <div>
            <h3
              className={`font-bold tracking-[-0.05em] leading-[0.98] text-slate-950 ${
                featured
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-2xl sm:text-3xl"
              }`}
            >
              {title}
            </h3>

            {!featured && (
              <p className="mt-5 max-w-xl text-sm sm:text-[0.95rem] leading-7 text-slate-600">
                {description}
              </p>
            )}
          </div>

          {featured && (
            <p className="max-w-md text-[0.95rem] sm:text-base leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>

        {tags.length > 0 && (
          <div className={`flex flex-wrap gap-2 ${featured ? "mt-10 sm:mt-12" : "mt-7"}`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] sm:text-xs text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={`flex flex-wrap items-center gap-3 ${featured ? "mt-10" : "mt-8"}`}>
          {caseStudyLink && (
            <Link
              to={caseStudyLink}
              className="group/link inline-flex min-h-11 items-center justify-between gap-6 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600 hover:px-6"
            >
              View case study
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex min-h-11 items-center justify-between gap-5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:border-slate-400 hover:text-slate-950 hover:px-6"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
