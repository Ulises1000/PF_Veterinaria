const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.get(`/get/:productId${"&"}:userId`, async (req, res) => {
    const {productId, userId} = req.params;
    try{
      if(userId){
        const response = await Review.findOne({
          where: {
            productId,
            userId,
            baja_R: false 
          }
        })
        res.status(200).send(response)  
      }else{
        const response = await Review.findAll({
          where: {
            productId,
            baja_R: false 
          }
        })
        res.status(200).send(response)
      }
    }catch(error){
      console.log(error.message)
      res.status(400).send(error.message)
    }
})
 
module.exports = router;