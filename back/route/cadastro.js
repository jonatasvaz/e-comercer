const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const productController = require("../controllers/productController")

const checkToken = require("../middleware/index")

router.post("/register", cadastroController.createCadastro);

router.post("/login",cadastroController.createLogin)

router.get("/user/:id",checkToken, cadastroController.userValidation)

router.post("/product",productController.createProduct )

router.get("/product",productController.getProducts )


module.exports = router;