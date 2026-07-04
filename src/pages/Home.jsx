import Hero from '../components/Hero'


import Footer from '../components/Footer'
import Projects from '../components/Projects'

import LogoLoop from '../components/LogoLoop'



import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import About from '@/components/About'
import Contact from '@/components/Contact'

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiFramer />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
];



const Home = () => {
  return (
    <div className=''>
      <section className='min-h-[75vh] flex items-center justify-center px-4'>
        <Hero />
      </section>

      <Projects />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="mb-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 md:ml-[7%]">
            Tools & technologies
          </p>

          <div className="relative">
            <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.045em] leading-[1.02] text-slate-950 md:ml-[7%]">
              The tools change.
              <span className="block sm:ml-[14%]">
                The goal{" "}
                <span className="font-serif italic font-normal tracking-[-0.02em] text-slate-500">
                  doesn&apos;t.
                </span>
              </span>
            </h2>

            <p className="mt-8 sm:mt-10 max-w-sm ml-auto lg:mr-[6%] text-[0.95rem] sm:text-base leading-7 text-slate-600">
              Design clearly, build thoughtfully, and ship something people
              genuinely want to use.
            </p>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="hidden md:block absolute left-0 top-1/2 z-10 w-[10%] border-t border-indigo-200" />
          <div className="hidden md:block absolute left-[10%] top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-500" />

          <div className="md:ml-[10%]  py-7 sm:py-8 md:-rotate-[1deg] md:origin-left bg-white/80 backdrop-blur-sm">
            <LogoLoop
              className="text-slate-400"
              logos={techLogos}
              speed={24}
              direction="left"
              logoHeight={34}
              gap={64}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Tools and technologies I work with"
            />
          </div>
        </div>
      </section>
<About />
<Contact />
      
      <Footer />
    </div>
  )
}

export default Home
