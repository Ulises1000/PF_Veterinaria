import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {   postProductos } from "../../redux/action";
import { validate } from "./Validators";
import {Link, useNavigate} from 'react-router-dom'

   //! hacer funciones action y en reducer
 

function FormProduct(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [inputProductos, setInputProducto] = useState({        
        image_url: "",
        name: "",
        unit_price:"",
        description: "",
        stock:"",
        petSize: [],
        breedType:[]  
    })

    
    const[errors, setErrors] = useState({}); 
 

    function handleChange(e){
        setInputProducto({
            ...inputProductos,
            [e.target.name]:e.target.value
        })  
        setErrors(validate({
            ...inputProductos,
            [e.target.name]:e.target.value
        }))  
  
    } 

    
    function handleSelect(e){
        console.log(e.target.name)
        const newValue = {value:e.target.value}
        setInputProducto((previnput)=>{
            return{
                ...previnput,
                [e.target.name]:[...new Set([...previnput[e.target.name],e.target.value])]
            }
        })
    }
 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputProductos.name) {
             alert("Se requiere llenar el Formulario de Creacion")
        }
        else{
            dispatch(postProductos(inputProductos))
            setErrors(validate(inputProductos))
            alert("Producto creado")
            setInputProducto({
                image_url: "",
                name: "",
                unit_price:"",
                description: "",
                stock:"",
                petSize: [],
                breedType:[]    
        })

        navigate("/dashboard")
        }
        
    }
    
    return(    
    <>
        <div>
        <button type="button" className="m-5   text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"><Link to="/dashboard">Volver</Link></button>
        
        </div>          
              
            <form className="w-full m-5 p-5 max-w-sm bg-purple-600 text-white text-sm rounded-lg"  onSubmit={(e) => handleSubmit(e)} >
            <h3 className="text-lg content-center ">Crear Producto</h3>
             
                <label className="labels">Imagen </label>
                <div className="inputsForm" >
                    <input placeholder="Imagen" type="text" name="image_url" value={inputProductos.image_url} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/> <br/>
                     {(errors.image_url && <p className="error">{errors.image_url}</p>)}   
                </div>
                
                <label className="labels">Nombre </label>
                <div className="inputsForm">
                    <input placeholder="Nombre" type="text" name="name"   value={inputProductos.name} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/> <br/>
                    {(errors.name && <p className="error">{errors.name}</p>)}   
                </div>

                <label className="labels">Precio unitario</label>
                <div className="inputsForm">                    
                    <input placeholder="Precio unitario" type="text" name="unit_price" value={inputProductos.unit_price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/> <br/>
                    {(errors.unit_price && <p className="error">{errors.unit_price}</p>)}  

                </div>
                
                <label className="labels">Descripcion </label>
                <div className="inputsForm">
                    <input placeholder="Description" type="text" name="description" value={inputProductos.description} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/> <br/> 
                    {(errors.description && <p className="error">{errors.description}</p>)} 
                </div>

                <label className="labels">stock </label>
                <div className="inputsForm">
                    <input placeholder="stock" type="text" name="stock" value={inputProductos.stock} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/> <br/> 
                    {(errors.stock && <p className="error">{errors.stock}</p>)} 
                </div> 

                
                <label>Tamaño</label>
                <div>
                  <select name="petSize" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Todos</option>
                    <option>Pequena</option>
                    <option>Mediana</option>
                    <option>Grande</option>
                  </select>                    
                </div>   

                <label>Raza</label>
                <div>
                  <select name="breedType" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Todos</option>
                    <option>Perro</option>
                    <option>Gato</option>
                  </select>
                    
                </div>    
              
              
                 
        
            <button   type="submit"  /* disabled={ Object.keys(errors).length<1 ? false : true} */ class="mt-3 w-full   hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-white dark:hover:text-white dark:hover:bg-purple-500 dark:bg-purple-400 dark:focus:ring-purple-900">Crear</button>   
       
           </form>

        
   
    </>
    )
}

export default FormProduct;  


 



