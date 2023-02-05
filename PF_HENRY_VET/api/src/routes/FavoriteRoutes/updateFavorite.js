const { Favorite} = require("../../db");
const {Router} = require("express");
const router = Router();

router.put("/update", async (req,res) =>{
    const {id_favorito} = req.body;
    try { 
        const info = await Favorite.findByPk(id_favorito);
        if(!info) res.status(200).json({
            ok: false,
            msg: "No Existe Este Id En La BD.",
            detail: ""    
        })
        else{
            const updated = await Favorite.update({is_favorite: !info.is_favorite},
                {
                    where:{
                        id_favorito:id_favorito
                    }
                }
            )
            updated[0] ? res.status(200).json({
                ok: true,
                value: "Se Ha Modificado El Favorito."    
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