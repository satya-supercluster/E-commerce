import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6 text-gray-500'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>

            <div>
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
            </div>

            <div>
              <p>Tel: (415) 555-0132</p>
              <p>Email: admin@forever.com</p>
            </div>

            <p className='font-semibold text-xl text-gray-600'>Careersat Forever</p>
            <p>Learn more about our teams and job openings.</p>

            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore More</button>


          </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
