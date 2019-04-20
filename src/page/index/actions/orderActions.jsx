import { ORDER_LIST } from './actionType.jsx';
import axios from 'axios'

export const getOrderList = (page) => (dispatch) => {
  if(page > 3){
    return
  }
  return (
    axios.get('http://localhost:3000/order').then((res) => {
      page++
      dispatch({
        type: ORDER_LIST,
        currentPage: page,
        list: res.data.data.digestlist
      })
    })
  )
}