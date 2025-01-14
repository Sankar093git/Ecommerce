const mongoose=require('mongoose');
const env=require('dotenv').config();

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectDB