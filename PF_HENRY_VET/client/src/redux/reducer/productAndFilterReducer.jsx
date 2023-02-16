import {
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH,
  CREATE_PAGINATION_ARRAY,
  GET_FAVORITES,
  // FILTEREDBREED,
  // FILTEREDSIZE,
  FILTERED,
  FILTEREDPRODUCTS,
  SORT,
  SEARCH_PRO_DASHBOARD,
  BY_ORDER,
  BY_ORDER_PRICE,
  BY_ORDER_STOCK,
  SEARCH_USERS_DASHBOARD,
  GET_USERS,
  CLEARFORM,
  GET_PRODUCTS_BANEADOS,
  SEARCH_PRO_DASHBOARD_DELETED,
  BY_ORDER_BAN,
  BY_ORDER_PRICE_BAN,
  BY_ORDER_STOCK_BAN,

} from "../action/constants";
import {
  GET_USER,
  DELETE_USER,
  REGISTER_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  REGISTER_ERRORS,
  SIGNIN_ERRORS,
  CLEAN_MSG_REGISTER_USER,
  POST_USER,
  UPDATE_USER,
} from "../action/constants";
import { UPDATE_FAVORITE, POST_FAVORITES } from "../action/constants";
import { SEARCH_USERS_DASHBOARD, GET_USERS } from "../action/constants";

import { ASCENDENTE, DESCENDENTE } from "../../const/orderByName";
import { sort } from "../action";

const initialState = {
  products: [],
  product: {},
  productosedit:{},
  productBaneados:[],
  ProductsBanSearch:[],
  filterProducts:[],
  currentOrder: "Static",
  currentBreed: "breedType",
  currentSize: "petSize",
  currentSearch: "",
  searchedProducts: [],
  currentFilter: "",
  filteredProducts: [],
  filteredProductsBySize: [],
  orderedByNameProducts: [],
  orderedProducts: [],
  paginationArray: [],
  shoppingCart: [],
  filteredOnlyBySize:[], 
};

export const searchDashb = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRO_DASHBOARD:
      let filterProd = state.filterProducts.filter((us) =>
        us.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        products: filterProd,
      };
  }
};

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

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        infoRegistration: action.payload,
      };
    case SIGNIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_ERRORS: {
      let msg;

      switch (action.payload) {
        case "auth/email-already-in-use":
          msg = "Este Email Ya Esta En Uso.";
          break;
        case "auth/invalid-email":
          msg = "Este Email Es Invalido.";
          break;
        case "auth/weak-password":
          msg = "Esta Contraseña Es Muy Débil.";
          break;
        default:
          msg = "Hubo Un Error.";
      }

      return {
        ...state,
        userMsgErrorRegistrationAndSignin: msg,
      };
    }
    case SIGNIN_ERRORS: {
      let msg;

      switch (action.payload) {
        case "auth/email-already-in-use":
          msg = "Este Email Ya Esta En Uso.";
          break;
        case "auth/invalid-email":
          msg = "Este Email Es Invalido.";
          break;
        case "auth/weak-password":
          msg = "Esta Contraseña Es Muy Débil.";
          break;
        default:
          msg = "Hubo Un Error.";
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
      };
    case CLEAN_MSG_REGISTER_USER:
      return {
        ...state,
        userMsgErrorRegistrationAndSignin: "",
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

//usar esta
//usar esta
export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED:
      let filteredProducts = state.orderedProducts;
      let filters = {
        breed: state.currentBreed,
    
      }
    case FILTEREDBREED:
      let filtersBreed = {
        breedType: "breedType",

      };

      case FILTEREDPRODUCTS: 
      /*
        currentBreed: state.currentBreed,
        currentSize: input,
      */
        const mainArray = state.searchedProducts.length > 0 ? state.searchedProducts : state.products
        const filters = action.payload;
        console.log(mainArray,"88888888888888888" ,filters, "666666666666666666666666666666666")

        //state.currentOrder = "Static";
      /*
      {
        size: "firulete", "", undefined, "petSize"
        breed: "firulin"
      }
      
      */
      let filteredArray = []
      
      
      // PRIMERO: Filtramos por tamaño
      if(filters.size !== "petSize" && filters.size !== undefined){
        filteredArray = mainArray.filter((product) => {
          for (let i = 0; i < product.petSize.length; i++) {
            if (product.petSize[i] === filters.size) {
              return 1
            }
          }
          return 0;
        });
      }

      // SEGUNDO: Filtramos por especie
      if(filters.breed !== "breedType" && filters.breed !== undefined){
        // ACA SI SE FILTRO POR TAMAÑO
        if(filteredArray.length > 0){
          filteredArray = filteredArray.filter((product) => {
            console.log(product)
            for (let i = 0; i < product.breedType.length; i++) {
              if (product.breedType[i] === filters.breed) {
                return 1
              }
            }
            return 0;
          });
        } else {
        // ACA SI NO SE FILTRO POR TAMAÑO
          filteredArray = mainArray.filter((product) => {
            for (let i = 0; i < product.breedType.length; i++) {
              if (product.breedType[i] === filters.breed) {
                return 1
              }
            }
            return 0;
          });
        }
      }

    if (filters.breed !== "breedType" && filters.size !== "petSize" && filteredArray.length === 0){
      filteredArray = [null]
    }

      // ACA LLEGAS O FILTRADO POR TAMAÑO Y ESPECIE
      // O FILTRADO SOLO POR ESPECIE
      // O FILTRADO SOLO POR TAMAÑO
      return {
        ...state,
        currentBreed: filters.breed,
        currentSize: filters.size,
        filteredProducts: filteredArray.length > 0 ? filteredArray : mainArray,
        currentOrder: "Static"
        // currentPage: 1,
      };


    case SEARCH:
      return {
        ...state,
        orderedProducts: action.payload,
        searchedProducts: action.payload,
        filteredProducts: action.payload,
        filteredProductsBySize: action.payload,
        currentSearch: action.payload,
        currentOrder: "Static",
        currentBreed: "breedType",
        currentSize: "petSize",
      };




      case SORT:
        if (
          state.searchedProducts.length === 0 &&
          state.filteredProducts.length === 0
        ) {
          let orderedByNameProducts = [...state.products];
          console.log(orderedByNameProducts);
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
        } else if (
          state.searchedProducts.length === 0 &&
          state.filteredProducts.length > 0
        ) {
          let orderedByNameProducts = [...state.filteredProducts];
          console.log(orderedByNameProducts);
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
        } else {
          let orderedByNameProducts = [...state.filteredProducts];
  
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
          let pageHolder = []
    
          if(state.filteredProducts.length === 0 && state.orderedProducts.length === 0){
            console.log("1")
            const page = state.products
            pageHolder.push(page)
          } else if(state.currentOrder !== "Static"){
            console.log("2")
            const page = state.orderedProducts
            pageHolder.push(page)
          } else if(state.filteredProducts.length > 0){
            console.log("3")
            const page = state.filteredProducts
            pageHolder.push(page)
          } else if(state.searchedProducts){
            console.log("4")
            const page = state.searchedProducts
            pageHolder.push(page)
          } else {
            console.log("5")
            const page = state.products
            pageHolder.push(page)
          }
    
          return {
            ...state,
            paginationArray: pageHolder,
          };
  
      //*DASHBOARD____________________________________________________________________
      case GET_PRODUCTS: {       
        return {
          ...state,
          products: action.payload,        
          filterProducts: action.payload,
          ProductsDashb: action.payload
        };
      }
      case GET_PRODUCT:
        return {
          ...state,
          product: action.payload,
      };
      case POST_PRODUCT:
        return {
          ...state,
          products: action.payload.value,
        };
        case GET_PRODUCTS_BANEADOS:       
          return{
            ...state,
            productBaneados:action.payload,
            ProductsBanSearch:action.payload
          }
          
        case DELETE_PRODUCT: 
        return {
          ...state,
          products: state.products.filter(p => p.codProduct !== action.payload)
        };
      case SEARCH_PRO_DASHBOARD:
        let filterProd = state.filterProducts.filter((us) => us.name.toLowerCase().includes(action.payload.toLowerCase()));
         return {
          ...state,
          products: filterProd,
        };
        case SEARCH_PRO_DASHBOARD_DELETED:
        let filterProdDEL = state.ProductsBanSearch.filter((us) => us.name.toLowerCase().includes(action.payload.toLowerCase()));
         return {
          ...state,
          productBaneados: filterProdDEL,
        }; 
        
        
      case BY_ORDER: 
      const orderProducts = action.payload === "Asc"
          ? state.products.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.products.sort((a, b) => (a.name > b.name ? -1 : 1)); 
      return {
        ...state,
        products: orderProducts,
      };


      case BY_ORDER_BAN: 
      const orderProductsBan = action.payload === "Asc"
          ? state.productBaneados.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.productBaneados.sort((a, b) => (a.name > b.name ? -1 : 1)); 
      return {
        ...state,
        productBaneados: orderProductsBan,      
      };
      case BY_ORDER_PRICE: 
      const orderPrice = action.payload === "AscPrice"
          ? state.products.sort((a, b) => (a.unit_price > b.unit_price ? 1 : -1))
          : state.products.sort((a, b) => (a.unit_price > b.unit_price ? -1 : 1));          
      return {
        ...state,
        products: orderPrice,
      };
      case BY_ORDER_PRICE_BAN: 
      const orderPriceBan = action.payload === "AscPrice"
          ? state.productBaneados.sort((a, b) => (a.unit_price > b.unit_price ? 1 : -1))
          : state.productBaneados.sort((a, b) => (a.unit_price > b.unit_price ? -1 : 1));          
      return {
        ...state,
        productBaneados: orderPriceBan,      
      };

      case BY_ORDER_STOCK: 
      const orderStock = action.payload === "AscStock"
          ? state.products.sort((a, b) => (a.stock > b.stock ? 1 : -1))
          : state.products.sort((a, b) => (a.stock > b.stock ? -1 : 1));
      return {
        ...state,
        products: orderStock,
      };
      case BY_ORDER_STOCK_BAN: 
      const orderStockBan = action.payload === "AscStock"
          ? state.productBaneados.sort((a, b) => (a.stock > b.stock ? 1 : -1))
          : state.productBaneados.sort((a, b) => (a.stock > b.stock ? -1 : 1));          
      return {
        ...state,
        productBaneados: orderStockBan,      
      };

      case CLEARFORM:
        return{
          ...state,
          product: {}
        }
      
    //*___________________________________________________________________________________

    default:
      return state;
  }
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

