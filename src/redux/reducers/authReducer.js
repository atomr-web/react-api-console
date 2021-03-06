import {
    AUTH_ISAUTHING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT,
} from "../types";

const initState = {
    isAuthing: false,
    authStatus: false,
    authErrorText: null,
    authData: {
        login: null,
        sublogin: null,
        sendsay_session:
            "x_1592465705149159/x_1592465705149159:cXDbiFUbL46igvueclxZAw2Yv/K5RQo4-XEvTYUUlJeg:1593624564797571970.24957782644403.496945432337",
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
                    session: action.session,
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
                    session: "",
                    sendsay_session: "",
                },
            };
        default:
            return state;
    }
};
