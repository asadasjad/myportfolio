import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  tags = [],
  caseStudyLink,
  githubLink,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        ring-1 ring-black/5
        hover:-translate-y-0.5
        transition-all
        duration-500
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
      "
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        {caseStudyLink && (
          <Link
            to={caseStudyLink}
            className="text-indigo-600 hover:text-indigo-700"
          >
            View case study →
          </Link>
        )}

        {githubLink && (
          <a
            href={githubLink}
            className="text-gray-500 hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
