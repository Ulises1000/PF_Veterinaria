const {User, ShoppingCart} = require("../../db");

async function getAllUsersFromDb(){
    try{
        const info = await User.findAll()
        return info;
    }catch(err){
        throw new Error(err);
    }
}
async function getSingleUserFromDb(idUser){
    try{
        const info = await User.findByPk(idUser);
        return info;
    }catch(err){
        throw new Error(err);
    }
}
module.exports = {
    getAllUsersFromDb,
    getSingleUserFromDb
}