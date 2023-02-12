import React, { useState } from "react";
import logo_only from "../media/OnlyPetsLogo.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutUser } from "../redux/action";
// import logo_user from "../media/avatar.png";

function Nav({ hayUser }) {
  const dispatch = useDispatch()
  const [burgerbutton, setBurgerbutton] = useState(false);
  const [visibilidad, setVisibilidad] = useState(false);

  let userLocal = ""
  if(localStorage.userPetShop){
    userLocal = JSON.parse(localStorage.userPetShop).data;
  }
  // useEffect(() =>{
  //     const btn = document.querySelector("button.mobile-menu-button")
  //     const menu = document.querySelector(".mobile-menu")

  //     btn.addEventListener("click", ()=>{
  //     menu.classList.toggle("hidden")
  //         })
  // },[]);

  function populateStorage() {
    localStorage.setItem('bgcolor', 'red');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('userPetShop', '');
  
    localStorage.removeItem('image');
  }

  function HandleLogout() {
    localStorage.removeItem("userPetShop")
    dispatch(signoutUser())
    window.location.reload(true)
    hayUser = ""
    userLocal= ""
    // console.log(localStorage, "esto")
  }

  return (
    // nav aca
    <nav className="fixed w-screen top-0 z-40 bg-violet-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            {/* logo aca */}
            <div>
              <Link to="/home" className="flex items-center py-4 px-3">
                <img
                  className="logo_only w-14 h-14 rounded-xl"
                  src={logo_only}
                  alt=""
                />
              </Link>
            </div>
            {/* nav primario */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/market"
                className="py-4 px-3 text-gray-700 font-semibold hover:font-medium hover:text-black"
              >
                Mercado
              </Link>
              <Link
                to="/consulta"
                className="py-4 px-3 text-gray-700 font-semibold hover:font-medium hover:text-black"
              >
                Consultas
              </Link>
            </div>
          </div>

          {/* nav secundario */}
          {userLocal || hayUser ? (
            <div className="hidden md:flex justify-center">
              {userLocal || localStorage.userPetShop ? (
                <div className="relative inline-block">
                  <button onClick={() => {
                    console.log(userLocal, hayUser, localStorage)
                      setVisibilidad(!visibilidad);
                    }} className="bg-Dark-Violet mt-5 text-white  p-4 text-base border-0">
                    {userLocal.email}
                  <div
                    
                    className={`${
                      visibilidad === false ? "hidden" : "show"
                    } absolute right-0.5 top-16 bg-violet-300  w-full h-46 `}
                  >
                    <div className="flex flex-col ">
                    <Link to="/profile" className="text-black p-2 hover:text-gray-300 block">
                      Perfil
                    </Link>
                    <div className="hover:text-red-400">
                    <p className="p-2 bg-red-700" onClick={() => populateStorage()}>Logout</p>
                    </div>
                    </div>
                  </div>
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3  text-gray-700 font-semibold hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/"
                className="py-2 px-3  bg-slate-50 rounded border-black border-2 text-gray-700 font-semibold hover:bg-slate-200 hover:text-violet-500 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3  text-gray-700 font-semibold hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/"
                className="py-2 px-3  bg-slate-50 rounded border-black border-2 text-gray-700 font-semibold hover:bg-slate-200 hover:text-violet-500 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
          {/* <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-5 px-3  text-gray-700 font-semibold hover:font-medium hover:text-black"
            >
              Login
            </Link>
            <Link
              to="/"
              className="py-2 px-3  bg-slate-50 rounded border-black border-2 text-gray-700 font-semibold hover:bg-slate-200 hover:text-violet-500 transition duration-300"
            >
              Sign Up
            </Link>
          </div> */}
          {/* botón de telefono */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => {
                setBurgerbutton(!burgerbutton);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* menu de telefono */}
      <div
        className={`mobile-menu ${
          burgerbutton === false ? "hidden" : "show"
        } md:hidden`}
      >
        <Link
          to="/market"
          className="flex py-2 px-4 text-sm items-center bg-violet-200 hover:bg-violet-300 group hover:font-medium text-gray-700 hover:text-black transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700  group-hover:text-black group-hover:bg-violet-300 group-hover:transition group-hover:duration-300 group-hover:font-medium "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span className="pl-2">Mercado</span>
        </Link>
        <Link
          to="/consults"
          className="flex py-2 px-4 text-sm items-center bg-violet-200 hover:bg-violet-300 group hover:font-medium text-gray-700 hover:text-black transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700  group-hover:text-black group-hover:bg-violet-300 group-hover:transition group-hover:duration-300 group-hover:font-medium "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>

          <span className="pl-2">Consultas</span>
        </Link>
        <Link
          to="/"
          className="flex py-2 px-4 text-sm items-center bg-violet-200 hover:bg-violet-300 group hover:font-medium text-gray-700 hover:text-black transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 group-hover:text-black group-hover:bg-violet-300 group-hover:transition group-hover:duration-300 group-hover:font-medium "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>

          <span className="pl-2">Login</span>
        </Link>
        <Link
          to="/"
          className="flex py-2 px-4 text-sm font-bold items-center bg-violet-200  hover:bg-violet-500 hover:border-black border-violet-500 border-2 text-gray-700 group hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-violet-400 group-hover:text-white group-hover:transition group-hover:duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>{" "}
          <span className="pl-2">Sign Up</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
