import "./App.css";
import Mercado from "./pages/Mercado/Mercado";
import NotFound from "./pages/Not Found/NotFound";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Profile/profile";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandigPage/LandingPage.jsx";
import Details from "./pages/Details/Details.jsx";
import DashBoard from "./pages/Dashboard/DashBoard";

function App() {
  return (
    <div className="App bg-patas">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mercado" element={<Mercado />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/dashboard" element={<DashBoard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
