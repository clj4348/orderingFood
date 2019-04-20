import tabReducer from './tabReducer.jsx';
import categoryReducer from './categoryReducer.jsx'; 
import CotentListReducer from './contentListReducer.jsx'; 
import orderReducer from './orderReducer.jsx';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  CotentListReducer,
  orderReducer,
  router: routerReducer
});

export default reducers;