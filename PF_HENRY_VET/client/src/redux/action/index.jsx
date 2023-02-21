import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    POST_PRODUCT,
    GET_USER,
    DELETE_USER,
    POST_USER,
    REGISTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    REGISTER_ERRORS,
    SIGNIN_ERRORS,
    CLEAN_MSG_REGISTER_USER,
    UPDATE_USER,
    CREATE_PAGINATION_ARRAY,
    SEARCH,
    // FILTEREDBREED,
    // FILTEREDSIZE,
    FILTEREDPRODUCTS,
    SORT,
    SEARCH_PRO_DASHBOARD,
    BY_ORDER,
    BY_ORDER_PRICE,
    BY_ORDER_STOCK, 
    GET_FAVORITES,
    UPDATE_FAVORITE,
    POST_CARTDTAIL,
    GET_CARTDTAIL,
    DELETE_CARTDTAIL,
    DIFFERENT_OUTCOME,
    FILTERED,
    EMPTY_DIFFOUTCOME_OBJ,
    EMPTY_SHOPPINGCARTDTAIL,
    EMPTY_SHOPPINGCARTDTAILMSG,
    SEARCH_USERS_DASHBOARD, 
    GET_USERS,
    SET_USER,
    POST_FAVORITES,
    CLEARFORM,
    GET_PRODUCTS_BANEADOS,
    RESTORE_BANEADOS,
    SEARCH_PRO_DASHBOARD_DELETED,
    BY_ORDER_BAN,
    BY_ORDER_PRICE_BAN,
    BY_ORDER_STOCK_BAN,
    FILTEREDPRODUCTS,
    IS_ADMIN,
    NO_ADMIN
} from './constants';

/* ruta + endpoints */
const URL = "http://localhost:3001/";
// const URL = import.meta.env.VITE_API_URL

const Endpoints = {
  product: "products/",
  user: "users/",
  carrito: "shoppingCart/",
  detalleCarrito: "shoppingCartDetail/",
  razas: "breed/",
  favoritos: "favorite/",
};

export function searchDashBoard(data) {
  try {
    return function (dispatch) {
      dispatch({
        type: SEARCH_PRO_DASHBOARD,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.config);
  }
}
export function searchDashBoardDeleted(data) {
  try {
    return function (dispatch) {
      dispatch({
        type: SEARCH_PRO_DASHBOARD_DELETED,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.config);
  }
}

export function getAllProducts(name) {
  return async function (dispatch) {
    try {
      //SE UTILIZA EL GET ALL PRODUCTS PARA TRAER TODOS LOS PRODUCTOS O SOLO AQUELLOS QUE CUMPLAN
      //CON CIERTA CONDICION
      //---------------------------------
      const { data } = await axios.get(
        name
          ? `${URL + Endpoints.product}get?name=${name}`
          : `${URL + Endpoints.product}get`
      ); 

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
      dispatch(createPaginationArray());
      //---------------------------------
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log("Error en linea 124", error.request);
      } else {
        console.log(error.message);
      }
      console.log("Error en Linea 129", error.config);
    }
  };
}
export function deleteProduct(codProduct){
    return async function(dispatch){
        try {
            const {data} = await axios.put("http://localhost:3001/products/unsubscribe/"+codProduct)
        dispatch({
            type: DELETE_PRODUCT,
            payload:{data,codProduct},
        })
        } catch (error) {
            console.log(error);        
        }
        
    }
}
export function getAllProductsBaneados() {
 
    return async function(dispatch) {
        try {
            const { data } = await axios.get("http://localhost:3001/products/restore/getban");
            console.log("DATAAA",data)
            dispatch({
                type: GET_PRODUCTS_BANEADOS,
                payload: data,
            });
          
        } catch (error) {            
            console.log(error);
        }
    };
}


 
 
export function deleteProduct(codProduct) {
  return async function (dispatch) {
    try {
      const datos = await axios.delete(
        "http://localhost:3001/products/unsubscribe/" + codProduct
      );
      dispatch({
        type: DELETE_PRODUCT,
        payload: codProduct,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
 

export function restoreProductsBaneados(codProduct) {
  return async function (dispatch) {
    try {
      const datos = await axios.patch(
        "http://localhost:3001/products/restore/" + codProduct
      );
      dispatch({
        type: RESTORE_BANEADOS,
        payload: codProduct,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProduct(productName) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${URL + Endpoints.product}getp/${productName}`
      );
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

 
export function updateProduct(productId, productData) { 
    return async function(dispatch) {
        try {
            const { data } = await axios.put(`${URL + Endpoints.product}update/${productId}`, productData);
            dispatch({
                type: UPDATE_PRODUCT,
                payload: data,
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error.message);
            }
            console.log(error.config);
        }
    };

 
}

export function postProductos(data) {
  return async (dispatch) => {
    const post = await axios.post("http://localhost:3001/products/post", data);
    dispatch({
      type: POST_PRODUCT,
      payload: data,
    });
  };
}

export function postProduct(productData) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${URL + Endpoints.product}post`,
        productData
      );
      dispatch({
        type: POST_PRODUCT,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}
export function getAllUsers() {
  return async function (dispatch) {
    try { 
      const getusuarios = await axios.get("http://localhost:3001/users/getusers");
      dispatch({
        type: GET_USERS,
        payload: getusuarios.data,
      }); 
    } catch (error) { 
      console.log(error);
    }
  };
}
export function getUser(email, password) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${URL + Endpoints.user}get?email=${email}&password=${password}`
      );
      console.log(data, "meu deus");
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function haceAdmin(cod_User) { 
  return async (dispatch) => {
    try {
      const { data }= await axios.patch('http://localhost:3001/users/isadmin/'+cod_User);
      dispatch({
        type: IS_ADMIN,
        payload: data,
    });
    } catch (err) {
      console.log(err)
    }
  };
}
export function haceNoAdmin(cod_User) { 
  return async (dispatch) => {
    try {
      const { data }= await axios.patch(`http://localhost:3001/users/noadmin/${cod_User}`);
      dispatch({
        type: NO_ADMIN,
        payload: data,
    });
    } catch (err) {
      console.log(err)
    }
  };
}
export function registerUser(values) {
  return async (dispatch) => {
    try {
      const info = await axios.post(`${URL + Endpoints.user}register`, values);

      dispatch({
        type: REGISTER_USER,
        payload: info,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_ERRORS,
        payload: err,
      });
    }
  };
}

export function signinUser(values) {
  return async (dispatch) => {
    try {
      const info = await axios.post(`${URL + Endpoints.user}signin`, values);
      /*
            dispatch({
                type: SIGNIN_USER,
                payload: info
            });
            */
    } catch (err) {
      dispatch({
        type: SIGNIN_ERRORS,
        payload: err,
      });
    }
  };
}
export function signinUserWithGoogle() {
  return async (dispatch) => {
    try {
      const auth = await axios.get(`${URL + Endpoints.user}signinGoogle`);
      dispatch({
        type: SIGNIN_GOOGLE,
        payload: auth.data,
      });
    } catch (err) {
      dispatch({
        type: SIGNIN_ERRORS,
        payload: err,
      });
    }
  };
}

export function signoutUser() {
  return async (dispatch) => {
    try {
      const info = await axios.post(`${URL + Endpoints.user}signout`);
      /*
            dispatch({
                type: SIGNOUT_USER,
                payload: info
            });
            */
    } catch (err) {
      dispatch({
        type: SIGNIN_ERRORS,
        payload: err,
      });
    }
  };
}

export function cleanMsgRegisterUser() {
  return {
    type: CLEAN_MSG_REGISTER_USER,
  };
}

export function deleteUser(userId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `${URL + Endpoints.user}unsubscribe/${userId}`
      );
      if (data.ok)
        dispatch({
          type: DELETE_USER,
          payload: data.value,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function postUser(userData) {
  console.log("entré");
  return async function (dispatch) {
    try {
      console.log("ACA ESTA EL USER EN EL INDEX MANNN", userData);
      const { data } = await axios.post(
        `${URL + Endpoints.user}post`,
        userData
      );
      dispatch({
        type: POST_USER,
        payload: data.value,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function updateUser(userId, userData) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${URL + Endpoints.user}update/${userId}`,
        userData
      );
      if (data.ok)
        dispatch({
          type: UPDATE_USER,
          payload: data.value,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      //SE UTILIZA EL GET ALL PRODUCTS PARA TRAER TODOS LOS PRODUCTOS O SOLO AQUELLOS QUE CUMPLAN
      //CON CIERTA CONDICION
      //---------------------------------
      const { data } = await axios.get(
        `${URL + Endpoints.product}get?name=${name}`
      );
      console.log(data);
      dispatch({
        type: SEARCH,
        payload: data,
      });
      dispatch(createPaginationArray());
      //---------------------------------
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function createPaginationArray(payload) {
  return {
    type: CREATE_PAGINATION_ARRAY,
    payload,
  };
}
// export function filteredBreed(payload) {
//   return {
//     type: FILTEREDBREED,
//     payload,
//   };
// }
// export function filteredSize(payload) {
//   return {
//     type: FILTEREDSIZE,
//     payload,
//   };
// }
export function filterProducts(payload) {
  return {
    type: FILTEREDPRODUCTS,
    payload,
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

//*  DASHBOARD byOrderPrice
//? PRODUCTOS______________________
export const byOrder = (payload) => {
  return {
    type: BY_ORDER,
    payload,
  };
};
export const byOrderBan = (payload) => {
  return {
    type: BY_ORDER_BAN,
    payload,
  };
};
export const byOrderPrice = (payload) => {
  return {
    type: BY_ORDER_PRICE,
    payload,
  };
};
export const byOrderPriceBan = (payload) => {
  return {
    type: BY_ORDER_PRICE_BAN,
    payload,
  };
};
export const byOrderStock = (payload) => {
  return {
    type: BY_ORDER_STOCK,
    payload,
  };
};
export const byOrderStockBan = (payload) => {
  return {
    type: BY_ORDER_STOCK_BAN,
    payload,
  };
};

export function clearForm() {
  return function (dispatch) {
    dispatch({
      type: CLEARFORM,
    });
  };
}

 
export function setUser(data) {
  return {
    type: SET_USER,
    payload: data,
  };
}
 

//? _______________________________
//*_________________________________
export function getFavorites(idUser) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${URL + Endpoints.favoritos}get/${idUser}`
      );
      if (data.ok)
        dispatch({
          type: GET_FAVORITES,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}
//se necesita el id de favorito y el id de usuario
export function updateFavorites(values) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${URL + Endpoints.product}update`,
        values
      );
      if (data.ok)
        dispatch({
          type: UPDATE_FAVORITE,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}
export function postFavorite(idProduct, url, name, idUser) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${URL + Endpoints.favoritos}post`,
        idProduct,
        url,
        name,
        idUser
      );
      if (data.ok)
        dispatch({
          type: POST_FAVORITES,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

/* shoppingDetail */
/*
se necesita: 
idCart
idProduct
unit_price
date_added
quantity
*/
export function postShoppingDetail(values) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${URL + Endpoints.detalleCarrito}post`,
        values
      );
      //RECIBO UN MENSAJE
      if (data.ok)
        dispatch({
          type: POST_CARTDTAIL,
          payload: data,
        });
      else
        dispatch({
          type: DIFFERENT_OUTCOME,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}
export function getShoppingDetail(idCart) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${URL + Endpoints.detalleCarrito}get/${idCart}`
      );
      if (data.ok)
        dispatch({
          type: GET_CARTDTAIL,
          payload: data,
        });
      else
        dispatch({
          type: DIFFERENT_OUTCOME,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}
/* 
idCartDtail, 
productId
unit_price
date_added
quantity
*/
export function updateShoppingDetail(values) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${URL + Endpoints.detalleCarrito}update`,
        values
      );
      if (data.ok)
        dispatch({
          type: UPDATE_CARTDTAIL,
          payload: data,
        });
      else
        dispatch({
          type: DIFFERENT_OUTCOME,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function deleteShoppingDetail(idCartDtail, productId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `${URL + Endpoints.detalleCarrito}unsubscribe/${idCartDtail}/${productId}`
      );
      if (data.ok)
        dispatch({
          type: DELETE_CARTDTAIL,
          payload: data,
        });
      else
        dispatch({
          type: DIFFERENT_OUTCOME,
          payload: data,
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}

export function EmptyDiffoutcomeObj() {
  return {
    type: EMPTY_DIFFOUTCOME_OBJ,
  };
}

export function EmptyShoppingCartDtail() {
  return {
    type: EMPTY_SHOPPINGCARTDTAIL,
  };
}

export function EmptyShoppingCartDtailMsg() {
  return {
    type: EMPTY_SHOPPINGCARTDTAILMSG,
  };
}

export function GetUser(name, password) {
  return async function () {
    try {
      const { data } = await axios.get(
        `${URL + Endpoints.user}get?name=${name}?password=${password}`
      );
      return {
        type: GET_USER,
        payload: data,
      };
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      console.log(error.config);
    }
  };
}


 

