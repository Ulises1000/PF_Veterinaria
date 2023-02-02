const {Router} = require("express");
const axios = require("axios");
const {getProducts} = require("../../controllers/controllerProducts/controllerGetProduct")
const router = Router();

router.get("/get",async  (req, res) => {
    try{
       const getP = await getProducts()       
      res.json(getP)

    }catch(err){
       console.log(err + "error en tal ruta")
    }
});

module.exports = router;






