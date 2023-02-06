import {
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  FILTERED,
  SORT,
} from "../action/constants";
import {
  GET_USER,
  DELETE_USER,
  POST_USER,
  UPDATE_USER,
} from "../action/constants";
import { ASCENDENTE, DESCENDENTE } from "../../const/orderByName";

const initialState = {
  products: [],
  product: {},
  user: {},
  currentOrder: ASCENDENTE,
  searchedProducts: [],
  orderedByNameProducts: [],
  orderedProducts: [],
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
          (product) => product.id !== action.payload
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
        products: state.products.map((product) =>
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

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED:
      return {};
    case SORT:
      if (state.searchedProducts.length === 0) {
        let orderedByNameProducts = [...state.products];

        if (action.payload === ASCENDENTE) {
          orderedByNameProducts = orderedByNameProducts.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return action.payload === ASCENDENTE ? -1 : 1;
            }
            return 0;
          });
        }
        if (action.payload === DESCENDENTE) {
          orderedByNameProducts = orderedByNameProducts.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return action.payload === ASCENDENTE ? 1 : -1;
            }
            return 0;
          });
        }

        if (action.payload === "LowToHigh") {
          orderedByNameProducts = orderedByNameProducts.sort(function (a, b) {
            if (a.unit_price > b.unit_price) return 1;
            if (b.unit_price > a.unit_price) return -1;
            return 0;
          });
        }

        if (action.payload === "HighToLow") {
          orderedByNameProducts = orderedByNameProducts.sort(function (a, b) {
            if (a.unit_price > b.unit_price) return -1;
            if (b.unit_price > a.unit_price) return 1;
            return 0;
          });
        }

        return {
          ...state,
          orderedProducts: orderedByNameProducts,
          currentOrder: action.payload,
        };
      } else {
        let orderedByNameProducts = [...state.searchedProducts];

        if (action.payload === ASCENDENTE) {
          orderedByNameProducts = orderedByNameProducts.sort((a, b) => {
            if (a.name < b.name) {
              return action.payload === ASCENDENTE ? -1 : 1;
            }
            return 0;
          });
        }
        if (action.payload === DESCENDENTE) {
          orderedByNameProducts = orderedByNameProducts.sort((a, b) => {
            if (a.name > b.name) {
              return action.payload === ASCENDENTE ? 1 : -1;
            }
            return 0;
          });
        }

        if (action.payload === "LowToHigh") {
          orderedByNameProducts = orderedByNameProducts.sort(function (a, b) {
            if (a.rating > b.rating) return 1;
            if (b.rating > a.rating) return -1;
            return 0;
          });
        }

        if (action.payload === "HighToLow") {
          orderedByNameProducts = orderedByNameProducts.sort(function (a, b) {
            if (a.rating > b.rating) return -1;
            if (b.rating > a.rating) return 1;
            return 0;
          });
        }

        return {
          ...state,
          orderedProducts: orderedByNameProducts,
          currentOrder: action.payload,
        };
      }
    default:
      return state;
  }
};
