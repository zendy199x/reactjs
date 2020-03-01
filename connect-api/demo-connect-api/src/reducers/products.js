import * as Types from "./../constants/ActionTypes"
const initialState = []

const findIndex = (product, id) => {
	let result = -1
	product.forEach((product, index) => {
		if (product.id === id) {
			result = index
		}
	})
	return result
}

const products = (state = initialState, action) => {
	let index = -1
	const {id} = action
	switch (action.type) {
		case Types.FETCH_PRODUCTS:
			state = action.products
			return [...state]
		case Types.DELETE_PRODUCT:
			index = findIndex(state, id)
			state.splice(index, 1)
			return [...state]
		default:
			return [...state]
	}
}

export default products
