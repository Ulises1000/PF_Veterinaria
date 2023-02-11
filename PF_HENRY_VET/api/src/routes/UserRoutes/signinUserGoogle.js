const {GoogleAuthProvider, signInWithPopup} = require("firebase/auth");
const {auth} = require("../../fireBaseConfig/firebaseConfig");
const {Router} = require("express");
const router = Router();

router.post("/signinGoogle", async (req, res) => {
    try{
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);
        res.status(200).json(credentials);
    }catch(err){
        res.json(err.code)
    }
});

module.exports = router;