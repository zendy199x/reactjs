import { fork, take } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";

function* watchFetchListTaskAction() {
    yield take(taskTypes.FETCH_TASK);
    //==============BLOCK=============//
    console.log("Watching fetch list task");
}

function* watchCreateTaskAction() {
    yield true;
    console.log("Watching create task action");
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;
