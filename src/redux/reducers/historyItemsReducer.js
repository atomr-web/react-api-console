import {
    ALL_ITEMS,
    ADD_HISTORY_ITEM,
    TOGGLE_HISTORY_MENU,
    TOGGLE_COPY_TEXT,
    MENU_HISTORY_RUN,
} from "../types";

import initState from "./initState";

export const historyItemReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_COPY_TEXT:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, isCopied: action.isCopied }
                        : item
                ),
            };
        case TOGGLE_HISTORY_MENU:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, isShowMenu: action.isShowMenu }
                        : item
                ),
            };
        case ADD_HISTORY_ITEM:
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        status: action.status,
                        name: action.name,
                        isCopied: false,
                        isShowMenu: false,
                        query: action.query,
                    },
                ],
            });
        case ALL_ITEMS:
            return state;
        default:
            return state;
    }
};

export const historyMenuReducer = (state = initState, action) => {
    switch (action.type) {
        case MENU_HISTORY_RUN:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, isShowMenu: false }
                        : item
                ),
            };
        default:
            return state;
    }
};
