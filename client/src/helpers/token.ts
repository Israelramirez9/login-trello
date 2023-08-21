import { isServer } from "./enviroment";

export const getAccessToken = () => {
    if (isServer()) {
        return null
    }
    return localStorage.getItem("token");
}

export const setAccessToken = (token: string) => {
    if (isServer()) {
        return
    }
    localStorage.setItem("token", token)
}

export const getRefreshToken = () => {
    if (isServer()) {
        return null
    }
    return localStorage.getItem("refreshToken")
}

export const setRefreshToken = (refreshToken: string) => {
    if (isServer()) {
        return
    }
    localStorage.setItem("refreshToken", refreshToken)
}

export const removeAccessToken = () => {
    if (isServer()) {
        return
    }
    localStorage.removeItem("token")
}

export const removeRefreshToken = () => {
    if (isServer()) {
        return
    }
    localStorage.removeItem("refreshToken")
}