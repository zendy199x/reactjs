import * as types from './../contains/ActionTypes';

const s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id) {
            result = index;
        }
    });
    return result;
}

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
    let id = '';
    let index = -1;
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            const newTask = {
                id : randomID(),
                name : action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status : !state.status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return[...state];
        default : return state;
    }
};

export default myReducer;