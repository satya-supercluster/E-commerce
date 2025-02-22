const userModel = require('../models/userModel')


const addToCart = async (req,res) =>{
    
    try {
        const {userId, itemId, size} = req.body
        
        const userData = await userModel.findById(userId);
        const cartData = userData.cartData;

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


        await userModel.findByIdAndUpdate(userId, {cartData});

        res.json({success:true, message: "Added To Cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}



const updateCart = async (req,res) =>{

    try{
        const {userId, itemId, size, quantity} = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;

        if (quantity === null || quantity === 0) {
            // Remove the size if quantity is null or 0
            delete cartData[itemId][size];

            // If the item has no sizes left, remove the item itself
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = quantity;
        }
        console.log(cartData[itemId][size])

        await userModel.findByIdAndUpdate(userId, {cartData});

        res.json({success:true, message: "Cart Updated"})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


const getUserCart = async (req,res) =>{
    try{
        const {userId} = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData?.cartData;

        res.json({success:true, cartData})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


module.exports = {addToCart, updateCart , getUserCart}