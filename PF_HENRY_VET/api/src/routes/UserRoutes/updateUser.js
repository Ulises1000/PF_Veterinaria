const {Router} = require("express");
require("dotenv").config();
const {User} = require("../../db");
const {findUser, addNewValuesToAnObj} = require("../../controllers/controllerUsers/controllerUpdate");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const axios = require("axios");
const router = Router();

router.put("/update/:idUser", async (req, res) => {
    const {idUser} = req.params;
    try{
        const info = await findUser(idUser);
        if(!info) res.status(200).json({
            ok: false, 
            msg: "No Existe El Usuario O Ha Sido Eliminado.",
            detail: "No Se Encuentra El Usuario" 
        }) 
        else{
            //NECESITO QUE SE ME ENVIE LA DATA CON EL _U. EJ: name_U
            let url, newData;
            if(req.body.data.img){
                url = await cloudinary.uploader.upload(req.body.data.img, {
                    invalidate: true,
                    public_id: req.body.data.codImg
                })    
            }
            else {
                newData = addNewValuesToAnObj(req.body);
            } 
            

            await User.update(newData || {url: url.url},{
                where: {
                    cod_User: idUser
                }
            })
            
            const {data} = await axios.get(`http://localhost:3001/users/get?email=${req.body.data.email_U}&password=${req.body.data.password_U}`)
           
            const obj = {...data.value};

            res.status(200).json({
                ok: true,
                value: obj
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