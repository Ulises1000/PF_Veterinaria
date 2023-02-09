const axios = require("axios");
const {ACCESS_TOKEN}=process.env
exports.createPayment = async (body) => {
    const url = "https://api.mercadopago.com/v1/payments";

    const payment = await axios.post(url, body, {
      headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
      }
    });

    return payment.data;
  };