import "./App.css";
import Mercado from "./pages/Mercado/Mercado";
import NotFound from "./pages/Not Found/NotFound";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandigPage/LandingPage.jsx";
import Details from "./pages/Details/Details.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mercado" element={<Mercado />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
