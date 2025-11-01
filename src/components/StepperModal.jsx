import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepperModal({ position = "center", label = "Let’s Collaborate" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Who are you?", content: <input type="text" placeholder="John Doe" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#0f172a] text-gray-100" /> },
    { title: "Your Project", content: <textarea placeholder="Tell me about your idea..." className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#0f172a] text-gray-100" rows={4}></textarea> },
    { title: "Review", content: <p className="text-gray-400">Check your details and hit submit!</p> },
    { title: "Done!", content: <p className="text-green-400 font-semibold">Thanks! I'll get back to you soon. 🚀</p> },
  ];

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // Dynamic button position styles
  const positionClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
    floating: "fixed bottom-6 right-6 z-50",
  }[position] || "text-center";

  return (
    <div className={positionClass}>
      {/* CTA Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="shiny-btn px-6 py-3 shadow-[0_10px_6px_rgba(137, 90, 255,0.3)] rounded-full bg-[#6f43dd] hover:bg-[#7d4aff] hover:shadow-[inset_0_1.5px_0px_rgba(255,255,255,0.2)] text-white font-semibold     hover:scale-105 transition-all"
      >
        {label}
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1c2333] text-gray-100 w-[90%] max-w-md rounded-2xl shadow-2xl p-6 relative"
            >
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-200">✕</button>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full mb-6 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-3">{steps[step].title}</h2>
                  <div>{steps[step].content}</div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={step === 0}
                  className={`px-4 py-2 rounded-lg font-medium border border-gray-500 transition-all ${step === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-800"}`}
                >
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-[#6f43dd] hover:bg-[#7d4aff] hover:shadow-[inset_0_1.5px_0px_rgba(255,255,255,0.2)] text-white rounded-lg   transition"
                  >
                    Finish
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}