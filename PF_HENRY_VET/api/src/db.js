require('dotenv').config();
const { Sequelize } = require('sequelize');
const makeAssociations = require("./associations/associations");
const models = require("./fsModels/fsModels"); 
const {
  DB_USER, DB_PASSWORD, DB_HOST, MODEL_NAME
} = process.env;
const sequelizePath = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${MODEL_NAME}`;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${MODEL_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


// Injectamos la conexion (sequelize) a todos los modelos
models.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Product } = sequelize.models;
//makeAssociations(sequelize);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
