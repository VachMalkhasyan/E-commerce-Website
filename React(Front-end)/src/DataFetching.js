import React, { useState,useEffect } from "react";


 const DataFetching = () => {
    const [message,setMessage]=useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/auth/login')
       .then((res)=>res.json())
       .then((data) => setMessage(data.message))},[]);

   return (
     <div>
        <h1>{message}</h1>
     </div>
   )
 }
 
 export default DataFetching