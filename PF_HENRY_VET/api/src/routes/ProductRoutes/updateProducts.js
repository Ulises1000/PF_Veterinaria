const { Router } = require("express");
const {
  findProductUpdate,
} = require("../../controllers/controllerProducts/controllerUpdate_P");
const { Product } = require("../../db");
const router = Router();

router.put("/update/:codProduct", async (req, res) => {
  try {
    const { codProduct } = req.params;
    const buscaProduct = await findProductUpdate(codProduct);

    if (!buscaProduct) {
      res.status(200).json({ 
        msg: "No se pudo encontrar el producto a actualizar."        
      });
    } else {
      buscaProduct.set(req.body);
      await buscaProduct.save();
      return res.send("Producto actualizado");
    }
  } catch (err) {
    res.status(404).send({
        ok: false,
        msg: "Lo Lamentamos, No se pudo actualizar el producto.",
        detail: err.message,
      });
  }
});

module.exports = router;
