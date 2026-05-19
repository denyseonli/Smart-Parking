import express from "express"
import {createStockIn} from "../controller/StockIn.controller.js";
const stockinRoutes=express.Router()
stockinRoutes.post("/addstockin",createStockIn)

export default stockinRoutes;
