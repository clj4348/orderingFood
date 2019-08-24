import {
  CHANGE_TAB,
  GET_FilTER_DATA,
  CHANGE_FILTER
} from '../actions/actionType';
import { TYPE_KEY } from '../config.jsx';
let tabs = {}
tabs[TYPE_KEY.cate] = {
    text: '全部分类',
    key: TYPE_KEY.cate,
    obj: {
    }
}
tabs[TYPE_KEY.type] = {
    text: '综合排序',
    key: TYPE_KEY.type,
    obj: {
    }
}
tabs[TYPE_KEY.filter] = {
    text: '筛选',
    key: TYPE_KEY.filter,
    obj: {
    }
}
// 初始化state
const defaultState = {
  tabs: tabs,
  activeKey:  TYPE_KEY.cate,
  filterData: {},
  closePanel: true
}
const changeTab =  (state, action) => {
  return {
    ...state,
    activeKey: action.obj.activeKey,
    closePanel: action.obj.closePanel
  }
}

const getFilterData = (state,  action) => {
  return {...state, filterData: action.obj.data };
}

const changeFilte = (state,  action) => {
  let   _tabs = JSON.parse(JSON.stringify(state.tabs));
  _tabs[action.obj.key] = {
    key: action.obj.key,
    text: action.obj.item.name,
    obj: action.obj.item
  }
  return {...state, tabs: _tabs};
}

const headerReducer =  (state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_TAB:
          return changeTab(state, action)
          break; 
        case GET_FilTER_DATA: 
          return getFilterData(state, action)
        case CHANGE_FILTER:
          return changeFilte(state, action)
          default: return state;
    }
}

export default headerReducer;