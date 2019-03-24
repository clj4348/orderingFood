import { CONTENT_LIST } from '../actions/actionType.jsx';

let initState= {
	list :[]
}

const getContentList = (state, action) => {
	return {...state, list: action.list}
}

const CotentListReducer = (state=initState,action) => {
	switch(action.type){
		case CONTENT_LIST :
			return  getContentList(state, action)
		default :
			return state
	}
}

export default CotentListReducer;