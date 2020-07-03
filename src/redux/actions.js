import {
    ALL_ITEMS,
    ADD_HISTORY_ITEM,
    COPY_QUERY_HISTORY_ITEM,
    TOGGLE_COPY_TEXT,
    IS_FULL_SCREEN,
    FULL_SCREEN_TOGGLE,
    IS_SHOW_HISTORY_MENU,
    TOGGLE_HISTORY_MENU,
    MENU_HISTORY_RUN,
    AUTH,
} from "./types";

export const allHistoryItems = () => {
    return {
        type: ALL_ITEMS,
    };
};

export const addHistoryItem = (id, status, name, query) => {
    return {
        type: ADD_HISTORY_ITEM,
        id,
        status,
        name,
        query,
    };
};

export const toggleCopyText = (id, isCopied) => {
    return {
        type: TOGGLE_COPY_TEXT,
        id,
        isCopied,
    };
};

export const isCopiedHisttoryItem = (id) => {
    return {
        type: COPY_QUERY_HISTORY_ITEM,
        id,
    };
};

export const toggleHistoryMenu = (id, isShowMenu) => {
    return {
        type: TOGGLE_HISTORY_MENU,
        id,
        isShowMenu,
    };
};

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

export const isShowHistoryItem = () => {
    return {
        type: IS_SHOW_HISTORY_MENU,
    };
};

// ACTION HISTORY MENU

export const menuHistoryRun = (id) => {
    return {
        type: MENU_HISTORY_RUN,
        id,
    };
};

// AUTH

export const auth = (login, sublogin, password) => {
    return {
        type: AUTH,
        login,
        sublogin,
        password,
    };
};
