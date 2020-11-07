import { 
  GET_LIST_DATA,
  LEFT_CLICK,
  PLUS_CLICK,
  SUB_CLICK,
  SHOW_FLAG } from '../actions/actionType.jsx';
const initState = {
  listData:{}, // 购物车的数据
  currentLeftIndex: 0, // 左侧栏的索引
  showListFlag: false, // 购物车列表的显示判断
}

const itemClick = (state, action ) => {
  return {...state, currentLeftIndex: action.obj.currentLeftIndex,}
} 
const showListFlag = (state , action) => {
  return {...state, showListFlag: action.flag}
}
const subClick = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  let listData = newState.listData;
  let foodSpuTags = listData.food_spu_tags;
  let item = foodSpuTags[newState.currentLeftIndex].spus;
  item[action.obj.index].order -= 1;
  return newState;
}
const plusClick = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  let listData = newState.listData;
  let foodSpuTags = listData.food_spu_tags;
  let item = foodSpuTags[newState.currentLeftIndex].spus;
  item[action.obj.index].order += 1;
  return newState;
}
const getListData = (state, action ) => {
  let foodSpuTags = action.obj.food_spu_tags;
  for(let i = 0; i< foodSpuTags.length; i++){
    let item = foodSpuTags[i].spus;
    for(let j =0; j< item.length; j++){
      item[j].order = 0;
    } 
  } 
  return {...state, listData:action.obj}
}

const menuReducers =  (state = initState, action)=>{
  switch (action.type){
    case GET_LIST_DATA:
      return  getListData(state, action)
    case LEFT_CLICK: 
      return itemClick(state, action)
    case PLUS_CLICK: 
      return plusClick(state, action)
    case SUB_CLICK: 
      return subClick(state, action)
    case SHOW_FLAG: 
      return showListFlag(state, action);
    default: return state;
  }
}

export default menuReducers;