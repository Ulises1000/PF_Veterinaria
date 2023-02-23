const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.get("/get", async (req, res) => {
    const {productId, userId} = req.body;
    try{
      if(userId){
        const response = await Review.findOne({
          where: {
            productId,
            userId 
          }
        })
        res.status(200).send(response)  
      }else{
        const response = await Review.findAll({
          where: {
            productId 
          }
        })
        res.status(200).send(response)
      }
    }catch(error){
      res.status(400).send(error)
    }
})
 
module.exports = router;