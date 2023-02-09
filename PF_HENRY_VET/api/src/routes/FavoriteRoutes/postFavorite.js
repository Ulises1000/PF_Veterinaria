const { Favorite} = require("../../db");

async function postFavorite(codProduct, name, url, cod_User){
    try {
        await Favorite.create({
            name, imagen: url, product_id: codProduct, user_favorite: cod_User 
        })
        return;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {postFavorite};