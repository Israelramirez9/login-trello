import { axiosInstance } from "../config/axios";
import { API_URL } from "../config/api";
const API_URL_TASKS = API_URL + '/tasks'
export const getTask = async () => {
    const tasks = await axiosInstance.get(API_URL_TASKS)
    return tasks
}

export const createTask = async (task) => {
    const resp = await axiosInstance.post(API_URL_TASKS, task)
    return resp;
}

export const deleteTaskApi = async (taskId) => {
    const resp = await axiosInstance.delete(API_URL_TASKS + "/" + taskId)
    return resp
}

export const updateTask = async (task) => {   
    const resp = await axiosInstance.put(API_URL_TASKS + "/" + task.taskId, task)
    return resp
}