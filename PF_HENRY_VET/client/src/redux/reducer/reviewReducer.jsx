import {
    GET_REVIEWS,
    POST_REVIEWS,
    UPDATE_REVIEWS,
    DELETE_REVIEWS
  } from "../action/constants";

  const initialState = {
    reviews: [],
    particularReview: {}
  };
  
  export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REVIEWS: {
        if(Array.isArray(action.payload)) return {
          ...state,
          reviews: action.payload
        };
        else return {
          ...state,
          particularReview: action.payload
        };
      }
      case POST_REVIEWS: return {
        ...state,
        reviews: [...state.reviews, action.payload]
      };
      case UPDATE_REVIEWS: return {
        ...state
      };
      case DELETE_REVIEWS: return {
        ...state
      };
      default: return {
        ...state
      };
    }
  };