import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      © {new Date().getFullYear()} Asad Asjad. All rights reserved.
      <div className="flex justify-center p-6 gap-4" ><SiInstagram className="hover:scale-110 hover:text-black  transition-transform" />
      <SiLinkedin className="hover:scale-110 hover:text-black  transition-transform"/>
      <SiX className="hover:scale-110 hover:text-black transition-transform" href="" /></div>
    </footer>
  );
}
