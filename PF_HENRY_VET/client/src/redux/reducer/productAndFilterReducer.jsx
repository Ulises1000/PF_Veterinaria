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
  FILTERED,
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
};

 export const searchDashb = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRO_DASHBOARD:
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
     

    case FILTERED:
      let filteredProducts = state.orderedProducts;
      let filters = {
        breed: state.currentBreed,
    
      }
    case FILTEREDBREED:
      let filtersBreed = {
        breedType: "breedType",
      };
      let productsBreed = []
      if(state.orderedProducts.length === 0 && state.filteredProductsBySize.length === 0 && state.searchedProducts.length === 0 && state.currentFilter === 0 || state.currentFilter === ""){
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
      else if(state.filteredProducts.length > 0 && state.currentFilter === 0){
        let filteredProductsBreed = state.filteredProducts
        console.log(filteredProductsBreed, "CHE QUE ONDA")
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
            if(productsBreed.length === 0){
              productsBreed.push("Nada")
            }
          }
        }
      }
      else if(state.filteredProductsBySize.length > 0 && state.currentFilter === 1){
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
            if(productsBreed.length === 0){
              productsBreed.push("Nada")
            }
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
      console.log(productsBreed, state.currentFilter, "EL PRODU")
      return {
        ...state,
        currentFilter: 0,
        currentBreed: filtersBreed.breedType,
        filteredProducts: productsBreed,
        // currentPage: 1,
      };

      case FILTEREDSIZE:
        let stateCurrentFilter = state.currentFilter 
        let currentFilterSize = 1;
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
        else if(state.filteredProducts.length > 0 && state.currentFilter === 0){
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
          currentFilter: currentFilterSize,
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
      
      if (state.currentFilter === 1 || state.currentFilter === 0 && state.filteredProductsBySize.length === 0 || state.filteredProducts.length === 0 ){
        console.log("PAGE ES []")
        const page = []
        pageHolder.push(page)
      }
      
      if(state.filteredProducts.length !== 0 && state.currentOrder !== "Static" ){
        const page = state.orderedProducts;
        pageHolder.push(page)
      }
      else if(state.filteredProductsBySize.length !== 0 && state.currentOrder !== "Static" ){
        const page = state.orderedProducts;
        pageHolder.push(page)
      }
      
      else if (state.filteredProductsBySize.length !== 0 && state.currentFilter === 1){
        const page = state.filteredProductsBySize
        pageHolder.push(page)
      }
      
      else if (state.filteredProducts.length !== 0 && state.currentFilter === 0){
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