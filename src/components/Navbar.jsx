import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      scrollTo(id);
    } else {
      navigate("/");
      setTimeout(() => scrollTo(id), 100);
    }
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4 pointer-events-none">
        <motion.div
          animate={{
            maxWidth: scrolled ? 980 : 1152,
            boxShadow: scrolled
              ? "0 14px 40px rgba(15, 23, 42, 0.08)"
              : "0 0 0 rgba(15, 23, 42, 0)",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`pointer-events-auto mx-auto h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between rounded-full border transition-colors duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border-slate-200/80"
              : "bg-white/60 backdrop-blur-md border-transparent"
          }`}
        >
          <button
            onClick={goHome}
            className="group flex items-center gap-3 text-slate-950"
            aria-label="Back to top"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-slate-950 text-[10px] font-semibold tracking-[-0.03em] text-white">
              AA
              <span className="absolute inset-0 grid place-items-center bg-indigo-500 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                ↑
              </span>
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-[-0.02em]">
              Asad Asjad
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/70 p-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-2 rounded-full text-xs font-medium text-slate-600 transition-all duration-300 hover:bg-white hover:text-slate-950 hover:shadow-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="md:hidden group inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="relative h-3 w-4">
              <span
                className={`absolute left-0 top-0.5 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0.5 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-3 right-3 top-20 z-50 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/15 md:hidden"
            >
              {links.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="group flex w-full items-center justify-between rounded-[1.25rem] px-5 py-4 text-left transition-colors hover:bg-slate-100"
                >
                  <span className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {link.label}
                  </span>
                  <span className="text-xs text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                    0{index + 1} ↗
                  </span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
