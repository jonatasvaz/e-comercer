
    import React, { useEffect } from "react";
    import "./ShoppingCart.css"
    import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
    import axios from "axios";
import { useState } from "react";

    
    export default function ShoppingCart() {
    const [item,setItem]= useState([])
    const [quantity, setQuantity] = useState(1);
    console.log(item)
  useEffect(()=>{
 
    const userId = localStorage.getItem('userId');

    if (userId) {
      getShoppingCart(userId);
    }

  }, [])
  
  const getShoppingCart = async (userId) => {
    const res = await axios.get(`http://localhost:3000/shoppingcart/${userId}`)
    console.log(res.data + "test")
      if(res){
        setItem(res.data)
      }

  };









   const deleteProduct = async (e)=>{
      console.log(e)
  axios.delete("http://localhost:3000/shoppingcart",{
    data: { id: e },
})
.then((res)=>  {
  console.log("product was delect")
  window.location.reload();
 
  }).catch(err => console.log(err))

   }



  const getAllProducts = item.map((item,index)=>{

    return(
     
      <div className='cart-shopping' key={item.id}>
          <div className='imgcart'>
          <img src={item.imageUrl}/>
          </div>
          <div className="info">
             <h1 className='nameproduct'>{item.name}</h1>
             <p className='description'>{item.descriptio}</p>
             <p className='price'>€{quantity*item.price},00</p>
             <div>
              <div className="btns">
             <input className="quantify" type='number' min="1" max="6" value={quantity} onChange={e => setQuantity(e.target.value)}/>
             <button className="delete" onClick={() => deleteProduct(item.id)}>
             <DeleteOutlinedIcon/>
             </button>
             </div>
             </div>
            
          </div>
  
         
  
      </div>  
      
    )
  
   })   
  

    return (
    <div>
  {item ? getAllProducts: <h1>no products on shopping cart</h1> }
  <div className="btn-pay">
            <button >finalize purchase</button>
           </div>
    </div>
    );
    }