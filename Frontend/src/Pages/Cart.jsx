import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {

  const {products , currency , cartItem, addToCart ,changeCart, deleteToCart , totalAmount, getTotalAmount} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
 

  useEffect(()=>{

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

  },[cartItem,totalAmount])

  console.log(cartData + "yogi");

  

  return (
    <div className='border-t py-20'>
      <Title text1={'YOUR'} text2={'CART'}/>
      { 
        cartData.map((item)=>{
          const data = products.find((items)=> items._id === item._id)
          console.log(data);
           
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
    onChange={(e) => {changeCart(item._id, item.size, parseInt(e.target.value)); getTotalAmount();}
    }
/>


                <img onClick={()=>{deleteToCart(item._id, item.size)}} className='h-[25px] cursor-pointer' src={assets.bin_icon} />
            </div>
          )
        })
      }

      <div className='py-10 flex flex-row '>
        <div className='sm:w-[60%]'></div>
        <div className='flex flex-col'>
          <Title text1={'CART'} text2={'TOTALS'}/>
          <div>
            <h1>Subtotal</h1>
            <h1>{totalAmount}</h1>
          </div>
          <div>
            <h1>Shipping Fee</h1>
          </div>
          <div>
            <h1>Total</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
