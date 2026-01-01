import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <p>
        © {new Date().getFullYear()} Asad Asjad. All rights reserved.
      </p>

      <div className="flex justify-center text-sm mt-4 gap-4">
        <a
          href="https://www.instagram.com/asad_asjad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform hover:scale-110 hover:text-black"
        >
          <SiInstagram size={15} />
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform hover:scale-110 hover:text-black"
        >
          <SiLinkedin size={15} />
        </a>

        <a
          href="https://x.com/AsadAsjad1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="transition-transform hover:scale-110 hover:text-black"
        >
          <SiX size={15} />
        </a>
      </div>
    </footer>
  );
}
