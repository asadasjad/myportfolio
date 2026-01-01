import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Product Feedback Intelligence Dashboard",
    description:
      "An internal analytics tool that converts raw customer feedback into actionable product insights through structured analysis and calm, professional UI design.",
    tags: ["React", "Tailwind CSS", "Recharts", "UX Design"],
    caseStudyLink: "/projects/feedback-dashboard",
    githubLink: "https://github.com/asadasjad/feedback-insight-dashboard.git",
  },
  {
    title: "Modern Landing Page",
    description:
      "A responsive, animated marketing website focused on clarity, hierarchy, and performance.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/YOUR_USERNAME/modern-landing-page",
  },
  {
    title: "AI Chat Interface",
    description:
      "A conversational UI prototype designed to explore message hierarchy, input ergonomics, and state-driven interactions.",
    tags: ["React", "Tailwind CSS", "UI Design"],
    githubLink: "https://github.com/YOUR_USERNAME/ai-chat-interface",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-12 text-gray-900"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              caseStudyLink={project.caseStudyLink}
              githubLink={project.githubLink}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
