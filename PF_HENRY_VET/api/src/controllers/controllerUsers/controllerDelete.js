const {getSingleUserFromDb} = require("./generalFunctions");

async function findUserToDelete(idUser){
    try{
        const info = await getSingleUserFromDb(idUser);
        if(!info || info.usubscribe_U) return false;
        return true;
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findUserToDelete
}