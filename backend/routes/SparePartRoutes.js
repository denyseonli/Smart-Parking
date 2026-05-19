import express from "express"
import{createSpare} from "../controller/SparePart.controller.js";

const spareRoutes=express.Router();
spareRoutes.post("/addsparepart",createSpare)

export default spareRoutes;