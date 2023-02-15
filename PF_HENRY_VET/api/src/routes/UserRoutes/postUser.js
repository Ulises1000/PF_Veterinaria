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
        direction
    } = req.body;
    try{
        const info = await findUser(name, password);

        if(!name || !email || !password || !direction) res.status(200).json({
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
                direction_U: direction 
            })
            //--------------------------------

            const todosLosProducts = await axios.get("http://localhost:3001/products/get");
            todosLosProducts.data.forEach(async el => {
                await postFavorite(el.codProduct, el.name, el.url, createdUser.cod_User)  
            });
            //--------------------------------
            await cloudinary.uploader.upload(
                "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
                {public_id: createdUser.image_U}
            )
            /* 
            const obj = {...createdUser.dataValues}
            obj.url = cloudinary.url(obj.image_U, {
                width: 100,
                height: 150,
                Crop: 'fill'
            });
            */
            // createdUser = await axios.get(`http://localhost:3001/users/get?email=${email}&password=${password}`);
            
            res.status(200).json({
                ok: true,
                value: createdUser
            });
        }
    }catch(err){
        console.log(err.message)
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;