export const getAccessToken = () => {

    return localStorage.getItem("token");
}

export const setAccessToken = (token: string) => {

    localStorage.setItem("token", token)
}

export const getRefreshToken = () => {
    return localStorage.getItem("refreshToken")
}

export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refreshToken", refreshToken)
}

export const removeAccessToken = () => {
    localStorage.removeItem("token")
}

export const removeRefreshToken = () => {
    localStorage.removeItem("refreshToken")
}