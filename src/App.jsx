import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


export default function App() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <Navbar/>
      <Home/>
    </motion.main>
  );
}
