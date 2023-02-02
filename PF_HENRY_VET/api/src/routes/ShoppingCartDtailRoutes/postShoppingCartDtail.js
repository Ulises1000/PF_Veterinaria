const {Router} = require("express");
const router = Router();
const {verifyProductInCart} = require("../../controllers/controllerShoppingCartDtail/controllerPost");

router.post("/post", async (req, res) => {
    try{
        const created = await verifyProductInCart(req.body);
        created ? res.status(200).send({
            ok: true, 
            value: "Se Ha Agregado Con Exito Al Carrito." 
        })
        :
        res.status(200).send({
            ok: true, 
            value: "Ya Existe El Producto En El Carrito." 
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


/*
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
        */