import { CHANGE_TAB } from '../actions/actionType.jsx';
import { TYPE_KEY } from '../config.jsx';
const defaultState = {
 tabs: [{
    tabName: '首页',
    key: TYPE_KEY.home,
  }, {
    tabName : '订单',
    key: TYPE_KEY.order,
  }, {
    tabName: '我的',
    key: TYPE_KEY.my,
  }],
  activeKey: TYPE_KEY.home
}
const activeTab = (state, action ) => {
  return {...state, activeKey:action.key}
}

export default(state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_TAB: 
           return activeTab(state, action)
          break;
    }
  return state;
}