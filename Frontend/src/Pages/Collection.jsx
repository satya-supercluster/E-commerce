import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { ShopContext } from '../context/shopContext'
import ProductItems from '../components/ProductItems'
import { use } from 'react'

const Collection = () => {

    const {products, search, showSearch} = useContext(ShopContext);
    const [showFilter, setshowFilter] = useState(false);
    const [filterproduct , setfilterproduct] = useState([]);
    const [categories , setcategories] = useState([]);
    const [subcategories , setsubcategories] = useState([]);
    const [sortType,setSortType] = useState('relevant');

    const changecategorie = (e) =>{

      if(categories.includes(e.target.value)){
        setcategories(prev => prev.filter((item)=> item !== e.target.value))
      }
      else{
        setcategories(prev => [...prev, e.target.value]);

      }
    
    };
    const changesubcategorie = (e) =>{

      if(subcategories.includes(e.target.value)){
        setsubcategories(prev => prev.filter((item)=> item !== e.target.value))
      }
      else{
        setsubcategories(prev => [...prev, e.target.value]);

      }
    
    };

    const applyfilter = () =>{
      let copyproduct = products.slice();
      setfilterproduct([]);

      if(showSearch && search){
        copyproduct = copyproduct.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      }
      
      if(categories.length>0){
        copyproduct = copyproduct.filter(item => categories.includes(item.category));
      }

      if(subcategories.length>0){
        copyproduct = copyproduct.filter(item => subcategories.includes(item.subCategory))
      }

      setfilterproduct(copyproduct);
      
    }

    const sortProduct = () => {
      const copyproduct = filterproduct.slice();

      switch(sortType){
        case 'low-high': setfilterproduct(copyproduct.sort((a,b)=>(a.price -b.price)));
        break;

        case 'high-low':setfilterproduct(copyproduct.sort((a,b)=>(b.price-a.price)));
        break;

        default :
          applyfilter();
          break;
      }

    }

    useEffect(()=>{
      setfilterproduct(products);
    },[])

    useEffect(()=>{
      
      applyfilter();
      
    },[categories,subcategories , search, showSearch])

    useEffect(()=>{
      sortProduct();
    },sortType)

  return (
    <div className='flex flex-col sm:flex-row  gap-1 sm:gap-10 border-t pt-10 '>

      <div className='min-w-60'>
        <div className='flex flex-row items-center gap-3 mb-9'>
          <p className='text-xl font-medium'>FILTERS</p>
          <img onClick={()=>{setshowFilter(!showFilter)}} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </div>

        <div  className={`border py-3  px-5 flex flex-col  ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium pb-2'>CATEGORIES</p>
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1 '>
            <input type="checkbox" value={'Men'} onChange={changecategorie}/> Men
          </p> 
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1'>
            <input type="checkbox" value={'Women'} onChange={changecategorie}/> Women
          </p>
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1'>
            <input type="checkbox" value={'Kids'} onChange={changecategorie}/> Kids
          </p>
        </div>

        <div className={`border py-3 px-5 flex flex-col gap-2 ${showFilter ? '' : 'hidden'} sm:block mt-5`}>
          <p className='text-sm font-medium pb-2'>TYPE</p>
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1'>
            <input type="checkbox" value={'Topwear'} onChange={changesubcategorie}/> Topwear
          </p>
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1'>
            <input type="checkbox" value={'Bottomwear'} onChange={changesubcategorie}/> Bottomwear
          </p>
          <p className='flex gap-2 font-lignt text-gray-600 text-sm py-1'>
            <input type="checkbox" value={'Winterwear'} onChange={changesubcategorie}/> Winterwear
          </p>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between mb-5'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          <select onChange={(e) => setSortType(e.target.value)} className='border w-40 py-2 px-2'>
            <option value={'relevant'}>Sort by: Relevant</option>
            <option value={'low-high'}>Sort by: Low to High</option>
            <option value={'high-low'}>Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {
            filterproduct.map((item,index)=>{
              return <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            })
          }
        </div>


      </div>
      
    </div>
  )
}

export default Collection
