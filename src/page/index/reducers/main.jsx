import tabReducer from './tabReducer.jsx'; 
import categoryReducer from './categoryReducer.jsx';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    tabReducer,
    categoryReducer,
    router: routerReducer
});

export default reducers;