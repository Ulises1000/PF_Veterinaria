import React, { useEffect } from "react";
import logo from "../../style-assets/logo-sin-fondo.png";
import icon from "../../style-assets/paw_icon.png";
import { Registration } from "../../components/registration/Registration";
import { useState } from "react";
import GoogleRegis from "../../components/registration/GoogleRegis";

import "./landingPage.module.css";
import { useSelector } from "react-redux";

export default function LandingPage({ hayUser }) {
  let user = useSelector((state) => state.user.user)
  console.log(user, "USER DE LANDING")
  const modal = document.querySelector("#modal");
  const openModal = document.querySelector(".bottomIcon");
  const [openForm, setOpenForm] = useState(false);
  const [google, setGoogle] = useState({
    active: false,
    name: "",
    email: "",
    password: "",
    direction: ""
  });

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
        <div className="flex h-250px w-250px ml-14 -mt-20 md:mt-52 md:ml-20 justify-center items-center flex-wrap flex-col md:w-400px md:h-400px">
          <h1 className="font-Fredoka">Ingresar</h1>
          <div className="flex">
            <div onClick={showForm} className="bg-violet-400 border-4 border-black w-200px h-200px hover:bg-violet-200 rounded-full mt-5 transition duration-300 ease-out hover:cursor-pointer">
              <img src={icon} className="mt-8 ml-8"/>
            </div>
          </div>
          {openForm && (
            <div
              className="modal absolute bg-transparent mt-4 ml-10 md:flex md:justify-self-center md:right-80 md:mt-4"
              id="modal"
              open
            >
              {
                google.active ?
                <GoogleRegis google={google} setGoogle={setGoogle}/>
                :
                <Registration setGoogle={setGoogle}/>
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
}
