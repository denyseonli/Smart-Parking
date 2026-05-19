import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

const handleCreate=async(e)=>{
    e.preventDefault()

try{
   const res=await axios.post("http://localhost:3000/api/create/register",{username,email,password}) 
    alert(res.data.msg)
    navigate('/login')
   
}catch(err){
    console.log('error',err)
    alert("Error: " + (err.response?.data?.msg || err.message))
}

}
return(
    <>
   <div className="h-screen flex justify-center items-center">
    <div className="p-8 bg-gray-100 shadow-xl">
        <h2  className="text-black-800 text-xl font-bold ml-18">Register Page</h2>
   <form onSubmit={handleCreate} className="flex flex-col gap-4">
   Username: <input
    className="border border-gray-400 px-2 rounded w-4/4" 
    type="text" placeholder="enter username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
   Email:<input 
    className="border border-gray-400 px-2 rounded w-4/4"
    type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    Password:<input 
    className="border border-gray-400 px-2 rounded w-4/4"
    type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
    <button className="border border-gray-400 px-2 rounded w-33 h-h-3 cursor-pointer bg-red-300" type="submit">Create Account</button>
   </form><br />
   <p>Already have an account? <button className="border border-gray-400 px-2 rounded cursor-pointer bg-red-300" onClick={()=>navigate('/login')}>Login</button></p>
    </div>
   </div>
    </>)

}
export default Register;

