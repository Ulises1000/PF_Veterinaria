const {getAllUsersFromDb} = require("./generalFunctions");

async function findUser(name, password){
    try{
        const info = await getAllUsersFromDb();
        console.log(info)
        return info.filter(el => el.name_U === name && el.password_U === password);
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findUser
}