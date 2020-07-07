import {
    POST_REQUEST,
    IS_REQUESTING,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
} from "../types";

export const postRequest = (request) => {
    return {
        type: POST_REQUEST,
        request,
    };
};

export const isRequesting = (isRequesting) => {
    return {
        type: IS_REQUESTING,
        isRequesting,
    };
};

export const requestSuccess = (request, response) => {
    return {
        type: REQUEST_SUCCESS,
        request,
        response,
        isSuccess: true,
    };
};

export const requestFailure = (request, response) => {
    return {
        type: REQUEST_FAILURE,
        request,
        response,
        isSuccess: false,
    };
};
