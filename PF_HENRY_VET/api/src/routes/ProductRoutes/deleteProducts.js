const { Router } = require("express");
const {findProductDelete} = require("../../controllers/controllerProducts/controllerDelete_P.js");
const { Product } = require("../../db.js");
const router = Router();

router.put("/unsubscribe/:codProduct", async (req, res) => {
  try {
    const { codProduct } = req.params;
    const buscaDelete = await findProductDelete(codProduct);
    if (!codProduct)
      res.status(200).json({
        ok: false,
        msg: "Hacen Falta Datos.",
        detail: "Falta El Id Del Producto.",
      });
    if (!buscaDelete) {
      res.status(200).json({
        ok: false,
        msg: "No existe El Producto.",
        detail: "El Producto No Existe 0 Se Elimino Previamente.",
      });
    } else {
      const unsubscribeProduct = await Product.update({unsubscribe: true},{
        where: {codProduct}
      })
      unsubscribeProduct[0]? res.status(200).json({
         ok: true,
         value: "Se Ha Borrado El Producto."
      }):
      res.status(200).json({
        ok:false,
        msg: "No se ha podido borrar el producto",
        detail: "No se pudo borrar"
      })
    }
  } catch (err) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, No se pudo borrar el producto.",
      detail: err.message,
    });
  }
});

module.exports = router;
