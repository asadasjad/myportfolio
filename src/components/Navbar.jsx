import StepperModal from "./StepperModal";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 text-black w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-semibold text-lg tracking-tight">Asad</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
         
        </ul>
      </div>
    </nav>
  );
}
