import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearForm, getAllProducts, getProduct, updateProduct } from "../../redux/action/index.jsx";
import { validate } from "./Validators";
import {Link, useNavigate, useParams} from 'react-router-dom'

function FormEditProduct(){
    const{id}=useParams(); 
    const dispatch = useDispatch()    
    const navigate = useNavigate()
    const filterProducto = useSelector((state) => state.filters.product)
    
    const [inputEditProductos, setInputEditProducto] = useState({       
         url: "", 
         name: "",
         unit_price:"",
         description:"",
         stock:"", 
         petSize: {
          firsTime:true,
          value:[]
         },
         breedType: {
          firsTime:true,
          value:[]
         }, 
    })   
     
     useEffect(() => {
      if (Object.keys(filterProducto).length === 0) {        
        dispatch(getProduct(id))
      }
       setInputEditProducto(prevState=>{ 
        return{
          ...prevState,
         image_url: filterProducto.image_url,    
         name: filterProducto.name,
         unit_price:filterProducto.unit_price,
         description:filterProducto.description,
         stock:filterProducto.stock, 
         petSize:{
           ...prevState.petSize,
           value:Object.keys(filterProducto).length?filterProducto.petSize.map(i=>i):[]
          },
         breedType:{
          ...prevState.breedType,
          value:Object.keys(filterProducto).length?filterProducto.breedType.map(i=>i):[]
         }
        }
         
      }) 
    }, [dispatch,filterProducto]); 

 
   const[errors, setErrors] = useState({}); 


  function handleChange(e){
        setInputEditProducto({
            ...inputEditProductos,
            [e.target.name]:e.target.value
        })  
         setErrors(validate({
            ...inputEditProductos,
            [e.target.name]:e.target.value
        }))  
    } 

  function handleSelect(e){
    if (inputEditProductos[e.target.name].firsTime) {      
      setInputEditProducto((previnput)=>{
          return{
              ...previnput,
              [e.target.name]:{
                firsTime:false,
                value:[e.target.value]              
              }
          }
      })
    }else{
      setInputEditProducto((previnput)=>{
        return{
            ...previnput,
            [e.target.name]:{
              firsTime:false,
              value:[...new Set([...previnput[e.target.name].value,e.target.value])]              
            }
        }
    })
    }
  }  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("inputEditProductos   ZZZZZ",inputEditProductos)      
          dispatch(updateProduct(id,{
            ...inputEditProductos,
            petSize:inputEditProductos.petSize.value,
            breedType:inputEditProductos.breedType.value,
          }))
  

         if (!inputEditProductos.name) {
             alert("Se requiere llenar el Formulario de Edicion")
        }
        else{            
            setErrors(validate(inputEditProductos))
            alert("Producto Actualizado") 
             setInputEditProducto({
                url: "",  
                name: "",
                unit_price:"",
                description: "",
                stock:"",
                petSize: [],
                breedType:[]  
        })
        dispatch(clearForm())
        navigate("/dashboard")
      }        
    }

    //limpiar 
    function handleClearPag(){
      dispatch(clearForm())
    }
    
    return(    
    <>
        <div>
          <Link to="/dashboard" >
           <button onClick={()=> handleClearPag()} type="button" className="m-5 text-white hover:text-white border border-yellow-700 hover:yellow-800 focus:ring-1 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 dark:border-yellow-400 dark:text-white dark:hover:text-white dark:hover:bg-yellow-400 dark:bg-yellow-500 dark:focus:ring-purple-900">Volver</button>
          </Link>
        </div>
            <form className="w-full m-5 p-5 max-w-sm bg-yellow-500 text-white text-sm rounded-lg"  onSubmit={(e) => handleSubmit(e)} >
            <h3 className="text-lg content-center ">Editar Producto</h3>
              
                 <div className="m-5 text-md">
                    <h1>ID : {id}</h1>
                </div>

                  <label>Imagen </label>
                <div>
                    <input placeholder="Imagen" type="text" name="url" value={inputEditProductos.url} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
                    {/*  {(errors.image_url && <p className="error">{errors.image_url}</p>)}   */} 
                </div>  
                
                <label>Nombre </label>
                <div>
                    <input  type="text" name="name"   value={inputEditProductos.name} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
                    {(errors.name && <p className="error">{errors.name}</p>)}    
                </div>

                 <label>Precio unitario</label>
                <div>                    
                    <input   type="text" name="unit_price" value={inputEditProductos.unit_price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
                    {(errors.unit_price && <p className="error">{errors.unit_price}</p>)} 
                </div>   
                             
                <label>Descripcion </label>
                <div>
                    <input  type="text" name="description" value={inputEditProductos.description} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/> 
                    {(errors.description && <p className="error">{errors.description}</p>)} 
                </div>
                <label>stock </label>
                <div>
                    <input  type="text" name="stock" value={inputEditProductos.stock} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/> 
                    {(errors.stock && <p className="error">{errors.stock}</p>)} 
                </div>  
                
                <div className="border m-5 p-3 rounded-lg">
                <h2>Tamaño</h2>
                  <select name="petSize" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500">
                    <option hidden>Tamaño</option>
                    <option>Todos</option>
                    <option>Pequena</option>
                    <option>Mediana</option>
                    <option>Grande</option>
                  </select>   
                                
                </div>   

                <div className="border m-5 p-3 rounded-lg">
                <h2>Raza</h2>
                  <select  name="breedType" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500">
                    <option hidden>Raza</option>
                    <option>Perro</option>
                    <option>Gato</option>
                  </select>                 
                </div>
             <button   type="submit"  /* disabled={ Object.keys(errors).length<1 ? false : true} */ className="mt-5 with-full w-full dark:bg-yellow-400     hover:text-white border border-yellow-700   focus:ring-1 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-4 py-1 text-center    dark:border-yellow-100 dark:text-white dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-green-900">Guardar</button>   
        </form>  
    </>
    )
}
export default FormEditProduct;  


 

