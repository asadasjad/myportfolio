import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "UniWay",
    description:
      "A mobile-first campus navigation product built to make finding buildings, rooms, and routes feel effortless.",
    tags: ["Next.js", "TypeScript", "Product Design", "Maps"],
    caseStudyLink: "/projects/uniway",
    status: "In progress",
    eyebrow: "Campus navigation · Product build",
  },
  {
    title: "Product Feedback Intelligence Dashboard",
    description:
      "An analytics tool that turns raw customer feedback into clear, actionable product insights.",
    tags: ["React", "Tailwind CSS", "Recharts", "UX Design"],
    caseStudyLink: "/projects/feedback-dashboard",
    githubLink: "https://github.com/asadasjad/feedback-insight-dashboard.git",
    eyebrow: "Analytics · Case study",
  },
  {
    title: "3D Art Gallery",
    description:
      "An immersive interface experiment exploring spatial browsing, visual hierarchy, and interaction in a 3D gallery.",
    tags: ["React", "3D UI", "Interaction Design"],
    eyebrow: "UI experiment · Spatial interface",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-44 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 sm:mb-20 lg:mb-24"
        >
          <p className="mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Selected work
          </p>

          <h2 className="max-w-3xl text-[2.7rem] sm:text-[3.6rem] lg:text-[4.25rem] font-bold tracking-[-0.05em] leading-[0.98] text-slate-950">
            Things I&apos;ve
            <span className="block sm:ml-[12%]">
              <span className="mr-2 sm:mr-3 font-serif italic font-normal tracking-[-0.025em] text-slate-500">
                actually
              </span>
              <span>built.</span>
            </span>
          </h2>

          <p className="mt-7 sm:mt-9 max-w-md ml-auto lg:mr-[8%] text-[0.95rem] sm:text-base leading-7 text-slate-600">
            A selection of products and interfaces where I&apos;ve worked through
            real problems — from product thinking to the final interaction.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 lg:space-y-20">
          {projects.map((project, i) => {
            const layoutClass =
              i === 0
                ? "w-full lg:w-[88%]"
                : i === 1
                  ? "w-full md:w-[72%] lg:w-[64%] ml-auto"
                  : "w-full md:w-[68%] lg:w-[58%] md:ml-[7%]";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32, rotate: i === 1 ? 0.6 : i === 2 ? -0.5 : 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className={layoutClass}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  caseStudyLink={project.caseStudyLink}
                  githubLink={project.githubLink}
                  eyebrow={project.eyebrow}
                  status={project.status}
                  featured={i === 0}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
