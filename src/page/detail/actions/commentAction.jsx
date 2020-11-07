import {
	COMMENT_LIST_DATA,

} from './actionType.jsx';
import axios from 'axios';

/**
 * 获取列表中的数据
 */
export const commnetListData = (obj) => async (dispatch) =>{
	let resp = await axios({
		method:'get',
		url: 'https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/comment'
  })
	dispatch({
		type: COMMENT_LIST_DATA,
		obj: resp.data
	})
}