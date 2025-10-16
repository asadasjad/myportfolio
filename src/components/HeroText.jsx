import React from 'react'
import GlareHover from './GlareHover'
const HeroText = () => {
  return (
    <div className='flex text-black justify-between gap-40 p-20 mt-35 items-center'>
    <div className='text-8xl '>  Lorem, ipsum dolor.</div>
     <div style={{ height: '500px', position: 'relative' }}>
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      Hover Me
    </h2>
  </GlareHover>
</div>
    </div>
    
  )
}

export default HeroText
