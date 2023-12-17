const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const productController = require("../controllers/productController")
const shoppingcart = require("../controllers/shoppingCart.Controller")
//const upload = require("../controllers/upload")

const multer = require("multer")

const storage = multer.memoryStorage()
 const upload = multer({ storage: storage })

const checkToken = require("../middleware/index");


router.post("/register", cadastroController.createCadastro);

router.post("/login",cadastroController.createLogin)

router.get("/user/:id",checkToken, cadastroController.userValidation)

router.post("/store",upload.single("image"),productController.createProduct  )

router.get("/store",  productController.getProducts )

router.get("/store/:id",productController.getOneProduct)

router.post("/shoppingcart",shoppingcart.addShoppingCart)
module.exports = router; 