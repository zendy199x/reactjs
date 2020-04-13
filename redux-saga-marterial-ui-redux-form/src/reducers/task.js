import * as taskContants from "./../constants/task";

const initialState = {
    listTask: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskContants.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            };
        }
        case taskContants.FETCH_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            };
        }
        case taskContants.FETCH_TASK_FAILED: {
            return {
                ...state,
                listTask: []
            };
        }
        default:
            return state;
    }
};
export default reducer;
