import { motion } from 'framer-motion'
import StepperModal from './StepperModal'

export default function Hero() {
  return (
    <section className="relative flex    md:flex-row items-center justify-between min-h-screen px-8 md:px-24   bg-white text-black overflow-hidden">

  {/* Left: Text */}
  <div className="w-full md:w-[61.8%] flex justify-center flex-col gap-6 md:gap-8">
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
      Built simple.<br />Meant to scale.
    </h1>

    <p className="text-neutral-400 max-w-md leading-relaxed">
      Fast, responsive, and intentional — every decision in design and code exists to make your product move forward.
    </p>

    <div className="flex gap-4 mt-4">
      <StepperModal/>
      <button className="text-neutral-400 hover:text-white transition-colors duration-500">
        Contact
      </button>
    </div>
  </div>

  {/* Right: Accent Video */}
  <div className="w-full md:w-[38.2%] mt-10 md:mt-0 relative">
    <video
  src="/videos/citywalk.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="rounded-3xl object-cover w-full h-auto aspect-video opacity-70 mix-blend-lighten"
/>

  </div>
</section>

  )
}
