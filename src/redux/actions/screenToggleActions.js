import { IS_FULL_SCREEN, FULL_SCREEN_TOGGLE } from "../types";

export const isFullScreen = () => {
    return {
        type: IS_FULL_SCREEN,
    };
};

export const toggleFullScreen = () => {
    return {
        type: FULL_SCREEN_TOGGLE,
    };
};
