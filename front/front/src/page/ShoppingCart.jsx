
    import React, { useEffect } from "react";
    import "./ShoppingCart.css"
    import axios from "axios";
import { useState } from "react";
    
    export default function ShoppingCart() {
    const [item,setItem]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/shoppingcart")
    .then((res)=>  {
    console.log(res.data)
    setItem(res.data)
    }).catch(err => console.log(err))
  



  }, [])
  


    return (
    <div>
ooo
    </div>
    );
    }