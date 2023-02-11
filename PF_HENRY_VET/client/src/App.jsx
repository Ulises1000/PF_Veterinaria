import "./App.module.css";
import Mercado from "./pages/Mercado/Mercado";
import NotFound from "./pages/Not Found/NotFound";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Profile/profile";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandigPage/LandingPage.jsx";
import Details from "./pages/Details/Details.jsx";
import DashBoard from "./pages/Dashboard/DashBoard";
import FormProduct from "./components/Dashboard/FormProduct";

function App() {
  return (
    <div className="App bg-patas w-full">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/market" element={<Mercado />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/formproduct" element={<FormProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
