import mongoose from "mongoose";
const spare=new mongoose.Schema({
   
    Name:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    UnitPrice:{
        type:String,
        required:true
    },
    TotalPrice:{
        type:Number,
        required:true
    },
})
const spareModel=mongoose.model("SparePart", spare);
export default spareModel;