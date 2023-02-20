require("dotenv").config()
const { Router } = require("express");
var nodemailer = require("nodemailer")
const etherealEmail = Router();

const {
    USEREMAIL,
    USERPASSWORD,
  } = process.env;

etherealEmail.post("/sendEmail", (req, res) =>{
    var transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: USEREMAIL,
            pass:USERPASSWORD,
        }
    });

    var mailOptions =
    {
        from: "Remitente",
        to: "emaiA@hotmail.com.ar",
        subject: "Enviado desde nodemailer",
        text: "Hola Mundo!"
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


module.exports = etherealEmail;