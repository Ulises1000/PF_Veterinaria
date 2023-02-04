const {Breed} = require("../../db.js");

/*Funcion para modificar los valores dentro de la base de datos*/
exports.Update = async (params) => {

    const { id } = params
try {
    /*Recibo datos que se van a cambiar por parametros*/
    let changes = {};
    for(let prop in params){
        if(params[prop]){
            /*Nos aseguramos que no hayan propiedades "undefined", por lo que creamos 
            un nuevo objeto llamado changes que contendra todos los datos "purgados"*/
            if(prop!=="id" && !params[prop]){
                changes[prop] = params[prop]
            }
        };
    }
    /*Finalmente con el nuevo objeto procedemos a realizar 
    la actualizacion de los datos de la raza*/

    await Breed.update(changes,{where:{id_breed:id}})

    

} 

catch (error) {

    throw new Error(error.message)
}
};
