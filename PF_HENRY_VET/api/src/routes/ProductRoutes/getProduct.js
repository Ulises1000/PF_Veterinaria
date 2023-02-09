const { Router } = require("express");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const {
  findProduct,
} = require("../../controllers/controllerProducts/controllerGet_P");
const router = Router();

router.get("/getp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const get_P = await findProduct(id);
     

    if (!get_P)
      res.status(200).json({
        ok: false,
        msg: "No Se Ha Encontrado el producto.",
        detail: "No Existe el producto en la BD.",
      });
    else {
      get_P.url = cloudinary.url(get_P.image_U, {
          width: 100,
          height: 150,
          Crop: 'fill'
        });
      res.send(get_P);
    }
  } catch (err) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, Error al buscar el producto.",
      detail: err.message,
    });
  }
});

module.exports = router;
