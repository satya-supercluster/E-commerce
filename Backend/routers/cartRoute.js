const express = require("express");
const cartRouter = express.Router();
const authUser = require('../middleware/auth')

const {addToCart, updateCart , getUserCart} = require('../controllers/cartController');

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCart)

module.exports = cartRouter