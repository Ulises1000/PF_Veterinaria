const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.post("/post", async (req, res) => {
    const { commentary_R, stars_R, productId, userId } = req.body;
    try{
        
      if(!commentary_R || !stars_R || !productId || !userId){
        res.status(200).send({msg: "Faltan Datos"}) 
      }
      else{
        const response = await Review.create({
          productId, userId, commentary_R, stars_R
        })
        
        res.status(200).send(response) 
      }
    }catch(error){
      res.status(400).send(error)
    }
})
   
module.exports = router;