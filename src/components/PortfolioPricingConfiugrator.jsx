import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function PortfolioPricingConfigurator() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    projectType: '',
    features: [],
    timeline: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center p-6">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Build Your Dream Portfolio</h1>
          <p className="text-slate-400 mb-8">
            Get a stunning portfolio site custom-tailored for you. Choose your preferences and see the estimated cost instantly.
          </p>
          <Button
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform"
            onClick={handleNext}
          >
            Start Your Build
          </Button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Select Your Project Type</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Personal Portfolio', 'Freelancer Website', 'Agency Showcase', 'Custom Brand Site'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelection({ ...selection, projectType: type })}
                    className={`p-4 rounded-2xl border transition-all ${
                      selection.projectType === type
                        ? 'border-blue-500 bg-blue-600/20'
                        : 'border-slate-700 hover:border-blue-500/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={handleBack}>Back</Button>
                <Button
                  onClick={handleNext}
                  disabled={!selection.projectType}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Select Key Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Animations', 'Dark Mode', 'Blog Section', 'Contact Form', 'CMS Integration', 'Custom Domain'].map((feature) => (
                  <button
                    key={feature}
                    onClick={() => {
                      const newFeatures = selection.features.includes(feature)
                        ? selection.features.filter((f) => f !== feature)
                        : [...selection.features, feature];
                      setSelection({ ...selection, features: newFeatures });
                    }}
                    className={`p-4 rounded-2xl border transition-all ${
                      selection.features.includes(feature)
                        ? 'border-blue-500 bg-blue-600/20'
                        : 'border-slate-700 hover:border-blue-500/50'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={handleBack}>Back</Button>
                <Button onClick={handleNext} className="bg-gradient-to-r from-blue-600 to-indigo-600">Next</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Almost Done!</h2>
          <p className="text-slate-400 mb-6">Here’s a quick summary of your choices:</p>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 mb-6 text-left">
            <p><strong>Project Type:</strong> {selection.projectType}</p>
            <p><strong>Features:</strong> {selection.features.join(', ') || 'None selected'}</p>
          </div>

          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform"
            onClick={() => alert('Estimate generated! (Coming soon)')}
          >
            Generate Estimate
          </Button>
        </motion.div>
      )}
    </div>
  );
}
