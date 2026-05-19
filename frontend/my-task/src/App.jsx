import React from "react";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "/src/pages/dashboard.jsx";
import sparePart from "./pages/sparePart.jsx";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/sparePart" element={<sparePart/>}/>
      </Routes>
    </div>
  )
}


export default App;