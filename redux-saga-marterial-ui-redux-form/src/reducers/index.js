import { combineReducers } from "redux";
import taskReducer from "./task";

const rootReducer = combineReducers({
    task: taskReducer
});

export default rootReducer;
