import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./components/Nav.jsx"
import Searchbar from './components/Searchbar.jsx'
import Caracteristic from './components/Caracteristic'

function App() {

  return (
    <div className="App">
         <Nav/>
         <Searchbar/>
         <Caracteristic/>
    </div>
  )
}

export default App
