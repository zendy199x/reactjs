const initialState = {
	by: "name",
	value: 1 // 1: tăng, -1: giảm
}

const myReducer = (state = initialState, action) => {
	if (action.type === "SORT") {
		const {by, value} = action.sort
		return {by, value}
	}
	return state
}

export default myReducer
