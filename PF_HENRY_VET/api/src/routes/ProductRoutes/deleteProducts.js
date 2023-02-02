const { Router } = require("express");
const { findProductDelete } = require("../../controllers/controllerProducts/controllerDelete_P.js");
const { findProduct } = require("../../controllers/controllerProducts/controllerGet_P.js");
const {
  findUserToDelete,
} = require("../../controllers/controllerUsers/controllerDelete.js");
const { Product } = require("../../db.js");
const router = Router();

router.delete("/unsubscribe/:codProduct", async (req, res) => {
  try {
    const { codProduct } = req.params;
    const buscaDelete = await findProductDelete(codProduct);
    if (!buscaDelete) {
      res.status(200).json({
        ok: false,
        msg: "No existe El Producto.",
        detail: "El Producto No Existe O Se Elimino Previamente.",
      });
    } else {
      await Product.destroy({
        where: { codProduct },
      });
      res.status(200).json({
        ok: false,
        msg: "Se ha borrado el Producto correctamente."         
      });
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
