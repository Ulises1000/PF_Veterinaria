const {Router} = require("express");
const {User} = require("../../db");
const router = Router();

router.post("/update", async (req, res) => {
    const {
        idUser,
        name,
        email,
        password,
        creditCard,
        direction
    } = req.body;
    try{
        await User.update({cod_user: idUser},{
            name_U: name,
            email_U: email,
            password_U: password,
            creditCard_U: creditCard,
            direction_U: direction
        })

        res.status(200).json({
            ok: true,
            value: "Se ha Modificado El Usuario."
        });
    }catch(err){
        res.status(404).send({
            ok: false, 
            msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
            detail: err.message 
        })
    }
});

module.exports = router;