import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    filterTable
});

export default myReducer;