import React, { useState } from "react";
import TableProducts from "./TableProducts";
import TableUsers from "./TableUsers";
import { Link, useNavigate } from "react-router-dom";
import TableProductsBaneados from "./TableProductsBaneados";
import MetricOne from "./MetricOne";
import MetricTwo from "./metricTwo";
import MetricTree from "./MetricTree";
import { signoutUser } from "../../redux/action";
import { useDispatch } from "react-redux";


const Menu = ({ hayUser }) => {
  const dispatch = useDispatch();
  let usuarioLocal = hayUser;
  if (localStorage.userPetShop) {
    usuarioLocal = JSON.parse(localStorage.userPetShop);
  }
  const [visibilidad, setVisibilidad] = useState(false);

  function HandleLogout() {
    localStorage.removeItem("userPetShop");
    window.location.href = "/home";
    useDispatch(signoutUser());
    hayUser = "";
    userLocal = "";
    // console.log(localStorage, "esto")
  }

  return (
    <div>
      <aside
        id="default-sidebar"
        className={`fixed sm:hidden md:block top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-600`}
        >
          <ul className="space-y-2">
            <Link to="/home">
              <li>
                <a
                  href="#TableUsers"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                </a>
              </li>
            </Link>
            <li>
              <a
                href="#Dashboard1"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Estadisticas Compras</span>
              </a>
            </li>
            {/* <li>
            <a href="#Dashboard2" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>  */}
            <li>
              <a
                href="#Dashboard3"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>

                <span className="ml-3">Stock de Productos</span>
              </a>
            </li>

            <li>
              <a
                href="#TableUsers"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {/*  <Link to="/dashboard/tableusers">  */}
                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
                {/*   </Link>  */}
              </a>
            </li>
            <li>
              <a
                href="#TableProducts"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                {/*  <Link to="/dashboard/tableproducts">   */}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Productos{" "}
                </span>
                {/*  </Link>   */}
              </a>
            </li>
            <li>
              <a
                href="#TableProductsBaneados"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                {/*  <Link to="/dashboard/tableproducts">   */}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Productos Baneados
                </span>
                {/*  </Link>   */}
              </a>
            </li>

            <button
               
              onClick={() => HandleLogout() }
              className="flex select-none items-center w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <li>
                <p className="flex select-none items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Desconectarse
                  </span>
                </p>
              </li>
            </button>
          </ul>
          <Link to="/profile">
            <p className="flex justify-end items-center font-Fredoka font-bold text-white ">
              <span className="flex-1 absolute  bottom-0 mb-10 mr-20 self-end whitespace-nowrap">
                {usuarioLocal.name_U}
              </span>
            </p>
            <p className="flex justify-end items-center font-Fredoka font-bold text-white ">
              <img
                src={usuarioLocal.url}
                className="flex-1 w-12 h-12 border-2 bg-white border-violet-500 rounded-full absolute bottom-0 mb-3 mr-48 self-end whitespace-nowrap"
              ></img>
            </p>
            <p className="flex justify-end items-center font-Fredoka text-sm text-white ">
              <span className="flex-1 absolute ml-3 bottom-0 mb-4 mr-1 self-end whitespace-nowrap">
                {usuarioLocal.email_U}
              </span>
            </p>
          </Link>
        </div>
      </aside>

      {/* //////////////////////////////////////// PHONE //////////////////////////////////////////////////// */}
      <div
        className={`md:hidden lg:hidden px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-600`}
      >
        <a
          href="#top"
          className="flex fixed bottom-0 mb-6 items-center z-30 p-2 text-base font-normal bg-blue-300 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>

          {/*  <Link to="/dashboard/tableusers">  */}
          {/*   </Link>  */}
        </a>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={() => setVisibilidad(!visibilidad)}
          className="lg:hidden z-50 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6 z-50 "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <ul
          className={`h-full z-50 ${
            visibilidad === false ? "hidden" : "show"
          } z-50 md:hidden lg:hidden  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-600 space-y-2`}
        >
          <Link to="/home">
            <li className=" z-50 ">
              <a
                href="#TableUsers"
                className="flex z-50 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="flex-1  z-50  ml-3 whitespace-nowrap">
                  Home
                </span>
              </a>
            </li>
          </Link>
          <li>
            <a
              href="#Dashboard1"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Estadisticas Compras</span>
            </a>
          </li>
          {/* <li>
            <a href="#Dashboard2" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>  */}
          <li>
            <a
              href="#Dashboard3"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>

              <span className="ml-3">Stock de Productos</span>
            </a>
          </li>

          <li>
            <a
              href="#TableUsers"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/*  <Link to="/dashboard/tableusers">  */}
              <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
              {/*   </Link>  */}
            </a>
          </li>
          <li>
            <a
              href="#TableProducts"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              {/*  <Link to="/dashboard/tableproducts">   */}
              <span className="flex-1 ml-3 whitespace-nowrap">Productos </span>
              {/*  </Link>   */}
            </a>
          </li>
          <li>
            <a
              href="#TableProductsBaneados"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              {/*  <Link to="/dashboard/tableproducts">   */}
              <span className="flex-1 ml-3 whitespace-nowrap">
                Productos Baneados
              </span>
              {/*  </Link>   */}
            </a>
          </li>

          <button
            onClick={() => HandleLogout()}
            className="flex select-none items-center w-full text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <li>
              <p className="flex select-none items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Desconectarse
                </span>
              </p>
            </li>
          </button>
        </ul>
        <Link to="/profile">
          <p className="flex justify-end items-center font-Fredoka font-bold text-white ">
            <span className="flex-1 absolute  bottom-0 mb-10 mr-20 self-end whitespace-nowrap">
              {usuarioLocal.name_U}
            </span>
          </p>
          <p className="flex justify-end items-center font-Fredoka font-bold text-white ">
            <img
              src={usuarioLocal.url}
              className="flex-1 w-12 h-12 border-2 bg-white border-violet-500 rounded-full absolute bottom-0 mb-3 mr-48 self-end whitespace-nowrap"
            ></img>
          </p>
          <p className="flex justify-end items-center font-Fredoka text-sm text-white ">
            <span className="flex-1 absolute ml-3 bottom-0 mb-4 mr-1 self-end whitespace-nowrap">
              {usuarioLocal.email_U}
            </span>
          </p>
        </Link>
      </div>

      <div className="p-4 sm:ml-64" id="Dashboard1">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <MetricOne />
        </p>
      </div>
      <div className="p-4 sm:ml-64" id="Dashboard2">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <MetricTwo />
        </p>
      </div>
      <div className="p-4 sm:ml-64" id="Dashboard3">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <MetricTree />
        </p>
      </div>
      <div className="p-4 sm:ml-64" id="TableUsers">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <TableUsers hayUser={hayUser}/>
        </p>
      </div>
      <div className="p-4 sm:ml-64" id="TableProducts">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <TableProducts />
        </p>
      </div>
      <div className="p-4 sm:ml-64" id="TableProductsBaneados">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <TableProductsBaneados />
        </p>
      </div>
    </div>
  );
};

export default Menu;
