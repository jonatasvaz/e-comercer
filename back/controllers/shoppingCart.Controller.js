const modelShoppingcart = require("../model/modelShoppingcart")
const shoppingcartid =require("../model/modelProduct")
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

app.use(cookieParser());

const shoppingcart ={

    addShoppingCart : async(req,res)=>{
       
        try {
            const { id,product,descriptio,price,amaunt,imageUrl,product_id } = req.body;
        
          
            //const expirationDate = new Date();
            //expirationDate.setDate(expirationDate.getDate() + 7);
        
            // Verifique se o produto já está no carrinho do usuário
            const carrinhoExistente = await modelShoppingcart.findOne({
              where: {  product_id },
            });
            if (carrinhoExistente ) {
                // Atualize a quantidade e o tempo de expiração se o produto já estiver no carrinho
                await carrinhoExistente.update({
                  amaunt: carrinhoExistente.amaunt + amaunt,
               
                });
              } else {
                // Adicione o produto ao carrinho se não estiver presente
                await modelShoppingcart.create({
                    id,
                    product,
                    descriptio,
                    price,
                    amaunt,
                    imageUrl,
                  product_id,

                  });
              }
          // Atualize os cookies no lado do cliente
   
    res.status(201).json({ message: 'Produto adicionado ao carrinho com sucesso' });
            }catch (error) {
                console.error('Erro ao adicionar ao carrinho:', error);
                res.status(500).json({ error: 'Erro interno ao adicionar ao carrinho' });
              }
         

        },

        GetShoppingCart : async(req,res)=>{

     const allproduct= modelShoppingcart.findAll()

     if(allproduct){
             res.send(allproduct)
     }else{
res.send("product no found")
        } }
}

module.exports = shoppingcart



//vou ter que criar um quantify em