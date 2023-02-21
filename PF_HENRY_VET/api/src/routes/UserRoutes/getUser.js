const { Router } = require("express");
const {User} = require("../../db");
const router = Router();
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const { findUser } = require("../../controllers/controllerUsers/controllerGet");

router.get("/getusers", async (req, res) => {
    try {
      const infoUsers = await User.findAll();
      
      res.status(200).send(infoUsers);
    } catch (err) {
      res.status(404).send({
        ok: false,
        msg: "Lo Lamentamos, No se pudo traer todos lo usuarios.",
        detail: err.message,
      });
    }
  });

router.get("/get", async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password !== undefined) {
      const info = await findUser(email, password);
      if (!info.length)
        res.status(200).json({
          ok: false,
          msg: "No Se Ha Encontrado El Usuario.",
          detail: "No Existe El Usuario En BD.",
        });
      else {
        const user = { ...info[0].dataValues };
        user.url = cloudinary.url(info[0].image_U, {
          width: 100,
          height: 150,
          Crop: "fill",
        });
        console.log(user);
        res.status(200).json({
          ok: true,
          value: user,
        });
      }
    } else if (email) {
      res.status(200).json({
        ok: false,
        msg: "Se Tienen Que Ingresar Todos Los Datos.",
        detail: "Falta La Contraseña.",
      });
    } else
      res.status(200).json({
        ok: false,
        msg: "Se Tienen Que Ingresar Todos Los Datos.",
        detail: "Falta El Mail.",
      });
  } catch (err) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
      detail: err.message,
    });
  }
});


module.exports = router;
