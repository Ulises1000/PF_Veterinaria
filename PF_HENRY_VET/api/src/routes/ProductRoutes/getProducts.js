const {Router} = require("express");
const axios = require("axios");
const {getProducts} = require("../../controllers/controllerProducts/controllerGetProduct")
const router = Router();

router.get("/get",async  (req, res) => {
    const {name} = req.query;
    try{
      const getP = name ? await getProducts(name.trim()) : await getProducts();
      if(!getP.length) res.status(200).json({
        ok: false,
        msg: "No Se Ha Encontrado Ningun Producto.",
        detail: "No Existe Ningun Producto BD Con Ese Nombre.",
      });
      else res.status(200).json(getP);
    }catch(err){
      res.status(404).send({
         ok: false,
         msg: "Lo Lamentamos, Error al llamar los productos.",
         detail: err.message,
       });
    }
});

module.exports = router;






