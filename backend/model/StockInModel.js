import mongoose from "mongoose";
const stockIn=new mongoose.Schema({
     sparePartId:{
        type:mongoose.Types.ObjectId,
         ref:"SparePart",
    },
    StockInQuantity:{
        type:String,
        
    },
    StockInDate:{
        type:Date,
        default:Date.now()
    }
})
const stockinModel=mongoose.model("stockIn",stockIn)
export default stockinModel;