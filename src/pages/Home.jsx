import HeroText from '../components/HeroText'
import VideoBackground from '../components/VideoBackground'


import GlareHover from '/src/components/GlareHover'
const Home = () => {
  return (
    <div className=' w-full flex flex-col gap-44'>
      <VideoBackground />
      <HeroText />
      

      <div className='flex flex-row p-44 gap-12 justify-center' >
        
        <GlareHover
        width="260px"
        height="180px"
        background="#fff"
        glareColor="#00bfff"
        glareOpacity={0.4}
        glareSize={180}
        mouseFollow
        glow
        glowColor="Blue"
        className="border-gray-200 shadow-md hover:shadow-lg transition-all"
      >
        <h3 className="text-gray-800 font-semibold text-lg">Blue Energy</h3>
      </GlareHover>
      </div>

    </div>
  )
}

export default Home
