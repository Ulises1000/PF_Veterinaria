import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byOrder, getAllProducts, getAllUsers, haceAdmin, haceNoAdmin } from '../../redux/action' 
import DataTable from 'react-data-table-component'
import SearchProTable from './SearchProTable'
import {Link} from 'react-router-dom'
import Menu from './Menu'



const TableProducts = () => {
  const dispatch = useDispatch();
  const getProductos = useSelector((state) => state.filters.users);
 
  const [order, setOrder] = useState("");  

   useEffect(() => { 
      dispatch(getAllUsers())    
  }, [dispatch]) 
 
  
 /*   const columns = [  

    {
      name: "#",
      selector: (row) => row.num,
      sortable: true,
      grow: 0,
    },  
      {
        name: "Imagen",
        selector: (row) => row.url,
        grow: 0,
        cell: (row) => (
          <img height="30px" width="50px"   src={row.url? row.url:"X"} />
        ),
      }, 

    {
      name: "Nombre",
      selector: "name",
      grow: 0.3,
    },
    {
      name: "Precio Unitario",
      selector: (row) => row.unit_price,
      type: "numeric",
      grow: 0.1,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      type: "numeric",
      grow: 0,
    },
    {
      name: "Editar",
      cell: (row) => (
          <Link to={`/editpro/${row.codProduct}`}>
        <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-2 mr-2 dark:focus:ring-yellow-900">
        Editar</button>
        </Link>
      ),
      grow: 0,
    },   
    {
      name: 'Activar',
      cell: (row) => <button onClick={()=>handleDelete(row.codProduct)} className="text-red-700    hover:text-white border border-red-700    hover:bg-red-800    focus:ring-1 focus:outline-none focus:ring-red-300    font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-red-500    dark:text-red-500    dark:hover:text-white dark:hover:bg-red-600    dark:focus:ring-red-900">Desactivar</button>,
      grow: 0.1,
    },
  ]; */

  const paginationOptions = {
    rowsPerPageText: "Filas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsText: "Todos",
  };
  const handleByOrder = (e) => {
    setOrder(e.target.value);
    dispatch(byOrder(e.target.value));
  };
   const handleEditUserAdmin = (e)=>{ 
    dispatch(haceAdmin(e))
    dispatch(getAllUsers()) 
    dispatch(getAllProducts())     
  }
  const handleEditUserNoAdmin = (e)=>{ 
    dispatch(haceNoAdmin(e))
    dispatch(getAllUsers()) 
    dispatch(getAllProducts())     
  }   
 
 

 /*  return (
    <>

    <section>  
    <div>   
    <h1 className='bg-gray-600 text-white rounded p-2 mb-1'>Tabla de Productos</h1>
    <div>
    <SearchProTable/>
    </div>
    <section className="inline-grid grid-cols-4">      
            <div>
                <select onChange={(e) => handleByOrder(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Orden Alfabetico</option>
                <option value="Asc">A-Z</option>
                <option value="Des">Z-A</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => handleByOrderPrice(e)} class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Orden Precios</option>
                <option value="AscPrice">Menor a Mayor precio</option>
                <option value="DesPrice">Mayor a Menor Precio</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => handleByOrderStock(e)} class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Stock</option>
                <option value="AscStock">Menor a Mayor stock</option>
                <option value="DesStock">Mayor a Menor stock</option>
                </select>
            </div> 
            <div>
              <Link to="/formproduct">
             <button type="button" class="ml-2 border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 dark:border-purple-400 dark:text-white dark:hover:text-purple-600 dark:hover:bg-purple-300 dark:bg-purple-500 dark:focus:ring-purple-900"> Crear un Producto </button>
             </Link>
            </div>     
    </section>
    
     

    
    <div >       
      <DataTable
        columns={columns}
        data={getProductos}
        //title="Lista de Productos"       
        paginationComponentOptions={paginationOptions}
        //pagination 
        //selectableRows
        fixedHeader
        fixedHeaderScrollHeight="600px" 
        //highlightOnHover
       
      />   
    </div>
    </div>

    </section>

    </>
  ); */
  return(

   <div>
     <h1 className='bg-gray-600 text-white rounded p-2 mb-1'>Tabla de Usuarios</h1>
    <div>
    <SearchProTable/>
    </div>
    <div>
    <select onChange={(e) => handleByOrder(e)} className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-19 p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option disabled selected>Order</option>
      <option value="Asc">A-Z</option>
      <option value="Des">Z-A</option>
    </select>
    </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-3 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Imagen
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Nombre
                    </th>
                     
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Admin
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Dar Admin
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-black px-1 py-4"
                    >
                      Quitar Admin
                    </th>
                   
                  </tr>
                </thead>

                {getProductos &&
                  getProductos?.map((p,i) => {
                    return (
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-2 py-2 whitespace-nowrap text-sm font-small text-gray-900">
                            {i+1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                          <img height="30px" width="50px"   src={p.url? p.url:"X"} /> 
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                            {p.name_U}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                            {p.email_U}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                            {p.isAdmin == false? "No es Admin": "Admin"}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                          <button    onClick={(e)=>handleEditUserAdmin(p.cod_User)} >  
                              <span class="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none bg-green-500 dark:bg-green-400 hover:bg-green-600  rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-8 md:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                                </svg>
                              </span>
                          </button>
                          </td>

                          <td className="text-sm text-gray-900 font-light px-1 py-1 whitespace-nowrap">
                          <button    onClick={(e)=>handleEditUserNoAdmin(p.cod_User)}    className=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Admin</button>
                          </td>
                       
                        </tr>
                         
                       
                      </tbody>
                    )
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> 
 ) 
};

export default TableProducts;
