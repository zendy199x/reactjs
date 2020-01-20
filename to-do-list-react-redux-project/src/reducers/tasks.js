import * as types from './../contains/ActionTypes';

const s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const data = JSON.parse(localStorage.getItem("tasks"))
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            const newTask = {
                id: randomID(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;