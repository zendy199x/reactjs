import * as types from "./../contains/ActionTypes"

const initialState = {
	by: "",
	value: 1 // 1: tăng, -1: giảm
}

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SORT:
			return {
				by: action.sort.by,
				value: action.sort.value
			}
		default:
			return state
	}
}

export default myReducer
