import * as types from './../contains/ActionTypes';

const initialState = false //close form

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: return state;
    }
}

export default myReducer;