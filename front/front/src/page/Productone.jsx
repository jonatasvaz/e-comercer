import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Productone.css"
import laptop from "../upload/laptop.jpg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Productone() {
 
    const { id } = useParams();
    const [produto, setProduto] = useState();
  console.log(id)
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
          <img src={laptop}/>
         </div>
     
        <div className='info'>
        <h2 className='name-product'>{produto.name_}</h2>
        <p className='description-product'>{produto.descriptio}</p>
        <p className='price-product'>price:  €{produto.price},00</p>
        <p className='brand-product'>brand:  {produto.brand}</p>
        <p className='category-product'>category:  {produto.category}</p>
        <p className='countinstock-product'>in stock:  {produto.countInStock}</p>


        <div className='btn-shopping'>
        <Link>
         <button  className='btn-buy'>
          BUY
         </button>
        </Link>
        <Link>
        <button className='btn-addshopping'>
        <AddShoppingCartIcon/>
        </button>
    
        </Link>
      </div>  
      </div>
    
      </div>
  );
};


export default Productone