import { AUTH, AUTH_ERROR } from "../types";

const initState = {
    isAuth: false,
    isAuthing: false,
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
        case AUTH:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    login: action.login,
                    sublogin: action.sublogin,
                    password: action.password,
                },
            };
        case AUTH_ERROR:
            return state;
        default:
            return {
                state,
            };
    }
};
