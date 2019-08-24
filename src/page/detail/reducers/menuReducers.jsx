
import { GET_LIST_DATA, LEFT_CLICK } from '../actions/actionType.jsx';
const initState = {
  listData:{},
  currentLeftIndex: 0
}

const itemClick = (state, action ) => {
  return {...state, currentLeftIndex: action.obj.currentLeftIndex,}
}

const getListData = (state, action ) => {
  return {...state, listData:action.obj}
}

const menuReducers =  (state = initState, action)=>{
    switch (action.type){
      case GET_LIST_DATA:
        return  getListData(state, action)
      case LEFT_CLICK: 
        return itemClick(state, action)
      default: return state;
    }
}

export default menuReducers;