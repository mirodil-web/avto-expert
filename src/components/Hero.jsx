import React from 'react'
import HeroBg from '../../public/assets/hero-bg.png'

const Hero = () => {
  return (
      <div>
          <div className="container">
              <div>
                  <img src={HeroBg} className='w-full h-[450px]' alt="Bachground hero" />

              </div>
          </div>
    </div>
  )
}

export default Hero