import tabReducer from './tabReducer.jsx';
import menuReducers from './menuReducers.jsx';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  tabReducer,
  menuReducers,
  router: routerReducer
});

export default reducers;