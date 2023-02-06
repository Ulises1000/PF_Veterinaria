import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./registration.css";

function validate(input) {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
  let regexPassword = /^.{4,12}$/;

  if (!input.name.trim()) {
    errors.name = "Por favor, escribe un nombre de Usuario";
  } else if (!regexName.test(input.name.trim())) {
    errors.name = "Este espacio solo acepta letras y espacios";
  }

  if (!input.email.trim()) {
    errors.email = "Por favor, ingresa tu email";
  } else if (!regexEmail.test(input.email.trim())) {
    errors.email = "Por favor, escribe una direccion email válida";
  }

  if (!input.password.trim()) {
    errors.password = "Por favor, escribe una contraseña";
  } else if (!regexPassword.test(input.password.trim())) {
    errors.password =
      "Tu contraseña debe de 4 a 8 caracteres y por lo menos 1 numero";
  }
  if (!input.confirmedPassword.trim()) {
    errors.confirmedPassword =
      "Tu contraseña debe de 4 a 10 caracteres y por lo menos 1 numero";
  } else if (input.password !== input.confirmedPassword) {
    errors.confirmedPassword = "Las contraseñas deben coincidir";
  }
  console.log("Estos son los errors en VALIDATE ===", errors);
  return errors;
}

export function Registration() {
  const [errors, setErrors] = useState({});
  console.log("estos son los errors en REGISTRATION ===", errors);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center sm:w-72 md:w-450px md:h-450px -ml-10 md:-ml-0 bg-Dark-Violet2 rounded-xl">
      <form className="flex flex-col justify-center items-center" onSubmit={(e) => handleSubmitNewGame(e)}>
        <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
          <label>Nombre de Usuario:</label> <br />
          <input
            type={"text"}
            value={input.name}
            name="name"
            className="text-gray-700 font-normal"
            onChange={(e) => handleChange(e)}
          />
        </div>
          {errors.name && (
            <p className="errorRegister font-Fredoka text-black font-bold">
              {errors.name}
            </p>
          )}
        <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
          <label>Email:</label> <br />
          <input
            type={"text"}
            value={input.email}
            className="text-gray-700 font-normal"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
          {errors.email && (
            <p className="errorRegister font-Fredoka text-black font-bold">
              {errors.email}
            </p>
          )}
        <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
          <label>Contraseña:</label> <br />
          <input
            type={"text"}
            className="text-gray-700 font-normal"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
          {errors.password && (
            <p className="errorRegister ml-8 font-Fredoka text-black font-bold">
              {errors.password}
            </p>
          )}
        <div className="inputRegistration font-Fredoka rounded-lg text-base font-bold text-gray-200">
          <label>Confirmar Contraseña:</label> <br />
          <input
            className="text-gray-700 font-normal"
            type={"text"}
            value={input.confirmedPassword}
            name="confirmedPassword"
            onChange={(e) => handleChange(e)}
          />
        </div>
          {errors.confirmedPassword && (
            <p className="errorRegister font-Fredoka text-black font-bold ml-5">
              {errors.confirmedPassword}
            </p>
          )}

        <button type="submit" className="submitRegistration">
          Crear Cuenta
        </button>
      </form>
      <div className="ml-10">
        <h1 className="titleRegistration font-Fredoka text-black">
          No tienes cuenta?
        </h1>
        <Link to={"/home"}>
          <button className=" font-Fredoka text-lg rounded-2xl text-black hover:cursor-pointer hover:bg-gray-700 hover:text-gray-100 bg-gray-300">
            Explorar como Invitado
          </button>
        </Link>
      </div>
      </div>
  );
}
