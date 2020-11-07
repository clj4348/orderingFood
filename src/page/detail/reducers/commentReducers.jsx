import { 
  COMMENT_LIST_DATA,  
} from '../actions/actionType.jsx';
const initState = {
  commentData:{}, // 购物车的数据
  commentList: []
}

const getListData = (state, action ) => {
  return {...state, commentData: action.obj.data, commentList: action.obj.data.comments}
}

const commentReducers =  (state = initState, action)=>{
  switch (action.type){
    case COMMENT_LIST_DATA:
      return getListData(state, action)
    default: return state;
  }
}

export default commentReducers;