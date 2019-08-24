import { CATEGORY_ITEM } from './actionType.jsx';
import axios from 'axios'
export const getCategoryItem = (obj) => (dispatch) => {
  axios.get('https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/header').then((res)=>{
      dispatch({
        type: CATEGORY_ITEM,
        categoryList: res.data.data.primary_filter
      })
    })
} 