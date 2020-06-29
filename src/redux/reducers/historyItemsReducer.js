import { ALL_ITEMS, ADD_HISTORY_ITEM, COPY_QUERY_HISTORY_ITEM } from "../types";

const initState = {
    items: [
        {
            id: 1,
            status: true,
            name: "pong",
            isCopied: false,
            query: `{
                action: "pong",
            }`,
        },
        {
            id: 2,
            status: false,
            name: "pong 1",
            isCopied: false,
            query: `{
                action: "pong 1",
            }`,
        },
    ],
};

export const historyItemReducer = (state = initState, action) => {
    switch (action.type) {
        case COPY_QUERY_HISTORY_ITEM:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id
                        ? { ...item, isCopied: !item.isCopied }
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
                        query: action.query,
                        copied: action.copied,
                    },
                ],
            });
        case ALL_ITEMS:
            return state;
        default:
            return state;
    }
};
