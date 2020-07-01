import { IS_FULL_SCREEN, FULL_SCREEN_TOGGLE } from "../types";

const initState = {
    isFullScreen: false,
};

export const fullScreenReducer = (state = initState, action) => {
    switch (action.type) {
        case FULL_SCREEN_TOGGLE:
            return {
                ...state,
                isFullScreen: !state.isFullScreen,
            };
        case IS_FULL_SCREEN:
            return state;
        default:
            return state;
    }
};
