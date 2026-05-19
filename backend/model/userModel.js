import mongoose from "mongoose";
const user=new mongoose.Schema({
    
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        length:10
    }
})
const userModel=mongoose.model("user",user);
export default userModel