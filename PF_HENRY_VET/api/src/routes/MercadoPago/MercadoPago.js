require("dotenv").config();
const { Router } = require("express");
const mercadopago = require("mercadopago");
var nodemailer = require("nodemailer")
const etherealEmail = Router();
const { getPayment } = require("../../controllers/MercadoPago/MercadPago");
const {
  ACCESS_TOKEN,
  USEREMAIL,
  USERPASSWORD,
  USEREMAIL2,
  PORTEMAIL,
  HOSTEMAIL,
} = process.env;
const MPRouter = Router();

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});
MPRouter.post("", (req, res) => {
  let arr = req.body;
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
      success: "http://localhost:3001/payment/sendEmail/admin",
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




MPRouter.get("/sendEmail/admin", (req, res) =>{



  console.log(req.query.payment_id, "eSTO NECESITO QUE FUNQUE")
  var transporter = nodemailer.createTransport({
      host:HOSTEMAIL, // hostname
  port: PORTEMAIL, // port for secure SMTP
  secure: false,
      auth: {
          user: USEREMAIL,
          pass:USERPASSWORD,
      }
  });

  var mailOptions =
  {
      from: USEREMAIL,
      to:USEREMAIL2,
      subject: "Compra de OnlyPets",
      text: req.query.payment_id - req.query.merchant_order_id - req.query.status
  }


  
  
  transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          res.status(500).send(error.message);
      } else {
          
          console.log("Email Enviado.")
          res.status(200).jsonp(req.body);
      }
  })
})





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
