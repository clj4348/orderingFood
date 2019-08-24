import { ORDER_LIST } from './actionType.jsx';
import axios from 'axios'

export const getOrderList = (page) => (dispatch) => {
  if(page > 3){
    return
  }
  return (
    axios.get('https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/orders').then((res) => {
      page++
      dispatch({
        type: ORDER_LIST,
        currentPage: page,
        list: res.data.data.digestlist
      })
    })
  )
}