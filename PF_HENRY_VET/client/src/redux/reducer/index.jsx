import { combineReducers } from 'redux';
import { productsReducer, filters } from "./productAndFilterReducer.jsx";
import { userReducer } from "./userReducer.jsx";
import { favoriteReducer } from "./favoriteReducer.jsx";
import { shoppingCartDtailReducer } from './shoppingCartDtailReducer.jsx';

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
    filters: filters,
    favorites: favoriteReducer,
    shoppingCartDtail: shoppingCartDtailReducer
});

export default rootReducer;

