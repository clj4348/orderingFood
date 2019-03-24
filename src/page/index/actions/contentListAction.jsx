import { CONTENT_LIST } from './actionType.jsx';
import axios from 'axios'

export const getContentList = (data) => (dispatch) => {
  axios.get('http://localhost:3000/contentList').then((res) => {
    dispatch({
      type: CONTENT_LIST,
      list: res.data[0].data.poilist
    })
  })
}