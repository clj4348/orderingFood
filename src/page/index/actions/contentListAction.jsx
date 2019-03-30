import { CONTENT_LIST } from './actionType.jsx';
import axios from 'axios'

export const getContentList = (page) => (dispatch) => {
  if(page > 3){
    return
  }
  return (
    axios.get('http://localhost:3000/contentList').then((res) => {
      page++
      dispatch({
        type: CONTENT_LIST,
        currentPage: page,
        list: res.data[0].data.poilist
      })
    })
  )
}