import { removeAccessToken, removeRefreshToken } from "../helpers/token";

export function cleanLocalStorage() {
    removeAccessToken();
    removeRefreshToken();
}