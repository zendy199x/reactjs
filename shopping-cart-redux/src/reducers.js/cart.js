import * as types from './../constants/ActionType'
// const data = JSON.parse(localStorage.getItem('CART'))
// const initialState = data ? data : [];
const initialState = [
    {
        product: {
            id: 1,
            name: 'iPhone 7 Plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600.jpg',
            description: 'Sản phẩm do Apple Mỹ sản xuất',
            price: 300,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    }
]

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state]
    }
}

export default cart;