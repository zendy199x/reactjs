import { combineReducers } from "redux";
import taskReducer from "./task";
import uiReducer from "./ui";

const rootReducer = combineReducers({
    task: taskReducer,
    ui: uiReducer
});

export default rootReducer;
