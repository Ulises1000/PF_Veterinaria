const { Favorite} = require("../../db");
const {Router} = require("express");
const router = Router();

router.get("/get/:idUser", async (req, res) => {
    const {idUser} = req.params;
    try { 
        const favorite  = await Favorite.findOne({
            where: {
                id_usuario: idUser
            }
        });
        favorite ? res.status(404).json({
            ok: false,
            msg: "No Se Ha Encontrado El Favorito",
            detail: "No Se Encuentra En BD."
        })
        :
        res.status(200).json({
            ok: true,
            value: favorite
        })
    } catch (error) {
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
})

module.exports = router;