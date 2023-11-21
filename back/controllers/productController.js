const Product = require("../model/modelProduct")


 const productController = { 

    createProduct:  async (req, res) => {

        const product = new Product({
      
          name_ : req.body. name_,
            price : req.body.price,
            image : req.body.image, 
            brand : req.body.brand,  
            category : req.body.category,
            countInStock : req.body.countInStock,
            descriptio : req.body.descriptio
            
       
  
        });
         
         const productTest = { 
          name_product : "laptop",
          price:"890",
          image:"laptop",
          brand:"hp", 
          category:"eletronic",
          countInStock:"45",
          description_product:"the better laptop in the world" 
         };

        const newProduct = await product.save();
        if (newProduct) {
          return res
            .status(201)
            .send({ message: 'New Product Created', data: newProduct });
        }
        return res.status(500).send({ message: ' Error in Creating Product.' });
      },
      getProducts : async (req,res)=>{

        const find = await Product.findAll()

        res.json(find)
          
      },
      getOneProduct   : async (req,res)=>{
        const { id } = req.params; 
        const find = await Product.findByPk(id);

        if (!find) {
          return res.status(404).json({ error: 'Produto não encontrado' });
        }
    
        res.json(find);
       
      }
 }

 module.exports = productController  