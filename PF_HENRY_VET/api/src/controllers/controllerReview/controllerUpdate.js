function createNewOfObj(body){
    const obj = {...body};
    for(prop in body){
        if(prop === "stars_R" || prop === "commentary_R") obj[prop] = body[prop];
    }
}

module.exports = {createNewOfObj}