import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard(){
return(
    <>
    <div className="bg-gray-300 h-screen flex flex-cols" >
        <div className="bg-gray-400 w-6/30 h-full rounded">
    
       
        <h1 className="font-bold text-xl ml-25 gap-2">SIMS</h1>
        <p className="ml-20 font-bold text-xxl p-5">Welcome Admin 👋</p>
            <div className="align-center items-center ml-20 mt-50 text-xl gap-10">
                
            <button className="hover:text-blue-700 cursor-pointer">Home</button><br /><br />
            <button className="hover:text-blue-700 cursor-pointer">Report</button><br /><br />
            <button className="hover:text-blue-700 cursor-pointer">sparePart</button><br /><br />
            <button className="hover:text-blue-700 cursor-pointer">stockIn</button><br /><br />
            <button className="hover:text-blue-700 cursor-pointer">stockOut</button>
            
            </div>
            <button className="border border-gray rounded-xl hover:bg-blue-200 h-8 w-25 ml-38 mt-30 cursor-pointer" onClick={()=>navigate('/login')}>Logout</button>
        </div>

        
        <div className="flex flex-cols gap-5">
                    
<div  className="bg-red-50 w-65 h-40 ml-2 mt-30 rounded-sm">
    
</div>
<div  className="bg-red-50 w-65 h-40 ml-10 mt-30 rounded-sm">
    
</div>
<div  className="bg-red-50 w-65 h-40 ml-10 mt-30 rounded-sm">
    
</div>
<div  className="bg-red-50 w-65 h-40 ml-14 mt-30 rounded-sm">
    
</div>
        </div>




        
    </div>
    </>
)








    // const totalSpaces=80;
    // const[cars,setCars]=useState([
    //     {plaque:"RAB736A",time:"08:00"},
    //     {plaque:"RBC628B",time:"00:00"},
    //     {plaque:"RAC001C",time:"15:45"}

    // ]);

    // /// Add Car  ///
    // const addCar=()=>{
    //     if(cars.length<totalSpaces){
    //         const plaque=prompt("Enter plaque nbr");
    //         const time=new Date().totalTimeString();

    //         if(plaque){
    //             setCars([...cars,{plaque,time}]);
    //         }
            
    //     }
    //     else{
    //         alert("Parking is Enough!!");
    //     }
    // };

    // ///// Remove Car ////
    // const removeCar=(plaque)=>{
    //     setCars(cars.filter(car=>car.plaque!==plaque))
    // };
    // const occupied=cars.length;
    // const available=totalSpaces-occupied


    // return(
    //     <div>
    //         <h1>SIMS</h1>
    //         <div>
    //             <h3>Total Spaces:{totalSpaces}</h3>
    //             <h3>occupied:{occupied}</h3>
    //             <h3>Available:{available}</h3>
    //             <h3>
    //                 Status:{available ===0?(<span>Full</span>):(<span>Available</span>)}
    //             </h3>
    //         </div>
    //         <button onClick={addCar}>Add Car</button>
    //         <h2>Parked Cars</h2>

    //         <table border="1" cellPadding="10">
    //             <thead>
    //                 <tr>
    //                     <th>Plaque Nbr</th>
    //                     <th>Entry</th>
    //                     <th>Action</th>
    //                 </tr>
    //             </thead>

    //             <tbody>
    //                 {cars.map((car,index)=>(
    //                     <tr key={index}>
    //                         <td>{car.plaque}</td>
    //                         <td>{car.time}</td>
    //                         <td><button onClick={()=>removeCar(car.plaque)}>Exit</button></td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // )
}
export default Dashboard;