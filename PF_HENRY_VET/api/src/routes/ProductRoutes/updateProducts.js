const { Router } = require("express");
const {
  findProductUP,
  addNewValuesToAnObjProd,
} = require("../../controllers/controllerProducts/controllerUpdate_P");
const { Product } = require("../../db");
const router = Router();

router.put("/update/:codProduct", async (req, res) => {
  try {
    const { codProduct } = req.params;
    const datosl = req.body;
    console.log(datosl)
    const buscaProduct = await findProductUP(codProduct);

  
    if (!buscaProduct) {
      res.status(200).json({
        msg: "No se pudo encontrar el producto a actualizar.",
      });
    } else {
      const newDataPro = addNewValuesToAnObjProd(req.body);
      await Product.update(newDataPro, {
        where: {
          codProduct,
        },
      });

      res.status(200).json({
        ok: true,
        value: "Se ha Modificado El Producto.",
      });
      /*  buscaProduct.set(req.body);
      await buscaProduct.save();
      return res.send("Producto actualizado"); */
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
