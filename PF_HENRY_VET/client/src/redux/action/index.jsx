import axios from "axios";
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    POST_PRODUCT,
    GET_USER,
    DELETE_USER,
    POST_USER,
    UPDATE_USER,
    FILTERED
} from './constants';

/* ruta + endpoints */
const URL = "http://localhost:3001/";

const Endpoints = {
    product: "products/",
    user: "users/",
    carrito: "shoppingCart/",
    detalleCarrito: "shoppingCartDetail/",
    razas: "breed/",
    favoritos: "favorite/"
}

export function getAllProducts(name) {
    return async function(dispatch) {
        try {
            //SE UTILIZA EL GET ALL PRODUCTS PARA TRAER TODOS LOS PRODUCTOS O SOLO AQUELLOS QUE CUMPLAN
            //CON CIERTA CONDICION
            //---------------------------------
            const { data } = await axios.get(name ? `${URL + Endpoints.product}get?name=${name}` : `${URL + Endpoints.product}get`);
            dispatch({
                type: GET_PRODUCTS,
                payload: data,
            });
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

export function getProduct(productName) {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`${URL + Endpoints.product}getp/${productName}`);
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

export function deleteProduct(codProduct) {
    return async function(dispatch) {
        try {
            await axios.delete(`${URL + Endpoints.product}unsubscribe/${codProduct}`);
            dispatch({
                type: DELETE_PRODUCT,
                payload: productId,
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

export function postProduct(productData) {
    return async function(dispatch) {
        try {
            const { data } = await axios.post(`${URL + Endpoints.product}post`, productData);
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

export function getUser(userId) {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`${URL + Endpoints.user}get/${userId}`);
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

export function deleteUser(userId) {
    return async function(dispatch) {
        try {
            await axios.delete(`${URL + Endpoints.user}unsubscribe/${userId}`);
            dispatch({
                type: DELETE_USER,
                payload: userId,
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
    return async function(dispatch) {
        try {
            const { data } = await axios.post(`${URL + Endpoints.user}post`, userData);
            dispatch({
                type: POST_USER,
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

export function updateUser(userId, userData) {
    return async function(dispatch) {
        try {
            const { data } = await axios.put(`${URL + Endpoints.user}update/${userId}`, userData);
            dispatch({
                type: UPDATE_USER,
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

export function filtered(payload) {
    return {
        type: FILTERED,
        payload
    }
}