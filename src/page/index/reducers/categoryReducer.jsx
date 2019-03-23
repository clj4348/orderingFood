import { CATEGORY_ITEM } from '../actions/actionType.jsx';

let initState= {
	categoryList :[]
}

const getCategoryList = (state, action) => {
	return {...state, categoryList: action.categoryList}
}

const categoryReducer = (state=initState,action) => {
	switch(action.type){
		case CATEGORY_ITEM :
			return  getCategoryList(state, action)
		default :
			return state
	}
}

export default categoryReducer;