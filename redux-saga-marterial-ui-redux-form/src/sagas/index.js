import { fork } from "redux-saga/effects";

function* watchFetchListTaskAction() {
    yield true;
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
