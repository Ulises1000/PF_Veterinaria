import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./registration.Module.css";
import GoogleButton from "./GoogleButton.jsx";
import { getUser, GetUser, postUser, registerUser, signinUser} from "../../redux/action";

function validate(input, userTyped) {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
  let regexPassword = /^.{4,12}$/;

  if (!input.name.trim() && userTyped.name) {
    errors.name = "Por favor, escribe un nombre de Usuario";
  } else if (!regexName.test(input.name.trim()) && userTyped.name) {
    errors.name = "Este espacio solo acepta letras y espacios";
  }
  console.log(userTyped.email, input.email);

  if (userTyped.email && !input.email.trim()) {
    errors.email = "Por favor, ingresa tu email";
  } else if (userTyped.email && !regexEmail.test(input.email.trim())) {
    errors.email = "Por favor, escribe una direccion email válida";
  }

  if (!input.password.trim() && userTyped.password) {
    errors.password = "Por favor, escribe una contraseña";
  } else if (userTyped.password && !regexPassword.test(input.password.trim())) {
    errors.password =
      "Tu contraseña debe de 4 a 8 caracteres y por lo menos 1 numero";
  }
  if (!input.confirmedPassword.trim() && userTyped.confirmedPassword) {
    errors.confirmedPassword =
      "Tu contraseña debe de 4 a 10 caracteres y por lo menos 1 numero";
  } else if (
    input.password !== input.confirmedPassword &&
    userTyped.confirmedPassword
  ) {
    errors.confirmedPassword = "Las contraseñas deben coincidir";
  }
  console.log("Estos son los errors en VALIDATE ===", errors);
  return errors;
}

export function Registration({ Navset, setGoogle }) {
  const [registrationChange, setRegistrationChange] = useState(
    Navset ? Navset : "login"
  );
  const dispatch = useDispatch();

  function HandleClickLogin() {
    setRegistrationChange("login");
    setInputLogin({
      name: "",
      email: "",
      password: "",
      direction: "",
      confirmedPassword: "",
    });
    setInputRegistration({
      name: "",
      email: "",
      password: "",
      direction: "",
      confirmedPassword: "",
    });
    reset()
  }

  function HandleClickRegistration() {
    setRegistrationChange("registration");
    setInputLogin({
      name: "",
      email: "",
      password: "",
      direction: "",
      confirmedPassword: "",
    });
    setInputRegistration({
      name: "",
      email: "",
      password: "",
      direction: "",
      confirmedPassword: "",
    });
    reset()
  }

  function reset(){
    setErrors({}),
    setUserTyped({ name: false,
      email: false,
      password: false,
      direction: false, 
      confirmedPassword: false,})
  }

  const [errors, setErrors] = useState({});

  const [userTyped, setUserTyped] = useState({
    name: false,
    email: false,
    password: false,
    direction: false,
    confirmedPassword: false,
  });

  console.log("estos son los errors en REGISTRATION ===", errors);
  const [inputRegistration, setInputRegistration] = useState({
    name: "",
    email: "",
    password: "",
    direction: "",
    confirmedPassword: "",
  });

  const [inputLogin, setInputLogin] = useState({
    name: "",
    email: "",
    password: "",
    direction: "",
    confirmedPassword: "",
  });
/*
useEffect(() =>{
  localStorage
},[localStorage])
*/
  function handleChangeRegistration(e) {
    setInputRegistration({
      ...inputRegistration,
      [e.target.name]: e.target.value,
    });
    setUserTyped({
      ...userTyped,
      [e.target.name]: true,
    });
    setErrors(
      validate(
        {
          ...inputRegistration,
          [e.target.name]: e.target.value,
        },
        {
          ...userTyped,
          [e.target.name]: true,
        }
      )
    );
  }
  //ACA ESTA LO NUEVO DE REGISTRATION Y SIGNIN
//--------------------------------------------------------
  async function handleSubmitNewGame(e){
    e.preventDefault();
    if(registrationChange === "registration"){
      dispatch(registerUser(inputRegistration))
      console.log(inputRegistration)
      dispatch(postUser(inputRegistration))
      dispatch(signinUser(inputRegistration))
      dispatch(getUser(inputRegistration.email, inputRegistration.password))
    }  
    else {
      dispatch(signinUser(inputLogin))
      dispatch(getUser(inputLogin.email, inputLogin.password))
    }
  }
//--------------------------------------------------------
  function handleChangeLogin(e) {
    console.log(e.target.name);
    setInputLogin({
      ...inputLogin,
      [e.target.name]: e.target.value,
    });
    setUserTyped({
      ...userTyped,
      [e.target.name]: true,
    });
    setErrors(
      validate(
        {
          ...inputLogin,
          [e.target.name]: e.target.value,
        },
        {
          ...userTyped,
          [e.target.name]: true,
        }
      )
    );
  }

  dispatch(GetUser(userTyped.email, userTyped.password))
  const user = useSelector((state) => state.user.user)
  console.log(JSON.parse, "USER DE PORDIOS")
  
  if (registrationChange === "registration") {
    return (
      <div className="flex flex-1 flex-col justify-center items-center sm:w-72 md:w-450px md:h-450px -ml-10 md:-ml-0 bg-Dark-Violet2 rounded-xl">
        <div>
          <button
            onClick={HandleClickLogin}
            className="mr-10 bg-violet-200 p-3 w-20 hover:bg-violet-300 rounded-lg"
          >
            Login
          </button>
          <button
            onClick={HandleClickRegistration}
            className="bg-violet-200 p-3 w-28 hover:bg-violet-300 rounded-lg"
          >
            Registration
          </button>
        </div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={(e) => handleSubmitNewGame(e)}
        >
          <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
            <label>Nombre de Usuario:</label> <br />
            <input
              type={"text"}
              value={inputRegistration.name}
              name="name"
              className="text-gray-700 font-normal"
              onChange={(e) => handleChangeRegistration(e)}
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
              value={inputRegistration.email}
              className="text-gray-700 font-normal"
              name="email"
              onChange={(e) => handleChangeRegistration(e)}
            />
          </div>
          {errors.email && (
            <p className="errorRegister font-Fredoka text-black font-bold">
              {errors.email}
            </p>
          )}
          <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
            <label>Direccion:</label> <br />
            <input
              type={"text"}
              className="text-gray-700 font-normal"
              value={inputRegistration.direction}
              name="direction"
              onChange={(e) => handleChangeRegistration(e)}
            />
          </div>
          <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
            <label>Contraseña:</label> <br />
            <input
              type={"password"}
              className="text-gray-700 font-normal"
              value={inputRegistration.password}
              name="password"
              onChange={(e) => handleChangeRegistration(e)}
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
              type={"password"}
              value={inputRegistration.confirmedPassword}
              name="confirmedPassword"
              onChange={(e) => handleChangeRegistration(e)}
            />
          </div>
          {errors.confirmedPassword && (
            <p className="errorRegister font-Fredoka text-black font-bold ml-5">
              {errors.confirmedPassword}
            </p>
          )}

          <button
            type="submit"
            className="submitRegistration bg-violet-400 mt-2 mb-5"
          >
            Crear Cuenta
          </button>
          {/* ESTO ES LO DE GOOGLE */}
          <GoogleButton setGoogle={setGoogle}/>
        </form>
        <div className="ml-10 mt-1">
          <Link to={"/home"}>
            <button className=" font-Fredoka text-lg p-2 mb-2 mr-5 rounded-2xl text-black hover:cursor-pointer hover:bg-gray-700 hover:text-gray-100 bg-gray-300">
              Explorar como Invitado
            </button>
          </Link>
        </div>
      </div>
    );
  } else if (registrationChange === "login") {
    return (
      <div className="flex flex-1 flex-col justify-center items-center sm:w-72 md:w-450px md:h-450px md:-ml-0 bg-Dark-Violet2 rounded-xl">
        <div className="mb-10">
          <button
            onClick={HandleClickLogin}
            className="mr-10 bg-violet-200 p-3 w-20 hover:bg-violet-300 rounded-lg"
          >
            Login
          </button>
          <button
            onClick={HandleClickRegistration}
            className="bg-violet-200 p-3 w-28 hover:bg-violet-300 rounded-lg"
          >
            Registration
          </button>
        </div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={(e) => handleSubmitNewGame(e)}
        >
          <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
            <label>Email:</label> <br />
            <input
              type={"text"}
              value={inputLogin.email}
              className="text-gray-700 font-normal"
              name="email"
              onChange={(e) => handleChangeLogin(e)}
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
              type={"password"}
              className="text-gray-700 font-normal"
              value={inputLogin.password}
              name="password"
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          {errors.password && (
            <p className="errorRegister ml-5 font-Fredoka text-black font-bold">
              {errors.password}
            </p>
          )}

          <button
            type="submit"
            className="submitRegistration bg-violet-400 pb-1 mb-2 mt-2"
          >
            Login
          </button>
          <GoogleButton isRegister={false}/>
        </form>
        <button
          onClick={HandleClickRegistration}
          className="titleRegistration font-Fredoka text-black"
        >
          ¿No tienes cuenta?
        </button>
        <div className="ml-4 mb-7">
          <Link to={"/home"}>
            <button className=" font-Fredoka text-lg p-2 rounded-2xl mt-4 text-black hover:cursor-pointer hover:bg-gray-700 hover:text-gray-100 bg-gray-300">
              Explorar como Invitado
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
