const express = require('express')
const router = express.Router();

const {loginUser,registerUser,adminLogin} = require("../controllers/userController")



router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/admin',adminLogin)


module.exports = router;
