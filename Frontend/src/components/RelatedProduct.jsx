import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [relProduct, setRelProduct] = useState([]);

    const loggedrelatedProduct = ()=>{
        
        let productCopy = products.slice();

        productCopy = productCopy.filter((item) => item.category === category);
        productCopy = productCopy.filter((item) => item.subCategory === subCategory);

        setRelProduct(productCopy.slice(0,5));

    
    }

    useEffect(()=>{
        loggedrelatedProduct();
    },[products])
  return (
    <div className='flex flex-col justify-center items-center py-20'>
      <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {
            relProduct.map((item,  index)=>{
                return <ProductItems key={index} image={item.image} id={item._id} name={item.name} price={item.price}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProduct
