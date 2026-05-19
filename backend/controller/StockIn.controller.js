import stockinModel from "../model/StockInModel.js"


export const createStockIn=async(req,res)=>{

    const {StockInQuantity,StockInDate}=req.body
    try{
        const StockIn=await stockinModel.create({
            StockInQuantity,
            StockInDate


        });
  res.status(201).json({msg:"Stockin is created",StockIn})
    }
    catch(err){
        console.log("err", err)
    }
}