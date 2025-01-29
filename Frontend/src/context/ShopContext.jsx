import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{


    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);

    const addToCart = async (itemId, size) =>{

        if(!size){
            toast.error('Select Product Size');
            return ;
        }

        let cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItem(cartData);
        
    }

    const changeCart = async (itemId, size,quantity) =>{

        if(!size){
            toast.error('Select Product Size');
            return ;
        }

        setCartItem((prevData) => ({
            ...prevData, // Spread the previous data to keep it intact
            [itemId]: {
                ...prevData[itemId], // Spread the existing sizes for the item
                [size]: quantity, // Update the specific size's value
            },
        }));
        
    }

    const deleteToCart = async (itemId , size) =>{

        let cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                delete cartData[itemId][size];
            }

            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
            
        }


        
        setCartItem(cartData);

        // console.log(cartItem);
    }

    const getCartCount = () =>{
        let totalCount = 0;

        for(const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item] > 0){
                        totalCount += cartItem[items][item];
                    }
                }
                catch(error){

                }
            }
        }

        return totalCount;
    }

    const getTotalAmount = () =>{
        let amount = 0;

        for(const items in cartItem){
            const data = products.find((item)=> item._id === items)
            for(const item in cartItem[items]){
                amount = amount + cartItem[items][item]*data.price;
                
            }
        }

        setTotalAmount(amount);

        console.log(amount);

    }

    useEffect(()=>{
        // addToCart();
        
        console.log(cartItem);
    },[cartItem])
    
    
    const value ={
        products,currency,delivery_fee,search, setSearch,showSearch,setShowSearch,cartItem,addToCart,getCartCount , deleteToCart,changeCart ,totalAmount,
        getTotalAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

