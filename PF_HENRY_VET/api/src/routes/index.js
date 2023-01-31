const { Router } = require('express');
const getProductRouter = require("./ProductRoutes/getProducts");
const postProductRouter = require("./ProductRoutes/postProducts");
const deleteProductRouter = require("./ProductRoutes/postProducts");
const getUserRouter = require("./ProductRoutes");
const postUserRouter = require("./ProductRoutes");
const deleteUserRouter = require("./ProductRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", getProductRouter, postProductRouter, deleteProductRouter);
router.use("/users", getUserRouter, postUserRouter, deleteUserRouter);

module.exports = router;
