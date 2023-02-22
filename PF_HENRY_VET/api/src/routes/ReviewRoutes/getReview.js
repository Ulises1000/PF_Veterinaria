const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.get("/get", async (req, res) => {
    try{
      const response = await Review.findAll()
      res.status(200).send(response)  
    }catch(error){
      res.status(400).send(error)
    }
})
 
module.exports = router;