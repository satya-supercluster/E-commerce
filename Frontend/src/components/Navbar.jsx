import React from 'react'
import {assets} from '../assets/assets'
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36 mx-7 ' />
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-[50%] border-none h-[1.5px] bg-gray-500 hidden'/>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1 ">
            <p>COLLECTION</p>
            <hr className='w-[50%] border-none h-[1.5px] bg-gray-500 hidden'/>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1 ">
            <p>ABOUT</p>
            <hr className='w-[50%] border-none h-[1.5px] bg-gray-500 hidden'/>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
            <p>CONTACT</p>
            <hr className='w-[50%] border-none h-[1.5px] bg-gray-500 hidden'/>
          </NavLink>
        
        </ul>

        <div className='flex gap-6 justify-center items-center mx-[30px]'>
          <img src={assets.search_icon} className='w-[20px] cursor-pointer' />

          <div className='group relative flex gap-6'>
            <img src={assets.profile_icon} className='w-[20px] cursor-pointer'/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
          </div>

          <Link to="/cart" className='relative'>
            <img src={assets.cart_icon} className='w-[20px] min-w-[20px] cursor-pointer' />
            <p className='text-[9px] absolute bg-black text-white rounded-full h-[15px] w-[16px] text-center flex justify-center items-center bottom-[-4px] right-[-5px]'>0</p>
          </Link>
        </div>
        
    </div>
  )
}

export default Navbar
