const {Router} = require("express");
const {Product} = require("../../db.js")
const router = Router();

router.delete("/deleteProduct/:codProduct", async (req, res) => {
    try{
        const {codProduct} = req.params;

        await Product.destroy({
            where: {codProduct},
        })

        res.send("Product Deleted")
    }catch(err){
        console.log("deleteProduct")
    }
});

module.exports = router;