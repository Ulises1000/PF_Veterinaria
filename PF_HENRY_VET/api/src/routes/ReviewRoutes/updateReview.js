const { Review, User } = require("../../db");
const {Router} = require("express");
const axios = require("axios");
const router = Router();
const {createNewOfObj} = require("../../controllers/controllerReview/controllerUpdate");

router.post("/update", async (req, res) => {
    const {idReview} = req.body;
    try{
      if(!idReview) res.status(200).send({msg: "No Se Mandaron los Datos Necesarios"}) 
      else{
        const seRealizo = await Review.update(createNewOfObj(req.body), {
          where: {
            id_review: idReview
          }
        })
        console.log(seRealizo);
        const reviewUser = await Review.findOne({where: {id_review: idReview}})
        res.status(200).send(reviewUser) 
      }
    }catch(error){
      res.status(400).send(error)
    }
})
   
module.exports = router;