const {Router} = require("express");
const InvoiceDetailRouter = Router();
const {getDetails} = require("../../controllers/controllerInvoiceDetails/controllerGet.js");
const {createDetails} = require ("../../controllers/controllerInvoiceDetails/controllerPost.js");


InvoiceDetailRouter.get("/:cod_invoice",(req,res)=>{
  try {
    getDetails(req.params.cod_invoice)
    .then(response=>{
        if(typeof response === "string"){
            res.status(404).send(response)
        }
        else{
            res.send(response)
        }
    })
  } catch (error) {
    res.status(400).send({
        ok: false, 
        msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
        detail: error.message 
    })
  }
});


InvoiceDetailRouter.post("/createDetails",(req,res)=>{

  try {
    createDetails(req.body)
    .then(response =>{
      if(response.msg === "Este código de Factura ya se encuentra en uso"){
        res.status(400).send(response.msg)
      }
    else {
        res.send(response.msg)
    }}
    )
    
  } catch (error) {
    res.status(400).send({
      ok: false, 
      msg: "Lo Lamentamos, Ha Ocurrido Un Error.",
      detail: error.message 
  })
  }
})

module.exports=InvoiceDetailRouter