import { motion } from 'framer-motion'
import StepperModal from './StepperModal'

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center text-center h-screen '>
      <p className='mb-4 text-sm uppercase tracking-wide text-slate-500'>
        Frontend Developer
      </p>
      <div className='text-5xl  font-bold'>Solid execution. </div>
      <div className='text-5xl  font-bold'>Simple interfaces.</div>
      <div className='mt-6 max-w-xl text-base sm:text-lg text-slate-600 '>
        Focused on clarity, performance, and thoughtful UI.
      </div>
      <div className='mt-10 flex gap-4 justify-center'>
        <button className='shiny-btn px-3 hover:px-4 text-white hover:scale-105 bg-indigo-600 hover:bg-indigo-650 rounded-3xl shadow-2xl p-1 duration-300 transition-all'>
          View work
        </button>
        <button className='shiny-btn px-3 hover:px-4 text-indigo-600 hover:bg-indigo-600 hover:text-white border-indigo-600 border-1 duration-300 rounded-3xl  p-1 hover:scale-105 transition-all'>
          Get in touch
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-500">
  Currently building clean, responsive web experiences
</p>

    </div>
  )
}
