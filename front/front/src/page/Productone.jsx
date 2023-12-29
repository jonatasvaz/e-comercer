import React, { useState,useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Productone.css"
import laptop from "../upload/laptop.jpg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios"

function Productone() {
   const navigate= useNavigate()
    const { id } = useParams();
    const [produto, setProduto] = useState();
    const [quantity, setQuantity] = useState(1);
    
    const auth =  localStorage.getItem("userId")
   


 const handleAdd= async(e)=>{
e.preventDefault()


    const post = await axios.post("http://localhost:3000/shoppingcart",{
      product:produto.name_,
      descriptio:produto.descriptio,
      price:produto.price,
      amaunt:produto.countInStock,
      imageUrl:produto.imageUrl,
      product_id:produto.id,
      user_id:auth
    })
    if(post){
      navigate("/shoppingcart")
    }
     

console.log("errro")




}


    useEffect(() => {
     
        const fetchProduto = async () => {
          try {
            const response = await fetch(`http://localhost:3000/store/${id}`); 
            const data = await response.json();
            console.log(response)
            if (!response) {
              console.error('Erro ao buscar produto:', data.error);
            } else {
              setProduto(data);
            }
          } catch (error) {
            console.error('Erro ao buscar produto:', error);
          }
        };
    
        fetchProduto();
      }, [id]);

      if (!produto) {
        return <div>Carregando...</div>;
      }
    
console.log(produto)
      return(
        <div className='mainproduct'>
         <div className='imagem'>
          <img src={produto.imageUrl}/>
         </div>
     
        <div className='info'>
        <h2 className='name-product'>{produto.name_}</h2>
        <p className='description-product'>{produto.descriptio}</p>
        <p className='price-product'>price:  €{produto.price},00</p>
        <p className='brand-product'>brand:  {produto.brand}</p>
        <p className='category-product'>category:  {produto.category}</p>
        <p className='countinstock-product'>in stock:  {produto.countInStock}</p>
       
        <div className='btn-shopping'>
          <div>
           <input type='number' min="1" max="6" value={quantity} onChange={e => setQuantity(e.target.value)}/>
          </div>
          <div>
        <Link>
         <button  className='btn-buy'>
          BUY
         </button>
        </Link>
        </div>
        <div>
        <Link>
        <button className='btn-addshopping' onClick={handleAdd}>
        <AddShoppingCartIcon/>
        </button>
    
        </Link>
        </div>
      </div>  
      </div>
    
      </div>
  );
};


export default Productone