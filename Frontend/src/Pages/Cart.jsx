import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { Link , NavLink } from 'react-router-dom'

const Cart = () => {

  const {products , currency , cartItem, addToCart ,changeCart, deleteToCart , totalAmount, getTotalAmount,delivery_fee, updateQuantity} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
 

  useEffect(()=>{

    if(products.length > 0){

      let tempData = [];

      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
            tempData.push({
              _id : items,
              size: item,
              quantity: cartItem[items][item]
            })
          }
        }
      }
      
    
      setCartData(tempData);
     
     
      getTotalAmount();
    }

    

  },[cartItem,totalAmount,products])

// console.log(cartData);

  

  return (
    <div className='border-t py-16'>
      <Title text1={'YOUR'} text2={'CART'}/>
      { 
        cartData.map((item)=>{
          const data = products.find((items)=> items._id === item._id)
          
           
          return (
            <div className='flex flex-row  justify-between items-center border-t border-b py-5'>
                <div className='flex gap-6'>
                  <img className='h-[100px]' src={data.image[0]} alt="" />
                  <div>
                    <h1 className='text-gray-700 font-medium text-lg'>{data.name}</h1>
                    <div className='flex flex-row gap-5 py-3'>
                      <p className='text-gray-700'>{currency}{data.price}</p>
                      <p className='text-gray-700 py-1 px-3 border bg-gray-100'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <input
    className="h-[40px] min-w-[25px] max-w-[75px] pl-3 border"
    type="number"
    value={cartItem[item._id]?.[item.size] || ""}
    onChange={(e) => {changeCart(item._id, item.size, parseInt(e.target.value)); updateQuantity(item._id, item.size, parseInt(e.target.value));  getTotalAmount();}
  }
/>


                <img onClick={()=>{deleteToCart(item._id, item.size)}} className='h-[25px] cursor-pointer' src={assets.bin_icon} />
            </div>
          )
        })
      }

      <div className='py-20 flex flex-row justify-end'>
        {/* <div className='sm:w-[90%]'></div> */}
        <div className='flex flex-col w-full sm:w-[40%] '>
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
          <div className='flex justify-end'>

          <Link className='' to={"/place-order"}>
          <button className='py-3 px-5 bg-black text-white my-5  text-sm '>PROCEED TO CHECKOUT</button>
          </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
