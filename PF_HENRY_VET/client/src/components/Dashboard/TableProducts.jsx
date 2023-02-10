import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/action'
import loader from '../../style-assets/paw_icon.png'
import DataTable from 'react-data-table-component'

const TableProducts = () => {
  const dispatch = useDispatch()
  const getProductos = useSelector((state) => state.filters.products)
 console.log(getProductos)
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
     name: "ID-DB",
    selector: (row) => row.codProduct,
     sortable: true,
     grow: 0,
      },
      {
        name: "IMAGEN",
        selector: (row) => row.image_url,
        grow: 0,
        cell: (row) => (
          <img height="60px" width="56px"   src={row.image_url? row. image_url:"X"} />
        ),
      }, 
    {
      name: 'Name',
      selector: 'name',
      row: 9,
    },
    {
      name: 'Unit Price',
      selector:  (row) => row.unit_price,
      type: 'numeric',
    },
    {
        name: 'Stock',
        selector:  (row) => row.stock,
        type: 'numeric',
      },
    {
      name: 'Delete',
      cell: (row) => <button  className='btn' onClick={()=>deleteProduct(row.codProduct)} >Delete</button>
    },
  ]
 
const paginationOptions ={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText:'de',
    selectAllRowsItem:true,
    selectAllRowsText:'Todos'
}
  return (
    <div>
      <DataTable
        columns={columns}
        data={getProductos}
        title="Lista de Productos"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        highlightOnHover
      />
      
    </div>
  )
}

export default TableProducts

{
  /* <div>
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
                      First
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Handle
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
                            @mdo
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
    </div> */
}



{/*  image_url={p.image_url}
            name={p.name}
            unit_price={p.unit_price? p.unit_price:"Agotado"} */}