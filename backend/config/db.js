import mongoose from "mongoose";
const connectdb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGURI)
        if(!conn){
            console.log("not connected")
        }
        else
            console.log("connected")
    }
    catch(err){
        console.log("err",err)
    }

}

export default connectdb;
