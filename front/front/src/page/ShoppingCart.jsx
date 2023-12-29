
    import React, { useEffect } from "react";
    import "./ShoppingCart.css"
    import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
    import axios from "axios";
import { useState } from "react";

    
    export default function ShoppingCart() {
    const [item,setItem]= useState([])
    const [quantity, setQuantity] = useState(1);
  useEffect(()=>{
 
    const userId = localStorage.getItem('userId');

    if (userId) {
      getShoppingCart(userId);
    }

  }, [])
  
  const getShoppingCart = async (userId) => {
    const res = await axios.get(`http://localhost:3000/shoppingcart/${userId}`)
    .then((res)=>  {
      console.log(res.data)
      setItem(res.data)
      }).catch(err => console.log(err))
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
     
      <div className='cart' key={item.id}>
          <div className='imgcart'>
          <img src={item.imageUrl}/>
          </div>
          <div>
             <h1 className='nameproduct'>{item.name}</h1>
             <p className='price'>€{quantity*item.price},00</p>
             <p className='description'>{item.descriptio}</p>
             <div>
             <input type='number' min="1" max="6" value={quantity} onChange={e => setQuantity(e.target.value)}/>
             <button onClick={() => deleteProduct(item.id)}>
             <DeleteOutlinedIcon/>
             </button>
          
             </div>
            
          </div>
  
         
  
      </div>  
      
    )
  
   })   
  

    return (
    <div>
  { getAllProducts }
  <div>
            <button>finalize purchase</button>
           </div>
    </div>
    );
    }