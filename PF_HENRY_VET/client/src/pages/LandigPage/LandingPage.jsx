// import React from 'react';
// import {Link} from "react-router-dom";

// const LandingPage = () => (
//     <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-3xl font-bold">Welcome</h1>
//         <p className="text-xl my-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//         <Link to='/home'>
//             <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Start
//             </button>
//         </Link>
//     </div>
// );

// export default LandingPage;

import React from "react";
import logo from "../../style-assets/logo-sin-fondo.png";
import icon from "../../style-assets/paw_icon.png";
import { Registration } from "../../components/registration/Registration";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./landingPage.css";

export default function LandingPage() {
  const modal = document.querySelector("#modal");
  console.log("Esto es Modal ===", modal);
  const openModal = document.querySelector(".bottomIcon");
  console.log("Esto es OpenModal ===", openModal);
  const [openForm, setOpenForm] = useState(false);

  const showForm = () => {
    setOpenForm(!openForm);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen">
        <div className="flex ml-20 mt-20 md:ml-64 md:mt-56">
          <img
            src={logo}
            alt="Not found"
            className="h-48 w-48 md:h-400px md:w-400px bg-Dark-Violet rounded-xl"
            id="open-button"
          />
        </div>
        <div className="flex h-250px w-250px ml-14 -mt-20 md:mt-52 justify-center items-center flex-wrap flex-col md:w-400px md:h-400px">
          <h1 className="font-Fredoka">Ingresar</h1>

          <div className="bg-violet-400 border-4 border-black w-200px h-200px hover:bg-violet-200 rounded-full mt-5 transition duration-300 ease-out hover:cursor-pointer">
            <img src={icon} className="mt-8 ml-8" onClick={showForm} />
          </div>
        </div>
        {openForm && (
          <dialog className="modal bg-transparent mt-80 ml-10 md:mt-44 md:mr-72" id="modal" open>
            <Registration />
          </dialog>
        )}
      </div>
    </>
  );
}
