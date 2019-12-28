import {createStore} from "redux"

const initialState = {
	status: false,
	sort: {
		by: "name",
		value: 1
	}
}

const myReducer = (state = initialState, action) => {
	if (action.type === "TOGGLE_STATUS") {
		state.status = !state.status
		return state
	}
	if (action.type === "SORT") {
		const {by, value} = action.sort
		const {status} = state
		return {
			status: status,
			sort: {
				by: by,
				value: value
			}
		}
	}
	return state
}

const store = createStore(myReducer)
console.log(`Default >>>`, store.getState())

//Thực hiện công việc thay đổi status
const action = {type: "TOGGLE_STATUS"}
store.dispatch(action)
console.log(`TOGGLE_STATUS >>>`, store.getState())

//Thực hiện công việc từ Z tới A
const sortAction = {
	type: "SORT",
	sort: {
		by: "name",
		value: -1
	}
}
store.dispatch(sortAction)
console.log(`SORT >>>`, store.getState())
