import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login=()=>{
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();

const handleLogin =async(e)=>{
e.preventDefault();
try {
   const res=await axios.post("http://localhost:3000/api/create/login",{email,password});
   console.log(res.data)
   alert("Login successful!")
   navigate("/dashboard")
   
} catch (error) {
   console.log("Login error",error)
   alert("Login failed: " + (error.response?.data?.msg || error.message))  
}
}
return(
<>
<div className="h-screen flex justify-center items-center">
   <div className="p-8 bg-gray-100 shadow-xl hover:scale-110 duration-90">
      <h2 className="text-black-800 text-xl font-bold ml-20">Login Page</h2>

<form onSubmit={handleLogin} className="flex flex-col gap-4">
 📩Email:
<input 
className="border border-gray-400 px-2 rounded w-4/4"
type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
 🔑Password:
<input 
className="border border-gray-400 px-2 w-4/4"
type="password" placeholder="enter your paasword" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
<button className="border border-gray-400 px-2 rounded cursor-pointer bg-red-300 w-15" type="submit">Login</button>
</form><br />
<p>Don't have an account? <button className="border border-gray-400 px-2 rounded cursor-pointer bg-red-300" onClick={()=>navigate('/')}>Register</button></p>
   </div>
</div>
</>)

}

export default Login