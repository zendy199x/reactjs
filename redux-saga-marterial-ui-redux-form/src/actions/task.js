// import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    };
};

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    };
};

export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    };
};

/**
B1: fetch: fetchListTaskRequest()
B2: Reset: state tasks => []
B3: fetchListTaskSuccess (data response)
*/

// export const fetchListTaskRequest = () => {
//     return dispatch => {
//         dispatch(fetchListTask());
//         taskApis
//             .getList()
//             .then(resp => {
//                 const { data } = resp;
//                 // console.log("data", data);
//                 dispatch(fetchListTaskSuccess(data));
//             })
//             .catch(error => {
//                 // console.log("error");
//                 dispatch(fetchListTaskFailed(error));
//             });
//     };
// };
