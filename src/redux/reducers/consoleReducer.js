import { SUBMIT_REQUEST } from "../types";

import initState from "./initState";

export const consoleReducer = (state = initState, action) => {
    switch (action.type) {
        case SUBMIT_REQUEST:
            return {
                ...state,
                isStatus: (state.console.request.isStatus = action.isStatus),
                request: (state.console.request.text = action.text),
            };
        default: {
            return state;
        }
    }
};
