const {Router} = require("express");
const {Product} = require("../../db.js");
const router = Router();

router.post("/postProduct", async (req, res) => {
    try{
        const{name, description,unit_price,stock,image_url} = req.body;

        const productCreate = await Product.create({
            name, description,unit_price,stock,image_url
        })
        return res.status(201).send(productCreate)
        
    }catch(error){
        console.log(error + ">>> routes/ProductRoutes/postProducts.js");
    }
});

module.exports = router;