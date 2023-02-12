export const validate = (inputProductos) => {
      let errors = {};
    let RegExpressionUrl= /^https?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/
    let RegExpressionText = /^[a-zA-Z\s]*$/;
    let RegExpressionNum= /^[0-9,$]*$/;

    /* if(!RegExpressionUrl.test(inputProductos.image_url)){
        errors.image_url = 'Agregue correctamente la URL'
    }
    if(inputProductos.image_url <1){
        errors.image_url = 'Agregue url de Imagen'
    } */
    if(!RegExpressionText.test(inputProductos.name)){
        errors.name = 'No se permiten números ni caracteres especiales'
    } 
   /*   if(!RegExpressionNum.test(inputProductos.healthScore)){
    errors.healthScore = 'Solo se permiten numeros'
    }   */
    //*-----------------------------------
   if(!inputProductos.name){
        errors.name = 'Se requiere un Nombre';
    }
    if( inputProductos.name.length < 4 ){
        errors.name = 'El nombre debe tener mas de cinco caracteres'
    }    
    if(inputProductos.name.length > 10 ){
        errors.name = 'El nombre debe tener menos de Dies caracteres'
    } 
    /* //*-----------------------------------
   if(inputProductos.stock < 1 ){
        errors.stock = 'Debe ser mayor a 0'
    }
    if( inputProductos.stock> 100 ){
        errors.stock = 'Debe ser menor a 100'
    }   
     //*-----------------------------------
    if(!inputProductos.description){
        errors.description = 'Se requiere una description';
    }
    if(inputProductos.description.length < 3 ){
        errors.description = 'El resumen debe tener mas de 3 caracteres'
    }
    if( inputProductos.description.length > 10 ){
        errors.description = 'El resumen debe tener menos de 10 caracteres'
    } 
    //*-----------------------------------
    if(!inputProductos.petSize){
        errors.petSize = 'Se requiere los petSize';
    }
    if(inputProductos.petSize.length < 3 ){
        errors.petSize = 'La petSize  de los pasos debe tener mas de 3 caractere'
    }
    if( inputProductos.petSize.length > 10 ){
        errors.petSize = "La petSize  de los pasos debe tener menos de 10 caracteres"
    }
     //*-----------------------------------
     if(!inputProductos.breedType){
        errors.breedType = 'Se requiere los breedType';
    }
    if(inputProductos.breedType.length < 3 ){
        errors.breedType = 'La breedType  de los pasos debe tener mas de 3 caractere'
    }
    if( inputProductos.breedType.length > 10 ){
        errors.breedType = "La breedType  de los pasos debe tener menos de 10 caracteres"
    } */
 
    return errors;
} 

 