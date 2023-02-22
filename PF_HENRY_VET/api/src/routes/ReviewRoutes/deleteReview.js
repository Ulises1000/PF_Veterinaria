const { Review } = require("../../db");
const {Router} = require("express");
const router = Router();

router.put("/unsubscribe?", async (req, res) => {
      
    try {
        const { reviewId } = req.params;
        if (!reviewId) console.log("Missing parameters", 404);
        const reviewFound = await Review.findByPk(reviewId);

        if (!reviewFound) return res.send(400).status("Review not found");
        
        const response = await reviewFound.destroy({
            where: { id: reviewId },
        });
        res.status(200).send(response) 
    } catch (error) {
        res.status(400).send(error)
    }
})
