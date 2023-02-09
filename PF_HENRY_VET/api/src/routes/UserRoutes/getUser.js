const {Router} = require("express");
const router = Router();
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const {findUser} = require("../../controllers/controllerUsers/controllerGet");

router.get("/get", async (req, res) => {
    const {name, password} = req.query;
    try{
        if(name && password){
            const info = await findUser(name, password);
            if(!info.length) res.status(200).json({
                ok: false,
                msg: "No Se Ha Encontrado El Usuario.",
                detail: "No Existe El Usuario En BD."
            })
            else {
                const user = {...info[0].dataValues} 
                user.url = cloudinary.url(info[0].image_U, {
                    width: 100,
                    height: 150,
                    Crop: 'fill'
                });
                
                res.status(200).json({
                    ok: true,
                    value: user
                })
            }
        }else if(name) {
            res.status(200).json({
                ok: false,
                msg: "Se Tienen Que Ingresar Todos Los Datos.",
                detail: "Falta La Contraseña."    
            })
        }else res.status(200).json({
            ok: false,
            msg: "Se Tienen Que Ingresar Todos Los Datos.",
            detail: "Falta El Nombre."    
        })
    }catch(err){
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;