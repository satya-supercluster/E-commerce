import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>

      <div className='w-full sm:w-1/2 text-gray-600 py-10 sm:py-0 flex  flex-col justify-center items-center'>
        <div>
          <div className='flex gap-2 items-center'>
              <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
              <p className='font-medium text-sm lg:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 md:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>
          <div className='flex  gap-2 items-center text-gray-700'>
            <p className='font-medium text-sm md:text-base '>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
          </div>
        </div>
      </div>


      <div className='w-full sm:w-1/2 overflow-hidden'>
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
