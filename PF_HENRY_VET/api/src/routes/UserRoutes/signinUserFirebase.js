const {signInWithEmailAndPassword} = require("firebase/auth");
const {auth} = require("../../fireBaseConfig/firebaseConfig");
const {Router} = require("express");
const router = Router();

router.post("/signin", async (req, res) => {
    const {name, password, email} = req.body;
    try{
        const info = await signInWithEmailAndPassword(auth, email, password);
        const user = info.user;
        res.status(200).json(user);
    }catch(err){
        res.status(400).json(err)
    }
});

module.exports = router;