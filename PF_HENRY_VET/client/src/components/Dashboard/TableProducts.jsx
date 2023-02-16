
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byOrder, byOrderPrice, byOrderStock, deleteProduct, getAllProducts, getAllProductsBaneados } from '../../redux/action' 
import DataTable from 'react-data-table-component'
import SearchProTable from './SearchProTable'
import {Link} from 'react-router-dom'
import Menu from './Menu'



const TableProducts = () => {
  const dispatch = useDispatch();
  const getProductos = useSelector((state) => state.filters.products);

  const [order, setOrder] = useState("");
  const [orderprice, setOrderprice] = useState("");
  const [orderstock, setOrderstock] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  useEffect(() => { 
      dispatch(getAllProducts())   
  }, [dispatch]) 
 
  function handleDelete(e) {
    dispatch(deleteProduct(e))
    dispatch(getAllProductsBaneados())
  }

 
   const columns = [  

    {
      name: "#",
      selector: (row) => row.num,
      sortable: true,
      grow: 0,
    }, 
   /*   {
     name: "ID-DB",
    selector: (row) => row.codProduct,
     sortable: true,
     grow: 0.3,
      }, */
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
        <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-2 mr-2 dark:focus:ring-yellow-900">
          <Link to={`/editpro/${row.codProduct}`}>Editar</Link>
        </button>
      ),
      grow: 0.1,
    },
    {
      name: "Borrar",
      cell: (row) => (
        <button
          className="text-red-700    hover:text-white border border-red-700    hover:bg-red-800    focus:ring-1 focus:outline-none focus:ring-red-300    font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-red-500    dark:text-red-500    dark:hover:text-white dark:hover:bg-red-600    dark:focus:ring-red-900" /* onClick={()=>deleteProduct(row.codProduct)} */
        >
          Borrar
        </button>
      ),
      grow: 0.1,
    },
    {
      name: 'Borrar',
      cell: (row) => <button onClick={()=>handleDelete(row.codProduct)} className="text-red-700    hover:text-white border border-red-700    hover:bg-red-800    focus:ring-1 focus:outline-none focus:ring-red-300    font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-red-500    dark:text-red-500    dark:hover:text-white dark:hover:bg-red-600    dark:focus:ring-red-900">Banear</button>,

      grow: 0.1,
    },
  ];

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
  const handleByOrderPrice = (e) => {
    setOrderprice(e.target.value);
    dispatch(byOrderPrice(e.target.value));
  };
  const handleByOrderStock = (e) => {
    setOrderstock(e.target.value);
    dispatch(byOrderStock(e.target.value));
  };

  return (
    <>

    <section>  
    <div>   
    <h1 className='bg-gray-600 text-white rounded p-2 mb-1'>Tabla de Productos</h1>
    <div>
    <SearchProTable/>
    </div>
    <section class="inline-grid grid-cols-4">      
            <div>
                <select onChange={(e) => handleByOrder(e)} class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
    
{/*     <section>

            <div>
           
            <button type="button" className="text-red-700    hover:text-white border border-red-700    hover:bg-red-800    focus:ring-1 focus:outline-none focus:ring-red-300    font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2 dark:border-red-500    dark:text-red-500    dark:hover:text-white dark:hover:bg-red-600    dark:focus:ring-red-900"   >Eliminar</button>
            <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Yellow</button>
            <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Editar</button>
            </div> 
    </section> */}

    
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
  );
  /*    return(

   <div>

    <SearchProTable/>
    <div>
    <select onChange={(e) => handleByOrder(e)}>
      <option disabled selected>Order</option>
      <option value="Asc">A-Z</option>
      <option value="Des">Z-A</option>
    </select>
    </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Editar
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Eliminar
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Stock
                    </th>
                  </tr>
                </thead>

                {getProductos &&
                  getProductos?.map((p,i) => {
                    return (
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i+1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {p.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {p.unit_price}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {p.stock}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e)=>editProduct(e)} >Editar</button>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e)=>deleteProduct(e)} >Borrar</button>
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
 ) */
};

export default TableProducts;
