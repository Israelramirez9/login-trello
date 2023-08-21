import { getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from "@/helpers/token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Credentials = {
    accessToken: string,
    refreshToken: string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        accessToken: getAccessToken(),
        refreshToken: getRefreshToken()
    },
    reducers: {
        handleLogin(state, action: PayloadAction<Credentials>) {
            const { accessToken, refreshToken } = action.payload;
            state.isAuthenticated = true;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
        },
        handleLogout(state) {
            removeAccessToken()
            removeRefreshToken()
            state.isAuthenticated = false
            state.accessToken = null
            state.refreshToken = null
        },
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload
        }
    }
})

export const { handleLogin, handleLogout, setIsAuthenticated } = authSlice.actions
export default authSlice.reducer