import React, {useState} from "react";
import { postUser } from "../../redux/action/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import "./registration.Module.css";

function GoogleRegis({google, setGoogle}){
    const [direction, setDirection] = useState("");
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    async function handleSubmitNewGame(e){
        e.preventDefault();
        if(direction.trim()){
            const obj = {...google};
            obj.direction = direction
            setGoogle(obj)
            dispatch(postUser(obj))
        }
        else alert("Ingrese Una Direccion."); 
    }
    return(
        <div className="flex flex-1 flex-col justify-center items-center sm:w-72 md:w-450px md:h-450px -ml-10 md:-ml-0 bg-Dark-Violet2 rounded-xl">
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={(e) => handleSubmitNewGame(e)}
            >
            <div className="inputRegistration font-Fredoka rounded-lg text-md font-bold text-gray-200">
            <label>Direccion:</label> <br />
            <input
              type={"text"}
              className="text-gray-700 font-normal"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            />
            </div>
            <button
                className="submitRegistration bg-violet-400 mt-2 mb-5"
            >
            Ingresar    
          </button>
          </form>
        </div>
    )
}

export default GoogleRegis;