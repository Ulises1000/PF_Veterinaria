require("dotenv").config()
const { Router } = require("express");
var nodemailer = require("nodemailer")
const etherealEmail = Router();

const {
    USEREMAIL,
    USERPASSWORD,
    USEREMAIL2,
    PORTEMAIL,
    HOSTEMAIL,
  } = process.env;

etherealEmail.post("/sendEmail/admin", (req, res) =>{
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
        from: "OnlyPetsVeterinaria@hotmail.com",
        to: USEREMAIL2,
        subject: "Compra de OnlyPets",
        text: "Tu Compra ha sido realizada"
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