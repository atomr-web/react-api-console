import {
    AUTH_LOGOUT,
    AUTH_ISAUTHING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from "../types";

export const logoutAction = () => {
    return {
        type: AUTH_LOGOUT,
        authStatus: false,
        login: "",
        sublogin: "",
        sendsay_session: "",
    };
};

export const isAuthing = (isAuthing) => {
    return {
        type: AUTH_ISAUTHING,
        isAuthing,
    };
};

export const authToggleStatus = (
    authStatus,
    login,
    sublogin,
    sendsay_session
) => {
    return {
        type: AUTH_SUCCESS,
        authStatus,
        login,
        sublogin,
        sendsay_session,
    };
};

export const authFailure = (authStatus, authErrorText) => {
    return {
        type: AUTH_FAILURE,
        authStatus,
        authErrorText,
    };
};
