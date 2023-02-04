const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);//nombre del archivo actual

const models = [];

//le doy la direccion de src porque de otra forma entra a esta carpeta fsModels cuando necesito que se quede en src/models

const direction = __dirname.split(/\\/g)
const srcDirection = direction.filter((el, index) => index !== (direction.length - 1)).join("/") + '/models';
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo models
fs.readdirSync(path.join(srcDirection))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    models.push(require(path.join(srcDirection, file)));
});

module.exports = models;
