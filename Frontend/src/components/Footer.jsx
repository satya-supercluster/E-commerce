import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='pt-20 flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 text-sm  pb-5'>
        <div className=''>
            <img  className='w-36' src={assets.logo} alt="" />
            <p className='py-5 text-gray-700 w-full md:w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className='flex flex-col'>
            <h1 className='text-xl font-medium'>COMPANY</h1>
            <ul className='py-5 text-gray-700 flex flex-col gap-1'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-medium'>GET IN TOUCH</h1>
            <ul className='py-5 text-gray-700 flex flex-col gap-1'>
                <li>+1-000-000-0000</li>
                <li>forever@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>

        
        </div>

        <div className='text-center  border-t-2 text-gray-800'>
        <p className='py-5 text-sm '>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
