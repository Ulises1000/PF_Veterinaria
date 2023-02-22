import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import {searchDashBoard} from '../../redux/action'


const SearchProTable = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
 
  const handleInputChange = (e) => {    
    setName(e.target.value)
    dispatch(searchDashBoard(e.target.value))
  }

  return (
    <div>
      <input
        class="shadow appearance-none border w-full py-1 px-2  rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        onChange={(e)=>handleInputChange(e)}
        value={name}
        placeholder="Buscar..."
        autoComplete="off"
      />
    </div>
  )
}

export default SearchProTable
