
import Hero from '../components/Hero'
import About from '../components/About'

import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import LogoLoop from "../components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiJavascript, SiGithub } from 'react-icons/si';
import StepperModal from '../components/StepperModal'
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const Home = () => {
  return (
    <div className='' >
        <Navbar/>
        
      <section className=''><Hero /></section>
      
      <About/>
      
      <section> <div style={{ height: '300px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop 
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={60}
        gap={80}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#101828"
        ariaLabel="Technology partners"
      />
    </div></section>  
      
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home
