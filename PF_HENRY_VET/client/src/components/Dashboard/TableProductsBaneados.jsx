import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byOrder, byOrderBan, byOrderPrice, byOrderPriceBan, byOrderStock, byOrderStockBan, getAllProducts, getAllProductsBaneados, restoreProductsBaneados } from '../../redux/action' 
import DataTable from 'react-data-table-component'
import SearchProTable from './SearchProTable' 
import SearchDeleted from './SearchDeleted'


const TableProductsBaneados = () => {
  
  const dispatch = useDispatch()
  const getBaneados = useSelector((state) => state.filters.productBaneados)

  const [order, setOrder] = useState('');
  const [orderprice, setOrderprice] = useState('');
  const [orderstock, setOrderstock] =useState(''); 


  useEffect(() => { 
      dispatch(getAllProductsBaneados())  
      dispatch(getAllProducts())  
  }, [dispatch]) 
 
  function handleRestore(e) {
    dispatch(getAllProducts()) 
    dispatch(restoreProductsBaneados(e))
    dispatch(getAllProductsBaneados())        
  }

    const columns = [ 
      {
        name: "#",
        selector: (row) => row.num,
        sortable: true,
        grow: 0,
      },       
    /*  {
     name: "ID-DB",
    selector: (row) => row.codProduct,
     sortable: true,
     grow: 0.3,
      }, */   
         
    {
      name: 'Nombre',
      selector: 'name',
      grow: 0.3,
    }, 
    {
      name: 'Precio Unitario',
      selector:  (row) => row.unit_price,
      type: 'numeric',
      grow: 0.1,
    },
    {
        name: 'Stock',
        selector:  (row) => row.stock,
        type: 'numeric',
        grow: 0,
    },
    {
      name: 'Activar',
      cell: (row) => 
      <button onClick={()=>handleRestore(row.codProduct)} class="inline-flex items-center px-1.5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full">
	    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
	    </svg></button>,
      
      grow: 0.1,
    },
    
  ]
 
const paginationOptions ={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText:'de',
    selectAllRowsItem:true,
    selectAllRowsText:'Todos'
}  
 
  
const handleByOrder = (e) => { 
    setOrder(e.target.value) 
    dispatch(byOrderBan(e.target.value)) 
}  
const handleByOrderPrice = (e) => { 
  setOrderprice(e.target.value) 
  dispatch(byOrderPriceBan(e.target.value)) 
} 
const handleByOrderStock = (e) => { 
  setOrderstock(e.target.value) 
  dispatch(byOrderStockBan(e.target.value)) 
} 

   
 return (
    <>
    <section>  
    <div>   
    <h1 className='bg-gray-600 text-white rounded p-2 mb-1'>Tabla de Productos Baneados</h1>
    <div>
    <SearchDeleted/>
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
                  
    </section>

    <div >       
      <DataTable
        columns={columns}
        data={getBaneados}
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600px" 
        //title="Lista de Productos"       
        //pagination 
        //selectableRows
        //highlightOnHover       
      />   
    </div>
    </div>

    </section>
    </>
    
)    
 /* return(

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

                {getBaneados &&
                  getBaneados?.map((p,i) => {
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
                          <button onClick={()=>handleRestore(codProduct)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  >Desbanear</button>
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
 )   */
}

export default TableProductsBaneados