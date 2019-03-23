import { CHANGE_TAB } from './actionType.jsx';
export const changeTab = (key) => {
	return {
		type: CHANGE_TAB,
		key
	} 
}