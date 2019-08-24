import headerReducer from './headerReducer';
import CotentListReducer from './contentListReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  headerReducer,
  CotentListReducer,
  router: routerReducer
});

export default reducers;