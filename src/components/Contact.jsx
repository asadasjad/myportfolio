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
    <section id="contact" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Contact
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Want to get in touch?
        </h2>

        <p className="text-slate-600 max-w-md mb-8 text-sm sm:text-base">
          If you’d like to discuss a project, opportunity, or just say hello,
          feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Copy email button */}
          <button
            onClick={handleCopy}
            className="
              relative overflow-hidden
              px-5 py-2.5 rounded-3xl
              bg-indigo-600 text-white
              text-sm font-medium
              transition hover:bg-indigo-700
              focus-visible:ring-2 focus-visible:ring-indigo-400
            "
          >
            <AnimatePresence mode="wait">
              {!copied ? (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  Copy email
                </motion.span>
              ) : (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  Copied ✓
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/asadasjad"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-5 py-2.5
              rounded-3xl
              border border-slate-300
              text-slate-700
              text-sm font-medium
              transition
              hover:bg-slate-100
              w-full sm:w-auto
            "
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed top-6 left-1/2 -translate-x-1/2
              px-4 py-2 rounded-md
              bg-neutral-900/90 text-white
              text-xs
              shadow-lg
              z-50
            "
          >
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
