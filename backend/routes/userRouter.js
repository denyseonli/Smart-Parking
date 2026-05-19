import express from "express"
import{register,login,
    editUser,
    getloggedUser} from "../controller/userController.js"
const userRouter=express.Router()
userRouter.post("/register", register)
userRouter.post("/login",login)
userRouter.put("/editUser", editUser)
userRouter.get("/getloggedUser", getloggedUser)


export default userRouter;