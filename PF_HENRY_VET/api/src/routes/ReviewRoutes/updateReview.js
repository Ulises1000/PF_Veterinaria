const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();
const {createNewOfObj} = require("../../controllers/controllerReview/controllerUpdate");

router.post("/update", async (req, res) => {
    try{
        
      if(!commentary_R || !stars_R || !productId || !userId){
        Review.update(createNewOfObj(req.body), {
          where: {
            
          }
        })
      }
    
      const response = await Review.create({
        productId, userId, commentary_R, stars_R
      })
      
      res.status(200).send(response) 

    }catch(error){
      res.status(400).send(error)
    }
})
   
module.exports = router;