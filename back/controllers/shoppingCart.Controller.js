const modelShoppingcart = require("../model/modelShoppingcart")
const shoppingcartid =require("../model/modelProduct")
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

app.use(cookieParser());

const shoppingcart ={

    addShoppingCart : async(req,res)=>{
       
        try {
            const { id,product,descriptio,price,amaunt,imageUrl,product_id,user_id } = req.body;
        
          
            //const expirationDate = new Date();
            //expirationDate.setDate(expirationDate.getDate() + 7);
        
            // Verifique se o produto já está no carrinho do usuário
            const carrinhoExistente = await modelShoppingcart.findOne({
              where: {  product_id ,user_id},
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
                    user_id
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
          const userId = req.params.id;
          console.log(userId +"kkkkkkkkkkkkkkkkkkkkk")
          try {
            const userProducts = await modelShoppingcart.findAll({
              where: { user_id: userId },
            });
        
            if (userProducts.length > 0) {
              res.send(userProducts);
            } else {
              res.send('Nenhum produto encontrado para este usuário.');
            }
          } catch (error) {
            console.error('Erro ao obter produtos do carrinho:', error);
            res.status(500).send('Erro interno do servidor');
          } },


        DeleteProduct : async(req,res)=>{
         
         /*/
          const id = req.body.id
         console.log(id)
        
           
           const del=  await modelShoppingcart.destroy({ where: { id: id } });
                 if(del){
                  res.status(200).json({ message: 'Produto excluído com sucesso.'})
                  return
                 }
         
          
            res.status(404).json({ message: 'Produto não encontrado no carrinho.' });
             /*/

             try {
              const productId = req.body.id;
          
              // Verifica se o produto está no carrinho
              const productToDelete = await modelShoppingcart.findByPk(productId);
          
              if (productToDelete) {
                // Se o produto estiver no carrinho, exclua-o
                await productToDelete.destroy();
          
                res.status(200).json({ message: 'Produto excluído com sucesso.' });
              } else {
                res.status(404).json({ message: 'Produto não encontrado no carrinho.' });
              }
            } catch (error) {
              console.error('Erro ao excluir produto do carrinho:', error);
              res.status(500).json({ message: 'Erro interno do servidor.' });
            }
        }
}

module.exports = shoppingcart



//vou ter que criar um quantify em