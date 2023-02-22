import React, { useState } from "react";
import logo_only from "../media/OnlyPetsLogo.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutUser } from "../redux/action";
// import logo_user from "../media/avatar.png";

function Nav({ user }) {
  const dispatch = useDispatch();
  const [burgerbutton, setBurgerbutton] = useState(false);
  const [visibilidad, setVisibilidad] = useState(false);

  let usuarioLocal = user;
  if (localStorage.userPetShop) {
    usuarioLocal = JSON.parse(localStorage.userPetShop);
  }
  // let userLocal = user
  // if(localStorage.userPetShop){
  //   userLocal = JSON.parse(localStorage.userPetShop).data;
  // }
  // useEffect(() =>{
  //     const btn = document.querySelector("button.mobile-menu-button")
  //     const menu = document.querySelector(".mobile-menu")

  //     btn.addEventListener("click", ()=>{
  //     menu.classList.toggle("hidden")
  //         })
  // },[]);

  function HandleLogout() {
    localStorage.removeItem("userPetShop");
    dispatch(signoutUser());
    window.location.reload(true);
    hayUser = "";
    userLocal = "";
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
                className="py-4 px-3 text-white font-semibold hover:font-medium hover:text-violet-700"
              >
                Mercado
              </Link>
              {usuarioLocal ? (
                usuarioLocal.isAdmin === true ? (
                  <Link
                    to="/dashboard"
                    className="py-4 px-3 text-white font-semibold hover:font-medium hover:text-violet-700"
                  >
                    Dashboard
                  </Link>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>

          {/* nav secundario */}
          {usuarioLocal ? (
            console.log(usuarioLocal),
            <div className="hidden md:flex justify-center">
              {usuarioLocal ? (
                <div className="flex flex-row relative ">
                  <img src={usuarioLocal.url} className="h-12 w-12 mt-7 border-2 border-violet-500 rounded-full" />
                  <button
                    onClick={() => {
                      setVisibilidad(!visibilidad);
                    }}
                    className=" mt-5 text-white hover:text-violet-800 p-4 text-base border-0"
                  >
                    {usuarioLocal.email_U}
                    <div
                      className={`${
                        visibilidad === false ? "hidden" : "show"
                      } absolute right-0.5 mt-4 ml-3 bg-violet-400  w-full h-46 `}
                    >
                      {/* {user.email_U} */}
                    </div>
                      <div
                        className={`${
                          visibilidad === false ? "hidden" : "show"
                        } absolute right-0.5 mt-3 ml-3 bg-violet-400  w-full h-46 `}
                      >
                        <div className="flex flex-col">
                          <Link
                            to="/profile"
                            className=" text-white hover:text-violet-600 p-2 block"
                          >
                            Perfil
                          </Link>
                          <div className="text-black  hover:text-red-800">
                            <p
                              className="p-2  bg-violet-400"
                              onClick={() => HandleLogout()}
                            >
                              Logout
                            </p>
                          </div>
                        </div>
                      </div>
                  </button>
                  <Link to="/shoppingCart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 mt-9 text-white hover:border bg-violet-300 hover:border-violet-700 rounded-lg hover:text-violet-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-1">
                  <Link
                    onClick={() => HandleLogout()}
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

        {usuarioLocal ? (
          <div>
            {usuarioLocal.isAdmin === true ? 
            <Link
              to="/dashboard"
              className="flex py-2 px-4 text-sm border border-violet-300 items-center bg-violet-200  hover:bg-violet-500 text-gray-700 group hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>

              <span className="pl-2">Dashboard</span>
            </Link> : ""}

            <Link
              to="/profile"
              className="flex py-2 px-4 text-sm items-center border border-violet-300 bg-violet-200  hover:bg-violet-500 text-gray-700 group hover:text-white transition duration-300"
            >
              <img
                className="logo_only w-6 h-6 rounded-xl"
                src={usuarioLocal.url}
                alt=""
              />
              <span className="pl-2">Profile: {usuarioLocal.name_U}</span>
            </Link>
            <Link
              to="/"
              onClick={() => HandleLogout()}
              className="flex py-2 px-4 text-sm items-center border border-violet-300 bg-violet-200 hover:bg-violet-300 group hover:font-medium text-gray-700 hover:text-black transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <span className="pl-2">Logout</span>
            </Link>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </nav>
  );
}

export default Nav;
