const Product = require("../model/modelProduct")


 const productController = { 

    createProduct:  async (req, res) => {

        const product = new Product({
           name : req.body.name,
            price : req.body.price,
            image : req.body.image,
            brand : req.body.brand,
            category : req.body.category,
            countInStock : req.body.countInStock,
            description : req.body.description,
            
      

        });
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
        
      }
     
 }

 module.exports = productController