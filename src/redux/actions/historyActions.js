import {
    ADD_HISTORY_ITEM,
    TOGGLE_COPY_TEXT,
    COPY_QUERY_HISTORY_ITEM,
    TOGGLE_HISTORY_MENU,
    IS_SHOW_HISTORY_MENU,
    MENU_HISTORY_RUN,
    UPDATE_HISTORY,
} from "../types";

export const addHistoryItem = (id, status, name, query) => {
    return {
        type: ADD_HISTORY_ITEM,
        id,
        status,
        name,
        query,
    };
};

export const updateHistory = (items) => {
    return {
        type: UPDATE_HISTORY,
        items,
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

export const isShowHistoryItem = () => {
    return {
        type: IS_SHOW_HISTORY_MENU,
    };
};

export const menuHistoryRun = (id) => {
    return {
        type: MENU_HISTORY_RUN,
        id,
    };
};
