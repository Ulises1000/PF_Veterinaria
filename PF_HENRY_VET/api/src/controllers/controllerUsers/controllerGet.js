const {getAllUsersFromDb} = require("./generalFunctions");

async function findUser(email){
    try{
        const info = await getAllUsersFromDb();
        return info.filter(el => el.email_U === email && !el.unsubscribe_U);
    }catch(err){   
        throw new Error(err.message)
    }
}

module.exports = {
    findUser  
}