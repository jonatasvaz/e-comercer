import React, { useState } from 'react';
import axios from 'axios';

function Store() {
 
  useState(()=>{
     axios.get("http://localhost:3000/store")
     .then((res)=>  {
     console.log(res.data)
     }).catch(err => console.log(err))
   
  },[])

  return (
 <h1>Store</h1>
  );
};


export default Store