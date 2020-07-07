import {
    AUTH_LOGOUT,
    AUTH_ISAUTHING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from "../types";

export const logout = () => {
    return {
        type: AUTH_LOGOUT,
        login: "",
        sublogin: "",
        authStatus: false,
    };
};

export const isAuthing = (isAuthing) => {
    return {
        type: AUTH_ISAUTHING,
        isAuthing,
    };
};

export const authToggleStatus = (authStatus, login, sublogin) => {
    return {
        type: AUTH_SUCCESS,
        authStatus,
        login,
        sublogin,
    };
};

export const authFailure = (authStatus, authErrorText) => {
    return {
        type: AUTH_FAILURE,
        authStatus,
        authErrorText,
    };
};
