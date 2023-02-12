const {Router} = require("express");
const router = Router();
const {findAllDetailCartDetails} = require("../../controllers/controllerShoppingCartDtail/controllerGet");

router.get("/get/:idCart", async (req, res) => {
    const {idCart} = req.params;
    try{
        if(!idCart) res.status(200).json({
            ok: false,
            msg: "Se Necesita El ID Del Carrito.",
            detail: "Falta El idCart."    
        }) 
        else {
            const info = await findAllDetailCartDetails(idCart);
            if(!info.length) res.status(200).json({
                ok: false,
                msg: "No Hay Productos En El Carrito Todavia.",
                detail: "No Se Encontraron Detalles De Carritos En La BD."    
            })
            else res.status(200).json({
                ok: true,
                value: info
            })
        }
    }catch(err){
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;