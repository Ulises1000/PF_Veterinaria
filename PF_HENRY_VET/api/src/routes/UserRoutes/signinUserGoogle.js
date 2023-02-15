const {GoogleAuthProvider, signInWithPopup} = require("firebase/auth");
const {auth} = require("../../fireBaseConfig/firebaseConfig");
const axios = require("axios");
const {Router} = require("express");
const router = Router();

router.get("/signinGoogle", async (req, res) => {
    try{
        res.status(200).json(auth);
    }catch(err){
        console.log(err)
        res.json(err)
    }
});

module.exports = router;