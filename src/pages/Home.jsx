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
      <section className='min-h-0 sm:min-h-[75vh] flex items-center justify-center px-4 pt-3 pb-10 sm:py-0'>
        <Hero />
      </section>

      <Projects />
      <section className="relative py-16 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -right-36 top-4 h-56 w-56 sm:-right-24 sm:top-10 sm:h-64 sm:w-64 rounded-full bg-indigo-100/35 sm:bg-indigo-100/50 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="mb-3 sm:mb-5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 md:ml-[7%]">
            Tools & technologies
          </p>

          <div className="relative">
            <h2 className="max-w-2xl text-[2.45rem] sm:text-4xl lg:text-5xl font-bold tracking-[-0.055em] sm:tracking-[-0.045em] leading-[0.96] sm:leading-[1.02] text-slate-950 md:ml-[7%]">
              The tools change.
              <span className="block ml-[7%] sm:ml-[14%]">
                The goal{" "}
                <span className="font-serif italic font-normal tracking-[-0.02em] text-slate-500">
                  doesn&apos;t.
                </span>
              </span>
            </h2>

            <p className="mt-6 sm:mt-10 max-w-[18.5rem] sm:max-w-sm ml-[12%] sm:ml-auto lg:mr-[6%] text-[0.82rem] sm:text-base leading-[1.65] sm:leading-7 text-slate-600">
              Design clearly, build thoughtfully, and ship something people
              genuinely want to use.
            </p>
          </div>
        </div>

        <div className="relative mt-9 sm:mt-16">
          <div className="hidden md:block absolute left-0 top-1/2 z-10 w-[10%] border-t border-indigo-200" />
          <div className="hidden md:block absolute left-[10%] top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-500" />

          <div className="mx-5 sm:mx-0 rounded-[1.35rem] sm:rounded-none border border-slate-200/70 sm:border-0 md:ml-[10%] py-5 sm:py-8 md:-rotate-[1deg] md:origin-left bg-white/85 sm:bg-white/80 shadow-lg shadow-slate-950/[0.035] sm:shadow-none backdrop-blur-sm overflow-hidden">
            <LogoLoop
              className="text-slate-400"
              logos={techLogos}
              speed={24}
              direction="left"
              logoHeight={28}
              gap={52}
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
