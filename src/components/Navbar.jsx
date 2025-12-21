import StepperModal from './StepperModal'
export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 text-black w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>
        <span className='text-base font-medium text-slate-900'>Asad Asjad</span>
        <ul className='flex gap-6 text-sm font-medium'>
          <li>
            <a className='text-sm text-slate-600 hover:text-slate-900 transition'>
              About
            </a>
          </li>
          <li>
            <a className="text-sm text-slate-600 hover:text-slate-900 transition">
  Projects
</a>
          </li>
          <li>
            <a className="text-sm text-slate-600 hover:text-slate-900 transition">
  Contact
</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
