import * as types from "./../contains/ActionTypes"

const initialState = {
	name: "",
	status: -1
}

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FILTER_TABLE:
			return {
				name: action.filter.name,
				status: parseInt(action.filter.status)
			}
		default:
			return state
	}
}

export default myReducer
