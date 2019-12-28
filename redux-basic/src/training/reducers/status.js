const initialState = false;

const myReducer = ( state = initialState, action ) => {
    if( action.type === 'TOGGLE_STATUS') {
        state = !state;
        return state;
    }
    return state;
}

export default myReducer;