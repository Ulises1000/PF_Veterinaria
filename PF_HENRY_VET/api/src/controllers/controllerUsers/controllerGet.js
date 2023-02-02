const {getAllUsersFromDb} = require("./generalFunctions");

async function findUser(name, password){
    try{
        const info = await getAllUsersFromDb();
        return info.filter(el => el.name_U === name && el.password_U === password && !el.unsubscribe_U);
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findUser
}