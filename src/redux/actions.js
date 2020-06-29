import { ALL_ITEMS, ADD_HISTORY_ITEM, COPY_QUERY_HISTORY_ITEM } from "./types";

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

export const isCopiedHisttoryItem = (id) => {
    return {
        type: COPY_QUERY_HISTORY_ITEM,
        id,
    };
};
