const Product = require("../model/modelProduct")
const { getObjectSignedUrl,uploadFile} = require("../config/multer")
const multer = require("multer")
const sharp = require("sharp")
const crypto = require("crypto")
 
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')






 const productController = { 

    createProduct:  async (req, res) => {

        const file = req.file
        const imageName = generateFileName()
    
        
      const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer()
         
      const upload=  await uploadFile(fileBuffer, imageName, file.mimetype)


      const product = new Product({
      
        name_ : req.body. name_,
          price : req.body.price,
          image : req.body.image, 
          brand : req.body.brand,  
          category : req.body.category,
          countInStock : req.body.countInStock,
          descriptio : req.body.descriptio,
          
     

      });


      if(upload){
        const newProduct = await product.save();
        if (newProduct) {
          return res
            .status(201)
            .send({ message: 'New Product Created', data: newProduct });
        }
          
      }
          return res.status(500).send({ message: ' Error in Creating Product.' });
      },
      getProducts : async (req,res)=>{

        const find = await Product.findAll()

        for (let post of find) {
          post.imageUrl= await getObjectSignedUrl(post.imageName)
          console.log(find)
          }
        res.send(find)


       
          
      },
      getOneProduct   : async (req,res)=>{
        const { id } = req.params; 
        const find = await Product.findByPk(id);

        if (!find) {
          return res.status(404).json({ error: 'Produto não encontrado' });
        }else{
          find.imageUrl = await getObjectSignedUrl(find.imageName)
          res.json(find);
        }
    
        
       
      }
 }

 module.exports = productController  