const {createUserWithEmailAndPassword} = require("firebase/auth");
const {auth} = require("../../fireBaseConfig/firebaseConfig");
const {Router} = require("express");
const router = Router();

router.post("/register", async (req, res) => {
    const {name, password, email} = req.body;
    try{
        const info = await createUserWithEmailAndPassword(auth, email, password)
        res.status(200).json(info);
    }catch(err){
        res.json(err)
    }
});

module.exports = router;