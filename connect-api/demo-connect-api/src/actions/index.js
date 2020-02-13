import * as Types from "./../constants/ActionTypes"
import callApi from "./../utils/apiCaller"

export const acFetchProductsRequest = () => {
	return dispatch => {
		return callApi(`products`, "GET", null).then(res => {
			dispatch(acFetchProducts(res.data))
		})
	}
}

export const acFetchProducts = products => {
	return {
		type: Types.FETCH_PRODUCTS,
		products
	}
}
