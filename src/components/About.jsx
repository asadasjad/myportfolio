import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
  {/* Top ellipse */}
   <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
      <path
        d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
  {/* Main content */}
  <div className="relative z-10 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Projects</h2>
    <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
      A collection of ideas I’ve turned into interactive experiences.
    </p>
  </div>

  {/* Bottom ellipse */}
  <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-0 w-full h-16 sm:h-20 md:h-24 bg-white rounded-t-full"></div>
</section>

  );
}
