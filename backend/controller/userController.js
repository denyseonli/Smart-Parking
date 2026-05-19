import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../model/userModel.js"

const JWT_SECRET=process.env.JWT_SECRET

export const register=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const userExists=await userModel.findOne({email});
        if(userExists)
            return res.status(401).json({msg:"user Already Exits"})
        const hashpassword=await bcrypt.hash(password,10);
        const user=await userModel.create({username,email,password: hashpassword})
        if(user)
            return res.status(200).json({msg:"user created!!",user})
        else return res.status(401).json({msg:"user don`t created "})
    }
    catch(err){
        console.log("err",err)
        return res.status(500).json({msg:"Server error", error: err.message})
    }
}


//////  LOGIN /////

export const login=async(req,res)=>{
    const{email,password}=req.body

 try{
    const userExists=await userModel.findOne({email})
    if(!userExists)return res.status(401).json({msg:"User not found. Please register first."})

        const isMatch=await bcrypt.compare(password, userExists.password);
    if(!isMatch)return res.status(402).json({msg:"Incorrect password"})

        const token = jwt.sign( {id: userExists._id, email:userExists.email}, process.env.JWT_SECRET);
    return res.status(200).json({status:"OK",token,username:userExists.username,userId:userExists._id})
   }catch(error){
    console.log(error)
    return res.status(500).json({msg:"Server error", error: error.message})
   }

}



/////  edit user /////
export const editUser=async(req,res)=>{
    const userId=req.params.Id;
    try{
        const updateUser=await userModel.findByIdAndUpdate({_id:userId},userId)
        if(updateUser) return res.status(201).json({msg:"user updated!👌👌",updateUser})
            else return res.status(404).json({msg:" User not updated😒😒"})
    }catch(err){
        console.log(err)
    }
}
    

    ////  get logged User ////
export const getloggedUser=async(req,res)=>{
    const token=req.headers.authorization;
    try{
        if(!token) return res.status(404).json({msg:"token not provided!"})
        const decoded = jwt.verify(token,JWT_SECRET);
        res.status(201).json({msg:"OK", denyse:decoded});
    
    }catch(err){
        console.log(err)
    }





}



