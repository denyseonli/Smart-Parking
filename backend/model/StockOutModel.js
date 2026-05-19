import mongoose from "mongoose";
const stockOut=new mongoose.Schema({

    sparepart:{
        type:mongoose.Types.ObjectId,
        ref:"SparePart"
    },
    StockOutQuantity:{
        type:String,
    },
    StockOutUnitPrice:{
        type:Number,
        
    },
    StockOutTotalPrice:{
        type:String,
        required:true
    },
    StockOutDate:{
        type:Date,
        default:Date.now()
    }
})
const stockOutModel=mongoose.model("stockOut",stockOut)
export default stockOutModel; 