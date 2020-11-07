import tabReducer from './tabReducer.jsx';
import menuReducers from './menuReducers.jsx';
import commentReducers from './commentReducers.jsx'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  tabReducer,
  menuReducers,
  commentReducers,
  router: routerReducer
});

export default reducers;