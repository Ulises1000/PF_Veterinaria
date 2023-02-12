const {getAllUsersFromDb} = require("./generalFunctions");

async function findUser(email, password){
    try{
        const info = await getAllUsersFromDb();
        return info.filter(el => el.email_U === email && el.password_U === password && !el.unsubscribe_U);
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findUser
}