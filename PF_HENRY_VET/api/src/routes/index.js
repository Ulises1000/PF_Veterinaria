const { Router } = require('express');
const getProductRouter = require("./ProductRoutes/getProducts");
const getAProductRouter = require("./ProductRoutes/getProduct")
const postProductRouter = require("./ProductRoutes/postProducts");
const deleteProductRouter = require("./ProductRoutes/deleteProducts");
const updateProductRouter = require("./ProductRoutes/updateProducts")
const getUserRouter = require("./UserRoutes/getUser");
const postUserRouter = require("./UserRoutes/postUser");
const deleteUserRouter = require("./UserRoutes/deleteUser");
const updateUserRouter = require("./UserRoutes/updateUser");
const BreedRouter = require("./BreedRouter/Breed.js")
const getShoppingCart = require("./ShoppingCartRoutes/getShoppingCart");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", getProductRouter, postProductRouter,updateProductRouter, deleteProductRouter,getAProductRouter);
router.use("/users", getUserRouter, postUserRouter, deleteUserRouter, updateUserRouter);
router.use("/shoppingCart", getShoppingCart);
router.use("/breed", BreedRouter)

module.exports = router;
