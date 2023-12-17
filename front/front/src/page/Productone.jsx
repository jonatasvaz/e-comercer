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
    
  


 const handleAdd= async(e)=>{
e.preventDefault()

const data= [{
  id:produto.id,
  name:produto.name_,
  price:produto.price,
  brand:produto.brand
}]
console.log(data)
const getItem = JSON.parse(localStorage.getItem("carrinho"))

const get =[]
if(getItem){
 
  const a= data.push(getItem)
  console.log(a)
 localStorage.setItem("carrinho",JSON.stringify(a))

 navigate("/shoppingcart")

}

localStorage.setItem("carrinho",JSON.stringify(data))

navigate("/shoppingcart")
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