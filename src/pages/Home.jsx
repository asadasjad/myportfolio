import Hero from '../components/Hero'


import Footer from '../components/Footer'
import Projects from '../components/Projects'

import LogoLoop from '../components/LogoLoop'



import {
  SiReact,
  SiJavascript,
  SiReactrouter,
  SiFramer,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiVercel,
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
    node: <SiReactrouter />,
    title: "React Router",
    href: "https://reactrouter.com",
  },
  {
    node: <SiFramer />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "https://vitejs.dev",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiVercel />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
];



const Home = () => {
  return (
    <div className=''>
      <section className='min-h-[75vh] flex items-center justify-center px-4'>
        <Hero />
      </section>

      <Projects />
      <section className="mt-20 mb-12 text-center">
  

  <LogoLoop
    className="text-slate-400"
    logos={techLogos}
    speed={30}
    direction="left"
    logoHeight={40}
    gap={56}
    pauseOnHover
    fadeOut
    fadeOutColor="#ffffff"
    ariaLabel="Tools and technologies I work with"
  />
  <p className="text-sm text-slate-500 mt-6 max-w-xl mx-auto">
    Tools & technologies I use to design, build, and ship products.
  </p>
  <p className="text-xs uppercase tracking-wide text-slate-400 mt-2">
    Tools & Technologies
  </p>

  
</section>
<About />
<Contact />
      
      <Footer />
    </div>
  )
}

export default Home
