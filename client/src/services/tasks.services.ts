import { axiosInstance } from "../config/axios";
import { API_URL } from "../config/api";
const API_URL_TASKS = API_URL + '/tasks'

export type Task = {
    text: string,
    isCompleted: string,
    columnIndex: string,
    columnId: string,
    taskId: string
}
export const getTasks = async (columnId: string):
    Promise<Task[]> => {
    let url = API_URL_TASKS;
    if (columnId) {
        url += `?column=${columnId}`
    }
    const tasks = await axiosInstance.get(url)
    return tasks.data
}

export const createTask = async (task: Task):
    Promise<Task> => {
    const resp = await axiosInstance.post(API_URL_TASKS, task)
    return resp.data;
}

export const deleteTaskApi = async (taskId: string):
    Promise<Task> => {
    const resp = await axiosInstance.delete(API_URL_TASKS + "/" + taskId)
    return resp.data
}

export const updateTask = async (task: Task):
    Promise<Task> => {
    const resp = await axiosInstance.put(API_URL_TASKS + "/" + task.taskId, task)
    return resp.data
}