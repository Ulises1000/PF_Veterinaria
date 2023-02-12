const {getSingleUserFromDb} = require("./generalFunctions");

async function findUser(idUser){
    try{
        const info = await getSingleUserFromDb(idUser);
        if(!info || info.usubscribe_U) return false;
        return true;
    }catch(err){
        throw new Error(err.message)
    }
}

function addNewValuesToAnObj(newValues){
    let newObj = {};
    for(let prop in newValues){
        if(prop !== "email_U" && prop !== "idUser" && newValues[prop]) newObj[prop] = newValues[prop];
    }
    return newObj;
}

module.exports = {
    findUser,
    addNewValuesToAnObj
}