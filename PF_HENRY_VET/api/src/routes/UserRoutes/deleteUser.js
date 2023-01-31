const {Router} = require("express");
const router = Router();

router.post("/unsuscribe", async (req, res) => {
    const {name} = req.query;
    try{
        if(name){
            
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