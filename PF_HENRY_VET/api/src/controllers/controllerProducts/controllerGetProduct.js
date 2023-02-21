const axios = require("axios");
const { Product } = require("../../db.js");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");
const { Op } = require("sequelize");

const getProducts = async (nameP) => {
  try {
    //ACA SE BUSCA SI HAY PRODUCTO EN LA DB HACIENDO UNA BUSQUEDA SIMPLE SOLO PARA SABER SI HAY PRODUCTOS
    const hayProduct = await Product.findOne();

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
         
      } 
        
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
