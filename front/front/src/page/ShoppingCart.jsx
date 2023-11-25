
    import React, { useEffect } from "react";
    import "./ShoppingCart.css"
import { useState } from "react";
    
    export default function ShoppingCart() {
    const [item,setItem]= useState([])
  useEffect(()=>{

    const getItem = JSON.parse(localStorage.getItem("carrinho"))
 console.log(getItem)
    if(getItem){
setItem(getItem)
    }else{
       return console.log("no products")
    }



  }, [])
  
const itemrandon = item.map((item,index)=>{
    return(
    <div key={index}>
 <h1>{item.name}</h1>
    </div>
    )
})

    return (
    <div>
{itemrandon}
    </div>
    );
    }