const {Product} = require("../../db.js");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");

async function findProductUpdate(codProduct){
     
    try{
        const buscaProductUpdate = await Product.findOne({
            where: {codProduct}, 
        })
        return buscaProductUpdate;
    }catch(err){
        throw new Error(err.message)
    }
}
 async function findProductUP(codProduct){
    try{
        const info = await findProductUpdate(codProduct);
        if(!info || info.usubscribe) return false;
        return true;
    }catch(err){
        throw new Error(err.message)
    }
}

async function addNewValuesToAnObjProd(newValues){ 
    let newObj = {}, url;
    
    if(newValues.url) url = await cloudinary.uploader.upload(newValues.url, {
        invalidate: true,
        public_id: newValues.image_url
    })
    
    for(let prop in newValues){
        if(prop === "url" && url) newObj.url = url;
        else if(newValues[prop] && prop !== "image_url"){
            newObj[prop] = newValues[prop];
        }            
    }
       
    return newObj;
}


module.exports = {findProductUpdate, findProductUP,addNewValuesToAnObjProd};




