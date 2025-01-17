const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,    
    },
    phone:{
        type:String,
        required:false,
        unique:false,
        sparse:true,
        default:null
    },
    googleId:{
        type:String,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",   
    }],
    wallet:{
        type:Number,
        default:0,
    },
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wishlist"
    }],
    orderHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }],
    createdOn:{
        type:Date,
        default:Date.now,
    },
    referalCode:{
        type:String,
    },
    redeemed:{
        type: Boolean,   
    },
    redeemeedUsers:[{
        type:mongoose.Schema.Types.ObjectId
        
    }],
    searchHistory:[{
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"category",
        },
        brand:{
            type:String,

        },
        searchOn:{
            type:Date,
            default:Date.now
        }
    }]  

})

const User=mongoose.model("User",userSchema);

module.exports={
    User
}