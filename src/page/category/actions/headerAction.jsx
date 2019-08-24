import {
  CHANGE_TAB,
  GET_FilTER_DATA,
  CHANGE_FILTER
} from './actionType.jsx';
import axios from 'axios'

export const changeTab = (obj) => (dispatch) => {
  dispatch({
    type: CHANGE_TAB,
    obj:obj
  })
}

export const getFilterData = (obj) => async (dispatch) => {
   let res = await axios({
    url:'https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/filter',
    method: 'get'
  })
  console.log(res.data.data)
  dispatch({
    type: GET_FilTER_DATA,
    obj: res.data
  })
}

export const changeFilter = (obj) => (dispatch) => {
  dispatch({
    type: CHANGE_FILTER,
    obj:obj
  })
  dispatch({
    type: CHANGE_TAB,
    obj:{
      closePanel: true
    }
  })
}