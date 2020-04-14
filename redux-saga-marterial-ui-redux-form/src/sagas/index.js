import { fork, take, call } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants";

function* watchFetchListTaskAction() {
    yield take(taskTypes.FETCH_TASK);
    //=====================BLOCK============================//
    // console.log("Watching fetch list task");
    const resp = yield call(getList);
    //==============BLOCK cho đến khi call xong=============//
    // console.log('resp: ', resp)
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        //dispatch action fetchListTaskSuccess
    }
    //dispatch action fetchListTaskFailed
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
