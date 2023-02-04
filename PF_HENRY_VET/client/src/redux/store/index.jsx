import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import combineReducers from '../reducer/index';

const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
