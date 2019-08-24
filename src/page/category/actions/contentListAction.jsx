import { CONTENT_LIST } from './actionType.jsx';
import axios from 'axios'

export const getContentList = (page) => (dispatch) => {
  if(page > 3){
    return
  }
  return (
    axios.get('https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/homelist').then((res) => {
      page++
      dispatch({
        type: CONTENT_LIST,
        currentPage: page,
        list: res.data.data.poilist
      })
    })
  )
}