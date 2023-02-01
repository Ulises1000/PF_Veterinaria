const { Favorite} = require("../../db");

async function getAllFavorite(id_usuario){
    try { 
        const favoritos  = await Favorite.findAll();
        const filtrado = favoritos.filter(e=>(e.id_usuario==id_usuario))
        return filtrado

    } catch (error) {
        throw new Error(error);
    }
}

const addfavorite = async(req,res)=>{

    const {name,imagen,id_usuario,id_producto} = req.body
    try {
        let addfavorite = await Favorite.create({name,imagen,id_usuario,id_producto})
        res.status(200).send("Agregado a favorito")


    } catch (error) {
        console.log("error add favorite",error)
        res.statur(400).send(error)
    }
}

module.exports={addfavorite,getAllFavorite}
