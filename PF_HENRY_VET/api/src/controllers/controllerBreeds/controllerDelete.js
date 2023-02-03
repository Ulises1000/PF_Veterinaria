const {Breed} = require("../../db.js");

/*Funcion para modificar el estado "dado de baja" de una raza dentro de la base de datos*/
exports.Delete = async (id) => {

try {

    /*Procedo a actualizar el estado de dado de baja de la raza inidcada por id*/
    const UnsuscribedBreed =await Breed.update({
        unsuscribe:true
    },{where:{id_breed:id}})

    return UnsuscribedBreed

} 

catch (error) {

    throw new Error(error.message)
}
};