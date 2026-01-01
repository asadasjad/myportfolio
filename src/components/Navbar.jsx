import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      scrollTo(id);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollTo(id);
      }, 100);
    }
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Name */}
          <button
            onClick={goHome}
            className="font-semibold text-gray-900 hover:opacity-80 transition"
          >
            Asad Asjad
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-gray-900 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="hover:text-gray-900 transition"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-gray-900 transition"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-sm text-gray-700"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed top-16 left-0 w-full
                bg-white z-50
                border-b border-gray-200
              "
            >
              <div className="flex flex-col divide-y">
                <button
                  onClick={() => handleNavClick("about")}
                  className="px-6 py-4 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick("projects")}
                  className="px-6 py-4 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="px-6 py-4 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
