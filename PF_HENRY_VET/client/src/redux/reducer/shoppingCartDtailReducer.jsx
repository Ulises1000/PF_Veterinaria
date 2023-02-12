import {
    POST_CARTDTAIL,
    GET_CARTDTAIL,
    UPDATE_CARTDTAIL,
    DELETE_CARTDTAIL,
    DIFFERENT_OUTCOME,
    EMPTY_DIFFOUTCOME_OBJ,
    EMPTY_SHOPPINGCARTDTAIL,
    EMPTY_SHOPPINGCARTDTAILMSG
} from "../action/constants";

const initialState = { 
    shoppingCartDtail: [],
    shoppingCartDtailMsg: "",
    differentOutcome: {}
};

export const shoppingCartDtailReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_CARTDTAIL:
        return {
          ...state,
          shoppingCartDtailMsg: action.payload.value,
        };
      case GET_CARTDTAIL:
        return {
          ...state,
          shoppingCartDtail: action.payload.value,
        };
        case UPDATE_CARTDTAIL: 
          return {
            ...state,
            shoppingCartDtailMsg: action.payload.value,
          };
        case DELETE_CARTDTAIL: 
            return {
                ...state,
                shoppingCartDtailMsg: action.payload.value,
            }
        case DIFFERENT_OUTCOME: return {
            ...state,
            differentOutcome: action.payload
        }
        case EMPTY_DIFFOUTCOME_OBJ: return {
            ...state,
            differentOutcome: {}
        }
        case EMPTY_SHOPPINGCARTDTAIL: return {
            ...state,
            shoppingCartDtail: []
        }
        case EMPTY_SHOPPINGCARTDTAILMSG: return {
            ...state,
            shoppingCartDtailMsg: ""
        }
      default:
        return state;
    }
};