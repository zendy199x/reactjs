import {combineReducers} from "redux"
import tasks from "./tasks"
import isDisplayForm from "./isDisplayForm"
import itemEditing from "./itemEditing"
import filterTable from "./filterTable"
import search from "./search"

const myReducer = combineReducers({
	tasks,
	isDisplayForm,
	itemEditing,
	filterTable,
	search
})

export default myReducer
