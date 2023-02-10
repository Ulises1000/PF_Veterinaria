 const {Product} = require("../../db.js");

 async function findProduct(codProduct){
     try{
         return await  Product.findByPk(codProduct);
     }catch(err){
         throw new Error(err.message)
     }
 }

 

module.exports = {findProduct};