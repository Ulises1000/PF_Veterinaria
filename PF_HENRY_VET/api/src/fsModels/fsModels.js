const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const models = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo models
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    models.push(require(path.join(__dirname, '/models', file)));
});

module.exports = models;
