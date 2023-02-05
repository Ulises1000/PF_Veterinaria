const {Router} = require("express");
const {User} = require("../../db");
const {findUserToDelete} = require("../../controllers/controllerUsers/controllerDelete");
const router = Router();

router.put("/unsubscribe/:idUser", async (req, res) => {
    const {idUser} = req.params;
    try{
        const info = await findUserToDelete(idUser);
        if(!idUser) res.status(200).json({
            ok: false, 
            msg: "Hacen Falta Datos.",
            detail: "Falta El Id De Usuario."
        }) 
        if(!info) res.status(200).json({
            ok: false, 
            msg: "No Se Encontro El Usuario.",
            detail: "El Usuario No Existe O Se Elimino Previamente."
        })  
        else {
            const unsubscribedUser = await User.update({unsubscribe_U: true}, {
                where: {
                    cod_User: idUser
                }
            })  
            unsubscribedUser[0] ? res.status(200).json({
                ok: true,
                value: "Se Ha Borrado El Usuario."
            }) 
            :
            res.status(200).json({
                ok: false,
                msg: "No Se Ha Podido Dar De Baja El Usuario.",
                detail: "No Se Ha Dado De Baja."
            })
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



/* 
await Product.destroy({
    where: { codProduct },
  }); */