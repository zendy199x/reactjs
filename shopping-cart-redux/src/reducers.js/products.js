const initialState = [
    {
        id: 1,
        name: 'iPhone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600.jpg',
        description: 'Sản phẩm do Apple Mỹ sản xuất',
        price: 300,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'iPhone 8 Plus',
        image: 'https://csmobiles.com/5791-large_default/apple-iphone-8-plus-4g-64gb-red.jpg',
        description: 'Sản phẩm do Trung Quốc sản xuất',
        price: 400,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'iPhone XS Max',
        image: 'https://imgs.viettelstore.vn/images/Product/ProductImage/medium/Xs.jpg',
        description: 'Sản phẩm do Apple Nhật Bản sản xuất',
        price: 500,
        inventory: 20,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products;