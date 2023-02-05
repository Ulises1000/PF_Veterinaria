const {Router} = require("express");
const axios = require("axios");
const {getProducts} = require("../../controllers/controllerProducts/controllerGetProduct")
const router = Router();

router.get("/get",async  (req, res) => {
    try{
       const getP = await getProducts()       
      res.json(getP)

    }catch(err){
      res.status(404).send({
         ok: false,
         msg: "Lo Lamentamos, Error al llamar los productos.",
         detail: err.message,
       });
    }
});

module.exports = router;






