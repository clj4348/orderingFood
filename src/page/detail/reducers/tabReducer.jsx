import { TYPE_KEY } from '../config.jsx'
import { CHANGE_TAB } from '../actions/actionType.jsx';
const defaultState = {
  tabs: [{
     tabName: '点菜',
     key: TYPE_KEY.menu,
   }, {
     tabName : '评价',
     key: TYPE_KEY.comment,
   }, {
     tabName: '商家',
     key: TYPE_KEY.restanurant,
   }],
   activeKey: TYPE_KEY.menu
 }

const getTabList = (state, action ) => {
  return {...state, tabs:action}
}

const tabReducer =  (state = defaultState, action)=>{
    switch (action.type){
      case CHANGE_TAB:
        return  getTabList(state, action)
      default: return state;
    }
}

export default tabReducer;