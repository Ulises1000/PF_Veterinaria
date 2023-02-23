import React from "react";
import {auth} from "../../FireBaseConfig/firebaseConfig.jsx";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useDispatch } from "react-redux";
import "./registration.Module.css";
import { getUser } from "../../redux/action/index.jsx";


function GoogleButton({isRegister = true, setGoogle}){
    const dispatch = useDispatch();
    
    async function handleClick(){
      const provider = new GoogleAuthProvider();
      const {user} = await signInWithPopup(auth, provider);
      
      if(isRegister){
        setGoogle(prevGoogle => {
          return {
            ...prevGoogle,
            active: true,
            name: user.displayName,
            email: user.email,
            password: ""
          }
        })

      }else{
        dispatch(getUser(user.email, ""));
      }
    }
    return(
      <>
        {
          isRegister === undefined ? 
         <button
            type="button"
            className="noParametreGoogleButton bg-slate-400 mt-2 mb-5"
        >
          Google
        </button>
        :
        <button
            type="button"
            className="submitRegistration bg-violet-400 mt-2 mb-5"
            onClick={handleClick}
        >
          Google
        </button>
        }
        
      </>
    )
}

export default GoogleButton;