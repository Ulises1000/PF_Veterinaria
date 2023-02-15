const {getSingleUserFromDb} = require("./generalFunctions");
const cloudinary = require("../../cloudinaryConfig/cloudinaryConfig");

async function findUser(idUser){
    try{
        const info = await getSingleUserFromDb(idUser);
        if(!info || info.usubscribe_U) return false;
        return true;
    }catch(err){
        throw new Error(err.message)
    }
}

async function addNewValuesToAnObj(newValues){
    let newObj = {}, url;
    
    if(newValues.url) url = await cloudinary.uploader.upload(newValues.url, {
        invalidate: true,
        public_id: newValues.image_U
    })
    
    for(let prop in newValues){
        if(prop === "url" && url) newObj.url = url;
        else if(prop !== "email_U" && prop !== "idUser" && prop !== "image_U" && newValues[prop]) newObj[prop] = newValues[prop];
    }
    return newObj;
}

module.exports = {
    findUser,
    addNewValuesToAnObj
}