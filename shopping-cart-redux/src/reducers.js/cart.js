import * as types from "./../constants/ActionType"
const data = JSON.parse(localStorage.getItem('CART'))
const initialState = data ? data : [];
// const initialState = [
// 	{
// 		product: {
// 			id: 1,
// 			name: "iPhone 7 Plus",
// 			image:
// 				"https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600.jpg",
// 			description: "Sản phẩm do Apple Mỹ sản xuất",
// 			price: 300,
// 			inventory: 10,
// 			rating: 4
// 		},
// 		quantity: 5
// 	},
// 	{
// 		product: {
// 			id: 3,
// 			name: "iPhone XS Max",
// 			image:
// 				"https://imgs.viettelstore.vn/images/Product/ProductImage/medium/Xs.jpg",
// 			description: "Sản phẩm do Apple Nhật Bản sản xuất",
// 			price: 500,
// 			inventory: 20,
// 			rating: 4
// 		},
// 		quantity: 8
// 	}
// ]

const cart = (state = initialState, action) => {
	const {product, quantity} = action
	let index = -1
	switch (action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state, product)
			if (index !== -1) {
				state[index].quantity += quantity
			} else {
				state.push({
					product,
					quantity
				})
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		default:
			return [...state]
	}
}

const findProductInCart = (cart, product) => {
	let index = -1
	if (cart.length > 0) {
		for (let i = 0; i < cart.length; i++) {
			if ((cart[i].product.id = product.id)) {
				index = i
				break
			}
		}
	}
	return index
}

export default cart
