const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const productController = require("../controllers/productController")
//const upload = require("../controllers/upload")

const checkToken = require("../middleware/index")

router.post("/register", cadastroController.createCadastro);

router.post("/login",cadastroController.createLogin)

router.get("/user/:id",checkToken, cadastroController.userValidation)

//router.post("/product",upload.array("file"),productController.getProducts  )

router.get("/store", checkToken, productController.getProducts )


module.exports = router;