import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-semibold mb-4"
      >
        My Story
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
      >
        I started coding to create things that make people *feel* something. Over time, I learned that good design isn’t just how it looks — it’s how it moves, responds, and tells a story.
      </motion.p>
    </section>
  );
}
