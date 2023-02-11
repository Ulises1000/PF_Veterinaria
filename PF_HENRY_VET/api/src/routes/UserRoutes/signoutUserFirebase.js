const {signOut} = require("firebase/auth");
const {auth} = require("../../fireBaseConfig/firebaseConfig");
const {Router} = require("express");
const router = Router();

router.post("/signout", async (req, res) => {
    try{
        const info = await signOut(auth);
        res.status(200).json(info);
    }catch(err){
        res.json(err.code)
    }
});

module.exports = router;