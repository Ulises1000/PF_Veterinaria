const axios = require("axios");
const {Product} = require("../../db.js");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const {Op} = require("sequelize");

const getProducts = async (nameP) => {
  try {
    //ACA SE BUSCA SI HAY PRODUCTO EN LA DB HACIENDO UNA BUSQUEDA SIMPLE SOLO PARA SABER SI HAY PRODUCTOS
    const hayProduct = await Product.findOne();
    console.log(hayProduct)
    //EN CASO DE NO HABER REALIZA EL IF Y GUARDA LOS PRODUCTOS EN LA DB
    if(!hayProduct){
        const api = await axios.get(
          `https://veterinaria-634d6-default-rtdb.firebaseio.com/productosDB.json`
        );

        await api.data.forEach(async (p) => {
          const obj = {            
            name: p.nombre,
            unit_price: p.precio,
            description: p.descripcion,
            stock: p.stock,
            url: p.image, 
            petSize: Array.isArray(p.breed) ? p.breed : [p.breed],
            breedType:Array.isArray(p.tipo) ? p.tipo : [p.tipo]  
          };
          const created = await Product.create(obj)
          await cloudinary.uploader.upload(
            p.image, 
            {public_id: created.image_url}
            )
            
          });
        }
        let allProducts;  
         if(nameP){ 
        allProducts = await Product.findAll({
          where: {
            [Op.and]:[
              {
                name: {
                 [Op.or]: [
                { [Op.iLike]: nameP + "%" },
                { [Op.substring]: nameP },
                { [Op.endsWith]: nameP },
                 ] 
                }
              },
              {
                unsubscribe:  false                
              }
            ],            
          }
        })
          const {data} = await axios.get("http://localhost:3001/products/restore/getban")  
      } 
       /*  if(nameP){ 
        allProducts = await Product.findAll({
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
      } */


  
      else {
        
        allProducts = await Product.findAll()
        /* allProducts = await Product.findAll() */
      };
        //DESPUES DE QUE SE GUARDAN O NO (PORQUE YA EXISTIAN), HACE UNA BUSQUEDA MAS COMPLEJA
        
    return allProducts;
     
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getProducts };

