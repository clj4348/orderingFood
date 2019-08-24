import { GET_LIST_DATA, LEFT_CLICK} from './actionType.jsx';
import axios from 'axios';
export const itemClick = (obj) => {
	return {
		type: LEFT_CLICK,
		obj: obj
	}
}
export const getListData = (obj) => async (dispatch) =>{
	let resp = await axios({
		method:'get',
		url: 'https://www.easy-mock.com/mock/5d3296ca64f6451367e7bd70/example/food'
	})
	dispatch({
		type: GET_LIST_DATA,
		obj: resp.data.data
	})
}