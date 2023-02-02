const {Router} = require("express");
const {User} = require("../../db");
const {findUser, addNewValuesToAnObj} = require("../../controllers/controllerUsers/controllerUpdate");
const router = Router();

router.put("/update", async (req, res) => {
    const {idUser} = req.body;
    try{
        const info = await findUser(idUser);
        if(!info) res.status(200).json({
            ok: false, 
            msg: "No Existe El Usuario O Ha Sido Eliminado.",
            detail: "No Se Encuentra El Usuario" 
        }) 
        else{
            //NECESITO QUE SE ME ENVIE LA DATA CON EL _U. EJ: name_U
            const newData = addNewValuesToAnObj(req.body);
           
            await User.update(newData,{
                where: {
                    cod_User: idUser
                }
            })
    
            res.status(200).json({
                ok: true,
                value: "Se ha Modificado El Usuario."
            });
        }
    }catch(err){
        res.status(404).json({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;