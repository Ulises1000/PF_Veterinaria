const axios = require("axios");
const {ACCESS_TOKEN}=process.env
let c = {}
exports.getPayment = async (id)=>{
try {
  await axios.get(`https://api.mercadopago.com/v1/payments/${id}`,{
    headers:{
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  })
  .then(response=>{
    const payload=response.data
    c.items=payload.additional_info.items
    c.date_approved=payload.date_approved
    c.payment_method=payload.payment_method
    c.status_detail=payload.status_detail
    c.transaction_amount=payload.transaction_amount
    c.installments=payload.installments
  })
  return c
} catch (error) {
  throw new Error(error.message)
}
}