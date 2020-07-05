import { SUBMIT_REQUSET } from "../types";

export const submitRequest = (text) => {
    return {
        type: SUBMIT_REQUSET,
        text,
    };
};
