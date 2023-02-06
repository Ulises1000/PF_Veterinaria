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
    UPDATE_USER
} from './constants';

/* ruta */
const URL = "http://localhost:3001";

export function getAllProducts() {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`${URL}/get`);
            dispatch({
                type: GET_PRODUCTS,
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

export function getProduct(productName) {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`${URL}/getp/${productName}`);
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
            await axios.delete(`${URL}/unsubscribe/${codProduct}`);
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
            const { data } = await axios.put(`${URL}/update/${productId}`, productData);
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
            const { data } = await axios.post(`${URL}/post`, productData);
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
            const { data } = await axios.get(`${URL}/get/${userId}`);
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
            await axios.delete(`${URL}/unsubscribe/${userId}`);
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
            const { data } = await axios.post(`${URL}/post`, userData);
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
            const { data } = await axios.put(`${URL}/update/${userId}`, userData);
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