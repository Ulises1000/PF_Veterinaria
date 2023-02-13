import "./App.module.css";
import Mercado from "./pages/Mercado/Mercado";
import NotFound from "./pages/Not Found/NotFound";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Profile/profile";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandigPage/LandingPage.jsx";
import Details from "./pages/Details/Details.jsx";
import DashBoard from "./pages/Dashboard/DashBoard";
import FormProduct from "./components/Dashboard/FormProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Nav from "./components/Nav";

function App() {
  let user = useSelector((state) => state.user.user);
  let hayUser = user;
  console.log(hayUser, "ESTOOOOOOOOOOO ES USER");
  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("userPetShop", JSON.stringify(user));
    }
  }, [user, hayUser]);
  // hayUser =  JSON.parse(localStorage.userPetShop)

  console.log(user, "2da");
  return (
    //:
    <div className="App bg-patas w-full">
      <Routes>
        <Route
          exact
          path="/"
          element={
            localStorage.userPetShop || user ? (
              <Navigate to="/home" />
            ) : (
              <LandingPage />
            )
          }
        />

        {console.log(user, "esto es el user diomeo")}
        {/* <Route path="/hayUserProfile" element={hayUser.name || hayUser.emails ? <hayUserProfile hayUser={hayUser}/>:<Navigate to="/login" />}/> */}
        <Route exact path="/home" element={<Home hayUser={hayUser} />} />
        <Route exact path="/market" element={<Mercado hayUser={hayUser} />} />
        <Route
          exact
          path="/details/:id"
          element={
            localStorage.userPetShop || user ? (
              <Details hayUser={hayUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          exact
          path="/profile"
          element={
            localStorage.userPetShop || user ? (
              <UserProfile hayUser={hayUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* <Route
          exact
          path="/shoppingCart"
          element={
            localStorage.userPetShop || user ? (
              <ShoppingCart hayUser={hayUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        /> */}
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
        <Route
          exact
          path="/dashboard"
          element={
            localStorage.userPetShop ? (
              <DashBoard hayUser={hayUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          exact
          path="/formproduct"
          element={
            localStorage.userPetShop ? (
              <FormProduct hayUser={hayUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<NotFound hayUser={hayUser} />} />
      </Routes>
    </div>
  );
}

export default App;
