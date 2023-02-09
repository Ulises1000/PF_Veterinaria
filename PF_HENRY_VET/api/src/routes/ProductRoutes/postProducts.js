const { Router } = require("express");
const {
  findProduct,
} = require("../../controllers/controllerProducts/controllerGet_P.js");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const { Product } = require("../../db.js");
const router = Router();

router.post("/post", async (req, res) => {
  try {
    const { name, description, unit_price, stock, image_url } = req.body;

    const buscaProducto = await findProduct(name);

    if (!name || !description || !unit_price || !stock || !image_url) {
      return res.status(200).json({
        ok: false,
        msg: "Faltan Datos del producto",
        detail: "Faltan Datos de registro del producto",
      });
    }
    if (buscaProducto) {
      return res.status(200).json({
        ok: false,
        msg: "El Producto ya existe.",
        detail: "El Producto ya existe en la DB.",
      });
    } else {
      const productCreate = await Product.create({
        name,
        description,
        unit_price,
        stock,
        image_url,
      });
      await cloudinary.uploader.upload(
        image_url, 
        {public_id: productCreate.image_url}
      )
      return res.status(200).json({
        ok: true,
        msg: "El Producto se posteo correctamente.",
        detail: "El Producto se posteo en la DB.",
      });
    }
  } catch (err) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, No se pudo postear el producto.",
      detail: err.message,
    });
  }
});

module.exports = router;
