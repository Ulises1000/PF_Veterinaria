const {Router} = require("express");
const router = Router();
const {objWithNewValues, testExistence} = require("../../controllers/controllerShoppingCartDtail/controllerUpdate");
const {ShoppingCartDetail} = require("../../db");

router.put("/update", async (req, res) => {
    const {idCartDtail, productId} = req.body;
    try{
        if(!idCartDtail) res.status(200).json({
            ok: false,
            msg: "Se Necesita El ID Del Detalle De Carrito.",
            detail: "Falta El idCartDtail."    
        })
        else {
            const exists = await testExistence(idCartDtail, productId);
            if(!exists) res.status(404).json({
                ok: false,
                msg: "No Se Ha Encontrado El Producto En El Carrito.",
                detail: "No Existe Porque Se Ha Borrado O Nunca Se Agrego."    
            }) 
            else{
                const info = await ShoppingCartDetail.update(objWithNewValues(req.body), {
                    where: {
                        cod_CartDetail: idCartDtail,
                        productCodProduct: productId 
                    }
                });
                info[0] ? res.status(200).json({
                    ok: true,
                    value: "Se Ha Actualizado El Carrito."
                })
                :
                res.status(200).json({
                    ok: false,
                    msg: "Ha Sucedido Un Error Al Modificar El Detalle De Carrito.",
                    detail: "El Error Se Produjo En updateShoppingCartDtail.js Al Intentar Hacer Un Update."    
                })  
            }
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