const axios = require("axios");
const {Product} = require("../../db.js");

const getProducts = async () => {
  try {
    const api = await axios.get(
      `https://veterinaria-634d6-default-rtdb.firebaseio.com/productosDB.json`
    );

    const apiProducts = await api.data.map((p) => {
        const obj = {            
        image_url: p.image,
        name: p.nombre,
        unit_price: p.precio,
      };
      return obj;
    });

     const hayProduct = await Product.findAll()//busca 
     if(hayProduct.length === 0){
        await Product.bulkCreate(apiProducts);
     }       
     const allProducts = await Product.findAll();
     return allProducts;  
     
  } catch (err) {
    res.status(404).send({
      ok: false,
      msg: "Lo Lamentamos, hubo error en agregar productos de la AP a la DB",
      detail: err.message,
    });
  }
};

module.exports = { getProducts };



///////