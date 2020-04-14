import { fork, take, call, put, delay } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants";
import { fetchListTaskSuccess, fetchListTaskFailed } from "../actions/task";
import { showLoading, hideLoading } from "./../actions/ui";

/**
 * Bước 1: Thực thi action fetch task
 * Bước 2: Gọi API
 * Hiển thị thanh tiến trình loading
 * Bước 3: Kiểm tra status code
 * Nếu thành công ...
 * Nếu thật bại...
 * Bước 4: Tắt loading
 * Bước 5: Thực thi các công việc tiếp theo
 */
function* watchFetchListTaskAction() {
    while (true) {
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const resp = yield call(getList);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data));
        } else {
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
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
