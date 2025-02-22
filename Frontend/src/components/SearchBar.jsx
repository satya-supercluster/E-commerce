import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible , setvisible] = useState(true);
    const location = useLocation();

    useEffect(()=>{

        if(location.pathname.includes('/collection') && showSearch){
            setvisible(true);
        }
        else{
            setvisible(false);
        }
        // console.log(location.pathname);

    },[location])


  return showSearch && visible ?(
    <div className='border-t  flex justify-center items-center gap-5 py-5 bg-gray-50'>
      <div className='inline-flex justify-between items-center py-5 border h-6  w-1/4 sm:w-1/2 rounded-full'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none ml-5 text-sm w-full bg-gray-50' type="text" placeholder='Search'/>
        <img className='h-4 mr-5 cursor-pointer' src={assets.search_icon}  />
      </div>

      <img onClick={()=>setShowSearch(false)} className='h-3 cursor-pointer' src={assets.cross_icon}  />
    </div>
  ) : null;
}

export default SearchBar
