const initialState = [
    {
        id: 1,
        name: 'iPhone 11 Pro Max',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB4vakhrDnAhUCIIgKHfsvBQYQjRx6BAgBEAQ&url=https%3A%2F%2Ftrungstore.vn%2Fiphone-11-pro-max-512gb-mid-night-99-hang-nhap-khau%2F&psig=AOvVaw3lmLudfJ3-gPcEczGcmrkw&ust=1580636012315528',
        description: 'Sản phẩm do Apple sản xuẩt',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung Note 10 Plus',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwji1IX1hrDnAhUzL6YKHXC5C7oQjRx6BAgBEAQ&url=https%3A%2F%2Ffptshop.com.vn%2Fdien-thoai%2Fsamsung-galaxy-note-10-plus&psig=AOvVaw2WkppMjNVJjAoyyRgzKbwR&ust=1580636213102868',
        description: 'Sản phẩm do Samsung sản xuẩt',
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: 'iPhone 8 Plus',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH5bOQh7DnAhWKBKYKHTWVClgQjRx6BAgBEAQ&url=https%3A%2F%2Fm.viettelstore.vn%2Fdien-thoai%2Fiphone-8-plus-64gb-pid118484.html&psig=AOvVaw2Q97tieHf-TZjYJMJ6-0bi&ust=1580636266705320',
        description: 'Sản phẩm do Apple sản xuẩt',
        price: 300,
        inventory: 20
    }
]

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product