import { combineReducers } from 'redux';
import tasks from './tasks';

const myReducer = combineReducers({
    tasks
});

export default myReducer;