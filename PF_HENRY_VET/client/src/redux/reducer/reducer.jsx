import {
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH,
  CREATE_PAGINATION_ARRAY,
  GET_FAVORITES,
  UPDATE_FAVORITE,
  FILTEREDBREED,
  FILTEREDSIZE,
  SORT,
} from "../action/constants";
import {
  GET_USER,
  DELETE_USER,
  POST_USER,
  UPDATE_USER,
} from "../action/constants";
import { ASCENDENTE, DESCENDENTE } from "../../const/orderByName";
import { sort } from "../action";

const initialState = {
  products: [],
  product: {},
  user: {},
  favorites: [],
  currentOrder: "Static",
  currentBreed: "breedType",
  currentSize: "petSize",
  currentSearch: "",
  searchedProducts: [],
  filteredProducts: [],
  filteredProductsBySize: [],
  orderedByNameProducts: [],
  orderedProducts: [],
  paginationArray: [],
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
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case FILTEREDBREED:
      let filtersBreed = {
        breedType: "breedType",
      };
      let productsBreed = []
      if(state.orderedProducts.length === 0 && state.filteredProductsBySize.length === 0 && state.searchedProducts.length === 0){
        let filteredProductsBreed = state.products
        if (action.payload === "perro" || "gato-perro" || "gato") {
          filtersBreed.breedType = action.payload;
          if (filtersBreed.breedType !== "breedType" || filtersBreed.breedType !== undefined) {
            productsBreed = filteredProductsBreed.filter((product) => {
              for (let i = 0; i < product.breedType.length; i++) {
                if (product.breedType[i] ===  action.payload) {
                  return productsBreed.push(product);
                }
              }
              return 0;
            });
          }
        }
      }
      else if(state.orderedProducts.length > 0 && state.filteredProductsBySize.length === 0 && state.searchedProducts.length > 0){
        state.currentOrder = "Static"
        let filteredProductsBreed = state.searchedProducts
        if (action.payload === "perro" || "gato-perro" || "gato") {
          filtersBreed.breedType = action.payload;
          if (filtersBreed.breedType !== "breedType" || filtersBreed.breedType !== undefined) {

            productsBreed = filteredProductsBreed.filter((product) => {
              for (let i = 0; i < product.breedType.length; i++) {
                if (product.breedType[i] ===  action.payload) {
                  return productsBreed.push(product);
                }
              }
              return 0;
            });
          }
        }
      }
      else if(state.searchedProducts.length > 0){
        let filteredProductsBreed = state.searchedProducts
        if (action.payload === "perro" || "gato-perro" || "gato") {
          filtersBreed.breedType = action.payload;
          if (filtersBreed.breedType !== "breedType" || filtersBreed.breedType !== undefined) {

            productsBreed = filteredProductsBreed.filter((product) => {
              for (let i = 0; i < product.breedType.length; i++) {
                if (product.breedType[i] ===  action.payload) {
                  return productsBreed.push(product);
                }
              }
              return 0;
            });
          }
        }
      }
      else if(state.filteredProductsBySize.length > 0){
        let filteredProductsBreed = state.filteredProductsBySize
        if (action.payload === "perro" || "gato-perro" || "gato") {
          filtersBreed.breedType = action.payload;
          if (filtersBreed.breedType !== "breedType" || filtersBreed.breedType !== undefined) {

            productsBreed = filteredProductsBreed.filter((product) => {
              for (let i = 0; i < product.breedType.length; i++) {
                if (product.breedType[i] ===  action.payload) {
                  return productsBreed.push(product);
                }
              }
              return 0;
            });
          }
        }
      }
      else if(state.orderedProducts.length > 0){
        let filteredProductsBreed = state.products
        state.currentOrder = "Static"
        if (action.payload === "perro" || "gato-perro" || "gato") {
          filtersBreed.breedType = action.payload;
          if (filtersBreed.breedType !== "breedType" || filtersBreed.breedType !== undefined) {

            productsBreed = filteredProductsBreed.filter((product) => {
              
              for (let i = 0; i < product.breedType.length; i++) {
                if (product.breedType[i] ===  action.payload) {
                  return productsBreed.push(product);
                }
              }
              return 0;
            });
          }
        }
      }
      
      return {
        ...state,
        currentBreed: filtersBreed.breedType,
        filteredProducts: productsBreed,
        // currentPage: 1,
      };

      case FILTEREDSIZE:
        let filtersSize = {
          petSize: "petSize",
        };
        let productsSize = []
        if(state.orderedProducts.length === 0 && state.filteredProducts.length === 0 && state.searchedProducts.length === 0){
          let filteredProductsSize = state.products
          if (action.payload === "pequeño" || "todos " || "mediana" || "grande") {
            filtersSize.petSize = action.payload;
            if (filtersSize.petSize !== "petSize" || filtersSize.petSize !== undefined) {
              productsSize = filteredProductsSize.filter((product) => {
                for (let i = 0; i < product.petSize.length; i++) {
                  if (product.petSize[i] ===  action.payload) {
                    return productsSize.push(product);
                  }
                }
                return 0;
              });
            }
          }
        }
        else if(state.orderedProducts.length > 0 && state.filteredProducts.length === 0 && state.searchedProducts.length > 0){
          state.currentOrder = "Static"
          let filteredProductsSize = state.searchedProducts
          if (action.payload === "pequeño" || "todos " || "mediana" || "grande") {
            filtersSize.petSize = action.payload;
            if (filtersSize.petSize !== "petSize" || filtersSize.petSize !== undefined) {
  
              productsSize = filteredProductsSize.filter((product) => {
                for (let i = 0; i < product.petSize.length; i++) {
                  if (product.petSize[i] ===  action.payload) {
                    return productsSize.push(product);
                  }
                }
                return 0;
              });
            }
          }
        }
        else if(state.searchedProducts.length > 0){
          let filteredProductsSize = state.searchedProducts
          if (action.payload === "pequeño" || "todos " || "mediana" || "grande") {
            filtersSize.petSize = action.payload;
            if (filtersSize.petSize !== "petSize" || filtersSize.petSize !== undefined) {
  
              productsSize = filteredProductsSize.filter((product) => {
                for (let i = 0; i < product.petSize.length; i++) {
                  if (product.petSize[i] ===  action.payload) {
                    return productsSize.push(product);
                  }
                }
                return 0;
              });
            }
          }
        }
        else if(state.filteredProducts.length > 0){
        state.currentOrder = "Static"
          let filteredProductsSize = state.filteredProducts
          if (action.payload === "pequeño" || "todos " || "mediana" || "grande") {
            filtersSize.petSize = action.payload;
            if (filtersSize.petSize !== "petSize" || filtersSize.petSize !== undefined) {
  
              productsSize = filteredProductsSize.filter((product) => {
                for (let i = 0; i < product.petSize.length; i++) {
                  if (product.petSize[i] ===  action.payload) {
                    return productsSize.push(product);
                  }
                }
                return 0;
              });
            }
          }
        }
        else if(state.orderedProducts.length > 0){
          let filteredProductsSize = state.products
          state.currentOrder = "Static"
          if (action.payload === "pequeño" || "todos " || "mediana" || "grande") {
            filtersSize.petSize = action.payload;
            if (filtersSize.petSize !== "petSize" || filtersSize.petSize !== undefined) {
  
              productsSize = filteredProductsSize.filter((product) => {
                
                for (let i = 0; i < product.petSize.length; i++) {
                  if (product.petSize[i] ===  action.payload) {
                    return productsSize.push(product);
                  }
                }
                return 0;
              });
            }
          }
        }
        

        return {
          ...state,
          currentSize: filtersSize.petSize,
          filteredProductsBySize: productsSize,
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
      if (state.searchedProducts.length === 0 && state.filteredProducts.length === 0 && state.filteredProductsBySize.length === 0) {
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
        
      } else if(state.searchedProducts.length === 0 && state.filteredProducts.length > 0 && state.filteredProductsBySize.length === 0) {
        let orderedByNameProducts = [...state.filteredProducts];
        console.log(orderedByNameProducts)
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
      else if(state.searchedProducts.length === 0 && state.filteredProductsBySize.length > 0 && state.filteredProducts.length === 0) {
        let orderedByNameProducts = [...state.filteredProductsBySize];
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
        console.log(orderedByNameProducts, "che")
        
        return {
          ...state,
          orderedProducts: orderedByNameProducts,
          currentOrder: action.payload,
        };
      }
      else {
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
      let pageHolder = [];
      
      
      if(state.filteredProducts.length !== 0 && state.currentOrder !== "Static" ){
        const page = state.orderedProducts;
        pageHolder.push(page)
      }
      else if(state.filteredProductsBySize.length !== 0 && state.currentOrder !== "Static" ){
        const page = state.orderedProducts;
        pageHolder.push(page)
      }
      
      else if (state.filteredProductsBySize.length !== 0){
        const page = state.filteredProductsBySize
        pageHolder.push(page)
      }
      
      else if (state.filteredProducts.length !== 0){
        const page = state.filteredProducts
        pageHolder.push(page)
      }
      else if (state.orderedProducts.length !== 0) {
        const page = state.orderedProducts;
        pageHolder.push(page);
      } 
      else if (state.searchedProducts.length !== 0){
        const page = state.searchedProducts
        pageHolder.push(page);
      }
     
      else {
        const page = state.products;
        pageHolder.push(page);
      }

      //console.log(pageHolder ,"PAGINATION 2")
      return {
        ...state,
        paginationArray: pageHolder,
      };
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
    default:
      return state;
  }
};