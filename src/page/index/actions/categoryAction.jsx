import { CATEGORY_ITEM } from './actionType.jsx';
import axios from 'axios'
export const getCategoryItem = (obj) => (dispatch) => {
  axios.get('http://localhost:3000/head').then((res)=>{
      dispatch({
        type: CATEGORY_ITEM,
        categoryList: res.data[0].data.primary_filter
      })
    })
} 