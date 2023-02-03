const {Router} = require("express");
const BreedRouter = Router();
const {getAllBreeds}=require("../../controllers/controllerBreeds/controllerGet.js")
const {Update}= require("../../controllers/controllerBreeds/controllerUpdate.js")
const {Delete}=require("../../controllers/controllerBreeds/controllerDelete.js")

BreedRouter.get("",(req,res)=>{
  try {
    getAllBreeds()
    .then(response=>{
        res.send(response)
    })
  } catch (error) {
    res.status(400).send({
        ok: false, 
        msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
        detail: error.message 
    })
  }
});

BreedRouter.put("/deleteBreed/:id_breed",(req,res)=>{
  const {id_breed} = req.params

    try {
      if(!id_breed){
        res.status(400).send({
          msg:"Faltan Datos",
          detail:"No ha ingresado el id"
        })
      }
      Delete(id_breed)
      .then(response=>{
        if(response.length!==0){
          res.send("Raza eliminada")
        }
        else {
          res.status(400).send("Lo lamentamos, no se ha podido eliminar la raza")
        }
      })
    } catch (error) {
      res.status(400).send({
        msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
        detail: error.message
      })
    }
})
BreedRouter.put("/update",(req,res)=>{

  try {
    Update(req.body)
    .then(
      res.send("Datos Actualizados")
    )
    
  } catch (error) {
    res.status(400).send({
      ok: false, 
      msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
      detail: error.message 
  })
  }
})

module.exports=BreedRouter