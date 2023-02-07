const {InvoiceDetail} = require("../../db.js");


exports.getDetails = async (cod_invoice) => {

    try {
        const results = await InvoiceDetail.findOne({where:{cod_invoice:cod_invoice}})
        if(results){
        return results}
        else return "No se han registrado detalles con este codigo de factura"
    } catch (error) {
        throw new Error(error.message)
    }
};