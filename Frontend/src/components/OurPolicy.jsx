import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col  sm:flex-row  justify-around text-center gap-12 sm:gap-2 text-xs sm:text-sm md:text-base py-20 text-gray-400'>
      
      <div >
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-medium text-gray-700'>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>

      <div >
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-medium text-gray-700'>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-medium text-gray-700'>Best customer support</p>
        <p>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
