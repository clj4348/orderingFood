import {
	GET_LIST_DATA,
	LEFT_CLICK,
	PLUS_CLICK,
	SUB_CLICK,
	SHOW_FLAG,
} from './actionType.jsx';
import axios from 'axios';
/**
 * 购物车点击事件
 */
export const showList = (flag) => {
	return {
		type: SHOW_FLAG,
		flag: flag, 
	}
}
/**
 * 点击左侧导航栏切换
 */
export const itemClick = (obj) => {
	return {
		type: LEFT_CLICK,
		obj: obj
	}
}
/**
 * 购物车加法
 */
export const plusClick = (obj) => {
	return {
		type: PLUS_CLICK,
		obj: obj
	}
}
/**
 * 购物车-减法
 */
export const subClick = (obj) => {
	return {
		type: SUB_CLICK,
		obj: obj
	}
}
/**
 * 获取列表中的数据
 */
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