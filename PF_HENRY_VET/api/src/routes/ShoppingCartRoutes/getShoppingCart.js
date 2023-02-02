const {Router} = require("express");
const router = Router();
const {searchCart} = require("../../controllers/controllerShoppingCart/controllerGet");

router.get("/get", async (req, res) => {
    const {idCart} = req.query;
    try{
        const info = await searchCart(idCart);
        if(!info) res.status(200).json({
            ok: false,
            msg: "No Se Ha Encontrado El Usuario.",
            detail: "No Existe El Usuario En BD."
        })
        else res.status(200).json({
            ok: true,
            value: info
        })
    }catch(err){
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;