import { combineReducers } from 'redux';
import { productsReducer, userReducer } from './reducer.jsx';

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
});

export default rootReducer;

