const axios = require("axios");
const {Product} = require("../../db.js");
const {Op} = require("sequelize");

const getProducts = async (nameP) => {
  try {
    //ACA SE BUSCA SI HAY PRODUCTO EN LA DB HACIENDO UNA BUSQUEDA SIMPLE SOLO PARA SABER SI HAY PRODUCTOS
    const hayProduct = await Product.findOne();
    //EN CASO DE NO HABER REALIZA EL IF Y GUARDA LOS PRODUCTOS EN LA DB
    if(!hayProduct){
        const api = await axios.get(
          `https://veterinaria-634d6-default-rtdb.firebaseio.com/productosDB.json`
        );
        
        const apiProducts = await api.data.map((p) => {
            const obj = {            
            image_url: p.image,
            name: p.nombre,
            unit_price: p.precio,
            stock:p.stock, 
            breedName:Array.isArray(p.tipo) ? p.tipo.join("-"): p.tipo  
          };

          return obj
        });
        await Product.bulkCreate(apiProducts);
    }       
    //DESPUES DE QUE SE GUARDAN O NO (PORQUE YA EXISTIAN), HACE UNA BUSQUEDA MAS COMPLEJA
    return nameP ? await Product.findAll({
      where: {
        name: {
          [Op.or]: [
            { [Op.iLike]: nameP + "%" },
            { [Op.substring]: nameP },
            { [Op.endsWith]: nameP }
          ] 
        }
      }
    }) 
    :
    await Product.findAll();
     
  } catch (err) {
    throw new Error(err.message)
  }
};

module.exports = { getProducts };
