import { motion } from "framer-motion";

const projects = [
  { title: "Modern Landing Page", desc: "A responsive, animated website for a business client." },
  { title: "AI Chat Interface", desc: "A conversational UI powered by React and Tailwind." },
  { title: "Personal Portfolio", desc: "My evolving story as a developer." },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
