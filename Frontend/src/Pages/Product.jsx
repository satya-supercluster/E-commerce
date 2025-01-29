import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart, cartItem , getTotalAmount}= useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] = useState([]);
  const [size, setsize] = useState('');

  const loggedproduct = () =>{

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })

    
  }

 function myfun(id,size){
  addToCart(id,size);
  getTotalAmount();
 }

  

  useEffect(()=>{
    loggedproduct();
  },[productId,products])
  
  return  productData ? (
    <div>
        <div className='border-t-2 py-10 flex flex-col sm:flex-row gap-10'>
        <div className='flex flex-col-reverse sm:flex-row w-full sm:w-1/2 gap-5'>
          <div className='flex flex-row sm:flex-col overflow-scroll overflow-y-hidden sm:overflow-x-hidden gap-5 w-full sm:w-[24%] sm:h-auto'>
            {
              productData.image.map((item,index)=>{
                return <img onClick={()=>setImage(item)} className='cursor-pointer ' src={item} key={index} alt="" />
              })
            }
          </div>
          <div className='w-full sm:w-[80%]  max-sm:hidden'>
            <img className=' w-full h-auto ' src={image} alt="" />
          </div>
        </div>

        <div className='w-full sm:w-1/2'>
          <div>
            <h1 className='text-2xl font-medium py-2'>{productData.name}</h1>
            <div className='flex flex-row items-center gap-3'>
              <div className='flex flex-row gap-1 h-3 '>
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_dull_icon} alt="" />
              </div>
              <h1>(122)</h1>
            </div>
            <h1 className='text-3xl font-medium py-5'>{currency}{productData.price}</h1>

            <p className='text-gray-500 w-[80%] '>{productData.description}</p>

            <div className='py-2'>
              <p className='py-5'>Select Size</p>
              <div className='flex flex-row gap-2'>
              {
                productData.sizes.map((item)=>{
                  return <p onClick={()=>{setsize(item)}} className={`bg-gray-100 py-2 px-4 border cursor-pointer ${size==item ? 'border-orange-800':''} `}>{item}</p>
                })
              }
              </div>
            </div>
 
            <button onClick={myfun(productId,size)} className='bg-black py-3 px-8 text-white mt-5'>ADD TO CART</button>
          </div>

          <div className='border-t py-5  mt-8 text-sm  text-gray-500 '>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>

        
      </div>
      <div className='flex flex-row'>
        <p className='border py-2 px-8'>Description</p>
        <p className='border py-2 px-8'>Review</p>
      </div>
      <div className='border text-sm text-gray-500'>
        <p className='py-5 px-5'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
        <p className='pb-5 px-5'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>

     
          <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      
    </div>
  ) : null
}

export default Product
