import express from "express"
import {createStockOut
    ,getStockOut,stockoutById,delstockout,updatestockout} from "../controller/StockOut.controller.js"
const stockoutRoutes=express.Router()
stockoutRoutes.post("/addstockout",createStockOut)
stockoutRoutes.get("/getstockout",getStockOut)
stockoutRoutes.get("/getstockout/:id",stockoutById)
stockoutRoutes.delete("/deletestockout/:id",delstockout)
stockoutRoutes.put("/updatestockout/:id",updatestockout)

export default stockoutRoutes;