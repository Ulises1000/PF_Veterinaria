const axios = require("axios");
const {Breed} = require("../../db.js");
const YOUR_API_KEY="live_pLUGhU90p340hAEc9YZFTVHZqVxTCpnOxfWOJOqLYZQuqqJcgR0TDCixqIy5QD4D";
let c={}
let array=[]

/*Esta funcion es para traer todas las razas tanto de los perros como de los gatos y guardarlas 
en la base de datos*/
async function get () {
const breeds = [{name:"perro"},{name:"gato"}];
    try {
        /*await axios.get(`https://api.thedogapi.com/v1/breeds?key${YOUR_API_KEY}`)
        .then(async (response)=>{
            const payload=response.data
            for(let i=0; i<payload.length;i++){
                c.name=payload[i].name;
                c.WeightRange=payload[i].weight.metric;
                c.HeightRange=payload[i].height.metric;
                c.unsuscribe=false
                c.kind="Dogs"
                await Breed.create(c)
                c={};
            }
        });
        
        await axios.get("https://cats-breeds-default-rtdb.firebaseio.com/breeds.json")
        .then(async (response)=>{
            const payload = response.data.breeds
            for(let i=0; i<payload.length; i++){
                c.name=payload[i].name;
                c.WeightRange=payload[i].WeightRange;
                c.HeightRange=payload[i].HeightRange;
                c.unsuscribe=false
                c.kind="Cats"
                await Breed.create(c)
                c={};
            }
        }); 
   */
        await Breed.bulkCreate(breeds)
   } 
   
    catch (error) {

        throw new Error(error.message)
    }

}
/*La llamo fuera para que no se produzcan copias que se concatenan con la informacion anterior
cada vez que se haga una peticion get*/
get();

exports.getAllBreeds = async () => {
    try {
        
        /*Accedo a la base de datos para traer todos los datos guardados en la tabla de razas*/
        await Breed.findAll()
        .then(response=>{
            if(response){
            array=response}
        });
    }
    
    catch (error) {

       throw new Error(error.message) 
    }
    
/*Devuelvo los datos para su uso*/
    return array;

};
