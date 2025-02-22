import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{



    const currency = '$';
    const delivery_fee = 10;
    const backendUrl  = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);
    const [products, setProducts] = useState([]);
    const [token , setToken] = useState('');
    const navigate = useNavigate();

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

        if(token){
            try {
                await axios.post(backendUrl+'/yogi/v1/cart/add', {itemId, size}, {headers:{token}})

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
        
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

        updateQuantity(itemId, size, 0);


        
        setCartItem(cartData);

        // console.log(cartItem);
    }

    const updateQuantity = async (itemId , size, quantity) =>{
        console.log(itemId, size, quantity);
        let cartData = structuredClone(cartItem);
        console.log(cartData[itemId][size]);
        cartData[itemId][size] = quantity;

        setCartItem(cartData);

        if(token){
            try {
                const response = await axios.post(backendUrl+'/yogi/v1/cart/update', {itemId, size, quantity}, {headers:{token}})

                console.log(response.data);

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

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

    const getTotalAmount = async () =>{
        let amount = 0;
        for(const items in cartItem){
            const data = products.find((item)=> item._id === items)
            for(const item in cartItem[items]){
                amount = amount + cartItem[items][item]*data.price;
                
            }
        }

        setTotalAmount(amount);

    }

    const getUserCart = async (token) =>{
        try{

            const response = await axios.post(backendUrl + '/yogi/v1/cart/get' , {}, {headers:{token}})
            if(response.data.success){
                setCartItem(response.data.cartData);
            }
            
        }
        catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        // addToCart();
        getTotalAmount();
        console.log(totalAmount);
        console.log(cartItem);

    },[cartItem,totalAmount])
    
    const getProductData = async () =>{
        try{
            const response = await axios.get(backendUrl+ "/yogi/v1/product/list")
            
            if(response.data.success){
                // console.log(response.data.products);
                setProducts(response.data.products);
            }
            else{
                toast.error(response.data.message);
            }
            console.log(products)
        }
        catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
    

    useEffect(() => {
        console.log("Updated Products:", products);
    }, [products]);
    

    useEffect(()=>{
        getProductData();
        console.log(products)
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))

        }
    },[])
    
    const value ={
        products,currency,delivery_fee,search, setSearch,showSearch,setShowSearch,setCartItem,cartItem,addToCart,getCartCount , deleteToCart,changeCart ,totalAmount,
        getTotalAmount,backendUrl,setToken,token,
        navigate,updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

