const {Router} = require("express");
const router = Router();
const {objWithNewValues} = require("../../controllers/controllerShoppingCartDtail/controllerUpdate");
const {ShoppingCartDetail} = require("../../db");

router.put("/update", async (req, res) => {
    const {idCartDtail} = req.params;
    try{
        if(!idCartDtail) res.status(200).json({
            ok: false,
            msg: "Se Necesita El ID Del Detalle De Carrito.",
            detail: "Falta El idCartDtail."    
        }) 
        else {
            const info = await ShoppingCartDetail.update(objWithNewValues(req.params), {
                where: {
                    cod_CartDetail: idCartDtail
                }
            });
            info[0] ? res.status(200).json({
                ok: true,
                value: info
            })
            :
            res.status(200).json({
                ok: false,
                msg: "Ha Sucedido Un Error Al Modificar El Detalle De Carrito.",
                detail: "El Error Se Produjo En updateShoppingCartDtail.js Al Intentar Hacer Un Update."    
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