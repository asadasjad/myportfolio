import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/asad_asjad",
    icon: SiInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME",
    icon: SiLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/AsadAsjad1",
    icon: SiX,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 sm:px-8 lg:px-12 text-slate-400">
      <div className="max-w-6xl mx-auto border-t border-white/10 py-7 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-slate-200">Asad Asjad</p>
            <p className="mt-1 text-xs text-slate-500">
              © {new Date().getFullYear()} · Built with care, not a template.
            </p>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-2 text-xs text-slate-500 transition-colors duration-300 hover:text-white"
              >
                <Icon size={14} />
                <span>{label}</span>
                <span className="text-slate-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
