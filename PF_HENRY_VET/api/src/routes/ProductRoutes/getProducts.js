const {Router} = require("express");
const axios = require("axios");
const {getProducts} = require("../../controllers/controllerProducts/controllerGetProduct")
const router = Router();

router.get("/getAllProduc",async  (req, res) => {
    try{
       const getP = await getProducts()       
      res.json(getP)

    }catch(err){
       console.log(err + "error en tal ruta")
    }
});

module.exports = router;








/* 
router.post("/getAllProducts", async (req, res) => {
    const {image,nombre,precio} = req.query;
    try{
        if(name){
            
        }
    }catch(err){
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
}); */