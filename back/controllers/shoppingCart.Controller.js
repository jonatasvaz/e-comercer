const modelShoppingcart = require("../model/modelShoppingcart")
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

app.use(cookieParser());

const shoppingcart ={

    addShoppingCart : async(req,res)=>{
       
        try {
            const { id, name_product, amauntstock,price,user_id,product_id,quantity } = req.body;
        
          
            //const expirationDate = new Date();
            //expirationDate.setDate(expirationDate.getDate() + 7);
        
            // Verifique se o produto já está no carrinho do usuário
            const carrinhoExistente = await modelShoppingcart.findOne({
              where: { user_id, product_id },
            });
            if (carrinhoExistente) {
                // Atualize a quantidade e o tempo de expiração se o produto já estiver no carrinho
                await carrinhoExistente.update({
                  quantity: carrinhoExistente.quantity + quantity,
               
                });
              } else {
                // Adicione o produto ao carrinho se não estiver presente
                await CarrinhoCompras.create({
                    id,
                  product_id,
                  name_product,
                  amauntstock,
                  price,
                  quantity,
                 
                });
              }
          // Atualize os cookies no lado do cliente
    res.cookie('user_id', id);
    res.cookie('carrinho', 'dados do carrinho'); // Atualize com os dados reais do carrinho

    res.status(201).json({ message: 'Produto adicionado ao carrinho com sucesso' });
            }catch (error) {
                console.error('Erro ao adicionar ao carrinho:', error);
                res.status(500).json({ error: 'Erro interno ao adicionar ao carrinho' });
              }
         

        }
}

module.exports = shoppingcart

