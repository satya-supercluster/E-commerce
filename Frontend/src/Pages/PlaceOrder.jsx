import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const PlaceOrder = () => {

  const {currency, totalAmount, delivery_fee} = useContext(ShopContext);

  return (
    <div className='py-20 border-t flex flex-col sm:flex-row justify-between'>

      <div className='w-full sm:w-[45%]'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'}/>

        <div className='flex flex-col gap-3 py-8'>
          <div className='flex gap-3 '>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="text" placeholder='First name' required/>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="text" placeholder='First name' required/>
          </div>

          <input className='border py-2 px-3 rounded border-gray-300 ' type="email" placeholder='Email address' required/>
          <input className='border py-2 px-3 rounded border-gray-300 ' type="text" placeholder='Street'required />
          
          <div className='flex gap-3'>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="text" placeholder='City' required/>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="text" placeholder='State' required/>
          </div>

          <div className='flex gap-3'>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="number" placeholder='Zipcode' required/>
            <input className='border py-2 px-3 rounded w-full border-gray-300' type="text" placeholder='Country'/>
          </div>

          <input className='border py-2 px-3 rounded border-gray-300 ' type="number" placeholder='Phone' required/>
        </div>

      </div>


      <div className=' flex flex-row w-full sm:w-[48%] mt-10'>
        
        <div className='flex flex-col w-full'>
          <Title text1={'CART'} text2={'TOTALS'}/>
          <div className='flex justify-between border-b py-2 text-sm'>
            <h1>Subtotal</h1>
            <h1>{currency}{totalAmount}.00</h1>
          </div>
          <div className='flex justify-between border-b py-2 text-sm'>
            <h1>Shipping Fee</h1>
            <h1>{currency}{delivery_fee}.00</h1>
          </div>
          <div className='flex justify-between py-2 text-sm font-medium font-bold'>
            <h1>Total</h1>
            <h1>{currency}{totalAmount > 0 ? totalAmount + delivery_fee : '0'}.00</h1>

          </div>
          
          <div className='py-10'>
            <div className='inline-flex items-center gap-2 mb-3 '>
                <p className='text-gray-500 text-md'>PAYMENT <span className='text-gray-700 font-medium '>METHOD</span></p>
                <p className='w-8 md:w-12 h-[2px] bg-gray-700'></p>
              
            </div>
            <div className='flex flex-row gap-3 justify-between '>
              <div className='flex flex-row border py-2 justify-center px-1 items-center gap-5 w-1/2'>
                <p className='w-[12px] h-[12px] border border-gray-400 rounded-full'></p>
                <img className='h-[20px]' src={assets.stripe_logo} alt="" />
              </div>
              <div className='flex flex-row border py-2 justify-center items-center gap-5 w-3/4 justify-between px-4'>
                <p className='w-[12px] h-[12px] border border-gray-400 rounded-full'></p>
                <img className='h-[20px]'  src={assets.razorpay_logo} alt="" />
              </div>
              <div className='flex flex-row border  justify-center items-center gap-5 w-full'>
                <p className='w-[12px] h-[12px] bg-green-500 rounded-full'></p>
                <p className='text-gray-600'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='flex justify-end'>
            
              <Link className='' to={"/order"}>
              <button className='py-3 px-16 bg-black text-white my-8  text-sm '>PLACE ORDER</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default PlaceOrder
