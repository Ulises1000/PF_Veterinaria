import {
    GET_USER,
    DELETE_USER,
    REGISTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    REGISTER_ERRORS,
    SIGNIN_ERRORS,
    SIGNIN_GOOGLE,
    CLEAN_MSG_REGISTER_USER,
    POST_USER,
    UPDATE_USER,
    SET_USER,
} from "../action/constants";

const initialState = {
    user: {},
    msgDeletedUser: "",
    authGoogle: {},
    infoRegistration: {},
    userMsgErrorRegistrationAndSignin: "",
}

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload.value,
      };
    case REGISTER_USER:
      return {
        ...state
        // infoRegistration: action.payload,
      };
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNIN_GOOGLE:
      return {
        ...state,
        authGoogle: action.payload,
      };
    case REGISTER_ERRORS:{
      let msg;
      
      switch(action.payload){
        case "auth/email-already-in-use": msg = "Este Email Ya Esta En Uso.";
          break;
        case "auth/invalid-email": msg = "Este Email Es Invalido.";
          break;
        case "auth/weak-password": msg = "Esta Contraseña Es Muy Débil.";
          break;
        default: msg = "Hubo Un Error.";
      }

      return {
        ...state,
        userMsgErrorRegistrationAndSignin: msg,
      };
    }
    case SIGNIN_ERRORS:{
      let msg;
      
      switch(action.payload){
        case "auth/wrong-password": msg = "Contraseña Incorrecta.";
          break;
        case "auth/user-not-found": msg = "No Se Ha Encontrado El Usuario.";
          break;
        default: msg = "Hubo Un Error.";
      }

      return {
        ...state,
        userMsgErrorRegistrationAndSignin: msg,
      };
    }
    //PORAHORA EL SIGNOUT SOLO DEVUELVE EL STATE PERO SI DESLOGUEA AL USUARIO EN FIREBASE
    case SIGNOUT_USER:
      return {
        ...state,
        user: {},
      };
    case CLEAN_MSG_REGISTER_USER: 
      return {
        ...state,
        userMsgErrorRegistrationAndSignin: "",
      }
    case DELETE_USER:
      return {
        ...state,
        msgDeletedUser: action.payload
      };
    case POST_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
      case SET_USER:
        return{
          ...state,
          user:action.payload
        }
    default:
      return state;
  }
};