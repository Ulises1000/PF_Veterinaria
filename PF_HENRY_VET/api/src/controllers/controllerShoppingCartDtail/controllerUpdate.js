async function objWithNewValues(newValues){
    let obj = {}
    for(let prop in newValues){
        if(prop !== "idCartDtail" && newValues !== undefined && newValues !== null) obj[prop] = newValues[prop]
    }
    return obj;
}

module.exports = {
    objWithNewValues
}