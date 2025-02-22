import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProduct , setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[products])
    
    
  return (
    <div className='my-10'>
        <div className='py-8 text-center'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProduct.map((item, index)=>{
                    return <ProductItems id={item._id} key={index} image={item.image} name={item.name} price={item.price} />
                })
            }
        </div>


      
    </div>
  )
}

export default LatestCollection;
