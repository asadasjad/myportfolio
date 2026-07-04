import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("asadasjad44@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-slate-950 text-white"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 sm:gap-16 lg:gap-24 items-end">
          <div>
            <p className="mb-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Have something in mind?
            </p>

            <h2 className="max-w-3xl text-[2.8rem] sm:text-[4rem] lg:text-[5.4rem] font-bold tracking-[-0.055em] leading-[0.92]">
              Let&apos;s make it
              <span className="block sm:ml-[12%]">
                <span className="font-serif italic font-normal tracking-[-0.025em] text-slate-400">
                  worth
                </span>{" "}
                using.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-[0.95rem] sm:text-base leading-7 text-slate-400">
              A product idea, an interface that needs more thought, or an
              opportunity where I can be useful — I&apos;d like to hear about it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button
                onClick={handleCopy}
                className="group relative overflow-hidden inline-flex min-h-12 items-center justify-between gap-8 px-5 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium transition-all duration-300 hover:bg-indigo-400 hover:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {!copied ? (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Copy email
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Copied ✓
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              <a
                href="https://github.com/asadasjad"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-between gap-8 px-5 py-2 rounded-full border border-white/20 text-slate-200 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:px-6"
              >
                GitHub
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28 lg:mt-32 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-t border-white/10 pt-6">
          <p className="max-w-sm text-xs sm:text-sm leading-6 text-slate-500">
            Based in Lucknow, building for wherever the interesting problems are.
          </p>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-slate-600">
            Open to projects · internships · opportunities
          </p>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-6 left-1/2 px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-medium shadow-xl z-50"
          >
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
