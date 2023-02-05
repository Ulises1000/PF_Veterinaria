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
      <div className="Container">
        <div className="logoContainer">
          <img
            src={logo}
            alt="Not found"
            width="400px"
            height="400px"
            className="logoPrincipal"
            id="open-button"
          />
        </div>
        <div className="linkContainer">
          <h1 className="linkText">Ingresar</h1>

          <div className="bottomIcon">
            <img src={icon} className="paw" onClick={showForm} />
          </div>
        </div>
        {openForm && (
          <dialog className="modal" id="modal" open>
            <Registration />
          </dialog>
        )}
      </div>
    </>
  );
}
