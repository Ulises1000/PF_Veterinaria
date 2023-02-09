const { Favorite} = require("../../db");
const {Router} = require("express");
const router = Router();

router.put("/update", async (req,res) =>{
    const {idFavorite, idUser} = req.body;
    try { 
        const info = await Favorite.findByPk(idFavorite);
        if(!info) res.status(200).json({
            ok: false,
            msg: "No Existe Este Id En La BD.",
            detail: ""    
        })
        else{
            const updated = await Favorite.update({is_favorite: !info.is_favorite},
                {
                    where:{
                        id_favorito:idFavorite
                    }
                }
            )
            const newFavorites = await Favorite.findAll({
                where: {
                    user_favorite: idUser
                }
            })
            updated[0] ? res.status(200).json({
                ok: true,
                value: newFavorites    
            })
            :
            res.status(200).json({
                ok: false,
                msg: "Ha Ocurrido Un Error Al Hacer Update.",
                detail: "El Error Ocurrio En En UpdateFavorite.js En La Linea 15."    
            })  
        }

} catch (err) {
    res.status(404).send({
        ok: false, 
        msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
        detail: err.message 
    })
}
})

module.exports = router;