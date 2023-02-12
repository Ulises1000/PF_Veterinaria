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
const getShoppingCart = require("./ShoppingCartRoutes/getShoppingCart");
const getShoppingCartDtail = require("./ShoppingCartDtailRoutes/getShoppingCartDtail");
const updateShoppingCartDtail = require("./ShoppingCartDtailRoutes/updateShoppingCartDtail");
const deleteShoppingCartDtail = require("./ShoppingCartDtailRoutes/deleteShoppingCartDtail");
const postShoppingCartDtail = require("./ShoppingCartDtailRoutes/postShoppingCartDtail");
const getFavoriteRouter = require("./FavoriteRoutes/getFavorite");
const updateFavoriteRouter = require("./FavoriteRoutes/updateFavorite");
const MPRouter=require("./MercadoPago/MercadoPago.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", getProductRouter, postProductRouter,updateProductRouter, deleteProductRouter,getAProductRouter);
router.use("/users", getUserRouter, postUserRouter, deleteUserRouter, updateUserRouter);
router.use("/shoppingCart", getShoppingCart);
router.use("/shoppingCartDetail", getShoppingCartDtail, updateShoppingCartDtail, deleteShoppingCartDtail, postShoppingCartDtail)
router.use("/favorite",getFavoriteRouter, updateFavoriteRouter);
router.use("/payment",MPRouter)

module.exports = router;
