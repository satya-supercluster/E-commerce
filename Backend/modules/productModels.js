const mongoose = require("mongoose");

// route handler
const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    description:{
        type : String,
        require : true,
    },
    price:{
        type : Number,
        require : true,
    },
    image:{
        type : Array,
        require : true,
    },
    caregory:{
        type : String,
        require : true,
    },
    subCategory:{
        type : String,
        require : true,
    },
    sizes:{
        type : Array,
        require : true,
    },
    bestseller:{
        type : Boolean,
        
    },
    date:{
        type:Number,
        required:true
    }
});


// export
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

module.exports = productModel