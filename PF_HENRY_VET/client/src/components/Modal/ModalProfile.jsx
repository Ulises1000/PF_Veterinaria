import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForm,
  updateUser,
} from "../../redux/action/index.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ModalProfile({usuarioLocal}) {
  const [showModal, setShowModal] = React.useState(false);
  console.log(usuarioLocal, "ACA ESTA USUARIO LOCAL HERMANO");


  let usuarioLocalReal = usuarioLocal;
  if (localStorage.userPetShop) {
    usuarioLocal = JSON.parse(localStorage.userPetShop);
  }




     const{id}=useParams();
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const [inputEditDireccion, setInputEditDireccion] = useState({
          direction_U: "",
     })

     const [inputEditName, setInputEditName] = useState({
        name_U: "",
   })


    const[errors, setErrors] = useState({});
     function handleChangeDireccion(e){
        setInputEditDireccion({
             ...setInputEditDireccion,
             [e.target.name]:e.target.value
         })
     }

     function handleChangeName(e){
        setInputEditDireccion({
             ...setInputEditDireccion,
             [e.target.name]:e.target.value
         })
     }

     const handleSubmitName = (e) => {
         e.preventDefault()
         dispatch(updateProduct(id,inputEditName))
          if (!inputEditName.name_U) {
              alert("Se requiere llenar el Formulario de Edicion")
         }
         else{
             alert("Producto Actualizado")
             dispatch(updateUser(usuarioLocalReal.cod_User, {
                url: usuarioLocalReal.url,
                image_U: usuarioLocalReal.image_U,
                password_U: usuarioLocalReal.password_U,
                email_U: usuarioLocalReal.email_U,
                name_U: inputEditName.direction_U,
                direction_U: usuarioLocalReal.direction_U
              }))
            setInputEditDireccion({
                direction_U:"",
        })
             setInputEditName({
                 name_u: "",
         })
         dispatch(clearForm())
         navigate("/profile")
       }
     }
     const handleSubmitDireccion = (e) => {
        e.preventDefault()
        console.log(inputEditDireccion)
        if (!inputEditDireccion.direction_U) {
            alert("Se requiere llenar el Formulario de Dirección")
        }
        else{
            alert("Producto Actualizado")
            dispatch(updateUser(usuarioLocalReal.cod_User, {
                url: usuarioLocalReal.url,
                image_U: usuarioLocalReal.image_U,
                password_U: usuarioLocalReal.password_U,
                email_U: usuarioLocalReal.email_U,
                name_U: usuarioLocalReal.direction_U,
                direction_U: inputEditDireccion.direction_U
              }))
            setInputEditDireccion({
                direction_U:"",
        })
        dispatch(clearForm())
        navigate("/profile")
      }
    }
     //limpiar
     function handleClearPag(){
       dispatch(clearForm())
     }














  return (
    <>
      <button
        className="bg-violet-400 text-white active:bg-violet-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Cambiar Datos
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center p-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative justify-center items-center w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg p-5 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <>
                  <div>
                  <button
                    className="text-white rounded-xl bg-red-400 font-bold uppercase py-2 px-3 text-sm outline-none focus:outline-none float-right ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    X
                  </button>
                  </div>
                  <form
                    className="w-full items-center self-center m-5 p-5 max-w-sm bg-yellow-500 text-white text-sm rounded-lg"
                    onSubmit={(e) => handleSubmitDireccion(e)}
                  >
                    <h3 className="text-lg content-center ">Editar Usuario</h3>
                    {/* <label>Imagen </label>
                 <div>
                     <input placeholder="Imagen" type="text" name="image_url" value={inputEditProductos.image_url} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
                      {(errors.image_url && <p className="error">{errors.image_url}</p>)}   
                 </div> */}

                    <label className="flex">Nombre:<p className="ml-1">{usuarioLocalReal.name_U}</p>    
                         </label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={inputEditName.name_U}
                        onChange={(e) => handleChangeName(e)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                      />{" "}
                      <br />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <label className="flex">Dirección:<p className="ml-1">{usuarioLocalReal.direction_U}</p>    
                    </label>
                    <div>
                      <input
                        type="text"
                        name="direction_U"
                        value={inputEditDireccion.direction_U}
                        onChange={(e) => handleChangeDireccion(e)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                      />{" "}
                      <br />

                      
                    </div>
                      {/* <div>
                     <h4>Dato anterior</h4>
                     <input  type="text" value={inputEditProductos.breedType} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" disabled/> <br/> 
                   </div>   */}
                    <button
                      type="submit"
                      /* disabled={ Object.keys(errors).length<1 ? false : true} */ className="mt-5 with-full w-full dark:bg-yellow-400     hover:text-white border border-yellow-700   focus:ring-1 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-4 py-1 text-center    dark:border-yellow-100 dark:text-white dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-green-900"
                    >
                      Guardar
                    </button>
                  </form>
                </>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearForm, getAllProducts, getProduct, updateProduct } from "../../redux/action/index.jsx";
// import { validate } from "./Validators";
// import {Link, useNavigate, useParams} from 'react-router-dom'

// function FormEditProduct(){
//     const{id}=useParams();
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const filterProducto = useSelector((state) => state.filters.product)
//     console.log("OBJETO  ESTE ES",filterProducto.name)

//     const [inputEditProductos, setInputEditProducto] = useState({
//          /* image_url: "",   */
//          name: "",
//          unit_price:"",
//          description:"",
//          stock:"",
//          petSize: [],
//          breedType:[]
//     })

//      useEffect(() => {
//       if (Object.keys(filterProducto).length === 0) {
//         dispatch(getProduct(id))
//       }
//        setInputEditProducto({
//         /* image_url: filterProducto.image_url,   */
//          name: filterProducto.name,
//          unit_price:filterProducto.unit_price,
//          description:filterProducto.description,
//          stock:filterProducto.stock,
//         petSize: filterProducto.petSize?filterProducto.petSize.map(i=>i):"",
//          breedType:filterProducto.breedType?filterProducto.breedType.map(i=>i):""
//       })
//     }, [dispatch,filterProducto]);

//    const[errors, setErrors] = useState({});
//     function handleChange(e){
//         setInputEditProducto({
//             ...inputEditProductos,
//             [e.target.name]:e.target.value
//         })
//          setErrors(validate({
//             ...inputEditProductos,
//             [e.target.name]:e.target.value
//         }))
//     }

//   function handleSelect(e){
//         const newValue = {value:e.target.value}
//         setInputEditProducto((previnput)=>{
//             return{
//                 ...previnput,
//                 [e.target.name]:[...new Set([...previnput[e.target.name],e.target.value])]
//             }
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         dispatch(updateProduct(id,inputEditProductos))
//          if (!inputEditProductos.name) {
//              alert("Se requiere llenar el Formulario de Edicion")
//         }
//         else{
//             setErrors(validate(inputEditProductos))
//             alert("Producto Actualizado")
//              setInputEditProducto({
//                /*  image_url: "", */
//                 name: "",
//                 unit_price:"",
//                 description: "",
//                 stock:"",
//                 petSize: [],
//                 breedType:[]
//         })
//         dispatch(clearForm())
//         navigate("/dashboard")
//       }
//     }

//     //limpiar
//     function handleClearPag(){
//       dispatch(clearForm())
//     }

//     return(
//     <>
//         <div>
//           <Link to="/dashboard" >
//            <button onClick={()=> handleClearPag()} type="button" className="m-5 text-white hover:text-white border border-yellow-700 hover:yellow-800 focus:ring-1 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 dark:border-yellow-400 dark:text-white dark:hover:text-white dark:hover:bg-yellow-400 dark:bg-yellow-500 dark:focus:ring-purple-900">Volver</button>
//           </Link>
//         </div>
//             <form className="w-full m-5 p-5 max-w-sm bg-yellow-500 text-white text-sm rounded-lg"  onSubmit={(e) => handleSubmit(e)} >
//             <h3 className="text-lg content-center ">Editar Producto</h3>

//                  <div className="m-5 text-md">
//                     <h1>ID : {id}</h1>
//                 </div>

//                 {/* <label>Imagen </label>
//                 <div>
//                     <input placeholder="Imagen" type="text" name="image_url" value={inputEditProductos.image_url} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
//                      {(errors.image_url && <p className="error">{errors.image_url}</p>)}
//                 </div> */}

//                 <label>Nombre </label>
//                 <div>
//                     <input  type="text" name="name"   value={inputEditProductos.name} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
//                     {(errors.name && <p className="error">{errors.name}</p>)}
//                 </div>

//                  <label>Precio unitario</label>
//                 <div>
//                     <input   type="text" name="unit_price" value={inputEditProductos.unit_price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
//                     {(errors.unit_price && <p className="error">{errors.unit_price}</p>)}
//                 </div>

//                 <label>Descripcion </label>
//                 <div>
//                     <input  type="text" name="description" value={inputEditProductos.description} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
//                     {(errors.description && <p className="error">{errors.description}</p>)}
//                 </div>
//                 <label>stock </label>
//                 <div>
//                     <input  type="text" name="stock" value={inputEditProductos.stock} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/> <br/>
//                     {(errors.stock && <p className="error">{errors.stock}</p>)}
//                 </div>

//                 <div className="border m-5 p-3 rounded-lg">
//                 <h2>Tamaño</h2>
//                   <select name="petSize" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500">
//                     <option>Todos</option>
//                     <option>Pequena</option>
//                     <option>Mediana</option>
//                     <option>Grande</option>
//                   </select>
//                 {/*   <div>
//                   <h4>Dato anterior</h4>
//                     <input  type="text"  value={inputEditProductos.petSize} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" disabled/> <br/>
//                 </div>  */}
//                 </div>

//                 <div className="border m-5 p-3 rounded-lg">
//                 <h2>Raza</h2>
//                   <select  name="breedType" onChange={(e)=> handleSelect(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-40 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500">
//                     <option>Todos</option>
//                     <option>Perro</option>
//                     <option>Gato</option>
//                   </select>
//                   {/* <div>
//                     <h4>Dato anterior</h4>
//                     <input  type="text" value={inputEditProductos.breedType} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" disabled/> <br/>
//                   </div>   */}
//                 </div>
//              <button   type="submit"  /* disabled={ Object.keys(errors).length<1 ? false : true} */ className="mt-5 with-full w-full dark:bg-yellow-400     hover:text-white border border-yellow-700   focus:ring-1 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-4 py-1 text-center    dark:border-yellow-100 dark:text-white dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-green-900">Guardar</button>
//         </form>
//     </>
//     )
// }
// export default FormEditProduct;
