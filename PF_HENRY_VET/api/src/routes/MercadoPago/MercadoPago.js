const { Router } = require("express");
const mercadopago = require("mercadopago");
const MPRouter = Router();

mercadopago.configure({
	access_token:"TEST-2054331423312634-020815-2195f7c09367f79a284b254e4a715ff2-359823826",
});
MPRouter.post("",(req,res) => {

        let preference = {
          items: [
            {
              title: req.body.description,
              unit_price: Number(req.body.price),
              quantity: Number(req.body.quantity),
            }
          ],
          back_urls: {
            "success": "http://localhost:3001/pagos/feedback",
            "failure": "http://localhost:3001/pagos/feedback",
            "pending": "http://localhost:3001/pagos/feedback"
          },
          auto_return: "approved",
        };
      
        mercadopago.preferences.create(preference)
          .then(function (response) {
            res.json({
              id: response.body.id
            });
          }).catch(function (error) {
            res.status(400).send(error);
          });
      });
    

MPRouter.get('/feedback',(req, res) => {
        res.json({
          Payment: req.query.payment_id,
          Status: req.query.status,
          MerchantOrder: req.query.merchant_order_id
        });
      });

module.exports=MPRouter;
