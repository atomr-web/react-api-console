import {
    AUTH_ISAUTHING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT,
} from "../types";

const initState = {
    isAuthing: false,
    isAuthFinished: false,
    authStatus: "",
    authErrorText: "",
    authData: {
        login: "",
        sublogin: "",
        password: "",
    },
    user: "",
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ISAUTHING:
            return {
                ...state,
                isAuthing: (state.isAuthing = action.isAuthing),
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                authStatus: (action.authStatus = true),
                authData: {
                    ...state.authData,
                    login: action.login,
                    sublogin: action.sublogin,
                    password: action.password,
                },
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isAuthing: (state.isAuthing = false),
                authStatus: (state.authStatus = false),
                authErrorText: (state.authErrorText = action.authErrorText),
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                authStatus: (action.authStatus = false),
                authData: {
                    ...state.authData,
                    login: "",
                    sublogin: "",
                    password: "",
                },
            };
        default:
            return state;
    }
};
