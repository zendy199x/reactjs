import status from "./status"
import sort from "./sort"
import {combineReducers} from "redux"

const myReducer =combineReducers({
    status,
    sort
})

export default myReducer;