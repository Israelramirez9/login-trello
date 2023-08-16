import axios from "axios";
import { setAccessToken, getAccessToken, getRefreshToken } from "../helpers/token";
import { API_URL } from "./api";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (request) => {

        request.headers.Authorization = `Bearer ${getAccessToken()}`
        return request
    }, error => {
        Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {

        return response
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status !== 401 && originalRequest._retry) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;
        const refreshResponse = await axios.put(API_URL + "/session", {
            refreshToken: getRefreshToken()
        })

        const accessToken = refreshResponse.data.tokenSession
        setAccessToken(accessToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        return axiosInstance(originalRequest);

    }
)

export { axiosInstance }
