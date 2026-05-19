import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import connectdb from "./config/db.js"
import spareRoutes from "./routes/SparePartRoutes.js"
import stockinRoutes from "./routes/StockInRoutes.js";
import stockoutRoutes from "./routes/StockOutRoutes.js";
import userRouter from "./routes/userRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path: path.join(__dirname, '.env')})
connectdb()
const PORT=process.env.PORT|| 3000
const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
     res.send("app is running")
 })
app.use("/api/create",spareRoutes );
app.use("/api/create",stockinRoutes)
app.use("/api/create",stockoutRoutes)
app.use("/api/create",userRouter)


app.listen(PORT,()=>{
    console.log(`this server is running ${PORT}`)
})



