const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.put("/unsubscribe/:reviewId", async (req, res) => {
      
    try {
        const { reviewId } = req.params;
        if (!reviewId) return res.send(400).status("Review not found");
        
        const reviewFound = await Review.findByPk(reviewId);

        if (!reviewFound) return res.send(400).status("Review not found");
        
        const response = await reviewFound.update({baja_R: true},{
            where: { id_review: reviewId },
        });
        res.status(200).send(response) 
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;
