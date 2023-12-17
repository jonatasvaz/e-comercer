import React, { useState } from 'react';
import axios from 'axios';

import "./Store.css"
import { Link } from 'react-router-dom';



function Store() {


 const [allProduct,setAllProduct]=useState([])

 console.log(allProduct)
  useState(()=>{
     axios.get("http://localhost:3000/store")
     .then((res)=>  {
     console.log(res.data)
     setAllProduct(res.data)
     }).catch(err => console.log(err))
   
  },[])

 const getAllProducts = allProduct.map((item,index)=>{

  return(
  
    <div className='card' key={item.id}>
        <div className='imgg'>
        <img src={item.imageUrl}/>
        </div>
        <div>
           <h1 className='nameproduct'>{item.name_}</h1>
           <p className='brand'>{item.brand}</p>
            <p className='price'>€{item.price},00</p>
           <p className='description'>{item.descriptio}</p>
        </div>


        <div>
        <Link to={`/store/${item.id}`}>
        <button className='btn-one'>see more</button>
        </Link>
       
        </div>

    </div>  
    
  )

 })   

  return (
    <div className=' main'>

 { getAllProducts }
 </div>
  );
};


export default Store