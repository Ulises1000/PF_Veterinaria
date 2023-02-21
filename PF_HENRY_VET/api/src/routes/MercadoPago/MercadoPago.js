require("dotenv").config();
const { Router } = require("express");
const mercadopago = require("mercadopago");
const { getPayment } = require("../../controllers/MercadoPago/MercadPago");
const { ACCESS_TOKEN } = process.env;
const MPRouter = Router();

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});
MPRouter.post("", (req, res) => {
  let arr = req.body
  let preference = {
    items: arr,
    // items: [
    //   {
    //     title: req.body.description,
    //     unit_price: Number(req.body.price),
    //     quantity: Number(req.body.quantity),
    //   },
    // ],
    back_urls: {
      success: "http://localhost:3001/payment/feedback",
      failure: "http://localhost:3001/payment/feedback",
      pending: "http://localhost:3001/payment/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error, "Respuesta en mercadopago");
      res.status(400).send(error);
    });
});

MPRouter.get("/feedback", (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

MPRouter.get("/getpayment/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("No se ha detectado su identificacion de factura");
    } else {
      getPayment(id).then((response) => {
        res.send(response);
      });
    }
  } catch (error) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
      detail: err.message,
    });
  }
});

module.exports = MPRouter;
