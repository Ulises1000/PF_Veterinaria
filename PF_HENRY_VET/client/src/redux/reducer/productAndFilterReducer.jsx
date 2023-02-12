import {
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH,
  CREATE_PAGINATION_ARRAY,
  FILTERED,
  SORT,
  SEARCH_PRO_DASHBOARD,
  BY_ORDER,
  BY_ORDER_PRICE,
  BY_ORDER_STOCK,
  SEARCH_USERS_DASHBOARD,
  GET_USERS,
} from "../action/constants";

import { ASCENDENTE, DESCENDENTE } from "../../const/orderByName";

const initialState = {
  products: [],
  product: {},
  filterProducts:[],
  currentOrder: "Static",
  currentBreed: "breed",
  currentSearch: "",
  searchedProducts: [],
  filteredProducts: [],
  orderedByNameProducts: [],
  orderedProducts: [],
  paginationArray: [],
};

 export const searchDashb = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRO_DASHBOARD:
      console.log(action.payload)
    let filterProd = state.filterProducts.filter((us) => us.name.toLowerCase().includes(action.payload.toLowerCase()));
       return {
        ...state,
        products: filterProd,
      };
}}  

//no usar da errores xD
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
        products: action.payload.value,
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

//usar esta 
export const filters = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:{
      return {
        ...state,
        products: action.payload,        
        filterProducts: action.payload,
        OrdeProductsDashb: action.payload
      };
    }
    case POST_PRODUCT:
      return {
        ...state,
        products: action.payload.value,
      };
    case SEARCH_PRO_DASHBOARD:
      let filterProd = state.filterProducts.filter((us) => us.name.toLowerCase().includes(action.payload.toLowerCase()));
       return {
        ...state,
        products: filterProd,
      };
      

    case FILTERED:
      let filteredProducts = state.orderedProducts;

      let filters = {
        breed: state.currentBreed,
      };

      // for (let Key in action.payload) {
      //   filters[Key] = action.payload[Key];
      // }

      // if (filters.breed !== "breed") {
      //   filteredProducts = filteredProducts.filter((videogame) => {
      //     for (let i = 0; i < videogame.Platforms.length; i++) {
      //       if (videogame.Platforms[i].name === filters.Platform) {
      //         return videogame;
      //       }
      //     }
      //     return 0;
      //   });
      // }

      // if (filters.Genre !== "Genre") {
      //   filteredProducts = filteredProducts.filter((videogame) => {
      //     for (let i = 0; i < videogame.Genres.length; i++) {
      //       if (videogame.Genres[i].name === filters.Genre) {
      //         return videogame;
      //       }
      //     }
      //     return 0;
      //   });
      // }

      return {
        ...state,
        // currentGenre: filters.Genre,
        // currentPlatform: filters.Platform,
        filteredProducts: filteredProducts,
        // currentPage: 1,
      };

    case SEARCH:
      return {
        ...state,
        orderedProducts: action.payload,
        searchedProducts: action.payload,
        currentSearch: action.payload,
        currentOrder: "Static",
        currentBreed: "breed",
      };
    case SORT:
      if (state.searchedProducts.length === 0) {
        let orderedByNameProducts = [...state.products];
        console.log(orderedByNameProducts)
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
            if (b.unit_price > a.unit_price) return -1;
            if (a.unit_price > b.unit_price) return 1;
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
      }
    case CREATE_PAGINATION_ARRAY:
      const pageSize = 15;
      let pageHolder = [];
      if (state.orderedProducts.length === 0){
          const page = state.products
          pageHolder.push(page);
        }  
        else {
                const page = state.orderedProducts;
                pageHolder.push(page); 
            }
      return {
        ...state,
        paginationArray: pageHolder,
      };

      //*SORTS DASHBOARD________________
      case BY_ORDER:
        console.log(action.payload)
      const orderProducts = action.payload === "Asc"
          ? state.products.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.products.sort((a, b) => (a.name > b.name ? -1 : 1));
          console.log(state.products)
      return {
        ...state,
        products: orderProducts,      
      };

      case BY_ORDER_PRICE:
        console.log(action.payload)
      const orderPrice = action.payload === "AscPrice"
          ? state.products.sort((a, b) => (a.unit_price > b.unit_price ? 1 : -1))
          : state.products.sort((a, b) => (a.unit_price > b.unit_price ? -1 : 1));          
      return {
        ...state,
        products: orderPrice,      
      };

      case BY_ORDER_STOCK:
        console.log(action.payload)
      const orderStock = action.payload === "AscStock"
          ? state.products.sort((a, b) => (a.stock > b.stock ? 1 : -1))
          : state.products.sort((a, b) => (a.stock > b.stock ? -1 : 1));          
      return {
        ...state,
        products: orderStock,      
      };
    //*_________________________________


    default:
      return state;
  }
};