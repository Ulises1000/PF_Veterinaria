const { Router } = require("express");
const router = Router();
const {
  verifyProductInCart,
} = require("../../controllers/controllerShoppingCartDtail/controllerPost");

router.post("/post", async (req, res) => {
  try {
    const created = await verifyProductInCart(req.body);
    created
      ? res.status(200).send({
          ok: true,
          value: "Se Ha Agregado Con Exito Al Carrito.",
        })
      : res.status(200).send({
          ok: true,
          value: "Ya Existe El Producto En El Carrito.",
        });
  } catch (err) {
    console.log(err.message);
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
      detail: err.message,
    });
  }
});

module.exports = router;
