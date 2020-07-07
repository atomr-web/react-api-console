import {
    POST_REQUEST,
    IS_REQUESTING,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
} from "../types";

const initState = {
    request: "",
    response: "",
    isRequesting: false,
    isSuccess: true,
};

export const consoleReducer = (state = initState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                request: (state.request = action.request),
            };
        case IS_REQUESTING:
            return {
                ...state,
                isRequesting: (state.isRequesting = action.isRequesting),
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                request: (state.request = action.request),
                response: (state.response = action.response),
                isRequesting: (state.isRequesting = false),
                isSuccess: (state.isSuccess = true),
            };
        case REQUEST_FAILURE:
            return {
                ...state,
                request: (state.request = action.request),
                response: (state.response = action.response),
                isRequesting: (state.isRequesting = false),
                isSuccess: (state.isSuccess = false),
            };
        default: {
            return state;
        }
    }
};
