const {Router} = require("express");
const {User, ShoppingCart, Product} = require("../../db");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const axios = require("axios");
const {postFavorite} = require("../FavoriteRoutes/postFavorite");
const {findUser} = require("../../controllers/controllerUsers/controllerGet");
const router = Router();

router.post("/post", async (req, res) => {
    const {
        name,
        email,
        password,
        creditCard,
        direction,
        image
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
            //--------------------------------

            const todosLosProducts = await axios.get("http://localhost:3001/products/get");
            todosLosProducts.data.forEach(async el => {
                await postFavorite(el.codProduct, el.name, el.url, createdUser.cod_User)  
            });
            //--------------------------------
            await cloudinary.uploader.upload(
                image, 
                {public_id: createdUser.image_U}
            )

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