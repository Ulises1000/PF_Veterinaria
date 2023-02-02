const {Router} = require("express");
const {User, ShoppingCart} = require("../../db");
const {findUser} = require("../../controllers/controllerUsers/controllerGet");
const router = Router();

router.post("/post", async (req, res) => {
    const {
        name,
        email,
        password,
        creditCard,
        direction,
        idCarrito
    } = req.body;
    try{
        const info = await findUser(name, password);

        if(!name || !email || !password || !creditCard || !direction) res.status(200).json({
            ok: false,
            msg: "Faltan Datos",
            detail: "Faltan Datos"
        }) 
        else if(info.length) res.status(200).json({
            ok: false,
            msg: "Ya Existe El Usuario.",
            detail: "Ya Existe El Usuario En La BD"
        })
        else {
            //CREA TANTO EL CARRITO COMO EL USER AL MISMO TIEMPO
            const createShoppingCart = await ShoppingCart.create();
            const createdUser = await User.create({
                shoppingCartCodCart: createShoppingCart.cod_Cart,
                name_U: name,
                email_U: email,
                password_U: password,
                creditCard_U: creditCard,
                direction_U: direction
              })

            res.status(200).json({
                ok: true,
                value: "Se ha Agregado El Usuario."
            });
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