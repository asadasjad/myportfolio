import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="text-3xl font-bold tracking-wider"
      >
        ASAD ASJAD
      </motion.div>
    </div>
  );
}
