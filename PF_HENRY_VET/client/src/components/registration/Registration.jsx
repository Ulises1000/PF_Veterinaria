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
    <div className="containerRegistration">
      <h1 className="titleRegistration">No tienes cuenta?</h1>
      <Link to={"/home"}>
        <button className="btnExplore">Explorar como Invitado</button>
      </Link>
      <form onSubmit={(e) => handleSubmitNewGame(e)}>
        <div className="inputRegistration">
          <label>Nombre de Usuario:</label> <br />
          <input
            type={"text"}
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="errorRegister">{errors.name}</p>}
        </div>
        <div className="inputRegistration">
          <label>Email:</label> <br />
          <input
            type={"text"}
            value={input.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p className="errorRegister">{errors.email}</p>}
        </div>
        <div className="inputRegistration">
          <label>Contraseña:</label> <br />
          <input
            type={"text"}
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
          {errors.password && (
            <p className="errorRegister">{errors.password}</p>
          )}
        </div>
        <div className="inputRegistration">
          <label>Confirmar Contraseña:</label> <br />
          <input
            type={"text"}
            value={input.confirmedPassword}
            name="confirmedPassword"
            onChange={(e) => handleChange(e)}
          />
          {errors.confirmedPassword && (
            <p className="errorRegister">{errors.confirmedPassword}</p>
          )}
        </div>

        <button type="submit" className="submitRegistration">
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}
