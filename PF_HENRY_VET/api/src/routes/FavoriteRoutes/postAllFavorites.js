const {User, Favorite} = require("../../db");
const {Router} = require("express");
const { postFavorite } = require("./postFavorite");
const router = Router();

router.post("/post", async (req, res) => {
    const {idProduct, url, name, idUser} = req.body;
    try{
        const allUsers = await User.findAll();
        allUsers.forEach(async el => {
            await postFavorite(idProduct, url, name, el.name_U);
        })

        if(idUser){
            const userFav = await Favorite.findAll({where: {user_favorite: idUser}}) 
            res.status(200).json({
                ok: true,
                value: userFav
            })
        }else res.status(200).json({
            ok: true,
            value: []
        })

    }catch(err){
        res.status(404).send({
          ok: false,
          msg: "Lo Lamentamos, No se pudo postear el producto.",


          detail: err.message,
        });
    }
});

module.exports = router;