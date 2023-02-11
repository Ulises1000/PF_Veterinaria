const {Router} = require("express");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const {getProducts} = require("../../controllers/controllerProducts/controllerGetProduct")
const router = Router();

router.get("/get", async (req, res) => {
    const {name} = req.query;
    try{
      const getP = name ? await getProducts(name.trim()) : await getProducts(); 
      if(!getP.length) res.status(200).json({
        ok: false,
        msg: "No Se Ha Encontrado Ningún Producto.",
        detail: "No Existe Ningún Producto BD Con Ese Nombre.",
      });
      else {
        const products = await getP.map(el => {
          const obj = {...el.dataValues};
          obj.url = cloudinary.url(el.image_url, {
            width: 100,
            height: 150,
            Crop: 'fill'
          });
          return obj;
        })
        res.status(200).json(products);
      } 
    }catch(err){
      res.status(404).send({
         ok: false,
         msg: "Lo Lamentamos, Error al llamar los productos.",
         detail: err.message,
       });
    }
});

module.exports = router;






