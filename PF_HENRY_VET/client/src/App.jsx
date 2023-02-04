import './App.css'
import Home from "./pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandigPage/LandingPage.jsx";
import Details from "./pages/Details/Details.jsx";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/details/:id' element={<Details />} />
        </Routes>
    </div>
  )
}

export default App
