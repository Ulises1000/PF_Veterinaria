const { Router } = require("express");
const axios = require("axios");
const {
  findProduct,
} = require("../../controllers/controllerProducts/controllerGet_P");
const router = Router();

router.get("/getp/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const get_P = await findProduct(name);
     

    if (!get_P)
      res.status(200).json({
        ok: false,
        msg: "No Se Ha Encontrado el producto.",
        detail: "No Existe el producto en la BD.",
      });
    else {
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
