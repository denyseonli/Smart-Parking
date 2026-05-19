import  stockOutModel from "../model/StockOutModel.js"

export const createStockOut=async(req,res)=>{
    const{StockOutQuantity,StockOutUnitPrice, StockOutTotalPrice,StockOutDate}=req.body
    try{
        const stockOut=await stockOutModel.create({
            StockOutQuantity,
            StockOutUnitPrice,
            StockOutTotalPrice,
            StockOutDate

        });
    res.status(201).json({msg:"Stockout created",stockOut})
    }
    catch(err){
        console.log("err",err)

    }
}

/////  get all stockouts /////

 export const getStockOut=async(req,res)=>{
    try{
        const stockout=await stockOutModel.find()
        if(stockout) 
            return res.status(201).json({msg:"stockout was successfully",stockout})
        else return res.status(404).json({msg:"stockout failed"})
    }
    catch(err){
        console.log("err",err)
    }
}


//////   get stockout by id ////

export const stockoutById=async(req,res)=>{
    const {id}=req.params
        const stockoutid=await stockOutModel.findById(id)
    try{
        
        if(stockoutid)
            return res.status(201).json({msg:"stockoutid successfully",stockoutid})
        else return res.status(404).json({msg:"not successfully"})
    }
    catch(err){
        console.log("err",err)
    }
}



// //////  deleting ////
export const delstockout=async(req,res)=>{
   const id=req.params.id
   const delstockout=await stockOutModel.findByIdAndDelete({_id:id})
   try{
    if(delstockout)
        return res.status(201).json({msg:"stockout was deleted",delstockout})
    else return res.status(404).json({msg:"stockout not deleted"})
   }
   catch(err){
    console.log("err",err)
   }
}




//////  updating  /////

export const updatestockout=async(req,res)=>{
    const id=req.params.id
    const updatestockout=await stockOutModel.findByIdAndUpdate({_id:id},req.body)
    try{
        if(updatestockout)
            return res.status(201).json({msg:"stockout was updated",updatestockout})
        else return res.status(404).json({msg:"stockout not updated"})
    }
    catch(err){
        console.log("err",err)
    }
}
