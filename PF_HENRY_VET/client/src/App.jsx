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
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  let user = useSelector((state) => state.user.user)
  let hayUser = user
  useEffect(() =>{
    
    if(user !== undefined){
      console.log(user.data, "useruser")
      localStorage.setItem("userPetShop", JSON.stringify(user));
      let hayUser = user.data
      console.log(hayUser, "hayUserhayUser")

     }
    if (user === undefined){
      if(localStorage.userPetShop){
        hayUser = JSON.parse(localStorage.userPetShop).data
        user =  JSON.parse(localStorage.userPetShop)
      }
    }

    }, [user, hayUser])

    
    return (
      
      //:
      <div className="App bg-patas w-full">
      <Routes>
        {console.log(user, "esto es el user diomeo")}
        {console.log(hayUser, "seeee")}
        <Route exact path="/" element={hayUser ? <Navigate to="/home"/> :  <LandingPage />} />
        {/* <Route path="/hayUserProfile" element={hayUser.name || hayUser.emails ? <hayUserProfile hayUser={hayUser}/>:<Navigate to="/login" />}/> */}
        <Route exact path="/home" element={<Home hayUser={hayUser}/>} />
        <Route exact path="/market" element={<Mercado hayUser={hayUser}/>} />
        <Route exact path="/details/:id" element={localStorage.userPetShop || user ? <Details hayUser={hayUser}/> : <Navigate to="/"/>}/>
        <Route exact path="/profile" element={localStorage.userPetShop ? <UserProfile hayUser={hayUser}/> : <Navigate to="/"/>} />
        <Route exact path="/dashboard" element={localStorage.userPetShop ? <DashBoard hayUser={hayUser}/> : <Navigate to="/"/>} />
        <Route exact path="/formproduct" element={localStorage.userPetShop ? <FormProduct hayUser={hayUser}/> : <Navigate to="/"/>} />  
        <Route path="*" element={<NotFound hayUser={hayUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
