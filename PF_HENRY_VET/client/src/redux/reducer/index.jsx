import { combineReducers } from 'redux';
import { productsReducer, userReducer, filters } from './reducer.jsx';

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
    filters: filters,
});

export default rootReducer;

