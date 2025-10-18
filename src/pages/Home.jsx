
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='' >
        <Navbar/>
        
      <section className=''><Hero /></section>
      <About/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home
