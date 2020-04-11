import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants";

//http://localhost:3000/tasks
const url = "tasks";

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};
