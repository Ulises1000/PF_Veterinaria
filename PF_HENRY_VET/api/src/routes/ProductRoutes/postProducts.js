const { Router } = require("express");
const {
  findProductos,
} = require("../../controllers/controllerProducts/controllerGet_P.js");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const { Product } = require("../../db.js");
const axios = require("axios");
const router = Router();

router.post("/post", async (req, res) => {
  try {
    const { name, description, unit_price, stock, url, petSize, breedType } = req.body;

    const buscaProducto = await findProductos(name);

    if (!name || !description || !unit_price || !stock || !url || !petSize || !breedType) {
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
        url,
        petSize,
        breedType 
      });

      await cloudinary.uploader.upload(
        url, 
        {public_id: productCreate.url}
      )
      
      const products = await axios.get("http://localhost:3001/products/get");

      return res.status(200).json({
        ok: true,
        value: products.data
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
