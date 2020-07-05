import { SUBMIT_REQUEST } from "../types";

import Sendsay from "sendsay-api";

const sendsay = new Sendsay();

export const request = (isStatus, text) => (dispatch) => {
    dispatch(submitRequest(isStatus, text));
};

export const submitRequest = (isStatus, text) => {
    return {
        type: SUBMIT_REQUEST,
        isStatus,
        text,
    };
};
