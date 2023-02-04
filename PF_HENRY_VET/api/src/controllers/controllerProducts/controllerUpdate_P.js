const {Product} = require("../../db.js");

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

function addNewValuesToAnObjProd(newValues){ 
    let newObj = {};
    for(let prop in newValues){
        if(newValues[prop]){
            newObj[prop] = newValues[prop];
        }            
    }
    return newObj;
}


module.exports = {findProductUpdate, findProductUP,addNewValuesToAnObjProd};




