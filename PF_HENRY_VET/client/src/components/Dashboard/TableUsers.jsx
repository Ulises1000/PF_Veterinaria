import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byOrder, byOrderPrice, getAllProducts  } from '../../redux/action'
import loader from '../../style-assets/paw_icon.png'
import DataTable from 'react-data-table-component'
import SearchProTable from './SearchProTable'



const TableProducts = () => {
  const dispatch = useDispatch()
  const getProductos = useSelector((state) => state.filters.products)
 
  const [order, setOrder] = useState('') 
  const [state, setState] = useState({
    loading: false,
  })
 
  useEffect(() => {
    async function fetchData() {
      setState({ loading: true })
      dispatch(getAllProducts())   
      setState({ loading: false })
    }
    fetchData()
  }, [])

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    )
  }
   const columns = [  
    {
      name: "#",
      selector: (row) => row.num,
      sortable: true,
      grow: 0,
       }, 
     {
     name: "ID-DB",
    selector: (row) => row.codProduct,
     sortable: true,
     grow: 0.3,
      },
      {
        name: "Imagen",
        selector: (row) => row.image_url,
        grow: 0,
        cell: (row) => (
          <img height="60px" width="56px"   src={row.image_url? row. image_url:"X"} />
        ),
      }, 
    {
      name: 'Nombre',
      selector: 'name',
      grow: 0.5,
    },   
    {
        name: 'Editar',
        cell: (row) => <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>deleteProduct(row.codProduct)} >Editar</button>,
        grow: 0.1,
    },
    {
      name: 'Borrar',
      cell: (row) => <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>deleteProduct(row.codProduct)} >Borrar</button>,
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
    dispatch(byOrder(e.target.value)) 
}    
return (
    <>
    <h1>Tabla de Usuarios</h1>
    <div>
    <SearchProTable/>
    </div>

    <section class="inline-grid grid-cols-2">      
            <div>
                <select onChange={(e) => handleByOrder(e)} class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-1.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Orden Alfabetico</option>
                <option value="Asc">A-Z</option>
                <option value="Des">Z-A</option>
                </select>
            </div>      
    </section>
   
    
    <div >       
      <DataTable
        columns={columns}
        data={getProductos}
        //title="Lista de Productos"       
        paginationComponentOptions={paginationOptions}
        //pagination 
        selectableRows
        fixedHeader
        fixedHeaderScrollHeight="400px" 
        highlightOnHover 
      />   
    </div>
    
    </>
    
   
  )   
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
}

export default TableProducts

