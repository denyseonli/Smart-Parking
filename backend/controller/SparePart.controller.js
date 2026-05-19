
import  spareModel from "../model/SparePartModel.js"


export const createSpare=async(req,res)=>{

    const {Name,Category,Quantity,UnitPrice,TotalPrice}=req.body
    try{
        const spare=await spareModel.create({
            Name,
            Category,
            Quantity,
            UnitPrice,
            TotalPrice

        });
  res.status(201).json({msg:"the spare is created",spare})
    }
    catch(err){
        console.log("err", err)
    }
}