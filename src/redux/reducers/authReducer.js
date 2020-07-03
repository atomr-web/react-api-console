import {
    AUTH_ISAUTHING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_FINISHED,
} from "../types";

const initState = {
    isAuth: false,
    isAuthing: false,
    isAuthFinished: false,
    authStatus: "",
    authErrorText: "",
    authData: {
        login: "",
        sublogin: "",
        password: "",
    },
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
        case AUTH_FINISHED:
            return {
                ...state,
                isAuthFinished: (state.isAuthFinished = action.isAuthFinished),
            };
        default:
            return state;
    }
};
