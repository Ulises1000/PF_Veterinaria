const {Router} = require("express");
const { Product } = require("../../db");
const router = Router();

router.put("/updateproduct/:codProduct", async (req, res) => {
    try{
    const {codProduct} = req.params;
   // const{name, description,unit_price,stock,image_url} = req.body;
    const buscaProduct = await Product.findOne({
        where: {codProduct}, 
    })
 
    buscaProduct.set(req.body)
    await buscaProduct.save();   

        return res.send("Product Updated")
    }catch(error){
        console.log(error + ">>> routes/ProductRoutes/updateProducts.js");
    }
});

module.exports = router;