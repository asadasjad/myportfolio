import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <ScrollToTop />
        <Outlet />
      </motion.main>
    </>
  );
}
