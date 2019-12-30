import * as types from './../contains/ActionTypes'

const data = JSON.parse(localStorage.getItem("task"))
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        default: return state;
    }
}

export default myReducer;