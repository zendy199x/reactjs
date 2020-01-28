import * as types from "./../contains/ActionTypes"

const initialState = {
	id: "",
	name: "",
	status: false
}

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.EDIT_TASK:
			return action.task
		default:
			return state
	}
}

export default myReducer
