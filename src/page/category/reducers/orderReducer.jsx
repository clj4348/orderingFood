import { ORDER_LIST } from '../actions/actionType.jsx';

let initState= {
  list :[],
  currentPage: 0
}

const getOrderList = (state, action) => {
    let newState = JSON.parse(JSON.stringify(action));
    let list =newState.list
  if(action.currentPage === 0){
    return {
      list: list,
      currentPage: newState.currentPage
    }
  } else{
     let newList = state.list.concat(newState.list)
    return {
      list: newList,
      currentPage: newState.currentPage
    }
  }
}

const orderReducer = (state=initState,action) => {
  switch(action.type){
    case ORDER_LIST :
      return  getOrderList(state, action)
    default :
      return state
  }
}

export default orderReducer;