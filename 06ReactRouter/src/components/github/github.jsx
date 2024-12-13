import React from "react";
import { useState,useEffect } from "react";
export default function Github(){
    const [data,setData]= useState(0)
   useEffect(()=>{
fetch('https://httpbin.org/get')
.then(response=>response.json())
.then(data=>{
  setData(data)
})
   },[])
    
return(
    <>
<div style={{textAlign:"center", backgroundColor:"greenyellow", color:'black'}}>
    <h1>{data.host}</h1>
</div>
</>
)

}