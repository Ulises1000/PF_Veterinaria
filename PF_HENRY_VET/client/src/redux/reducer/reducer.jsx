import { GET_PRODUCTS, GET_PRODUCT, DELETE_PRODUCT, POST_PRODUCT, UPDATE_PRODUCT } from '../action/constants';
import { GET_USER, DELETE_USER, POST_USER, UPDATE_USER } from '../action/constants';

const initialState = {
    products: [],
    product: {},
    user: {},
};

export const productsReducer = (state = initialState.products, action) => {
 switch (action.type) {
     case GET_PRODUCTS:
         return {
             ...state,
             products: action.payload,
         };
     case GET_PRODUCT:
         return {
             ...state,
             product: action.payload,
         };
     case DELETE_PRODUCT:
         return {
             ...state,
             products: state.products.filter(
                 product => product.id !== action.payload
             ),
         };
     case POST_PRODUCT:
         return {
             ...state,
             products: [...state.products, action.payload],
         };
     case UPDATE_PRODUCT:
         return {
             ...state,
             products: state.products.map(product =>
                 product.id === action.payload.id
                     ? { ...product, ...action.payload }
                     : product
             ),
         };
     default:
         return state;
 }
};

export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case DELETE_USER:
            return {
                ...state,
                user: {},
            };
        case POST_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        default:
            return state;
    }
};
