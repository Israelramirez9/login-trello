export const getAccessToken = () => {

    return localStorage.getItem("token");
}

export const setAccessToken = (token) => {

    localStorage.setItem("token", token)
}

export const getRefreshToken = () => {
    return localStorage.getItem("refreshToken")
}

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem("refreshToken", refreshToken)
}

export const removeAccessToken = () => {
    localStorage.removeItem("token")
}

export const removeRefreshToken = () => {
    localStorage.removeItem("refreshToken")
}