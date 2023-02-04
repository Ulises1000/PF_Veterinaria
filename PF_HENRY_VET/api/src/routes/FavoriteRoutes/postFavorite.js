const { Favorite} = require("../../db");
const {Router} = require("express");
const router = Router();

router.post("/post", async(req,res)=>{
    try {
        await Favorite.create({...req.body})
        res.status(200).send("Agregado a favorito")
    } catch (err) {
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
})

module.exports = router;