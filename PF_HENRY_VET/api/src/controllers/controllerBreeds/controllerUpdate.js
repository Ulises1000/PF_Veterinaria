const {Breed} = require("../../db.js");

/*Funcion para modificar los valores dentro de la base de datos*/
exports.Update = async (params) => {

try {
    /*Extraigo los datos que se van a cambiar y que son recibidos por parametros*/
 const {WeightRange, HeightRange, kind, name, id} = params
    /*Procedo a actualizar los datos de la raza inidcada por id*/
    await Breed.update({
        WeightRange:WeightRange,
        HeightRange:HeightRange,
        name:name,
        kind:kind
    },{Where:{id_breed:id}})

} 

catch (error) {

    throw new Error(error.message)
}
};
