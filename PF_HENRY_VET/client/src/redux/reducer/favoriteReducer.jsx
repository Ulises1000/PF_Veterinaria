import {
    GET_FAVORITES,
    UPDATE_FAVORITE,
    POST_FAVORITES
} from "../action/constants";

const initialState = { 
    favorites: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      case UPDATE_FAVORITE:
        return {
          ...state,
          favorites: action.payload,
        };
        case POST_FAVORITES: 
          return {
            ...state,
            favorites: action.payload,
          };
      default:
        return state;
    }
};