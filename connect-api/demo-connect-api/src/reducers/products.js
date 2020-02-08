const initialState = [
    {
        id: 1,
        name: "iPhone 8",
        price: 400,
        status: true
    },
    {
        id: 1,
        name: "iPhone X",
        price: 700,
        status: true
    },
    {
        id: 1,
        name: "iPhone 11 Pro Max",
        price: 300,
        status: true
    }
];

const products = (state=initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products