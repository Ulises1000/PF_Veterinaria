import React, { useState } from "react";
import logo_only from "../media/OnlyPetsLogo.jpg";
import { Link } from "react-router-dom";
// import logo_user from "../media/avatar.png";

function Nav() {
  const [burgerbutton, setBurgerbutton] = useState(false);

  // useEffect(() =>{
  //     const btn = document.querySelector("button.mobile-menu-button")
  //     const menu = document.querySelector(".mobile-menu")

  //     btn.addEventListener("click", ()=>{
  //     menu.classList.toggle("hidden")
  //         })
  // },[]);

  return (
    // nav aca
    <nav className="fixed w-full top-0 z-40 bg-violet-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            {/* logo aca */}
            <div>
              <a href="#" className="flex items-center py-4 px-3">
                <img
                  className="logo_only w-14 h-14 rounded-xl"
                  src={logo_only}
                  alt=""
                />
              </a>
            </div>
            {/* nav primario */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/Mercado"
                className="py-4 px-3 text-gray-700 hover:font-medium hover:text-black"
              >
                Mercado
              </Link>
              <a
                href="#"
                className="py-4 px-3 text-gray-700 hover:font-medium hover:text-black"
              >
                Turnos y Consultas
              </a>
              <a
                href="#"
                className="py-4 px-3 text-gray-700 hover:font-medium hover:text-black"
              >
                Trabajo
              </a>
            </div>
          </div>

          {/* nav secundario */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-5 px-3  text-gray-700 font-mono hover:font-medium hover:text-black"
            >
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-slate-50 rounded border-black border-2 text-gray-700 font-medium hover:bg-slate-200 hover:text-violet-500 transition duration-300"
            >
              Sign Up
            </a>
          </div>
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
          burgerbutton === false ? "hidden" : ""
        } md:hidden`}
      >
        <a
          href="#"
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
        </a>
        <a
          href="#"
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

          <span className="pl-2">Turnos y Consultas</span>
        </a>
        <a
          href="#"
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span className="pl-2">Trabajo</span>
        </a>
        <a
          href="#"
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>

          <span className="pl-2">Login</span>
        </a>
        <a
          href="#"
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
        </a>
      </div>
    </nav>
  );
}

export default Nav;
